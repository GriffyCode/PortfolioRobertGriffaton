import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 'bac',
    year: '2023',
    title: 'Bac Général',
    school: 'Lycée J.J. Rousseau',
    badges: ['Mention TB', 'Spé Maths/Physique', 'Option Maths Expertes'],
    pitch: 'TODO: Robert, explique comment tes bases scientifiques solides ont facilité ton passage vers le développement.'
  },
  {
    id: 'but',
    year: '2023 - 2026',
    title: 'BUT Informatique',
    school: 'Sorbonne Paris Nord',
    badges: ['Parcours RACDV', 'Top Major', 'Projets Agiles'],
    pitch: 'TODO: Robert, parle de ta montée en compétence sur la réalisation d\'applications complexes.'
  },
  {
    id: 'esiee',
    year: '2026+',
    title: 'Cycle Ingénieur',
    school: 'ESIEE Paris',
    badges: ['Admis / Grand Admis', 'Spé Data / Cyber'],
    pitch: 'TODO: Robert, exprime ton ambition pour le cycle ingénieur et tes objectifs de carrière.'
  }
];

const FormationSteps: React.FC = () => {
  return (
    <div className="w-full py-8 overflow-hidden">
      <div className="relative flex justify-between items-start">
        
        {/* Circuit Board Connection Lines */}
        <div className="absolute top-[45px] left-0 w-full h-[2px] bg-white/5 z-0">
           <motion.div 
             initial={{ scaleX: 0 }} 
             animate={{ scaleX: 1 }} 
             transition={{ duration: 1.5, ease: "easeInOut" }}
             className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary to-primary/50 origin-left"
           />
        </div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center w-1/3 px-4 text-center">
            
            {/* Step Node */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.3 }}
              className="w-12 h-12 rounded-xl bg-[var(--surface-color)] border-2 border-primary flex items-center justify-center mb-6 shadow-xl"
            >
              <span className="text-primary font-black text-xs text-mono">{index + 1}</span>
            </motion.div>

            {/* Content Container */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.3 }}
              className="bg-[var(--surface-color)] border border-[var(--border-color)] p-6 rounded-2xl w-full hover:border-primary/20 transition-colors shadow-sm"
            >
              <span className="text-mono text-[10px] text-primary font-bold block mb-1">{step.year}</span>
              <h3 className="text-lg font-black text-[var(--text-main)] uppercase tracking-tighter mb-1 text-mono">{step.title}</h3>
              <p className="text-xs text-[var(--text-muted)] mb-4 text-mono">{step.school}</p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {step.badges.map(badge => (
                  <span key={badge} className="px-2 py-0.5 bg-[var(--bg-color)] border border-[var(--border-color)] text-[8px] text-[var(--text-muted)] font-bold uppercase rounded">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[var(--border-color)]">
                <p className="text-[10px] leading-relaxed text-[var(--text-muted)] italic">
                  {step.pitch}
                </p>
              </div>
            </motion.div>

            {/* Tech Decoration (Circle/Lines) */}
            {index < steps.length - 1 && (
              <div className="absolute top-[45px] -right-2 w-4 h-4 rounded-full border-2 border-primary/20 bg-background z-20 flex items-center justify-center">
                 <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormationSteps;
