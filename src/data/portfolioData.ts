import type {  PortfolioItem  } from '../types';

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'profile',
    type: 'profile',
    title: { fr: 'Profil', en: 'Profile' },
    subtitle: { fr: 'Apprenti Ingénieur ESIEE Paris', en: 'Apprentice Engineer - ESIEE Paris' },
    content: { 
      fr: 'Passionné par la tech, la musique et tout ce qui touche au numérique, je poursuis actuellement un BUT Informatique où je m’épanouis à travers les projets web et logiciels. J’ai un vrai goût pour le développement fullstack, le design d’interfaces modernes, et le travail en équipe où la bonne ambiance est aussi importante que la rigueur. Pour la suite, je recherche activement une alternance pour ma 3ème année, avant de viser une école d’ingénieur pour continuer à progresser et approfondir mes compétences.', 
      en: 'Passionate about tech, music, and everything digital, I am currently pursuing a BUT in Computer Science where I thrive through web and software projects. I have a real taste for fullstack development, modern interface design, and teamwork where a good atmosphere is as important as rigor. I am actively seeking a 3rd-year apprenticeship before aiming for an engineering school to continue progressing.' 
    },
    badge: { fr: 'Disponible 2026', en: 'Available 2026' },
    iconName: 'User',
    color: '#06b6d4',
    details: {
      contact: {
        tel: '06 66 98 47 75',
        email: 'griffatonr@gmail.com',
        location: { fr: 'Val d\'Oise (95)', en: 'Val d\'Oise, France' },
        mobility: { fr: 'Permis B', en: 'Driving License' }
      }
    }
  },
  {
    id: 'experience',
    type: 'experience',
    title: { fr: 'Expérience', en: 'Experience' },
    subtitle: { fr: 'Safran & Ramsay Santé', en: 'Safran & Ramsay Health' },
    content: { 
      fr: 'Mes premières immersions dans le monde professionnel qui m\'ont permis de développer mon autonomie, ma prise de parole en réunion et ma rigueur technique.', 
      en: 'My first immersions in the professional world which allowed me to develop my autonomy, public speaking, and technical rigor.' 
    },
    badge: { fr: 'Validation BUT3', en: 'BUT3 Validation' },
    iconName: 'Briefcase',
    color: '#06b6d4',
    details: [
      {
        company: 'Safran Electronics & Defense',
        year: '2026',
        image: '/experience/safran.jpg',
        role: { fr: 'Développeur Logiciel (Cyber Offensive)', en: 'Software Developer (Offensive Cyber)' },
        traceUrl: '/DOC/placeholder_trace.txt',
        missions: {
          fr: [
            'Refonte d\'un outil de détection de vulnérabilités pour systèmes embarqués (Optimisation Niveau 3)',
            'Architecture logicielle Clean Code et développement Full Stack (Réalisation Niveau 3)',
            'Mise en œuvre de pipelines CI/CD (GitLab, Jenkins)'
          ],
          en: [
            'Vulnerability detection tool redesign for embedded systems (Optimization Level 3)',
            'Clean Code software architecture and Full Stack development (Realization Level 3)',
            'Implementation of CI/CD pipelines (GitLab, Jenkins)'
          ]
        }
      },
      {
        company: 'Ramsay Santé',
        year: '2025',
        image: '/experience/ramsay.jpg',
        role: { fr: 'Développeur Web (Service MOA)', en: 'Web Developer (MOA Department)' },
        traceUrl: '/DOC/placeholder_trace.txt',
        subjective: {
          fr: "Première immersion dans le monde pro, où j’ai eu la responsabilité de réaliser un vrai projet de A à Z. J’ai découvert la réalité du travail : rythme, autonomie, gestion de projets et diversité des profils. L’ambiance était détendue et bienveillante, ce qui m’a permis de m’intégrer rapidement. J’ai été responsabilisé dès le début : organisation de réunions, recueil de besoins, gestion de données et développement d’un intranet. J’ai su m’adapter, présenter mon travail, écouter et prendre des initiatives, et j’ai reçu des retours très positifs.",
          en: "First immersion in the professional world, where I had the responsibility to realize a real project from A to Z. I discovered the reality of work: rhythm, autonomy, project management, and diversity of profiles. The atmosphere was relaxed and benevolent, which allowed me to integrate quickly."
        },
        missions: {
          fr: [
            'Pilotage de la refonte intégrale de l’intranet collaboratif (25 collaborateurs)',
            'Recueil des besoins et analyse fonctionnelle des processus métiers (MOA)'
          ],
          en: [
            'Management of the full collaborative intranet redesign (25 employees)',
            'Requirements gathering and functional analysis of business processes (MOA)'
          ]
        }
      }
    ]
  },
  {
    id: 'education',
    type: 'education',
    title: { fr: 'Parcours', en: 'Path' },
    subtitle: { fr: 'Évolution Académique', en: 'Academic Evolution' },
    content: { 
      fr: 'Je suis fier d’avoir eu un bulletin solide et des notes constantes chaque semestre, notamment en informatique et en maths. Les maths, c’est une vraie fierté, car j’ai toujours cherché à aller au bout des raisonnements et à progresser.', 
      en: 'I am proud to have had a solid report card and consistent grades each semester, especially in computer science and math.' 
    },
    badge: { fr: 'Objectif Ingénieur', en: 'Engineering Goal' },
    iconName: 'GraduationCap',
    color: '#06b6d4',
    details: {
      evolution: {
        fr: "La transition entre la première et la deuxième année de BUT Informatique a été un vrai tournant dans mon parcours. J’ai acquis de bonnes pratiques en développement, comme l’importance de la rigueur dans le code, la documentation, la gestion de projet et l’utilisation d’outils pros (Git, Figma...). J’ai surtout pris conscience de la valeur du travail en équipe et de la nécessité d’apprendre en continu. C’est durant cette période que j’ai confirmé mon choix de m’orienter vers l’informatique, où j'allie technique, créativité et résolution de problèmes.",
        en: "The transition between the first and second year of BUT CS was a real turning point. I acquired good development practices and realized the value of teamwork and continuous learning."
      },
      schools: [
        { degree: { fr: 'École d’Ingénieur', en: 'Engineering Degree' }, school: 'ESIEE Paris (Objectif)', period: '2026 – 2029', focus: { fr: 'Informatique (Spécialisation IA ou Logiciel)', en: 'Computer Science (AI or Software focus)' } },
        { degree: { fr: 'BUT Informatique', en: 'BUT CS' }, school: 'IUT Villetaneuse - Sorbonne Paris Nord', period: '2023 – 2026', focus: { fr: 'Réalisation d\'applications : conception, développement, validation', en: 'App Development' } },
        { degree: { fr: 'Baccalauréat Général', en: 'General Baccalaureate' }, school: 'Lycée Jean Jacques Rousseau', period: '2020 – 2023', focus: { fr: 'Spé Maths, Physique-Chimie, Maths expertes', en: 'Maths & Physics focus' } },
        { degree: { fr: 'Brevet des Collèges', en: 'Middle School Diploma' }, school: 'Collège Victor Hugo', period: '2016 – 2020', focus: { fr: 'Mention Très Bien', en: 'Highest Honors' } }
      ]
    }
  },
  {
    id: 'projects',
    type: 'project',
    title: { fr: 'Projets', en: 'Projects' },
    subtitle: { fr: 'Fiertés Techniques', en: 'Technical Prides' },
    content: { 
      fr: 'Des projets qui m\'ont challengé techniquement et humainement, me permettant de valider mes compétences BUT.', 
      en: 'Projects that challenged me technically and humanly, allowing me to validate my BUT skills.' 
    },
    badge: { fr: 'Portfolio', en: 'Portfolio' },
    iconName: 'Code2',
    color: '#06b6d4',
    details: [
      { 
        name: 'Projet SAE Chat (ATM Chat)', 
        type: 'SAE', 
        stack: 'WebSockets, JS, PHP, SQL', 
        desc: { 
          fr: 'Solution de messagerie sécurisée.', 
          en: 'Secure messaging solution.' 
        },
        traceUrl: '/DOC/placeholder_trace.txt',
        subjective: {
          fr: "Avoir développé en équipe une application de messagerie collaborative en fullstack. Ça m’a vraiment permis de monter en compétences sur la gestion de projet, la communication et la technique pure. C’est LE projet qui m’a le plus challengé et rendu fier de ce que je sais faire.",
          en: "Developed a fullstack collaborative messaging app in a team. It really allowed me to level up in project management, communication, and pure technique. It's THE project I'm most proud of."
        }
      },
      { 
        name: 'GRAYE', 
        type: 'Mobile', 
        stack: 'React Native, TS, SQLite', 
        traceUrl: '/DOC/placeholder_trace.txt',
        desc: { 
          fr: 'Application mobile de recommandation de nourriture avec persistance locale complexe et Clean Architecture.', 
          en: 'Food recommendation mobile app with complex local persistence and Clean Architecture.' 
        } 
      },
      { 
        name: 'Voronoi S6', 
        type: 'Optimisation', 
        stack: 'C++, Algorithmique', 
        desc: { 
          fr: 'Génération de diagrammes de Voronoi. Optimisation algorithmique poussée.', 
          en: 'Voronoi diagram generation. Advanced algorithmic optimization.' 
        },
        traceUrl: '/DOC/placeholder_trace.txt',
        subjective: {
          fr: "Projet de semestre 6 axé sur la performance brute en C++. Il m'a appris l'importance d'une structure de données optimale pour des algorithmes complexes.",
          en: "Semester 6 project focused on raw performance in C++. Taught me the importance of optimal data structures for complex algorithms."
        }
      }
    ]
  },
  {
    id: 'skills',
    type: 'skill',
    title: { fr: 'Compétences', en: 'Skills' },
    subtitle: { fr: 'Hard & Soft Skills', en: 'Hard & Soft Skills' },
    content: { 
      fr: 'Un équilibre entre maîtrise technique et compétences humaines développées au fil des projets et expériences.', 
      en: 'A balance between technical mastery and human skills developed over projects and experiences.' 
    },
    badge: { fr: 'Expertise', en: 'Expertise' },
    iconName: 'Cpu',
    color: '#06b6d4',
    details: {
      languages: ['Java', 'Python', 'FastAPI', 'PHP', 'Node.js', 'Bash', 'WebSockets'],
      web: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'Vue'],
      data: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Redis'],
      infra: ['Docker', 'Nginx', 'CI/CD (GitLab, Jenkins)', 'Linux', 'Git/GitHub'],
      tools: ['Power Platform', 'Jira', 'Agile', 'Figma', 'TDD'],
      softSkillsData: [
        {
          name: { fr: "Communication", en: "Communication" },
          example: { 
            fr: "Lors de mon stage chez Ramsay Santé, j’ai animé des réunions pour recueillir les besoins utilisateurs, puis présenté mes avancées régulièrement à toute l’équipe. J’ai appris à rendre mes messages clairs pour tous, même les non-informaticiens.",
            en: "During my internship at Ramsay Health, I led meetings to gather user needs, then regularly presented my progress to the whole team."
          }
        },
        {
          name: { fr: "Esprit d'équipe", en: "Team Spirit" },
          example: {
            fr: "Sur le projet ATM Chat (SAE S3), j’ai contribué à la réussite commune : entraide entre membres, répartition claire des tâches, résolution de conflits et code partagé sur GitHub pour avancer ensemble efficacement.",
            en: "On the ATM Chat project, I contributed to our joint success: mutual help, clear task delegation, and conflict resolution."
          }
        },
        {
          name: { fr: "Adaptabilité", en: "Adaptability" },
          example: {
            fr: "Première expérience professionnelle : adaptation rapide au rythme, aux outils inconnus et à la diversité des profils, en full présentiel alors que mes collègues alternaient télétravail.",
            en: "First professional experience: quick adaptation to the pace, unknown tools, and diversity of profiles."
          }
        },
        {
          name: { fr: "Esprit d’initiative", en: "Initiative" },
          example: {
            fr: "J’ai proposé des idées d’améliorations (UX, sécurité) sur le projet Intranet Ramsay Santé, que j’ai ensuite mis en place après validation, allant au-delà du cahier des charges initial.",
            en: "I proposed improvement ideas (UX, security) on the Ramsay Health Intranet project, which I then implemented after validation."
          }
        },
        {
          name: { fr: "Curiosité & Apprentissage", en: "Curiosity & Learning" },
          example: {
            fr: "Passionné d’auto-formation : j’apprends régulièrement de nouveaux frameworks (ex : Vue, React), ce qui me permet d’être polyvalent sur mes projets étudiants ou perso.",
            en: "Passionate about self-training: I regularly learn new frameworks, allowing me to be versatile."
          }
        },
        {
          name: { fr: "Organisation", en: "Organization" },
          example: {
            fr: "Gestion de projet (intranet Ramsay, site vitrine Top Auto) : planification, tableur comme Excel, priorisation des tâches pour respecter les deadlines.",
            en: "Project management: planning, spreadsheets like Excel, task prioritization to meet deadlines."
          }
        }
      ]
    }
  },
  {
    id: 'culture',
    type: 'culture',
    title: { fr: 'Culture', en: 'Culture' },
    subtitle: { fr: 'Ouverture & Langues', en: 'Hobbies & Languages' },
    content: { 
      fr: 'Bilingue (FR/RO), musicien et compétiteur (Échecs, Futsal).', 
      en: 'Bilingual (FR/RO), musician and competitor (Chess, Futsal).' 
    },
    badge: { fr: 'Soft Skills', en: 'Soft Skills' },
    iconName: 'Music',
    color: '#06b6d4',
    details: {
      music: { fr: 'Conservatoire Cycle 2 (Piano)', en: 'Conservatory Cycle 2 (Piano)' },
      hackathons: { fr: 'Chef d\'équipe Nuit de l\'Info', en: 'Night of IT Team Lead' },
      sports: { fr: ['Échecs (Stratégie)', 'Futsal (Esprit d\'équipe)'], en: ['Chess (Strategy)', 'Futsal (Team Spirit)'] },
      passeportCulturel: {
        fr: [
          'Veille technologique (IA, Finance, Blockchain, 3D)',
          'Webinaires Data',
          'Musée du CNAM'
        ],
        en: [
          'Tech Watch (AI, Finance, Blockchain, 3D)',
          'Data Webinars',
          'CNAM Museum'
        ]
      },
      langs: {
        fr: ['Français (Natif)', 'Roumain (Natif)', 'Anglais (B2 - Pro)', 'Italien'],
        en: ['French (Native)', 'Romanian (Native)', 'English (B2 - Pro)', 'Italian']
      }
    }
  }
];
