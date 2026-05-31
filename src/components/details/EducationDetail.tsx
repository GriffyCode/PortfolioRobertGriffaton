import React from 'react';
import { GraduationCap } from 'lucide-react';
import type {  DetailProps, EducationItem  } from '../../types';

const EducationDetail: React.FC<DetailProps<EducationItem>> = ({ item, lang, t }) => {
  return (
    <div className="col-span-12 space-y-12">
      <div className="p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl">
        <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-6">{lang === 'fr' ? 'Évolution Académique' : 'Academic Evolution'}</h4>
        <p className="text-base text-slate-200 leading-relaxed italic">"{t(item.details.evolution)}"</p>
      </div>
      <div className="space-y-6">
        {item.details.schools.map((edu: any, i: number) => (
          <div key={i} className="flex gap-8 items-center p-6 bg-white/10 border border-white/10 rounded-3xl hover:border-purple-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 border border-cyan-500/20 shrink-0">
              <GraduationCap size={24} />
            </div>
            <div className="flex-1">
              <span className="text-cyan-500 font-mono text-[10px] block mb-1">{edu.period}</span>
              <h3 className="text-lg font-black text-white uppercase tracking-tight">{t(edu.degree)}</h3>
              <p className="text-slate-300 font-bold text-sm">{edu.school}</p>
            </div>
            {edu.focus && (
              <div className="hidden lg:block text-right">
                <p className="text-slate-400 text-[10px] font-bold italic uppercase opacity-70 max-w-[200px] leading-tight">{t(edu.focus)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationDetail;
