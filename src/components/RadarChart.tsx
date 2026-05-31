import React from 'react';
import { motion } from 'framer-motion';

const RadarChart: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
      {/* Background Hexagon Rings */}
      {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
        <div 
          key={i}
          className="absolute border border-primary/10 rounded-full"
          style={{ width: `${scale * 100}%`, height: `${scale * 100}%` }}
        />
      ))}

      {/* Axis Lines */}
      {[0, 120, 240].map((angle, i) => (
        <div 
          key={i}
          className="absolute h-[2px] bg-primary/10 origin-center"
          style={{ width: '100%', transform: `rotate(${angle}deg)` }}
        />
      ))}

      {/* The Radar Shape (Level 3 reached) */}
      <motion.svg 
        viewBox="0 0 100 100" 
        className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
      >
        <motion.polygon
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          points="50,15 85,75 15,75"
          fill="var(--color-primary)"
          stroke="var(--color-primary)"
          strokeWidth="1"
        />
        {/* Active Points */}
        <circle cx="50" cy="15" r="2" fill="var(--color-primary)" />
        <circle cx="85" cy="75" r="2" fill="var(--color-primary)" />
        <circle cx="15" cy="75" r="2" fill="var(--color-primary)" />
      </motion.svg>

      {/* Labels */}
      <div className="absolute top-0 text-[10px] font-black text-primary uppercase tracking-widest">Réaliser</div>
      <div className="absolute bottom-0 right-0 text-[10px] font-black text-primary uppercase tracking-widest">Optimiser</div>
      <div className="absolute bottom-0 left-0 text-[10px] font-black text-primary uppercase tracking-widest">Collaborer</div>
      
      {/* Central Badge */}
      <div className="bg-[var(--surface-color)] border border-primary/40 px-3 py-1 rounded-full shadow-2xl z-10">
         <span className="text-primary font-black text-[10px]">NIVEAU 3</span>
      </div>
    </div>
  );
};

export default RadarChart;
