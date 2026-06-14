import type { PortfolioItem } from '../types';

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'profile',
    type: 'profile',
    title: { fr: 'Profil', en: 'Profile' },
    subtitle: { fr: 'Apprenti Ingénieur ESIEE Paris', en: 'Apprentice Engineer - ESIEE Paris' },
    content: { 
      fr: "Actuellement étudiant en BUT Informatique en parcours Réalisation d'Applications, je me spécialise principalement dans le développement fullstack, modernisation d'outils et les technologies 3D & Web.\n\nAdmis en cycle ingénieur à l'ESIEE Paris pour la rentrée de septembre 2026, je recherche une alternance pour les 3 prochaines années afin de continuer à progresser et mettre mes compétences au sein d'une équipe.", 
      en: "Currently studying for a BUT in Computer Science (Application Development), I specialize in fullstack development, software architecture, and modern interfaces.\n\nBeyond coding, 10 years of conservatory music have given me a rigor I apply to all projects. I enjoy teamwork (e.g., Team Lead at Nuit de l'Info), believing good atmosphere and serious work go hand in hand.\n\nAdmitted to ESIEE Paris engineering school for September 2026, I'm seeking a 3-year apprenticeship to continue progressing." 
    },
    badge: { fr: 'Disponible 2026', en: 'Available 2026' },
    iconName: 'User',
    color: '#06b6d4',
    details: {
      contact: {
        tel: '06 66 98 47 75',
        email: 'griffatonr@gmail.com',
        location: { fr: 'Val d\'Oise (95)', en: 'Val d\'Oise, France' },
        mobility: { fr: 'Permis B', en: 'Driving License' },
        linkedIn: 'https://linkedin.com/in/robert-griffaton'
      },
      cvUrl: '/CV_GRIFFATON_Robert_Alternance.pdf',
      proudestAchievement: {
        fr: "Ma plus grande fierté est ma démarche pour décrocher mon stage de fin d'études. Après ne pas avoir trouvé d'alternance en début d'année, j’ai tout de suite anticipé mes recherches en postulant très tôt. Cela m’a permis d’obtenir différentes opportunités et d’avoir un vrai choix. J'ai sélectionné Safran Electronics & Defense après avoir passé des entretiens techniques et RH sélectifs. Malgré la distance importante au quotidien, j’ai su m’adapter rapidement et trouver un nouveau rythme avec une organisation rigoureuse.",
        en: "My proudest achievement is the process of securing my final internship. After not finding an apprenticeship early in the year, I anticipated my search and applied very early. This allowed me to get multiple opportunities and have a real choice. I selected Safran after selective technical and HR interviews. Despite the significant daily commute, I adapted quickly and found a new rhythm with rigorous organization."
      },
      objectives: {
        fr: "Court terme :\nJe souhaite mener à bien mes dernières missions de stage chez Safran. Mon but est de finaliser mon projet technique et de réussir la rédaction de mon rapport ainsi que ma soutenance. En parallèle, je finalise mes démarches pour trouver mon alternance pour la rentrée à l'ESIEE Paris. En septembre, je vais intégrer cette nouvelle école et débuter mon cycle d'ingénieur.\n\nMoyen terme :\nMon objectif principal est de décrocher mon diplôme d'ingénieur. Je veux orienter ma spécialisation selon les domaines qui me passionneront le plus durant mes cours et mes projets. Je reste ouvert aux opportunités professionnelles qui se présenteront à la suite de cette alternance.\n\nLong terme :\nÀ l'avenir, je souhaite évoluer au-delà du développement purement technique. Je me projette dans des rôles de Tech Lead ou de gestionnaire de projets informatiques. Manager et structurer des projets est une direction où je sais que je prendrai beaucoup de plaisir.",
        en: "Short term:\nComplete my final internship missions at Safran, finalize my technical project, report, and defense. Find an apprenticeship for ESIEE Paris. \n\nMedium term:\nGet my engineering degree and specialize based on what I enjoy most during my studies.\n\nLong term:\nEvolve beyond pure technical development into Tech Lead or IT project management roles."
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
        role: { fr: 'Développeur Logiciel (Cybersécurité Offensive)', en: 'Software Developer (Offensive Cybersecurity)' },
        traceUrl: '/DOC/placeholder_trace.txt',
        professionalReview: {
          fr: "Ce stage en Cybersécurité Offensive est une excellente immersion dans un environnement très technique. Ce secteur impose des contraintes de sécurité strictes : tout le travail se fait en local, sans aucun outil Cloud. Lors des réunions, j'ai su être convaincant pour défendre mon choix de refondre entièrement l'outil existant à zéro avec une nouvelle stack technologique. Ce projet m'a prouvé ma capacité à m'approprier un domaine complexe dont je ne connaissais rien au départ, et à m'organiser seul entre les livraisons de versions et les différents retours de mon équipe et de mes collègues en charge des tests.",
          en: "This internship in Offensive Cybersecurity is an excellent immersion in a highly technical environment. This sector imposes strict security constraints: all work is done locally, without any Cloud tools. During meetings, I was convincing in defending my choice to completely rebuild the existing tool from scratch with a new tech stack. This project proved my ability to appropriate a complex domain I knew nothing about initially, and to organize myself alone between version deliveries and the various feedback from my team and colleagues in charge of testing."
        },
        personalAnalysis: undefined,
        missions: {
          fr: [
            'Refonte d\'un outil de détection de vulnérabilités pour systèmes embarqués',
            'Architecture logicielle Clean Code et développement Full Stack',
            'Mise en œuvre de pipelines CI/CD (GitLab, Jenkins)'
          ],
          en: [
            'Vulnerability detection tool redesign for embedded systems',
            'Clean Code software architecture and Full Stack development',
            'Implementation of CI/CD pipelines (GitLab, Jenkins)'
          ]
        }
      },
      {
        company: 'Ramsay Santé',
        year: '2025',
        image: '/experience/ramsay.jpg',
        role: { fr: 'Développeur Web SharePoint (Service MOA)', en: 'SharePoint Web Developer (MOA Department)' },
        traceUrl: undefined,
        professionalReview: {
          fr: "Ce premier stage a été ma première immersion dans le monde professionnel sous la supervision de ma tutrice. J'ai intégré le service MOA, qui gérait des sujets transverses comme le SIRH, le SI Finance ou la RPA. Cette expérience m'a permis de découvrir le rythme de l'entreprise, d'apprendre à aller chercher l'information auprès de mes collègues et de travailler en autonomie. J'ai su présenter mon travail régulièrement lors des réunions et j'ai reçu des retours très positifs sur le projet final.",
          en: "This first internship was my first immersion in the professional world under the supervision of my tutor. I joined the MOA department, which managed transverse subjects like HRIS, Finance IS, or RPA. This experience allowed me to discover the corporate rhythm, learn how to seek information from my colleagues, and work autonomously. I was able to present my work regularly during meetings and received very positive feedback on the final project."
        },
        personalAnalysis: undefined,
        missions: {
          fr: [
            'Réalisation intégrale d\'une plateforme intranet pour le service MOA (25 collaborateurs) afin de recenser et cartographier tous leurs outils logiciels, leurs projets et leurs contacts.',
            'Recueil des besoins sur le terrain et analyse fonctionnelle auprès de mes collègues (Product Owners, managers) pour concevoir des maquettes adaptées à leurs usages.',
            'Développement sur SharePoint et Power Apps pour structurer l\'architecture du site, concevoir l\'interface graphique et mettre en avant les informations du service.'
          ],
          en: [
            'Full development of an intranet platform for the MOA department (25 employees) to inventory and map all their software tools, projects, and contacts.',
            'Field requirements gathering and functional analysis with colleagues (Product Owners, managers) to design mockups tailored to their usages.',
            'Development on SharePoint and Power Apps to structure the site architecture, design the graphical interface, and highlight department information.'
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
      en: 'I am proud to have had a solid report card and consistent grades each semester, especially in computer science and math. Math is a real pride, as I have always sought to follow reasoning to the end and improve.' 
    },
    badge: { fr: 'Objectif Ingénieur', en: 'Engineering Goal' },
    iconName: 'GraduationCap',
    color: '#06b6d4',
    details: {
      evolution: {
        fr: "La transition entre la première et la deuxième année de BUT Informatique a été un vrai tournant dans mon parcours. J’ai acquis de bonnes pratiques en développement, comme l’importance de la rigueur dans le code, la documentation, la gestion de projet et l’utilisation d’outils pros (Git, Figma, Excel, Jira...). Et surtout, ce qui me plaît et fonctionne beaucoup pour moi, car ça m'a toujours plu comme au sport, c'est le travail en équipe. Cette troisième année a été l'aboutissement de mon parcours avec la réalisation de ma première application mobile pour une SAÉ, ce qui correspondait à mon choix de parcours initial à mon début de BUT : le développement mobile. Aujourd'hui, les compétences acquises durant ces trois ans de BUT Informatique me permettent de répondre parfaitement aux missions de développeur Full Stack de mon stage actuel.",
        en: "The transition between the first and second year of BUT CS was a real turning point in my path. I acquired good development practices, such as the importance of code rigor, documentation, project management, and using pro tools (Git, Figma, Excel, Jira...). And above all, what I enjoy and what works very well for me, as it always has in sports, is teamwork. This third year was the culmination of my path with the creation of my first mobile app for an academic project (SAÉ), which corresponded to my initial career choice at the start of the BUT: mobile development. Today, the skills acquired over these three years of the BUT in Computer Science allow me to perfectly fulfill the Full Stack developer missions of my current internship."
      },
      futureStudies: {
        fr: "Mon objectif est de devenir ingénieur en informatique en alternance grâce à mon intégration à l'ESIEE Paris. J'ai choisi d'orienter ma spécialisation vers les technologies 3D. Ce parcours me permettra d'allier les compétences solides en développement et en algorithmie acquises durant mon BUT avec les outils de modélisation et d'affichage 3D pour concevoir les applications de demain.",
        en: "My goal is to become a computer engineer through an apprenticeship at ESIEE Paris. I have chosen to specialize in 3D technologies. This path will allow me to combine the solid development and algorithmic skills acquired during my BUT with 3D modeling and rendering tools to design the applications of tomorrow."
      },
      schools: [
        { degree: { fr: 'École d’Ingénieur', en: 'Engineering Degree' }, school: 'ESIEE Paris', period: '2026 – 2029', focus: { fr: 'Cycle Ingénieur en Informatique — Spécialisation Technologies 3D & Logiciel (En apprentissage)', en: 'Computer Science Engineering — 3D Tech & Software focus (Apprenticeship)' } },
        { degree: { fr: 'BUT Informatique', en: 'BUT CS' }, school: 'Université Sorbonne Paris Nord (IUT Villetaneuse)', period: '2023 – 2026', focus: { fr: 'Parcours Réalisation d\'applications : conception, développement, validation', en: 'Application Development Pathway' } },
        { degree: { fr: 'Baccalauréat Général', en: 'General Baccalaureate' }, school: 'Lycée Jean-Jacques Rousseau', period: '2020 – 2023', focus: { fr: 'Spécialités Mathématiques, Physique-Chimie et option Mathématiques Expertes', en: 'Maths, Physics-Chemistry and Expert Maths focus' } }
      ]
    }
  },
  {
    id: 'projects',
    type: 'project',
    title: { fr: 'Projets', en: 'Projects' },
    subtitle: { fr: 'Fiertés Techniques', en: 'Technical Prides' },
    content: { 
      fr: "Des projets universitaires et personnels qui m'ont challengé techniquement et humainement.", 
      en: "University and personal projects that challenged me technically and humanly." 
    },
    badge: { fr: 'Portfolio', en: 'Portfolio' },
    iconName: 'Code2',
    color: '#06b6d4',
    details: [
      { 
        name: 'GRAYE', 
        mockup: '/projects/graye-mockup.png',
        type: 'Application Mobile (SAE S5)', 
        stack: 'React Native, TypeScript, SQLite, Expo Go, Tailwind CSS', 
        traceUrl: 'https://github.com/RobertGriffaton/SAES55',
        pdfUrl: '/projects/RapportCommunication_GRAYE.pdf',
        desc: { 
          fr: "Développée en équipe dans le cadre d'un projet universitaire (SAE), GRAYE est une application mobile d'aide à la décision pour trouver des restaurants. Ce projet complet nous a permis de concevoir une identité visuelle unique (nom, logo, charte graphique) et de prendre en main un écosystème mobile de manière totalement autonome en groupe.\n\n• Gestion de Projet & Design : Organisation en équipe, réalisation des maquettes de l'interface utilisateur et création complète de la direction artistique.\n\n• Fonctionnalités Applicatives : Implémentation d'un parcours d'onboarding personnalisé, d'un système de recherche par filtres, d'une gestion de favoris et d'un espace multi-profils avec historique.\n\n• Cartographie & Données : Intégration d'une carte interactive avec géolocalisation en temps réel pour situer les établissements, s'appuyant sur une base de données locale de plus de 5 000 restaurants.", 
          en: "Developed in a team as part of a university project (SAE), GRAYE is a decision-support mobile app for finding restaurants. This comprehensive project allowed us to design a unique visual identity (name, logo, brand guidelines) and master a mobile ecosystem entirely autonomously as a group.\n\n• Project Management & Design: Team organization, UI mockup creation, and full art direction.\n\n• App Features: Implementation of a customized onboarding flow, a filter-based search system, favorites management, and a multi-profile space with history.\n\n• Mapping & Data: Integration of an interactive map with real-time geolocation to locate establishments, powered by a local database of over 5,000 restaurants." 
        } 
      },
      { 
        name: "ATM'Chat", 
        mockup: '/projects/atm-chat-mockup.png',
        mockupScale: 'scale-60 hover:scale-75', // Modifie cette variable (ex: scale-100 hover:scale-105) pour ajuster la taille du PC et son zoom au survol
        type: 'Application de Messagerie en Temps Réel | 2025', 
        stack: 'JavaScript, PHP, WebSockets, HTML / CSS, MySQL', 
        traceUrl: 'https://github.com/Guen0x/SAE_AppChatAnnotation',
        pdfUrl: '/projects/Diapo_ATMChat.pdf',
        desc: { 
          fr: "Développée dans le cadre d'un projet universitaire, ATM'Chat est une application de messagerie instantanée dyadique (type WhatsApp ou Messenger) intégrant un système d'analyse des conversations. La particularité du projet réside dans l'obligation pour l'utilisateur d'annoter son message avec l'émotion correspondante (joie, colère, tristesse, etc.) avant de pouvoir l'envoyer, permettant ainsi d'étudier et de cartographier les émotions au sein des échanges.\n\n• Communication en Temps Réel : Implémentation des WebSockets pour permettre l'envoi et la réception instantanée des messages, l'affichage des utilisateurs en ligne et la mise à jour des conversations en direct.\n\n• Système d'Annotation Forcé : Développement d'une logique applicative bloquant l'envoi du message tant qu'une catégorie d'émotion n'a pas été sélectionnée par l'émetteur.\n\n• Gestion des Utilisateurs : Conception de la base de données relationnelle et mise en place d'un système sécurisé d'authentification (inscription, connexion et gestion des comptes profils).", 
          en: "Developed as a university project, ATM'Chat is a real-time instant messaging app integrating a conversation analysis system. The project's unique feature is that users must annotate their messages with an emotion (joy, anger, sadness, etc.) before sending, allowing emotions to be mapped across conversations.\n\n• Real-Time Communication: Implemented WebSockets for instant message sending/receiving, online status indicators, and live conversation updates.\n\n• Forced Annotation System: Developed application logic that blocks sending a message until the sender selects an emotion category.\n\n• User Management: Designed a relational database and implemented a secure authentication system for sign-ups, logins, and profile management." 
        }
      },
      { 
        name: 'Versus Stream (En cours)', 
        mockup: '/projects/versus-stream-mockup.png',
        mockupScale: 'scale-60 hover:scale-75', // Réduit pour mieux s'adapter à une capture de page web
        isPersonal: true,
        type: "Plateforme Web & Widget OBS | 2026", 
        stack: "TypeScript, Next.js / Vercel, WebSockets, Redis, Tailwind CSS", 
        traceUrl: 'https://github.com/GriffyCode/VersusStream',
        prodUrl: 'https://versus-stream.vercel.app/',
        desc: { 
          fr: "VersusStream est un projet personnel conçu pour dynamiser les lives Twitch en permettant aux streamers\nde se défier en duel en temps réel.\n\nLe but est d'engager les communautés directement depuis le chat Twitch pour faire monter le score de leur streamer, sans qu'elles aient besoin d'installer quoi que ce soit. Tout le visuel s'intègre proprement sur le live via des widgets OBS fluides.\n\n• Interactions & Temps Réel : Connexion directe au chat Twitch pour transformer les messages (!duel), les Bits et les abonnements (Subs) en points en temps réel.\n\n• Performance & Haute Disponibilité : Utilisation de Redis et des WebSockets pour synchroniser instantanément les scores entre les streamers et supporter les pics de trafic des communautés sans aucun délai.\n\n• Widgets OBS Modulaires : Création d'affichages dynamiques inspirés des jeux de combat, pensés à 100% pour le web et faciles à intégrer sur les logiciels de streaming.", 
          en: "VersusStream is a personal project designed to energize Twitch streams by allowing streamers\nto duel each other in real-time.\n\nThe goal is to engage communities directly from the Twitch chat to increase their streamer's score, without them needing to install anything. All visuals integrate cleanly into the stream via smooth OBS widgets.\n\n• Interactions & Real-Time: Direct connection to Twitch chat to transform messages (!duel), Bits, and subscriptions (Subs) into points in real-time.\n\n• Performance & High Availability: Use of Redis and WebSockets to instantly synchronize scores between streamers and handle community traffic spikes without any delay.\n\n• Modular OBS Widgets: Creation of dynamic displays inspired by fighting games, 100% web-based and easy to integrate into streaming software." 
        }
      },
      { 
        name: 'Voronoï', 
        type: "Application Python & Étude de l'IA | 2026", 
        stack: "Python, Interface Graphique (GUI), Outils d'IA", 
        traceUrl: 'https://github.com/RobertGriffaton/SAE_S6_Voronoi',
        pdfUrl: '/projects/Phase2_Voronoi.pdf',
        desc: { 
          fr: "Réalisé en équipe, ce projet consistait à développer une application en Python pour générer, afficher et exporter des diagrammes de Voronoï à partir de listes de points. Le but était de comparer concrètement le développement 100% humain et le développement assisté par IA (avec 4 outils différents) pour mesurer les différences de temps, de correction et d'optimisation du code.\n\n• Le dev sans IA vs avec IA : En codant d'abord nous-mêmes, on a maîtrisé toute la logique algorithmique. En passant sur l'IA ensuite, on a gagné beaucoup de temps sur la vitesse d'écriture, mais on a dû passer du temps à relire, corriger et optimiser le code généré pour qu'il respecte les bonnes pratiques.\n\n• De créateur à surveillant : Ce projet m'a fait passer du rôle de développeur qui écrit son code à celui de surveillant qui doit traquer les erreurs de l'IA, ce qui demande une grosse vigilance pour garder un code propre.\n\n• Analyse des impacts humains : J'ai rédigé une étude personnelle sur les conséquences de l'IA pour les travailleurs (fatigue de la relecture, risque de perte de nos compétences de base et baisse d'autonomie), en m'appuyant sur ce que j'ai constaté durant cette SAE et sur mon stage chez Ramsay Santé où l'IA n'était pas toujours accessible sur les réseaux sécurisés.", 
          en: "Carried out as a team, this project involved developing a Python application to generate, display, and export Voronoi diagrams from point lists. The goal was to concretely compare 100% human development with AI-assisted development (using 4 different tools) to measure differences in time, correctness, and code optimization.\n\n• Dev without AI vs with AI: By coding ourselves first, we mastered all the algorithmic logic. When switching to AI afterwards, we saved a lot of time on writing speed, but we had to spend time reviewing, correcting, and optimizing the generated code so that it respected best practices.\n\n• From creator to supervisor: This project shifted me from the role of a developer who writes their code to a supervisor who must track down the AI's errors, requiring great vigilance to maintain clean code.\n\n• Human impact analysis: I wrote a personal study on the consequences of AI for workers (review fatigue, risk of losing our core skills, and decreased autonomy), based on what I observed during this SAE and my internship at Ramsay Santé where AI was not always accessible on secure networks." 
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
      certifications: [
        {
          name: { fr: 'SQL Certificate (Basic)', en: 'SQL Certificate (Basic)' },
          url: 'https://www.hackerrank.com/certificates/9d39e2fa6a97',
          status: 'completed'
        },
        {
          name: { fr: 'Devenir un bon Scrum Master', en: 'Becoming a good Scrum Master' },
          url: 'https://www.linkedin.com/learning/certificates/3c3fe1d5c4dfc3fd5897307e85e533f49bee76d9284b8b0d798fa48719050744?trk=share_certificate',
          status: 'completed'
        },
        {
          name: { fr: 'Prompt Craft and AI Interaction Track (IBM)', en: 'Prompt Craft and AI Interaction Track (IBM)' },
          status: 'in-progress'
        }
      ],
      softSkillsData: [
        {
          name: { fr: "Communication", en: "Communication" },
          example: { 
            fr: "Lors de mon stage chez Ramsay Santé, j'ai communiqué directement avec les utilisateurs pour recueillir et analyser leurs besoins terrain. J'ai aussi développé une forte aisance à l'oral lors des multiples soutenances du BUT et à la Journée de l'Éloquence où j'ai aimé cette expérience.",
            en: "During my internship at Ramsay Health, I communicated directly with users to gather and analyze their field requirements. I also developed strong public speaking skills through multiple university presentations and during the 'Journée de l'Éloquence' (Public Speaking Day), where I really enjoyed the experience."
          }
        },
        {
          name: { fr: "Esprit d'équipe", en: "Team Spirit" },
          example: {
            fr: "Sur le projet ATM'Chat (SAE S3/S4), j'ai veillé à la cohésion du groupe via l'entraide et la participation de tous, une répartition équitable des tâches et une gestion de notre dépôt Git partagé pour éviter les conflits de code.",
            en: "On the ATM'Chat project (SAE S3/S4), I ensured group cohesion through mutual aid and everyone's participation, fair task distribution, and management of our shared Git repository to avoid code conflicts."
          }
        },
        {
          name: { fr: "Adaptabilité", en: "Adaptability" },
          example: {
            fr: "Capacité à basculer d'un secteur à un autre avec des environnements techniques très différents (comme SharePoint à Ramsay). Après un premier stage sur les besoins utilisateurs dans la santé (Ramsay), j'ai su m'adapter immédiatement aux exigences rigoureuses de la cybersécurité offensive dans la défense et l'aéronautique (Safran).",
            en: "Ability to switch from one sector to another with very different technical environments (like SharePoint at Ramsay). After a first internship focused on user needs in healthcare (Ramsay), I immediately adapted to the rigorous requirements of offensive cybersecurity in defense and aeronautics (Safran)."
          }
        },
        {
          name: { fr: "Esprit d’initiative", en: "Initiative" },
          example: {
            fr: "Lors de mon stage chez Safran, on m'a conseillé une stack classique (serveur + PostgreSQL). En analysant le besoin, j'ai pris l'initiative de proposer une architecture locale différente via Electron et SQLite. Malgré les réticences initiales, j'ai su argumenter et convaincre l'équipe de la pertinence de mon choix, qui a finalement été validé et mis en place.",
            en: "During my internship at Safran, I was advised to use a standard stack (server + PostgreSQL). After analyzing the requirements, I took the initiative to propose a different local architecture using Electron and SQLite. Despite initial reluctance, I successfully argued and convinced the team of the relevance of my choice, which was ultimately validated and implemented."
          }
        },
        {
          name: { fr: "Curiosité & Apprentissage", en: "Curiosity & Learning" },
          example: {
            fr: "Je maintiens une veille technologique active, principalement autour de l'évolution des outils d'IA, des nouvelles versions de frameworks web et des écosystèmes SaaS. Je m'intéresse également de près aux technologies 3D (comme Three.js), un domaine que je compte approfondir pour mon futur parcours d'ingénieur.",
            en: "I maintain an active technological watch, mainly around the evolution of AI tools, new versions of web frameworks, and SaaS ecosystems. I am also closely interested in 3D technologies (like Three.js), a field I intend to deepen for my future engineering path."
          }
        },
        {
          name: { fr: "Organisation", en: "Organization" },
          example: {
            fr: "Que ce soit sur mes projets personnels, scolaires ou professionnels, je sais planifier mes sprints, définir mes priorités et respecter strictement les deadlines imposées.",
            en: "Whether on personal, academic, or professional projects, I know how to plan my sprints, define priorities, and strictly adhere to deadlines."
          }
        }
      ],
      butSkills: [
        {
          name: { fr: "Réaliser", en: "Realize" },
          level: 3,
          synthesis: { 
            fr: "Conception et développement d’applications web dynamiques et d’applications mobiles. Modélisation de bases de données, création d'interfaces utilisateur et mise en place d'architectures structurées.", 
            en: "Design and development of dynamic web and mobile applications. Database modeling, user interface creation, and structured architecture implementation." 
          },
          selfEvaluation: { 
            fr: "Mon stage actuel m'a fait passer un vrai cap en 3 mois sur les technos web. Je me sens autonome pour lancer un projet, tout en sachant que j'ai une marge de progression sur des langages plus bas niveau pour enrichir ma polyvalence.", 
            en: "My current internship helped me reach a real milestone in 3 months on web technologies. I feel autonomous to launch a project, while knowing I have room for improvement on lower-level languages to enrich my versatility." 
          }
        },
        {
          name: { fr: "Optimiser", en: "Optimize" },
          level: 3,
          synthesis: { 
            fr: "Analyse critique du code, application des principes de Clean Code pour garantir la lisibilité et la maintenabilité, et étude de la complexité algorithmique pour assurer une exécution rapide.", 
            en: "Critical code analysis, application of Clean Code principles to ensure readability and maintainability, and study of algorithmic complexity to guarantee fast execution." 
          },
          selfEvaluation: { 
            fr: "Je suis naturellement rigoureux sur la logique et j'aime chercher la meilleure solution pour rendre un programme plus rapide. Ma marge de progression se situe sur le DevOps et les mathématiques plus poussées, que je compte acquérir grâce au cycle ingénieur.", 
            en: "I am naturally rigorous with logic and I enjoy looking for the best solution to make a program faster. My room for improvement lies in DevOps and more advanced mathematics, which I plan to acquire through the engineering cycle." 
          }
        },
        {
          name: { fr: "Collaborer", en: "Collaborate" },
          level: 3,
          synthesis: { 
            fr: "Travail en équipe et gestion de projet acquis grâce au BUT. Coordination des tâches, fusions de code sur Git et application des méthodologies agiles. Ces compétences ont été mises à l'épreuve avec succès au sein d'équipes nombreuses lors de mes deux stages (Ramsay Santé et Safran).", 
            en: "Teamwork and project management acquired through the BUT. Task coordination, code merging on Git, and application of agile methodologies. These skills were successfully put to the test within large teams during my two internships (Ramsay Health and Safran)." 
          },
          selfEvaluation: { 
            fr: "C'est l'une de mes compétences préférées. Que ce soit en SAÉ, lors de la Nuit de l'Info ou en entreprise, j'aime gérer la dynamique d'équipe et communiquer. Comme dans le sport, le collectif est ce qui fonctionne le mieux pour moi.", 
            en: "It is one of my favorite skills. Whether in academic projects, during the Nuit de l'Info, or in a corporate setting, I enjoy managing team dynamics and communicating. As in sports, the collective effort is what works best for me." 
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
      fr: "En dehors du développement, mes passions nourrissent mon esprit et mon approche de l'informatique. Mes 10 années de conservatoire m'ont inculqué la rigueur et la créativité, tandis que le sport m'apprend la force de la cohésion et de l'esprit d'équipe. La randonnée, quant à elle, m'offre un espace de réflexion et de persévérance face à l'effort. Ce capital culturel et sportif forge ma capacité à concevoir des solutions avec recul et à avancer sereinement en groupe.", 
      en: "Outside of development, my passions fuel my mindset and my approach to computer science. My 10 years at the music conservatory instilled rigor and creativity, while sports teach me the strength of cohesion and teamwork. Hiking provides a space for reflection and perseverance. This cultural and sporting capital shapes my ability to design solutions with perspective and move forward harmoniously as a team." 
    },
    badge: { fr: 'Soft Skills', en: 'Soft Skills' },
    iconName: 'Music',
    color: '#06b6d4',
    details: {
      music: { fr: 'Diplôme de cycle 2', en: 'Cycle 2 Diploma' },
      hackathons: { fr: 'Nuit de l\'Info 2024 & Nuit de l\'Info 2025 (Chef d\'équipe)', en: 'Nuit de l\'Info 2024 & Nuit de l\'Info 2025 (Team Leader)' },
      sports: { fr: ['Échecs', 'Sport', 'Randonnée'], en: ['Chess', 'Sports', 'Hiking'] },
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
        fr: ['Français (Natif)', 'Roumain (Natif)', 'Anglais (B2 - Pro)', 'Italien (Bases)', 'Allemand (Scolaire)'],
        en: ['French (Native)', 'Romanian (Native)', 'English (B2 - Pro)', 'Italian (Basic)', 'German (School)']
      }
    }
  }
];
