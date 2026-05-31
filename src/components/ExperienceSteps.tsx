import React from 'react';
import { motion } from 'framer-motion';
import { UserRound } from 'lucide-react';

const experiences = [
  {
    id: 'ramsay',
    year: '2025',
    role: 'Consultant Projet Informatique',
    company: 'Ramsay Santé',
    badges: ['MOA', 'SharePoint', 'Intranet'],
    pitch: 'TODO: Robert, explique comment ton rôle de liaison entre les métiers et la technique chez Ramsay a développé ton sens de l\'organisation.'
  },
  {
    id: 'safran',
    year: '2026',
    role: 'Développeur Full Stack',
    company: 'Safran Electronics & Defense',
    badges: ['Cybersécurité', 'Full Stack', 'CI/CD'],
    pitch: 'TODO: Robert, parle de la rigueur industrielle chez Safran et de ton autonomie sur le développement de l\'outil de détection.'
  },
  {
    id: 'alternance',
    year: '2026-2029',
    role: 'Alternance Ingénieur',
    company: 'Recherche active',
    badges: ['Développement', 'Innovation', 'Ingénierie'],
    pitch: 'Je recherche une entreprise pour ma formation d\'ingénieur en apprentissage, afin de contribuer à des projets innovants tout en développant mon expertise technique.'
  }
];

const ExperienceSteps: React.FC = () => {
  return (
    <div className="w-full py-8 overflow-hidden">
      <div className="relative flex justify-between items-start max-w-5xl mx-auto px-4">
        
        {/* Connection Line Track */}
        <div className="absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-white/5 z-0 rounded-full">
           <motion.div 
             initial={{ scaleX: 0 }} 
             whileInView={{ scaleX: 1 }} 
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: "easeInOut" }}
             className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-cyan-400/30 to-cyan-500/30 origin-left"
           />

           {/* Animated Holographic Worker */}
           <motion.div
             className="absolute top-1/2 -translate-y-1/2 -ml-2.5 text-cyan-400 z-20"
             animate={{
                left: ["0%", "0%", "50%", "50%", "100%", "100%"],
                opacity: [0, 1, 1, 1, 1, 0],
             }}
             transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
                times: [0, 0.125, 0.375, 0.625, 0.875, 1.0]
             }}
           >
             <UserRound className="w-5 h-5 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" strokeWidth={1.5} />
           </motion.div>

           {/* Pulse glow at the end (Prochaine Alternance) */}
           <motion.div
              className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-400/40 blur-md pointer-events-none"
              animate={{
                scale: [0.5, 0.5, 0.5, 0.5, 2.5, 0.5],
                opacity: [0, 0, 0, 0, 0.8, 0]
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                times: [0, 0.125, 0.375, 0.625, 0.875, 1.0]
              }}
           />
        </div>

        {/* Experience Blocks */}
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative z-10 flex flex-col items-center w-[30%] text-center">
            
            {/* Mission Node */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.4 }}
              className={`w-12 h-12 rounded-xl bg-[var(--surface-color)] border-2 ${
                index === 0 ? 'border-cyan-400' : index === 1 ? 'border-cyan-400' : 'border-indigo-400'
              } flex items-center justify-center mb-6 shadow-xl relative overflow-hidden`}
            >
              <span className={`font-black text-xs text-mono ${
                index === 0 ? 'text-cyan-400' : index === 1 ? 'text-cyan-400' : 'text-indigo-400'
              }`}>M{index + 1}</span>
            </motion.div>

            {/* Content Container */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.3 }}
              animate={index === 1 ? {
                boxShadow: [
                  "0px 0px 0px rgba(34, 211, 238, 0)",
                  "0px 0px 0px rgba(34, 211, 238, 0)",
                  "0px 0px 30px rgba(34, 211, 238, 0.3)",
                  "0px 0px 30px rgba(34, 211, 238, 0.3)",
                  "0px 0px 0px rgba(34, 211, 238, 0)",
                  "0px 0px 0px rgba(34, 211, 238, 0)"
                ],
                borderColor: [
                  "rgba(255,255,255,0.1)",
                  "rgba(255,255,255,0.1)",
                  "rgba(34, 211, 238, 0.6)",
                  "rgba(34, 211, 238, 0.6)",
                  "rgba(255,255,255,0.1)",
                  "rgba(255,255,255,0.1)"
                ]
              } : {}}
              // @ts-ignore
              transition={index === 1 ? {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.3, 0.375, 0.625, 0.7, 1.0]
              } : {}}
              className="bg-[var(--surface-color)] border border-[var(--border-color)] p-6 rounded-[2rem] w-full hover:border-primary/20 transition-all group shadow-sm flex-1 flex flex-col"
            >
              <span className="text-mono text-[10px] text-[var(--text-muted)] font-bold block mb-2 uppercase tracking-widest">{exp.year}</span>
              <h3 className="text-lg font-black text-[var(--text-main)] uppercase tracking-tighter mb-1 leading-tight group-hover:text-primary transition-colors">{exp.role}</h3>
              <p className="text-xs text-primary font-bold mb-4 text-mono">{exp.company}</p>
              
              <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                {exp.badges.map(badge => (
                  <span key={badge} className="px-2 py-1 bg-[var(--bg-color)] border border-[var(--border-color)] text-[8px] text-[var(--text-muted)] font-bold uppercase rounded-md">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] mt-auto">
                <p className="text-[11px] leading-relaxed text-[var(--text-muted)] italic">
                  {exp.pitch}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSteps;
