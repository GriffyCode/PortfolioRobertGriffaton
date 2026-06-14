import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type {  Language, DetailProps  } from '../types';
import { useTranslation } from '../hooks/useTranslation';

import ProfileDetail from './details/ProfileDetail';
import ExperienceDetail from './details/ExperienceDetail';
import EducationDetail from './details/EducationDetail';
import ProjectDetail from './details/ProjectDetail';
import SkillDetail from './details/SkillDetail';
import CultureDetail from './details/CultureDetail';

interface BlockDetailProps {
  id: string;
  lang: Language;
  setLang: (lang: Language) => void;
  onClose: () => void;
}

const DetailRegistry: Record<string, React.FC<DetailProps<any>>> = {
  profile: ProfileDetail,
  experience: ExperienceDetail,
  education: EducationDetail,
  projects: ProjectDetail,
  skills: SkillDetail,
  culture: CultureDetail
};

const BlockDetail: React.FC<BlockDetailProps> = ({ id, lang }) => {
  const item = PORTFOLIO_DATA.find(i => i.id === id);
  const { t } = useTranslation(lang);
  
  if (!item) return null;

  const DetailComponent = DetailRegistry[item.id];

  return (
    <motion.div 
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-50 bg-[#0a0a0c] overflow-y-auto custom-scrollbar"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 pt-20 md:pt-32 pb-20">
         <div className="mb-12 md:mb-20">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color: item.color }}>{t(item.badge)}</h4>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6 md:mb-8 break-words">
               {t(item.subtitle)}
            </h1>

         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {DetailComponent ? <DetailComponent item={item} lang={lang} t={t} /> : null}
         </div>
      </div>
    </motion.div>
  );
};

export default BlockDetail;
