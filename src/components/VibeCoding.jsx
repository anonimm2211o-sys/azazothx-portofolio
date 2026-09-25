import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Terminal, 
  ShieldAlert, 
  Layers, 
  Cpu, 
  Bug, 
  Compass, 
  RefreshCw, 
  FlaskConical, 
  CheckCircle,
  Code,
  Lock,
  Eye,
  Zap
} from 'lucide-react';
import { vibeCodingFeatures } from '../data/projects.js';

export default function VibeCoding() {
  const [activeTab, setActiveTab] = useState('features');
  const [simulatedPromptState, setSimulatedPromptState] = useState(0);

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-purple-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-fuchsia-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Bug': return <Bug className="w-5 h-5 text-pink-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-amber-400" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-emerald-400" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-violet-400" />;
      default: return <Bot className="w-5 h-5 text-purple-400" />;
    }
  };

  const simulationSteps = [
    {
      title: "Context Formulation",
      input: "PROMPT: 'Bangun arsitektur SPA modular dengan state lokal stabil tanpa re-render berlebih.'",
      reasoning: "AI menganalisis struktur dependensi, memetakan separation of concerns, dan menyiapkan pattern custom hooks.",
      output: "STATUS: Menghasilkan arsitektur scalable, zero-warning build, dan performa tinggi."
    },
    {
      title: "Error & Stack Debugging",
      input: "PROMPT: 'Analisis error stack trace unhandled promise rejection pada modul fetch.'",
      reasoning: "AI mengekstrak error boundary, mendiagnosis network timeout, dan menyarankan fallback state aman.",
      output: "STATUS: Bug terisolasi, exception handling diperkuat dengan notifikasi user yang elegan."
    },
    {
      title: "Instruction Hardening",
      input: "PROMPT: 'Evaluasi instruksi sistem terhadap potensi delimiter confusion dan boundary hijack.'",
      reasoning: "AI menguji pemisahan blok instruksi sistem (system prompt) dari untrusted user input.",
      output: "STATUS: Guardrails aktif, output formatting terproteksi dari kebocoran konteks."
    }
  ];

  return (
    <section
      id="vibe-coding"
      aria-label="Vibe Coding & AI Laboratory"
      className="py-20 md:py-28 relative z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Bot className="w-3.5 h-3.5 text-purple-400" />
            <span>&lt;ai-collaboration-lab&gt;</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Vibe <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-fuchsia-300">Coding</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            "Saya juga menggunakan pendekatan vibe coding, yaitu memanfaatkan AI sebagai partner dalam proses membangun dan mengeksplorasi kode."
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* AI Laboratory Hologram Banner */}
        <div className="mb-14 rounded-3xl bg-gradient-to-r from-[#0b0824]/95 via-[#130d38]/90 to-[#0c0826]/95 border border-purple-500/30 p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden">
          
          {/* Circuit / Hologram Scan Background */}
          <div className="absolute inset-0 cosmic-grid-bg opacity-30 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-200">
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>AI AS A CREATIVE & ARCHITECTURAL ACCELERATOR</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Mengeksplorasi Kode di Era Generatif
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Vibe coding bagi saya bukan sekadar copy-paste kode, melainkan proses dialektika aktif. Dengan merumuskan konteks yang matang, menyusun batasan arsitektur yang jelas, dan mengarahkan model AI secara presisi, ide-ide kompleks dapat dieksekusi dengan kecepatan tinggi tanpa mengorbankan pemahaman logika fundamental.
              </p>
            </div>

            {/* Hologram Terminal Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#060414] border border-purple-500/40 p-5 shadow-[0_0_25px_rgba(168,85,247,0.2)] font-mono text-xs text-slate-300 space-y-3 relative">
                <div className="flex items-center justify-between pb-2 border-b border-purple-500/20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-purple-300 ml-2 text-[11px]">vibe_assistant.sh</span>
                  </div>
                  <span className="text-[10px] text-purple-400/70">HOLOGRAM_NODE_ACTIVE</span>
                </div>

                <div className="space-y-2">
                  <p className="text-purple-400">
                    $ <span className="text-slate-200">{simulationSteps[simulatedPromptState].input}</span>
                  </p>
                  <p className="text-indigo-300/90 text-[11px] pl-3 border-l border-indigo-500/30">
                    &gt;&gt; {simulationSteps[simulatedPromptState].reasoning}
                  </p>
                  <p className="text-emerald-400 text-[11px]">
                    ✓ {simulationSteps[simulatedPromptState].output}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-purple-500/20">
                  <span className="text-[10px] text-slate-400">Simulasi Alur:</span>
                  <div className="flex gap-1.5">
                    {simulationSteps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSimulatedPromptState(i)}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                          simulatedPromptState === i
                            ? 'bg-purple-600 text-white shadow-[0_0_8px_rgba(168,85,247,0.6)]'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        Skenario {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* AI Capabilities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {vibeCodingFeatures.map((item, idx) => (
            <div
              key={item.title}
              className="glass-panel glass-panel-hover rounded-2xl p-5 border border-purple-500/20 group relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-purple-400 transition-all">
                  {getFeatureIcon(item.icon)}
                </div>
                <h4 className="font-display font-bold text-base text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300/85 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-purple-500/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>VIBE_MOD_0{idx + 1}</span>
                <span className="text-purple-400">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Special Educational Card: Prompt Injection & AI Security Awareness */}
        <div className="rounded-3xl bg-gradient-to-br from-[#120a2e] via-[#0d0724] to-[#08051a] border border-fuchsia-500/30 p-6 sm:p-8 md:p-10 shadow-[0_0_35px_rgba(217,70,239,0.15)] relative overflow-hidden">
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-fuchsia-500/20 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-fuchsia-950/80 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.3)]">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-fuchsia-300 uppercase tracking-widest block">
                    Kajian Keamanan & Ketahanan Model
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Eksplorasi Prompt Injection (Edukasi & Riset)
                  </h3>
                </div>
              </div>
              
              <span className="px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-xs font-mono text-fuchsia-200 self-start md:self-auto">
                EDUCATIONAL_RESEARCH_ONLY
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
              <div className="space-y-2 p-4 rounded-xl bg-black/40 border border-purple-500/20">
                <h5 className="font-bold text-white flex items-center gap-2">
                  <Eye className="w-4 h-4 text-purple-400" />
                  Pemrosesan Instruksi
                </h5>
                <p className="text-xs text-slate-300/90 leading-relaxed">
                  Mempelajari bagaimana LLM mengurai token instruksi sistem versus input data luar, serta mengenali batas-batas determinisme model bahasa.
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-xl bg-black/40 border border-purple-500/20">
                <h5 className="font-bold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-fuchsia-400" />
                  Analisis Konflik Instruksi
                </h5>
                <p className="text-xs text-slate-300/90 leading-relaxed">
                  Meneliti skenario saat instruksi pengguna bertentangan dengan system prompt (jailbreak/leakage) untuk memahami celah logika semantik.
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-xl bg-black/40 border border-purple-500/20">
                <h5 className="font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  Hardening & Defensive Guardrails
                </h5>
                <p className="text-xs text-slate-300/90 leading-relaxed">
                  Merancang strategi mitigasi: pemisahan peran konteks (role separation), sanitasi input, evaluasi output, dan perlindungan privasi data.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-fuchsia-500/20 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400" />
              <span>
                Fokus riset ini murni edukatif dan defensif guna membangun sistem AI yang lebih aman, tepercaya, dan tangguh terhadap manipulasi instruksi.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
