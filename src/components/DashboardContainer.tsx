import { AnimatePresence, motion } from 'framer-motion';
import {
  Briefcase,
  Code2,
  Cpu,
  GraduationCap,
  Music,
  User
} from 'lucide-react';
import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTranslation } from '../hooks/useTranslation';
import type { DetailProps, Language } from '../types';
import BentoBlock from './BentoBlock';
import BlockDetail from './BlockDetail';
import Header from './Header';
import TextReveal from './TextReveal';

import CulturePreview from './previews/CulturePreview';
import EducationPreview from './previews/EducationPreview';
import ExperiencePreview from './previews/ExperiencePreview';
import ProfilePreview from './previews/ProfilePreview';
import ProjectPreview from './previews/ProjectPreview';
import SkillPreview from './previews/SkillPreview';

const IconMap: Record<string, any> = { User, GraduationCap, Briefcase, Cpu, Code2, Music };

const LayoutRegistry: Record<string, string> = {
  profile: "col-span-1 md:col-span-2 lg:col-span-5 lg:row-span-4",
  experience: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-4",
  education: "col-span-1 md:col-span-1 lg:col-span-3 lg:row-span-4",
  skills: "col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-2",
  projects: "col-span-1 md:col-span-1 lg:col-span-5 lg:row-span-2",
  culture: "col-span-1 md:col-span-1 lg:col-span-3 lg:row-span-2"
};

const PreviewRegistry: Record<string, React.FC<DetailProps<any>>> = {
  profile: ProfilePreview,
  experience: ExperiencePreview,
  education: EducationPreview,
  projects: ProjectPreview,
  skills: SkillPreview,
  culture: CulturePreview
};

const DashboardContainer: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [lang, setLang] = useState<Language>('fr');
  const { t } = useTranslation(lang);

  const selectedItem = selectedId ? PORTFOLIO_DATA.find(i => i.id === selectedId) : null;
  const SelectedIcon = selectedItem ? IconMap[selectedItem.iconName] : null;

  return (
    <div className="h-screen w-screen bg-[#0a0a0c] p-4 lg:px-8 lg:pb-8 font-sans text-slate-200 flex flex-col overflow-y-auto overflow-x-hidden lg:overflow-hidden relative custom-scrollbar selection:bg-cyan-500/30">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <Header
        lang={lang}
        setLang={setLang}
        title={selectedItem ? t(selectedItem.title) : undefined}
        color="#06b6d4" // Unified cyan accent
        Icon={SelectedIcon}
        onClose={selectedId ? () => setSelectedId(null) : undefined}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: selectedId ? 0.5 : 1, 
            scale: selectedId ? 0.98 : 1,
            transition: { staggerChildren: 0.2 } 
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[minmax(300px,auto)] lg:grid-rows-6 gap-4 lg:gap-6 flex-1 lg:min-h-0 z-10"
      >
        {PORTFOLIO_DATA.map((item) => {
          const Icon = IconMap[item.iconName];
          const PreviewComponent = PreviewRegistry[item.id];
          const layoutClass = LayoutRegistry[item.id] || "col-span-1 lg:col-span-4 lg:row-span-2";
          
          return (
            <BentoBlock
              key={item.id}
              id={item.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: { 
                  opacity: 1, scale: 1, y: 0, 
                  transition: { 
                    type: 'spring', stiffness: 100, damping: 15,
                    staggerChildren: 0.2,
                    delayChildren: 0.1
                  } 
                }
              }}
              className={`${layoutClass} group cursor-pointer transition-all duration-500 bg-slate-900/50 backdrop-blur-xl border border-white/5 hover:border-cyan-500/40 hover:bg-slate-800/60 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(6,182,212,0.3)] overflow-hidden`}
              onClick={() => setSelectedId(item.id)}
            >
              {/* Animated Drawing Borders */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-700 ease-out" />
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-cyan-400 group-hover:h-full transition-all duration-700 ease-out" />
              <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-700 ease-out" />
              <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-cyan-400 group-hover:h-full transition-all duration-700 ease-out" />
              
        
              <div className="relative p-6 h-full flex flex-col z-10">
                <motion.div 
                  variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                  className="flex justify-between items-start shrink-0 mb-4"
                >
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-500/80 mb-2 block">
                      {t(item.title)}
                    </span>
                    <h2 className="text-lg lg:text-xl font-black uppercase leading-tight tracking-tighter text-white">
                      <TextReveal text={t(item.subtitle)} delay={0} />
                    </h2>
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/10 text-cyan-500 group-hover:bg-cyan-400 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] group-hover:scale-110 transition-all duration-500">
                    <Icon size={18} />
                  </div>
                </motion.div>

                <motion.div 
                  variants={{ hidden: { opacity: 0, filter: 'blur(5px)' }, visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } } }}
                  className="flex-1 flex flex-col min-h-0 justify-center pb-2"
                >
                  {PreviewComponent ? <PreviewComponent item={item} lang={lang} t={t} /> : null}
                </motion.div>

              </div>
            </BentoBlock>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {selectedId && <BlockDetail id={selectedId} lang={lang} setLang={setLang} onClose={() => setSelectedId(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default DashboardContainer;
