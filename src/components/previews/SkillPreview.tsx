import React from 'react';
import { Cpu, Zap } from 'lucide-react';
import type {  DetailProps, SkillItem  } from '../../types';

const SkillPreview: React.FC<DetailProps<SkillItem>> = ({ item, t }) => {
  const hardSkills = [...item.details.languages, ...item.details.web, ...item.details.data].slice(0, 8);
  const softSkills = item.details.softSkillsData.map(s => t(s.name));

  // Double arrays for continuous loop
  const loopHard = [...hardSkills, ...hardSkills];
  const loopSoft = [...softSkills, ...softSkills];

  return (
    <div className="flex-1 flex flex-col justify-center gap-5 relative py-2 overflow-hidden w-full">
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 15s linear infinite;
            width: max-content;
          }
          .animate-scroll-right {
            animation: scroll-right 15s linear infinite;
            width: max-content;
          }
        `}
      </style>


      {/* Hard Skills */}
      <div className="space-y-3 relative z-10 w-full overflow-hidden">
        {/* gradient masks to hide edges */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-900/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-900/90 to-transparent z-10 pointer-events-none" />
        
        <div className="flex items-center gap-2 px-2 text-cyan-400 mb-1 relative z-20">
          <Cpu size={14} className="animate-pulse" />
          <h4 className="text-[10px] font-black uppercase tracking-widest text-white">Hard Skills</h4>
        </div>
        
        <div className="flex animate-scroll-left gap-2 px-2 hover:[animation-play-state:paused] group/scroll">
          {loopHard.map((s, i) => (
            <span key={`${s}-${i}`} className="shrink-0 px-3 py-1.5 bg-slate-800/80 border border-cyan-500/30 rounded-lg text-[10px] font-bold text-cyan-50 shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:bg-cyan-400 hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all cursor-default">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="space-y-3 relative z-10 w-full overflow-hidden mt-1">
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-900/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-900/90 to-transparent z-10 pointer-events-none" />
        
        <div className="flex items-center gap-2 px-2 text-purple-400 mb-1 relative z-20">
          <Zap size={14} className="animate-pulse" />
          <h4 className="text-[10px] font-black uppercase tracking-widest text-white">Soft Skills</h4>
        </div>
        
        <div className="flex animate-scroll-right gap-2 px-2 hover:[animation-play-state:paused]">
          {loopSoft.map((s, i) => (
            <span key={`${s}-${i}`} className="shrink-0 px-3 py-1.5 bg-slate-800/80 border border-purple-500/30 rounded-lg text-[10px] font-bold text-purple-50 shadow-[0_0_10px_rgba(168,85,247,0.1)] hover:bg-purple-400 hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all cursor-default">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPreview;
