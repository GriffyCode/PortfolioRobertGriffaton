import { Target } from 'lucide-react';
import React from 'react';
import TextReveal from '../TextReveal';
import type {  DetailProps, ExperienceItem  } from '../../types';

const ExperiencePreview: React.FC<DetailProps<ExperienceItem>> = ({ item, lang, t }) => {
  // Map actual experiences from data
  const timeline = item.details.slice(0, 2).map((exp, idx) => ({
    id: `exp-${idx}`,
    company: exp.company,
    role: t(exp.role),
    year: exp.year,
    image: exp.image,
    desc: t(exp.missions)[0] || ''
  }));

  // Prepend future goal so it appears at the top
  timeline.unshift({
    id: 'alternance',
    company: 'Alternance Ingénieur',
    role: lang === 'fr' ? 'Recherche active' : 'Actively seeking',
    year: 'Septembre 2026',
    image: '',
    desc: lang === 'fr' 
      ? 'Recherche d\'une entreprise pour contribuer à des projets innovants.'
      : 'Seeking a company to contribute to innovative projects.'
  });

  return (
    <div className="flex-1 flex flex-col justify-between relative py-2 overflow-hidden w-full">
      <style>
        {`
          @keyframes data-flow {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
          }
          @keyframes node-pulse {
            0%, 100% { box-shadow: 0 0 10px rgba(34,211,238,0.2), inset 0 0 5px rgba(34,211,238,0.1); }
            50% { box-shadow: 0 0 25px rgba(34,211,238,0.6), inset 0 0 15px rgba(34,211,238,0.3); }
          }
          @keyframes shine {
            100% { transform: translateX(100%); }
          }
          .animate-data-flow {
            animation: data-flow 2s linear infinite;
          }
          .animate-node-pulse {
            animation: node-pulse 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Vertical Neon Circuit */}
      <div className="absolute left-[26px] top-[28px] bottom-[28px] w-[2px] bg-slate-800 rounded-full z-0 overflow-hidden">
        {/* The data packet flowing down */}
        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-data-flow shadow-[0_0_10px_#22d3ee]" />
      </div>

      <div className="flex flex-col justify-between h-full gap-4 relative z-10 w-full">
        {timeline.map((step, idx) => (
          <div key={step.id} className="flex items-center gap-4 group/exp">
            {/* Node (Logo) */}
            <div 
              className={`w-14 h-14 rounded-xl bg-slate-900/80 border-2 ${
                idx === 0 ? 'border-cyan-400/50' : idx === 1 ? 'border-cyan-400/80' : 'border-indigo-400/50'
              } flex items-center justify-center shrink-0 shadow-lg relative overflow-hidden backdrop-blur-sm transition-all duration-300 group-hover/exp:scale-105 ${idx === 1 ? 'animate-node-pulse' : ''}`}
              style={{ animationDelay: `${idx * 0.5}s` }}
            >
              {/* Inner glowing pulse for all nodes on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover/exp:from-cyan-400/20 group-hover/exp:to-transparent transition-all duration-500" />
              
              {step.image ? (
                <div className="w-full h-full flex items-center justify-center p-1 relative z-10">
                  <img 
                    src={step.image} 
                    alt={step.company} 
                    className="w-full h-full object-contain scale-[1.3] opacity-80 group-hover/exp:opacity-100 transition-all duration-500 group-hover/exp:scale-[1.45] drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center relative z-10">
                  <Target size={20} className="text-indigo-400 group-hover/exp:text-cyan-400 transition-colors group-hover/exp:animate-spin-slow" />
                </div>
              )}
            </div>
            
            {/* Content Box */}
            <div className="flex-1 min-w-0 bg-white/5 border border-white/5 p-3 rounded-xl transition-all duration-500 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] relative overflow-hidden">
              {/* Box hover glow sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-transparent -translate-x-full group-hover/exp:animate-[shine_1.5s_ease-in-out_infinite]" />
              
              <div className="flex justify-between items-start mb-0.5 relative z-10">
                <h3 className="text-[11px] font-black text-white uppercase truncate group-hover/exp:text-cyan-50">{step.company}</h3>
                <span className="text-[9px] font-mono text-cyan-500 px-2 py-0.5 bg-cyan-500/10 rounded ml-2 shrink-0 group-hover/exp:bg-cyan-500 group-hover/exp:text-black transition-colors">{step.year}</span>
              </div>
              <p className="text-[9px] text-cyan-400/80 font-bold uppercase tracking-wide truncate relative z-10">{step.role}</p>
              <p className="text-[9px] text-slate-400 mt-1.5 line-clamp-2 italic leading-relaxed relative z-10">
                <TextReveal text={step.desc} delay={0.1} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePreview;
