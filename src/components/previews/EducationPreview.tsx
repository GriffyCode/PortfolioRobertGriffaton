import { Check } from 'lucide-react';
import React from 'react';
import type {  DetailProps, EducationItem  } from '../../types';

const EducationPreview: React.FC<DetailProps<EducationItem>> = () => {
  return (
    <div className="flex-1 flex flex-col justify-between py-2 relative w-full overflow-hidden">
      
      {/* Inline styles for the animation */}
      <style>
        {`
          @keyframes wire-flow {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-wire {
            animation: wire-flow 3s linear infinite;
          }
        `}
      </style>

      {/* SVG Wire Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wire-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="15%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="85%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Base Wire */}
        <path 
          d="M 15 -10 L 15 12 C 15 35, 85 30, 85 50 C 85 70, 15 65, 15 88 L 15 110" 
          stroke="url(#wire-gradient)" 
          strokeWidth="2" 
          fill="none" 
          vectorEffect="non-scaling-stroke"
        />
        
        {/* Flowing Glow */}
        <path 
          d="M 15 -10 L 15 12 C 15 35, 85 30, 85 50 C 85 70, 15 65, 15 88 L 15 110" 
          stroke="#22d3ee" 
          strokeWidth="3" 
          fill="none" 
          vectorEffect="non-scaling-stroke"
          pathLength="100"
          strokeDasharray="15 85"
          className="animate-wire"
          filter="url(#glow)"
        />
      </svg>

      {/* Item 1 */}
      <div className="flex gap-4 items-center relative z-10 w-full group/edu" style={{ paddingLeft: 'calc(15% - 20px)', paddingRight: '1rem' }}>
        <div className="w-12 h-12 rounded-xl bg-white border-2 border-cyan-500/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.3)] overflow-hidden relative">
          <img src="/education/LogoESIEE.jpg" alt="ESIEE Paris" className="absolute w-full h-full object-cover scale-100 opacity-90 group-hover/edu:opacity-100 group-hover/edu:scale-[1.1] transition-all duration-500" />
        </div>
        <div className="group-hover/edu:translate-x-1 transition-transform duration-300">
          <p className="text-sm font-black text-white uppercase tracking-tight group-hover/edu:text-cyan-100 transition-colors">Diplôme d'ingénieur</p>
          <p className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest mt-0.5">ESIEE Paris Ingénieur 2026-2029</p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex gap-4 items-center flex-row-reverse text-right relative z-10 w-full mt-4 group/edu2" style={{ paddingRight: 'calc(15% - 20px)', paddingLeft: '1rem' }}>
        <div className="w-12 h-12 rounded-xl bg-white border border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.05)] overflow-hidden relative">
          <img src="/education/LogoUSPN.png" alt="USPN" className="absolute w-full h-full object-cover scale-[1.2] opacity-80 group-hover/edu2:opacity-100 group-hover/edu2:scale-[1.4] transition-all duration-500" />
        </div>
        <div className="group-hover/edu2:-translate-x-1 transition-transform duration-300">
          <p className="text-sm font-black text-slate-200 uppercase tracking-tight group-hover/edu2:text-white transition-colors">BUT Informatique</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Université Sorbonne Paris Nord (2023-2026)</p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex gap-4 items-center relative z-10 w-full mt-4 opacity-80" style={{ paddingLeft: 'calc(15% - 20px)', paddingRight: '1rem' }}>
        <div className="w-10 h-10 rounded-xl bg-[#0f172a] border border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
          <Check size={18} className="text-slate-400" />
        </div>
        <div>
          <p className="text-sm font-black text-slate-400 uppercase tracking-tight">Bac Général</p>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Option Maths (Mention TB)</p>
        </div>
      </div>
    </div>
  );
};

export default EducationPreview;
