import React from 'react';
import { GraduationCap } from 'lucide-react';
import type {  DetailProps, EducationItem  } from '../../types';

const EducationDetail: React.FC<DetailProps<EducationItem>> = ({ item, lang, t }) => {
  return (
    <div className="col-span-12 flex flex-col gap-12">
      {/* Top Row: Evolution & Vertical Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left: Evolution Académique */}
        <div className="p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl h-full flex flex-col justify-center">
          <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-6">{lang === 'fr' ? 'Évolution Académique' : 'Academic Evolution'}</h4>
          <p className="text-base text-slate-200 leading-relaxed">{t(item.details.evolution)}</p>
        </div>

        {/* Right: Vertical Timeline */}
        <div className="relative flex flex-col gap-6">
          {/* Vertical Path Line */}
          <div className="absolute top-[48px] bottom-[48px] left-[48px] w-[2px] bg-gradient-to-b from-cyan-500/20 via-cyan-500/50 to-purple-500/50 z-0" />

          {[...item.details.schools].reverse().map((edu: any, i: number) => (
            <div key={i} className="flex gap-6 p-6 bg-[#0a0a0c] border border-white/10 rounded-3xl hover:border-cyan-500/40 transition-all duration-500 relative shadow-2xl group hover:-translate-y-1 z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#0a0a0c] flex items-center justify-center text-cyan-500 border border-cyan-500/20 shrink-0 group-hover:scale-110 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-500 z-20">
                <GraduationCap size={24} />
              </div>
              
              <div className="flex-1 mt-1">
                <span className="text-cyan-500 font-mono text-[10px] block mb-1">{edu.period}</span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight leading-tight mb-1">{t(edu.degree)}</h3>
                <p className="text-slate-300 font-bold text-sm">{edu.school}</p>
                {edu.focus && (
                  <p className="text-slate-400 text-[10px] font-bold uppercase opacity-70 leading-relaxed mt-2">{t(edu.focus)}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row: Poursuite d'Études */}
      {item.details.futureStudies && (
        <div className="p-8 bg-purple-500/5 border border-purple-500/20 rounded-3xl w-full">
          <h4 className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-6">{lang === 'fr' ? 'Poursuite d\'Études' : 'Future Studies'}</h4>
          <p className="text-base text-slate-200 leading-relaxed text-center max-w-4xl mx-auto">{t(item.details.futureStudies)}</p>
        </div>
      )}
    </div>
  );
};

export default EducationDetail;
