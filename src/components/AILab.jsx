import React, { useState } from 'react';
import { 
  Sparkles, 
  Terminal, 
  ArrowDown, 
  Brain, 
  Database, 
  Code2, 
  CheckCircle2, 
  MessageSquare,
  Wand2,
  Workflow,
  Cpu,
  Layers
} from 'lucide-react';
import { aiWorkflowSteps } from '../data/projects.js';

export default function AILab() {
  const [activeStepIndex, setActiveStepIndex] = useState(2);

  const capabilities = [
    { name: "Prompt Engineering", desc: "Merancang kerangka instruksi multi-shot & chain-of-thought." },
    { name: "Prompt Optimization", desc: "Kompresi token dan peningkatan determinisme output model." },
    { name: "Context Management", desc: "Pengelolaan state context window dan pemilahan dokumen referensi." },
    { name: "Instruction Design", desc: "Perancangan persona, format JSON schema, dan boundary rules." },
    { name: "AI-assisted Development", desc: "Sintesis komponen UI dan scaffolding boilerplates secara cepat." },
    { name: "Debugging dengan AI", desc: "Isolasi regression bugs dan performa profiling berbasis log." },
    { name: "Eksperimen Prompt Injection", desc: "Pengujian kekebalan sistem terhadap manipulasi prompt semantik." },
    { name: "AI API Integration", desc: "Konektivitas RESTful & SDK model LLM ke antarmuka aplikasi web." }
  ];

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Code': return <Code2 className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      default: return <Workflow className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="ai-prompt-engineering"
      aria-label="AI dan Prompt Engineering"
      className="py-20 md:py-28 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-4 backdrop-blur-md">
            <Workflow className="w-3.5 h-3.5" />
            <span>&lt;prompt-workflow-matrix&gt;</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            AI & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">Prompt Engineering</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Metodologi terstruktur dalam mengonversi intensi manusia menjadi kode berkualitas melalui orkestrasi alur kerja AI yang teruji.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Workflow Chain Visualizer */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-purple-500/25 mb-14 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-purple-500/20">
            <div>
              <span className="font-mono text-xs text-purple-300 uppercase tracking-wider block">
                Workflow Pipeline
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Siklus Rekayasa Prompt Azazothx
              </h3>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 px-3 py-1.5 rounded-xl self-start sm:self-auto">
              INTERACTIVE_FLOW_ACTIVE
            </span>
          </div>

          {/* Workflow Steps Horizontal / Vertical Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {aiWorkflowSteps.map((step, index) => {
              const isSelected = activeStepIndex === index;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(index)}
                  className={`cursor-pointer rounded-2xl p-4 border transition-all duration-300 flex flex-col justify-between relative group ${
                    isSelected
                      ? 'bg-purple-950/70 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.35)] transform -translate-y-1'
                      : 'bg-black/40 border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-950/30'
                  }`}
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-purple-400">
                        {step.step}
                      </span>
                      <div className={`p-2 rounded-xl border ${step.color}`}>
                        {getStepIcon(step.icon)}
                      </div>
                    </div>

                    <h4 className="font-display font-bold text-sm sm:text-base text-white mb-1.5">
                      {step.name}
                    </h4>

                    <p className="text-xs text-slate-300/80 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow Indicator for Desktop */}
                  {index < aiWorkflowSteps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#080518] border border-purple-500/40 items-center justify-center text-purple-400 text-xs pointer-events-none">
                      →
                    </div>
                  )}

                  {/* Arrow for Mobile */}
                  {index < aiWorkflowSteps.length - 1 && (
                    <div className="md:hidden flex justify-center py-2 text-purple-400">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Step Detail Terminal Box */}
          <div className="mt-8 rounded-2xl bg-[#060412] border border-purple-500/30 p-5 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-purple-300 border-b border-purple-500/20 pb-2">
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>DETAIL TAHAPAN #{aiWorkflowSteps[activeStepIndex].step}: {aiWorkflowSteps[activeStepIndex].name.toUpperCase()}</span>
              </span>
              <span className="text-slate-400 text-[11px]">Klick step di atas untuk inspeksi</span>
            </div>

            <p className="text-slate-200 leading-relaxed">
              &gt; {aiWorkflowSteps[activeStepIndex].desc}. Tahapan ini memastikan bahwa hasil keluaran tidak ambigu, meminimalkan halusinasi teknis, dan menghasilkan kode yang modular serta siap diuji.
            </p>
          </div>
        </div>

        {/* 8 Capabilities Badges Grid */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-400" />
            <span>Spesialisasi AI & Prompt Engineering</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <div
                key={cap.name}
                className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-950/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <h4 className="font-semibold text-sm text-white">{cap.name}</h4>
                </div>
                <p className="text-xs text-slate-300/80 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
