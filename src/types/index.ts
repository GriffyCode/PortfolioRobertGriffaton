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
  };
}

export interface ExperienceMission {
  company: string;
  year: string;
  image: string;
  role: Translation;
  traceUrl?: string;
  subjective?: Translation;
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
  schools: EducationSchool[];
}

export interface ProjectDetails {
  name: string;
  type: string;
  stack: string;
  desc: Translation;
  traceUrl?: string;
  subjective?: Translation;
}

export interface SkillDetails {
  languages: string[];
  web: string[];
  data: string[];
  infra: string[];
  tools: string[];
  softSkillsData: SoftSkill[];
}

export interface CultureDetails {
  music: Translation;
  hackathons: Translation;
  sports: TranslationList;
  passeportCulturel: TranslationList;
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
