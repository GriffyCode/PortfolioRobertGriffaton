import React from 'react';
import { Award } from 'lucide-react';
import type {  DetailProps, SkillItem  } from '../../types';

const SkillDetail: React.FC<DetailProps<SkillItem>> = ({ item, lang, t }) => {
  return (
    <div className="col-span-12 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-6">{lang === 'fr' ? 'Programmation & Back-end' : 'Programming & Backend'}</h4>
            <div className="flex flex-wrap gap-2">
              {item.details.languages.map((s: string) => <span key={s} className="px-4 py-2 bg-white/5 rounded-xl text-sm font-bold text-white border border-white/5">{s}</span>)}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-6">Web & Mobile</h4>
            <div className="flex flex-wrap gap-2">
              {item.details.web.map((s: string) => <span key={s} className="px-4 py-2 bg-white/5 rounded-xl text-sm font-bold text-white border border-white/5">{s}</span>)}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-6">Data & Base de données</h4>
            <div className="flex flex-wrap gap-2">
              {item.details.data.map((s: string) => <span key={s} className="px-4 py-2 bg-white/5 rounded-xl text-sm font-bold text-white border border-white/5">{s}</span>)}
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-6">DevOps & Infrastructure</h4>
            <div className="flex flex-wrap gap-2">
              {item.details.infra.map((s: string) => <span key={s} className="px-4 py-2 bg-white/5 rounded-xl text-sm font-bold text-white border border-white/5">{s}</span>)}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-6">Outils & Méthodologies</h4>
            <div className="flex flex-wrap gap-2">
              {item.details.tools.map((s: string) => <span key={s} className="px-4 py-2 bg-white/5 rounded-xl text-sm font-bold text-white border border-white/5">{s}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5">
        <div className="p-10 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl">
          <h4 className="text-xs font-black text-cyan-500 uppercase tracking-widest mb-8">{lang === 'fr' ? 'Compétences Transverses & Soft Skills' : 'Transversal & Soft Skills'}</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {item.details.softSkillsData.map((soft: any, i: number) => (
                <div key={i} className="flex flex-col gap-3 p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-purple-500/40 transition-colors h-full">
                  <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                      <span className="text-base font-black text-white uppercase tracking-tight">{t(soft.name)}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-cyan-500/30 pl-4 mt-2">
                    {t(soft.example)}
                  </p>
                </div>
              ))}
            </div>
          <div className="mt-10 p-6 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 flex items-start gap-4">
              <Award className="text-cyan-500 shrink-0" size={24} />
              <p className="text-sm text-slate-300 leading-relaxed font-bold">
                {lang === 'fr' 
                  ? "L'utilisation de technologies comme FastAPI, Docker ou les WebSockets a été déterminante pour valider le Niveau 3 en Réalisation et Optimisation d'applications informatiques selon le référentiel BUT." 
                  : "The use of technologies like FastAPI, Docker, or WebSockets was instrumental in validating Level 3 in Application Realization and Optimization according to the BUT framework."}
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
