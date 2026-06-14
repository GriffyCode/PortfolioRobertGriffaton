import React from 'react';
import type {  DetailProps, ProjectItem  } from '../../types';

const ProjectPreview: React.FC<DetailProps<ProjectItem>> = ({ item, t }) => {
  // Duplicate the projects array once to allow a seamless 50% translateX loop
  const projects = [...(item.details || []), ...(item.details || [])];

  return (
    <div className="flex-1 w-full flex flex-col justify-center relative min-h-0">
      <style>
        {`
          @keyframes scroll-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: scroll-marquee 25s linear infinite;
            will-change: transform;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Mask to fade out edges */}
      <div 
        className="w-full flex items-center"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="flex gap-4 w-max animate-marquee py-6 px-4 items-center">
          {projects.map((proj: any, idx: number) => (
            <div 
              key={idx}
              className="relative w-[250px] h-[110px] shrink-0 rounded-xl border border-cyan-500/80 bg-slate-900/60 group/proj flex flex-col cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle grid bg */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
              
              {/* Image background if available, else subtle gradient */}
              {proj.image ? (
                <img 
                  src={proj.image} 
                  alt={proj.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover/proj:opacity-60 transition-opacity duration-500" 
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-50 group-hover/proj:opacity-100 transition-opacity" />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent z-0 pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-end h-full p-4">
                <h3 className="font-black text-white uppercase tracking-tighter mb-1 truncate transition-colors group-hover/proj:text-cyan-400 text-lg">
                  {proj.name}
                </h3>
                
                <p className="font-bold uppercase tracking-widest truncate text-slate-400 text-[9px] mb-3">
                  {t(proj.type)}
                </p>

                <div className="flex flex-wrap gap-2 overflow-hidden max-h-[24px]">
                  {proj.stack.split(',').slice(0, 3).map((s: string) => (
                    <span 
                      key={s} 
                      className="text-[8px] font-bold px-2 py-1 rounded-md border text-slate-300 bg-white/5 border-white/10 truncate max-w-[90px] group-hover/proj:border-cyan-500/30 group-hover/proj:text-cyan-100 transition-colors"
                    >
                      {s.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
