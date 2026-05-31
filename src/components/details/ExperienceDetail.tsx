import React from 'react';
import { Circle } from 'lucide-react';
import type {  DetailProps, ExperienceItem  } from '../../types';

const ExperienceDetail: React.FC<DetailProps<ExperienceItem>> = ({ item, lang, t }) => {
  return (
    <div className="col-span-12 space-y-20">
      {item.details.map((exp: any, i: number) => (
        <div key={i} className="relative pl-8 border-l border-white/5 pb-12 last:pb-0">
          <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
            <div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight">{exp.company}</h3>
              <p className="text-cyan-500 font-bold uppercase text-xs tracking-widest mt-2">{t(exp.role)}</p>
            </div>
            <span className="text-slate-500 text-sm font-mono mt-2 lg:mt-0 px-4 py-1 bg-white/5 rounded-full">{exp.year}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-9 space-y-6">
              {exp.subjective && (
                <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl">
                  <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-4">{lang === 'fr' ? 'Récit Subjectif' : 'Subjective Narrative'}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed italic">"{t(exp.subjective)}"</p>
                </div>
              )}
              <ul className="space-y-4 h-full">
                {t(exp.missions).map((m: string, j: number) => (
                  <li key={j} className="flex items-start gap-4 text-slate-200 text-sm p-5 bg-white/10 rounded-2xl border border-white/10 hover:border-cyan-500/20 transition-colors group">
                    <Circle size={8} className="text-cyan-500 fill-cyan-500 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" /> 
                    <span className="leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
              {exp.traceUrl && (
                 <div className="pt-4">
                    <a href={exp.traceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all">
                       {lang === 'fr' ? 'Consulter la trace' : 'View trace'}
                    </a>
                 </div>
              )}
            </div>
            <div className="lg:col-span-3">
              <div className="relative group overflow-hidden rounded-2xl border border-white/10 h-full min-h-[200px]">
                <img src={exp.image} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={exp.company} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-sm font-black text-white uppercase tracking-tighter">{exp.company}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceDetail;
