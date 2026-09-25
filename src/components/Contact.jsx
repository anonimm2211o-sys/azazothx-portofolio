import React, { useState } from 'react';
import { 
  Send, 
  Github, 
  Instagram, 
  Mail, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { contactsData } from '../data/projects.js';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "azazothx.dev@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getPlatformIcon = (iconName) => {
    switch (iconName) {
      case 'Github': return <Github className="w-6 h-6" />;
      case 'Instagram': return <Instagram className="w-6 h-6" />;
      case 'Send': return <Send className="w-6 h-6" />;
      case 'Mail': return <Mail className="w-6 h-6" />;
      default: return <MessageSquare className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="kontak"
      aria-label="Kontak dan Koneksi Azazothx"
      className="py-20 md:py-28 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-4 backdrop-blur-md">
            <Send className="w-3.5 h-3.5 text-purple-400" />
            <span>&lt;connect-channel&gt;</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Terhubung <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">Dengan Saya</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Terbuka untuk diskusi santai mengenai eksplorasi teknologi, eksperimen web development, AI workflow, atau peluang kolaborasi proyek.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactsData.map((contact) => (
            <a
              key={contact.platform}
              id={`contact-link-${contact.platform.toLowerCase()}`}
              href={contact.url}
              target={contact.platform === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`glass-panel glass-panel-hover rounded-2xl p-6 border border-purple-500/20 flex flex-col justify-between group cursor-pointer transition-all duration-300 ${contact.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#09071a] border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {getPlatformIcon(contact.icon)}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-300 transition-colors" />
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {contact.platform}
                </h3>
                <p className="text-xs text-slate-400 mb-3 font-mono">
                  {contact.label}
                </p>
                <p className="text-xs text-slate-300/80 leading-relaxed">
                  {contact.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-purple-300/80">
                <span>Hubungi via {contact.platform}</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Interactive Quick Copy Box */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0b0824] via-[#100b30] to-[#0b0824] border border-purple-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg sm:text-xl text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Kirim Surel Langsung</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-mono">
              {emailAddress}
            </p>
          </div>

          <button
            id="btn-copy-email"
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/40 text-purple-200 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 touch-btn cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.25)]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Berhasil Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Salin Alamat Email</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
