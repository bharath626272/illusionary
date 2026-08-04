import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AnimatedBackground({ theme }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 3D Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create 3D Particle Grid Wave
    const numX = 50;
    const numY = 30;
    const numParticles = numX * numY;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    let i = 0, j = 0;
    for (let ix = 0; ix < numX; ix++) {
      for (let iy = 0; iy < numY; iy++) {
        positions[i] = ix * 24 - (numX * 24) / 2; // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iy * 24 - (numY * 24) / 2; // z
        scales[j] = 1;
        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Particle Shader Material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(theme === 'light' ? 0x2563eb : 0xff4f00) },
      },
      vertexShader: `
        attribute float scale;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
          gl_PointSize = scale * ( 200.0 / - mvPosition.z );
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        void main() {
          if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.47 ) discard;
          gl_FragColor = vec4( color, 0.4 );
        }
      `,
      transparent: true,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.3;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Animation Loop
    let count = 0;
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      count += 0.04;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY + 150 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      const positionsArr = particles.geometry.attributes.position.array;
      const scalesArr = particles.geometry.attributes.scale.array;

      let i = 0, j = 0;
      for (let ix = 0; ix < numX; ix++) {
        for (let iy = 0; iy < numY; iy++) {
          positionsArr[i + 1] =
            Math.sin((ix + count) * 0.3) * 35 +
            Math.sin((iy + count) * 0.5) * 35;
          scalesArr[j] =
            (Math.sin((ix + count) * 0.3) + 1) * 2.5 +
            (Math.sin((iy + count) * 0.5) + 1) * 2.5;
          i += 3;
          j++;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.scale.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-500">
      {/* Resend Subtle Dotted Grid Overlay */}
      <div className="absolute inset-0 bg-resend-grid opacity-70 z-[1]" />

      {/* Resend Signature Top Spotlight Beam */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255, 79, 0, 0.16) 0%, rgba(255, 255, 255, 0.05) 45%, transparent 70%)',
        }}
      />

      {/* Three.js 3D Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 z-0 opacity-80" />
    </div>
  );
}
