import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Check, Copy, Terminal, Code2, Sparkles, Play, RotateCcw,
  FolderKanban, Users, Building2, Award, ChevronRight 
} from 'lucide-react';

const INITIAL_CODE_EXAMPLES = {
  react: `import { Nexora } from 'nexora-sdk';

const nexora = new Nexora({ 
  apiKey: process.env.NEXORA_API_KEY 
});

export async function createProject() {
  const project = await nexora.projects.deploy({
    name: 'enterprise-platform',
    stack: ['react', 'node', 'ai-engine'],
    autoScale: true,
  });

  return project.url;
}`,
  node: `const { NexoraClient } = require('@nexora/api');
const nexora = new NexoraClient({ token: process.env.API_TOKEN });

async function init() {
  const result = await nexora.services.provision({
    region: 'us-east-1',
    highAvailability: true,
  });
  console.log('Provisioned:', result.id);
}`,
  python: `from nexora import NexoraClient

client = NexoraClient(api_key="nex_live_9482710482910")

response = client.deployments.create(
    name="ai-analytics-hub",
    performance_tier="ultra",
    ssl_enabled=True
)

print(f"Deployment live at: {response.endpoint}")`,
  curl: `curl -X POST https://api.nexora.digital/v1/deploy \\
  -H "Authorization: Bearer nex_live_secret" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "illusionary-web",
    "environment": "production"
  }'`
};

export default function Hero({ theme = 'dark' }) {
  const [activeTab, setActiveTab] = useState('react');
  const [codeExamples, setCodeExamples] = useState(INITIAL_CODE_EXAMPLES);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [executionOutput, setExecutionOutput] = useState(null);

  const FULL_LINE_1 = "Transform Your Business with ";
  const FULL_LINE_2 = "Digital Solutions.";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [isLine1Done, setIsLine1Done] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let pauseTimer;
    let timer1;
    let timer2;

    const startTypingSequence = () => {
      let index1 = 0;
      let index2 = 0;
      setText1("");
      setText2("");
      setIsLine1Done(false);

      // Step 1: Type Line 1
      timer1 = setInterval(() => {
        if (!isMounted) return clearInterval(timer1);

        if (index1 < FULL_LINE_1.length) {
          setText1(FULL_LINE_1.substring(0, index1 + 1));
          index1++;
        } else {
          clearInterval(timer1);
          setIsLine1Done(true);

          // Step 2: Type Line 2
          timer2 = setInterval(() => {
            if (!isMounted) return clearInterval(timer2);

            if (index2 < FULL_LINE_2.length) {
              setText2(FULL_LINE_2.substring(0, index2 + 1));
              index2++;
            } else {
              clearInterval(timer2);

              // Step 3: Pause 10s then loop infinitely
              pauseTimer = setTimeout(() => {
                if (isMounted) {
                  startTypingSequence();
                }
              }, 10000);
            }
          }, 55);
        }
      }, 40);
    };

    startTypingSequence();

    return () => {
      isMounted = false;
      clearInterval(timer1);
      clearInterval(timer2);
      clearTimeout(pauseTimer);
    };
  }, []);

  const currentCode = codeExamples[activeTab];

  const handleCodeChange = (e) => {
    const val = e.target.value;
    setCodeExamples(prev => ({
      ...prev,
      [activeTab]: val
    }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setExecutionOutput(null);

    setTimeout(() => {
      setIsRunning(false);
      setExecutionOutput({
        status: '200 OK',
        latency: `${Math.floor(Math.random() * 8 + 10)}ms`,
        payload: {
          success: true,
          deploymentId: `dep_${Math.random().toString(36).substring(2, 9)}`,
          environment: 'production',
          edgeRegion: 'us-east-1 (Global PoP)',
          endpoint: 'https://enterprise-platform.nexora.app'
        }
      });
    }, 600);
  };

  const handleReset = () => {
    setCodeExamples(prev => ({
      ...prev,
      [activeTab]: INITIAL_CODE_EXAMPLES[activeTab]
    }));
    setExecutionOutput(null);
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const stats = [
    { number: '15+', label: 'Projects Delivered', icon: FolderKanban },
    { number: '20+', label: 'Happy Clients', icon: Users },
    { number: '10+', label: 'Industries Served', icon: Building2 },
    { number: '99%', label: 'Client Satisfaction', icon: Award },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Pre-heading Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <a
            href="#about"
            className="badge-resend hover:border-[var(--border-hover)] transition-all text-decoration-none group"
          >
            <span className="status-pulse-dot" />
            <span className="text-[var(--text-heading)] font-medium uppercase tracking-wider text-[11px] sm:text-xs">Your Complete Digital Solutions Partner</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--text-sub)] group-hover:translate-x-0.5 group-hover:text-[var(--text-heading)] transition-transform" />
          </a>
        </motion.div>

        {/* Main Headline with Typewriter Animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto mb-6"
        >
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-heading)] leading-[1.08] relative">
            <span>{text1}</span>
            {!isLine1Done && <span className="typewriter-cursor" />}
            <br className="hidden sm:inline" />{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-heading)] via-[var(--text-body)] to-[var(--text-sub)]">
              {text2}
            </span>
            {isLine1Done && <span className="typewriter-cursor" />}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg max-w-3xl mx-auto text-[var(--text-sub)] font-normal leading-relaxed mb-10"
        >
          We create premium websites, business software, mobile applications, cloud solutions, and marketing strategies that help businesses grow faster, work smarter, and achieve long-term success.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <a href="#contact" className="btn-resend-white w-full sm:w-auto">
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a href="#work" className="btn-resend-ghost w-full sm:w-auto">
            <Code2 className="w-4 h-4 text-[var(--text-sub)]" />
            <span>View Portfolio</span>
          </a>
        </motion.div>

        {/* Fully Interactive Code Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto rounded-xl bg-[#080808] border border-white/15 shadow-2xl text-left overflow-hidden relative mb-14"
        >
          {/* Terminal Header */}
          <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#0d0d0d] border-b border-white/10 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-1.5 text-xs font-mono text-gray-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-gray-400" />
                deploy.config.ts
              </span>
            </div>

            {/* Language Tabs with Sliding Spring Animation */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5 relative">
              {['react', 'node', 'python', 'curl'].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setExecutionOutput(null);
                    }}
                    className={`relative px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                      isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-white/15 rounded-md"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                );
              })}
            </div>

            {/* Controls: Run Code, Reset, & Copy */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono hover:bg-emerald-500/30 transition-all cursor-pointer"
                title="Execute API Code"
              >
                <Play className={`w-3 h-3 fill-emerald-400 ${isRunning ? 'animate-spin' : ''}`} />
                <span>{isRunning ? 'Running...' : 'Run API'}</span>
              </button>

              <button
                onClick={handleReset}
                className="p-1.5 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
                title="Reset Code"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleCopy}
                className="p-1.5 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
                title="Copy Code"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Interactive Code Area */}
          <div className="relative px-5 py-4 font-mono text-xs sm:text-sm overflow-y-auto max-h-[220px] bg-[#050505] leading-relaxed text-gray-300">
            <div className="space-y-0.5">
              {currentCode.split('\n').map((line, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-6 text-right select-none text-gray-600 font-mono text-xs shrink-0">{i + 1}</span>
                  <span className="font-mono text-xs sm:text-sm whitespace-pre">
                    {line.replace(/(import|export|from|const|await|async|function|return|new|client|print|curl)/g, '🔑$1🔑')
                         .split('🔑').map((part, idx) => {
                           if (['import', 'export', 'from', 'const', 'await', 'async', 'function', 'return', 'new', 'curl'].includes(part)) {
                             return <span key={idx} className="text-[#ff4f00] font-semibold">{part}</span>;
                           }
                           if (part.includes("'") || part.includes('"')) {
                             return <span key={idx} className="text-emerald-400">{part}</span>;
                           }
                           if (part.includes('//') || part.includes('#')) {
                             return <span key={idx} className="text-gray-500 opacity-80">{part}</span>;
                           }
                           return <span key={idx}>{part}</span>;
                         })}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Live Execution Console Output Drawer */}
          <AnimatePresence>
            {executionOutput && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#030303] border-t border-white/10 p-4 font-mono text-xs text-gray-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 font-semibold">{executionOutput.status}</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-400">Response Latency: {executionOutput.latency}</span>
                  </div>
                  <button
                    onClick={() => setExecutionOutput(null)}
                    className="text-gray-500 hover:text-white text-[11px]"
                  >
                    Clear Console
                  </button>
                </div>
                <pre className="text-gray-400 overflow-x-auto text-[11px] leading-relaxed bg-[#080808] p-2.5 rounded-md border border-white/5">
                  <code>{JSON.stringify(executionOutput.payload, null, 2)}</code>
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                onMouseMove={handleMouseMove}
                className="spotlight-card p-5 rounded-xl text-left border border-[var(--border-color)] bg-[var(--bg-card)]"
              >
                <div className="w-8 h-8 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center mb-3 text-[var(--text-heading)]">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-mono text-2xl font-bold text-[var(--text-heading)] mb-0.5">
                  {stat.number}
                </div>
                <div className="text-xs text-[var(--text-sub)] font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
