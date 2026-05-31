export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  tags?: string[];
  stats?: { label: string; value: string | number }[];
  image?: string;
  type: 'identity' | 'leadership' | 'tech' | 'certif' | 'project' | 'skill' | 'personal';
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'identity',
    type: 'identity',
    title: 'Robert Griffaton',
    subtitle: 'Futur Ingénieur ESIEE Paris',
    content: 'Apprenti Développeur Full Stack chez Safran Electronics & Defense. Passionné par la cybersécurité et l\'architecture logicielle.',
    stats: [{ label: 'Formation', value: 'ESIEE Paris' }]
  },
  {
    id: 'leadership',
    type: 'leadership',
    title: 'Nuit de l\'Info',
    subtitle: 'Lead de 20 développeurs',
    content: 'Pilotage d\'une équipe de 20 personnes sur 24h. Coordination des pôles front, back et design sous pression.',
    tags: ['Management', 'Agile', 'Stress Management']
  },
  {
    id: 'exp-global',
    type: 'project',
    title: 'Expériences',
    subtitle: 'Safran & Ramsay Santé',
    content: 'Un parcours dual : Expertise technique en cybersécurité chez Safran et gestion de projet MOA chez Ramsay Santé.',
    tags: ['Cybersécurité', 'MOA', 'Clean Code']
  },
  {
    id: 'projets',
    type: 'project',
    title: 'Projets Phares',
    subtitle: 'GRAYE & FinTech',
    content: 'Focus sur l\'outil de sécurité GRAYE (mon projet majeur) et le développement d\'un portfolio financier pour l\'analyse de marché.',
    tags: ['C++', 'FinTech', 'DataViz']
  },
  {
    id: 'lab',
    type: 'certif',
    title: 'Le Lab',
    subtitle: '2 Certifications',
    content: 'Validation de compétences en cybersécurité et développement web. Préparation active de la certification AWS.',
    stats: [{ label: 'Statut', value: '2 Validées' }]
  },
  {
    id: 'perso',
    type: 'personal',
    title: 'Profil',
    subtitle: 'Musique, Futsal & Finance',
    content: 'Pianiste au Conservatoire (Rigueur), Joueur de Futsal (Esprit d\'équipe) et passionné de Finance (Analyse).',
    tags: ['Piano', 'Futsal', 'Bourse']
  },
  {
    id: 'skill-realiser',
    type: 'skill',
    title: 'Réaliser',
    subtitle: 'Niveau 3',
    content: 'Capacité à produire des applications complexes et maintenables.',
    stats: [{ label: 'Score', value: '100%' }]
  },
  {
    id: 'skill-optimiser',
    type: 'skill',
    title: 'Optimiser',
    subtitle: 'Niveau 3',
    content: 'Amélioration continue des performances et de la qualité.',
    stats: [{ label: 'Score', value: '95%' }]
  },
  {
    id: 'skill-collaborer',
    type: 'skill',
    title: 'Collaborer',
    subtitle: 'Niveau 3',
    content: 'Travail en équipe et gestion de projet agile.',
    stats: [{ label: 'Score', value: '100%' }]
  }
];
