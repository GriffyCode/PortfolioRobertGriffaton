import React from 'react';
import { Code2 } from 'lucide-react';
import type {  DetailProps, ProjectItem  } from '../../types';

const ProjectDetail: React.FC<DetailProps<ProjectItem>> = ({ item, lang, t }) => {
  return (
    <div className="col-span-12 grid grid-cols-1 gap-6">
      {item.details.map((proj: any, i: number) => (
        <div key={i} className="p-8 bg-white/10 border border-white/10 rounded-3xl hover:border-purple-500/40 transition-all group flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-500 text-[8px] font-black uppercase rounded border border-cyan-500/20">{lang === 'fr' ? 'Projet' : 'Project'}</span>
              <Code2 size={20} className="text-slate-400 group-hover:text-purple-400 transition-colors lg:hidden" />
            </div>
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">{proj.name}</h3>
            <p className="text-sm text-slate-200 mb-6">{t(proj.desc)}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {proj.stack.split(',').map((s: string) => (
                <span key={s} className="text-[10px] font-bold text-slate-400 uppercase px-3 py-1 bg-white/5 rounded-full border border-white/5">{s.trim()}</span>
              ))}
            </div>
            
            {proj.traceUrl && (
               <div>
                  <a href={proj.traceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all">
                     {lang === 'fr' ? 'Consulter la trace' : 'View trace'}
                  </a>
               </div>
            )}
          </div>
          
          {proj.subjective && (
            <div className="lg:w-1/2 p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Code2 size={40} className="text-cyan-500" /></div>
              <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-4">{lang === 'fr' ? 'Ce dont je suis fier' : 'What I am proud of'}</h4>
              <p className="text-sm text-slate-200 leading-relaxed italic relative z-10">"{t(proj.subjective)}"</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;
