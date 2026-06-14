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
        </div>
      </div>

      {item.details.certifications && item.details.certifications.length > 0 && (
        <div className="pt-12 border-t border-white/5">
          <h4 className="text-xl font-black text-white uppercase tracking-widest mb-8 flex items-center gap-3">
            <Award className="text-cyan-500" size={28} />
            Certifications
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {item.details.certifications.map((cert, idx) => (
              <div key={idx} className="p-5 bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-colors rounded-2xl flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white mb-3">{t(cert.name)}</h4>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${cert.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`}>
                    {cert.status === 'completed' ? (lang === 'fr' ? 'Obtenue' : 'Completed') : (lang === 'fr' ? 'En cours' : 'In Progress')}
                  </span>
                </div>
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="mt-5 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition-colors w-fit">
                    {lang === 'fr' ? 'Voir le certificat' : 'View Certificate'}
                    <span className="text-lg leading-none">&rsaquo;</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {item.details.butSkills && item.details.butSkills.length > 0 && (
        <div className="pt-12 border-t border-white/5">
          <h4 className="text-xl font-black text-white uppercase tracking-widest mb-8 flex items-center gap-3">
            <Award className="text-cyan-500" size={28} />
            {lang === 'fr' ? 'Tableau de Synthèse des Compétences BUT' : 'BUT Skills Synthesis Table'}
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-cyan-500/30">
                  <th className="py-4 px-6 text-cyan-400 font-black uppercase text-xs tracking-widest">{lang === 'fr' ? 'Compétence' : 'Skill'}</th>
                  <th className="py-4 px-6 text-cyan-400 font-black uppercase text-xs tracking-widest w-[40%]">{lang === 'fr' ? 'Synthèse des Acquis' : 'Learning Synthesis'}</th>
                  <th className="py-4 px-6 text-cyan-400 font-black uppercase text-xs tracking-widest w-[40%]">{lang === 'fr' ? 'Auto-Évaluation' : 'Self-Evaluation'}</th>
                </tr>
              </thead>
              <tbody>
                {item.details.butSkills.map((skill: any, i: number) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-6 px-6 align-top">
                      <span className="text-white font-bold block">{t(skill.name)}</span>
                    </td>
                    <td className="py-6 px-6 align-top text-sm text-slate-300 leading-relaxed">{t(skill.synthesis)}</td>
                    <td className="py-6 px-6 align-top text-sm text-slate-400 leading-relaxed italic">{t(skill.selfEvaluation)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillDetail;
