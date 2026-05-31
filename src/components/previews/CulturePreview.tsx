import React from 'react';
import { Music, Gamepad2, Globe, Sparkles } from 'lucide-react';
import type {  DetailProps, CultureItem  } from '../../types';

const CulturePreview: React.FC<DetailProps<CultureItem>> = () => {
  return (
    <div className="flex-1 grid grid-cols-2 grid-rows-[auto_1fr] gap-2 relative w-full h-full p-2">
      
      {/* Inline styles for continuous animations */}
      <style>
        {`
          @keyframes glow-pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          @keyframes float-icon {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          @keyframes wire-flow {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes wire-border {
            0% { stroke-dashoffset: 200; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-glow {
            animation: glow-pulse 3s ease-in-out infinite;
          }
          .animate-float {
            animation: float-icon 4s ease-in-out infinite;
          }
          .animate-wire {
            animation: wire-flow 2.5s linear infinite;
          }
          .animate-wire-border {
            animation: wire-border 4s linear infinite;
          }
        `}
      </style>

      {/* Shared SVG Defs */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id="neon-glow-border" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="neon-grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="neon-grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="neon-grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Musique */}
      <div className="relative bg-[#0f172a]/80 rounded-xl flex items-center justify-center gap-2 p-3">
        {/* Animated Neon Border */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible rounded-xl">
           <rect width="100%" height="100%" rx="12" fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.2" />
           <rect width="100%" height="100%" rx="12" fill="none" stroke="url(#neon-grad-purple)" strokeWidth="2" strokeDasharray="50 150" pathLength="200" className="animate-wire-border" filter="url(#neon-glow-border)" />
        </svg>
        
        <Music size={16} className="text-purple-400 animate-float relative z-10" />
        <span className="text-[10px] font-black text-white uppercase tracking-wider relative z-10">Musique</span>
      </div>

      {/* Échecs & Futsal */}
      <div className="relative bg-[#0f172a]/80 rounded-xl flex items-center justify-center gap-2 p-3">
        {/* Animated Neon Border */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible rounded-xl">
           <rect width="100%" height="100%" rx="12" fill="none" stroke="#10b981" strokeWidth="1" strokeOpacity="0.2" />
           <rect width="100%" height="100%" rx="12" fill="none" stroke="url(#neon-grad-emerald)" strokeWidth="2" strokeDasharray="50 150" pathLength="200" className="animate-wire-border" style={{ animationDelay: '-2s' }} filter="url(#neon-glow-border)" />
        </svg>
        
        <Gamepad2 size={16} className="text-cyan-400 animate-float relative z-10" style={{ animationDelay: '1s' }} />
        <span className="text-[10px] font-black text-white uppercase tracking-wider relative z-10">Échecs & Futsal</span>
      </div>

      {/* Langues */}
      <div className="col-span-2 relative bg-[#0f172a]/80 rounded-xl flex flex-col justify-center p-3">
        {/* Animated Neon Border */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible rounded-xl">
           <rect width="100%" height="100%" rx="12" fill="none" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.2" />
           <rect width="100%" height="100%" rx="12" fill="none" stroke="url(#neon-grad-cyan)" strokeWidth="2" strokeDasharray="50 150" pathLength="200" className="animate-wire-border" style={{ animationDelay: '-1s' }} filter="url(#neon-glow-border)" />
        </svg>
        
        <div className="flex items-center justify-between mb-2 relative z-10">
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span className="text-[10px] font-black text-white uppercase tracking-wider">Langues</span>
          </div>
          <Sparkles size={12} className="text-cyan-400 animate-pulse" />
        </div>
        
        <div className="flex flex-col gap-2 relative z-10 w-full mt-1">
          {/* Animated Neon Progress Line */}
          <div className="relative h-2 w-full flex items-center my-1">
             {/* Static track */}
             <div className="absolute w-full h-[2px] bg-white/10 rounded-full" />
             
             {/* SVG wire for progress */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 10">
               {/* Base glowing line */}
               <line x1="0" y1="5" x2="100" y2="5" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.3" filter="url(#neon-glow-border)" />
               
               {/* Moving bright segment */}
               <line x1="0" y1="5" x2="100" y2="5" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round"
                     strokeDasharray="25 75" className="animate-wire" filter="url(#neon-glow-border)" vectorEffect="non-scaling-stroke" pathLength="100" />
             </svg>
             
             {/* Points on the timeline */}
             <div className="absolute left-0 w-2 h-2 -ml-1 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]" />
             <div className="absolute left-[35%] w-2 h-2 -ml-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
             <div className="absolute left-[70%] w-2 h-2 -ml-1 rounded-full bg-cyan-500 shadow-[0_0_8px_#22d3ee]" />
             <div className="absolute right-0 w-2 h-2 -mr-1 rounded-full bg-cyan-600 shadow-[0_0_8px_#22d3ee]" />
          </div>
          
          <div className="flex w-full relative z-10 mt-1">
            <span className="text-[8px] font-bold text-cyan-300 w-[35%] text-center">Français</span>
            <span className="text-[8px] font-bold text-cyan-400 w-[35%] text-center">Roumain</span>
            <span className="text-[8px] font-bold text-cyan-500 w-[30%] text-center">Anglais</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturePreview;
