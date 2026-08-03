import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, FolderKanban, Users, Award, Building2, ChevronRight } from 'lucide-react';

const VERTEX_SHADER_SOURCE = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER_SOURCE = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform float u_is_light;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    vec2 mouse = (u_mouse - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    st += mouse * 0.12;

    vec2 q = vec2(0.0);
    q.x = snoise(st * 2.2 + vec2(0.0, u_time * 0.22));
    q.y = snoise(st * 2.2 + vec2(1.0, u_time * 0.22));

    vec2 r = vec2(0.0);
    r.x = snoise(st * 3.0 + 1.2 * q + vec2(1.7, 9.2) + 0.15 * u_time);
    r.y = snoise(st * 3.0 + 1.2 * q + vec2(8.3, 2.8) + 0.12 * u_time);

    float f = snoise(st * 2.4 + r * 1.8);

    float fold = sin(f * 6.28318 + u_time * 0.4);
    float highlight = pow(clamp(1.0 - abs(fold), 0.0, 1.0), 3.5);

    // Dark Mode Shader Palette
    vec3 darkMidnight = vec3(0.02, 0.04, 0.14);
    vec3 darkCobalt   = vec3(0.0, 0.38, 0.95);
    vec3 darkCyan     = vec3(0.0, 0.92, 1.0);
    vec3 darkWhite    = vec3(0.7, 0.95, 1.0);

    vec3 colorDark = mix(darkMidnight, darkCobalt, clamp(f * f * 4.0, 0.0, 1.0));
    colorDark = mix(colorDark, darkCyan, clamp(length(q), 0.0, 1.0) * 0.85);
    colorDark = mix(colorDark, darkWhite, highlight * 0.75);

    // Light Mode Shader Palette
    vec3 lightBase      = vec3(0.95, 0.97, 1.0);
    vec3 lightIndigo    = vec3(0.39, 0.40, 0.95);
    vec3 lightCyan      = vec3(0.0, 0.75, 0.92);
    vec3 lightHighlight = vec3(1.0, 1.0, 1.0);

    vec3 colorLight = mix(lightBase, lightIndigo, clamp(f * f * 3.0, 0.0, 0.7));
    colorLight = mix(colorLight, lightCyan, clamp(length(q), 0.0, 1.0) * 0.5);
    colorLight = mix(colorLight, lightHighlight, highlight * 0.85);

    vec3 finalColor = mix(colorDark, colorLight, u_is_light);

    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float vig = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
    vig = clamp(pow(16.0 * vig, 0.2), 0.0, 1.0);

    gl_FragColor = vec4(finalColor * vig, 1.0);
  }
`;

export default function Hero({ theme = 'dark' }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isLight = theme === 'light';

  const stats = [
    { number: '15+', label: 'Projects Delivered', icon: FolderKanban, color: isLight ? 'text-indigo-600' : 'text-indigo-400' },
    { number: '20+', label: 'Happy Clients', icon: Users, color: isLight ? 'text-cyan-600' : 'text-cyan-400' },
    { number: '10+', label: 'Industries Served', icon: Building2, color: isLight ? 'text-blue-600' : 'text-blue-400' },
    { number: '99%', label: 'Client Satisfaction', icon: Award, color: isLight ? 'text-emerald-600' : 'text-emerald-400' },
  ];

  // Container Stagger Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  // High Performance WebGL Setup with Render Pausing & Pixel Ratio Cap
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { powerPreference: 'high-performance', alpha: false }) || 
               canvas.getContext('experimental-webgl');
    if (!gl) return;

    const createShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');
    const isLightLocation = gl.getUniformLocation(program, 'u_is_light');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let currentIsLight = isLight ? 1.0 : 0.0;
    let isVisible = true;

    const handleMouseMove = (e) => {
      if (!isVisible) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left) * dpr;
      targetMouseY = (canvas.height) - (e.clientY - rect.top) * dpr;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Cap DPR at 1.5 for maximum fill rate performance
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resizeCanvas = () => {
      if (containerRef.current) {
        const width = Math.floor(containerRef.current.clientWidth * dpr);
        const height = Math.floor(containerRef.current.clientHeight * dpr);
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, width, height);
        }
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // IntersectionObserver to pause rendering when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting && !document.hidden;
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let startTime = performance.now();
    let animationFrameId;

    const render = (now) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      const elapsedTime = (now - startTime) * 0.001;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const targetIsLight = theme === 'light' ? 1.0 : 0.0;
      currentIsLight += (targetIsLight - currentIsLight) * 0.08;

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, elapsedTime);
      gl.uniform2f(mouseLocation, mouseX, mouseY);
      gl.uniform1f(isLightLocation, currentIsLight);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [theme]);

  return (
    <section 
      ref={containerRef}
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden min-h-[95vh] flex flex-col justify-center select-none gpu-layer"
    >
      {/* Liquid Silk WebGL Background Shader */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none w-full h-full gpu-layer"
      />

      {/* Dynamic Overlay Tint */}
      <div className={`absolute inset-0 pointer-events-none z-[1] transition-colors duration-500 ${
        isLight ? 'bg-white/30' : 'bg-black/20'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Pre-heading Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
          className={`inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full glass-panel text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-xl transition-all cursor-default max-w-full text-center gpu-layer ${
            isLight
              ? 'border-indigo-400/40 text-indigo-700 bg-white/80 shadow-indigo-500/10 hover:border-indigo-600/60'
              : 'border-indigo-500/40 text-indigo-300 bg-black/40 shadow-indigo-500/10 hover:border-cyan-400/60'
          }`}
        >
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isLight ? 'bg-indigo-600' : 'bg-cyan-400'
            }`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${
              isLight ? 'bg-indigo-600' : 'bg-cyan-500'
            }`}></span>
          </span>
          <Sparkles className={`w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin-slow flex-shrink-0 ${
            isLight ? 'text-indigo-600' : 'text-indigo-400'
          }`} />
          <span className="truncate uppercase tracking-wider text-[11px] sm:text-xs">Your Complete Digital Solutions Partner</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto mb-6 sm:mb-8"
        >
          <h1 className={`text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.25] pb-2 break-words drop-shadow-md ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            <motion.span variants={itemVariants} className="inline-block mr-2 sm:mr-3">
              Transform
            </motion.span>
            <motion.span variants={itemVariants} className="inline-block mr-2 sm:mr-3">
              Your
            </motion.span>
            <motion.span variants={itemVariants} className="inline-block mr-2 sm:mr-3">
              Business
            </motion.span>
            <motion.span variants={itemVariants} className="inline-block mr-2 sm:mr-3">
              with
            </motion.span>
            <br className="hidden sm:inline" />
            <motion.span
              variants={itemVariants}
              className={`bg-clip-text text-transparent inline-block font-black mt-1 sm:mt-2 pb-3 px-1 ${
                isLight
                  ? 'bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-600 drop-shadow-[0_0_25px_rgba(99,102,241,0.4)]'
                  : 'bg-gradient-to-r from-cyan-300 via-indigo-200 to-cyan-300 drop-shadow-[0_0_35px_rgba(56,189,248,0.6)]'
              }`}
            >
              Digital Solutions.
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`text-lg sm:text-xl max-w-3xl mx-auto font-normal leading-relaxed mb-12 drop-shadow ${
            isLight ? 'text-slate-700' : 'text-gray-200'
          }`}
        >
          We create premium websites, business software, mobile applications, cloud solutions,
          and marketing strategies that help businesses grow faster, work smarter, and achieve long-term success.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: isLight ? '0 10px 40px rgba(79, 70, 229, 0.4)' : '0 10px 40px rgba(0, 240, 255, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className={`btn-primary text-base font-bold px-9 py-4.5 w-full sm:w-auto relative group overflow-hidden gpu-layer ${
              isLight
                ? '!bg-gradient-to-r !from-indigo-600 !to-cyan-600'
                : '!bg-gradient-to-r !from-cyan-400 !to-blue-600'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.15)' }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            className={`btn-secondary text-base font-bold px-9 py-4.5 w-full sm:w-auto flex items-center justify-center gap-2 backdrop-blur-md gpu-layer ${
              isLight
                ? '!bg-white/80 !border-slate-300 !text-slate-900 shadow-md'
                : '!bg-white/10 !border-white/20 !text-white'
            }`}
          >
            <span>View Portfolio</span>
            <ChevronRight className={`w-4 h-4 ${isLight ? 'text-slate-600' : 'text-gray-300'}`} />
          </motion.a>
        </motion.div>

        {/* Stats Grid with Glass Elevation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-5xl mx-auto pt-10 border-t ${
            isLight ? 'border-slate-300/60' : 'border-white/15'
          }`}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`glass-card p-6 rounded-2xl text-center flex flex-col items-center justify-center relative overflow-hidden group border backdrop-blur-md gpu-layer ${
                  isLight
                    ? 'bg-white/80 border-slate-200/80 text-slate-900 shadow-lg hover:border-indigo-500/40'
                    : 'bg-black/30 border-white/15 text-white hover:border-cyan-400/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${
                  isLight ? 'bg-indigo-50' : 'bg-white/10'
                }`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">
                  {stat.number}
                </div>
                <div className={`text-xs sm:text-sm font-medium ${
                  isLight ? 'text-slate-600' : 'text-gray-300'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
