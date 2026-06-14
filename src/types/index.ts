export type Language = 'fr' | 'en';

export interface Translation {
  fr: string;
  en: string;
}

export interface TranslationList {
  fr: string[];
  en: string[];
}

export interface SoftSkill {
  name: Translation;
  example: Translation;
}

export interface BasePortfolioItem {
  id: string;
  title: Translation;
  subtitle: Translation;
  content: Translation;
  badge: Translation;
  iconName: string;
  color: string;
}

// Spécificités par type
export interface ProfileDetails {
  contact: {
    tel: string;
    email: string;
    location: Translation;
    mobility: Translation;
    linkedIn: string; // Obligatoire
  };
  proudestAchievement?: Translation; // Focus réussite
  objectives?: Translation; // Objectifs court/moyen/long terme
  cvUrl?: string; // Lien vers le CV PDF
}

export interface ExperienceMission {
  company: string;
  year: string;
  image: string;
  role: Translation;
  traceUrl?: string;
  professionalReview?: Translation; // Bilan monde professionnel
  personalAnalysis?: Translation; // Analyse personnelle
  testimonials?: { author: string; role: string; text: Translation }[];
  missions: TranslationList;
}

export interface EducationSchool {
  degree: Translation;
  school: string;
  period: string;
  focus: Translation;
}

export interface EducationDetails {
  evolution: Translation;
  futureStudies?: Translation; // Poursuite d'études
  schools: EducationSchool[];
}

export interface ProjectDetails {
  name: string;
  image?: string;
  mockup?: string;
  mockupScale?: string;
  isPersonal?: boolean;
  type: string;
  stack: string;
  desc: Translation;
  traceUrl?: string;
  prodUrl?: string;
  pdfUrl?: string;
  subjective?: Translation;
  saeReview?: Translation; // Bilan complet des SAÉ
}

export interface SkillDetails {
  languages: string[];
  web: string[];
  data: string[];
  infra: string[];
  tools: string[];
  softSkillsData: SoftSkill[];
  certifications?: Certification[];
  butSkills?: { 
    name: Translation; 
    level: number; 
    synthesis: Translation; 
    selfEvaluation: Translation 
  }[]; // Tableau de synthèse des compétences BUT
}

export interface Certification {
  name: Translation;
  url?: string;
  status: 'completed' | 'in-progress';
}

export interface CultureDetails {
  music: Translation;
  hackathons: Translation;
  sports: TranslationList;
  passeportCulturel: TranslationList;
  techWatch?: TranslationList; // Veille technologique
  pedagogicalOutings?: TranslationList; // Sorties pédagogiques
  international?: Translation; // Ouverture à l'international
  langs: TranslationList;
}

export interface ProfileItem extends BasePortfolioItem {
  type: 'profile';
  details: ProfileDetails;
}

export interface ExperienceItem extends BasePortfolioItem {
  type: 'experience';
  details: ExperienceMission[];
}

export interface EducationItem extends BasePortfolioItem {
  type: 'education';
  details: EducationDetails;
}

export interface ProjectItem extends BasePortfolioItem {
  type: 'project';
  details: ProjectDetails[];
}

export interface SkillItem extends BasePortfolioItem {
  type: 'skill';
  details: SkillDetails;
}

export interface CultureItem extends BasePortfolioItem {
  type: 'culture';
  details: CultureDetails;
}

export type PortfolioItem = 
  | ProfileItem 
  | ExperienceItem 
  | EducationItem 
  | ProjectItem 
  | SkillItem 
  | CultureItem;

export interface DetailProps<T = PortfolioItem> {
  item: T;
  lang: Language;
  t: (field: any) => any;
}
