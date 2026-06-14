import { Code2, ExternalLink } from 'lucide-react';
import React from 'react';
import type { DetailProps, ProjectItem } from '../../types';

const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    <path d="M9 18c-4.5 1.5-5-2.5-7-3"></path>
  </svg>
);

const ProjectDetail: React.FC<DetailProps<ProjectItem>> = ({ item, lang, t }) => {
  return (
    <div className="col-span-12 grid grid-cols-1 gap-6">
      {item.details.map((proj: any, i: number) => {
        const isReversed = i % 2 !== 0;
        
        return (
        <div key={i} className={`relative p-8 bg-white/10 border border-white/10 rounded-3xl hover:border-purple-500/40 transition-all group flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8`}>
          <div className="flex-1 relative z-10">
            <div className="flex gap-6 items-start mb-6">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-2 py-0.5 text-[8px] font-black uppercase rounded border ${proj.isPersonal ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' : 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20'}`}>
                    {lang === 'fr' 
                      ? (proj.isPersonal ? 'Projet Perso' : 'Projet BUT') 
                      : (proj.isPersonal ? 'Personal Project' : 'University Project')}
                  </span>
                  <Code2 size={20} className="text-slate-400 group-hover:text-purple-400 transition-colors lg:hidden" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">{proj.name}</h3>
              </div>
            </div>
            <p className="text-sm text-slate-200 mb-6 whitespace-pre-wrap">{t(proj.desc)}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {proj.stack.split(',').map((s: string) => (
                <span key={s} className="text-[10px] font-bold text-slate-400 uppercase px-3 py-1 bg-white/5 rounded-full border border-white/5">{s.trim()}</span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              {proj.traceUrl && (
                  <a href={proj.traceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all">
                     {proj.traceUrl.includes('github') ? (
                        <>
                          <GithubIcon size={16} />
                          GitHub
                        </>
                     ) : (
                        lang === 'fr' ? 'Consulter la trace' : 'View trace'
                     )}
                  </a>
              )}
              {proj.prodUrl && (
                  <a href={proj.prodUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full text-xs font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all">
                    <ExternalLink size={16} />
                    Live
                  </a>
              )}
            </div>
          </div>
          
          {(proj.subjective || proj.saeReview || proj.mockup) && (
            <div className="lg:w-1/3 shrink-0 flex flex-col justify-center mt-8 lg:mt-0 relative z-10">
              {proj.mockup && (
                <>
                  {/* Desktop: mockup is absolutely positioned to exactly fill the column height */}
                  <div className={`hidden lg:flex absolute inset-0 pointer-events-none ${isReversed ? 'justify-start' : 'justify-end'}`}>
                    <img src={proj.mockup} alt={`${proj.name} mockup`} className={`h-full w-auto max-w-none object-contain drop-shadow-2xl pointer-events-auto ${proj.mockupScale || 'scale-105 hover:scale-110'} transition-transform duration-500 ${isReversed ? 'object-left origin-left' : 'object-right origin-right'}`} />
                  </div>
                  {/* Mobile: mockup is normally rendered */}
                  <div className="lg:hidden w-full flex justify-center mb-6">
                    <img src={proj.mockup} alt={`${proj.name} mockup`} className="max-h-[500px] object-contain drop-shadow-2xl" />
                  </div>
                </>
              )}
              {proj.subjective && (
                <div className="w-full p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl mb-6">
                  <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-4">{lang === 'fr' ? 'Récit Subjectif' : 'Subjective Narrative'}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed italic">{t(proj.subjective)}</p>
                </div>
              )}
              {proj.saeReview && (
                <div className="w-full p-6 bg-purple-500/5 border border-purple-500/20 rounded-2xl mb-6">
                  <h4 className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-4">{lang === 'fr' ? 'Bilan SAÉ' : 'SAE Review'}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed italic">{t(proj.saeReview)}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )})}
    </div>
  );
};

export default ProjectDetail;
