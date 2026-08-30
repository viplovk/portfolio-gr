import { Project, Award, TimelineItem, StackCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Viplov',
  fullName: 'Viplov',
  age: 19,
  birthDate: 'May 18, 2007',
  location: 'Delhi / Greater Noida, India',
  email: 'viplov7@icloud.com',
  githubUser: 'viplovk',
  githubUrl: 'https://github.com/viplovk',
  linkedinUrl: 'https://linkedin.com/in/viplov7',
  twitterUrl: 'https://x.com/vishuk30',
  instagramUrl: 'https://instagram.com/studymaterialboy',
  degree: 'B.Tech in Computer Science and Engineering',
  college: 'IEC College of Engineering & Technology',
  sgpa: '7.95 SGPA (1st Sem)',
  highSchool: 'Bharti Public School, Delhi',
  coaching: 'Vidhyapeeth Preet Vihar'
};

export const HERO_METRICS = [
  { label: 'ACADEMIC SGPA', value: '7.95 SGPA' },
  { label: 'GITHUB PROJECTS', value: '5+ ACTIVE' },
  { label: 'CURRENT DEGREE', value: 'B.TECH CSE' },
  { label: 'TECH WORKSHOPS', value: '2x GFG NOIDA' },
  { label: 'CORE DISCIPLINES', value: 'DSA & WEB' },
  { label: 'BASE LOCATION', value: 'DELHI / NCR' },
];

export const PROJECTS: Project[] = [
  {
    id: 'walkable',
    title: 'Walkable',
    subtitle: 'Interactive Web Application Deployed on Vercel',
    year: '2025',
    client: 'Open Source / Production',
    role: 'Creator & Lead Developer',
    category: ['awards', 'experimental'],
    description: 'An interactive web-based navigation and mobility application engineered for fluid browser exploration, instant reactivity, and seamless Vercel edge deployment.',
    longDescription: 'Walkable is a high-performance web experience focused on intuitive navigation ergonomics, dynamic UI state transitions, and clean modular component architecture. Deployed continuously on Vercel with optimized asset pipelines.',
    highlights: [
      'Deployed live on Vercel with zero cold-start latency',
      'Interactive geospatial & accessibility-centric interface',
      'Modular component tree built with modern JavaScript & Tailwind CSS',
      'Clean state persistence and responsive design for mobile & desktop'
    ],
    stack: ['JavaScript', 'HTML5', 'Tailwind CSS', 'Vercel', 'Git'],
    awards: ['Production Deployed', 'Open Source Spotlight', 'Vercel Verified'],
    liveUrl: 'https://github.com/viplovk/walkable',
    githubUrl: 'https://github.com/viplovk/walkable',
    previewType: 'interactive',
    accentColor: '#ccff00',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'Platform', value: 'Vercel' },
      { label: 'Code Quality', value: 'A+' },
      { label: 'Architecture', value: 'Component-Driven' }
    ]
  },
  {
    id: 'spiderman-bnd',
    title: 'SpidermanBND',
    subtitle: 'Front-End Interactive Experiment & Vercel Pipeline',
    year: '2025',
    client: 'Interactive Experiment',
    role: 'Front-End Engineer',
    category: ['awards', 'agency'],
    description: 'A themed cinematic front-end experiment featuring kinetic web animations, character-driven visual layout, and production Vercel integration.',
    longDescription: 'SpidermanBND explores creative storytelling through high-contrast typography, interactive character showcases, reactive CSS physics, and continuous integration workflows configured for fast global delivery.',
    highlights: [
      'Smooth micro-interactions and themed visual transitions',
      'Optimized lightweight asset delivery via Vercel edge networks',
      'Robust Git versioning and automated deployment triggers'
    ],
    stack: ['JavaScript', 'CSS3 / Tailwind', 'HTML5', 'Vercel', 'Git'],
    awards: ['Creative Experiment', 'Vercel Production', 'Interactive Showcase'],
    liveUrl: 'https://github.com/viplovk/spidermanBND',
    githubUrl: 'https://github.com/viplovk/spidermanBND',
    previewType: 'webgl',
    accentColor: '#ff3366',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'Hosting', value: 'Vercel Edge' },
      { label: 'Animation', value: '60 FPS' }
    ]
  },
  {
    id: 'personal-pixel-portfolio',
    title: 'Pixel Portfolio Experience',
    subtitle: 'Custom Pixel-Themed Interactive Portfolio Site',
    year: '2024 - 2025',
    client: 'Personal Brand',
    role: 'Designer & Developer',
    category: ['experimental', 'awards'],
    description: 'A nostalgic retro pixel-art themed personal showcase built with custom JavaScript animation loops, Tailwind CSS styling, and interactive easter eggs.',
    longDescription: 'Crafted to blend 8-bit aesthetic nostalgia with modern web performance. Features custom pixel-perfect layout grids, kinetic hover states, retro sound cues, and responsive viewport scaling.',
    highlights: [
      'Custom pixel grid styling and retro design system',
      'Handcrafted JavaScript animation controllers',
      'Integrated theme switcher and interactive secret codes',
      '100% mobile-responsive layout built with Tailwind CSS'
    ],
    stack: ['JavaScript', 'Tailwind CSS', 'HTML5', 'Figma', 'CSS Grid'],
    awards: ['Unique Aesthetic', 'Custom Animations', 'Retro Craft'],
    liveUrl: 'https://github.com/viplovk',
    githubUrl: 'https://github.com/viplovk',
    previewType: 'interactive',
    accentColor: '#00f0ff',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'Style', value: '8-Bit Retro' },
      { label: 'Lighthouse', value: '99/100' }
    ]
  },
  {
    id: 'calcx',
    title: 'Calcx Engine',
    subtitle: 'Algorithmic Mathematical & Calculator Utility',
    year: '2024',
    client: 'Open Source Utility',
    role: 'Algorithms & Core Architecture',
    category: ['experimental', 'agency'],
    description: 'An algorithmic utility engine implementing operator precedence parsers, precision numerical computation, and clean keyboard shortcut handling.',
    longDescription: 'Calcx was built to implement clean computational algorithms in code. Features postfix expression evaluation, tokenization stacks, memory registers, and instantaneous error handling for complex arithmetic calculations.',
    highlights: [
      'Custom expression tokenizer and infix-to-postfix evaluation algorithm',
      'Instant keyboard event listener mapping and tactile visual feedback',
      'Zero-dependency core calculation engine'
    ],
    stack: ['Python', 'JavaScript', 'Data Structures', 'Git'],
    awards: ['Algorithmic Logic', 'Clean Architecture', 'Utility Engine'],
    liveUrl: 'https://github.com/viplovk',
    githubUrl: 'https://github.com/viplovk',
    previewType: 'visual',
    accentColor: '#ffaa00',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'ai-ecommerce-storefront',
    title: 'AI E-Commerce Storefront',
    subtitle: 'AI-Driven E-Commerce Experience on Shopify',
    year: '2024 - 2025',
    client: 'Shopify Storefront',
    role: 'E-Commerce Architect & AI Integrator',
    category: ['ecommerce', 'awards'],
    description: 'Configured and launched an AI-driven online storefront with dynamic inventory syncing, automated product metadata workflows, and high-conversion UX design.',
    longDescription: 'Leveraged modern AI development suites to generate optimized product catalog taxonomies, automated marketing copy pipelines, and responsive Shopify theme customization for frictionless checkout.',
    highlights: [
      'Full deployment and live operations on Shopify platform',
      'Integration with AI suites for dynamic content and catalog automation',
      'Streamlined UI/UX design wireframed in Figma for maximum conversion'
    ],
    stack: ['Shopify', 'AI Tools', 'Figma', 'HTML/CSS', 'E-Commerce Analytics'],
    awards: ['Live Storefront', 'AI Automation', 'Conversion-Focused'],
    liveUrl: 'https://github.com/viplovk',
    githubUrl: 'https://github.com/viplovk',
    previewType: 'interactive',
    accentColor: '#22c55e',
    image: 'https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'dsa-python-core',
    title: 'DSA & Python Problem Solver',
    subtitle: 'Data Structures & Algorithms Repository',
    year: '2024 - Present',
    client: 'Academic & Competitive Coding',
    role: 'Core Developer',
    category: ['3d-webgl', 'experimental'],
    description: 'A comprehensive codebase solving fundamental and advanced computer science data structure problems, graph traversals, and algorithmic optimizations.',
    longDescription: 'Authored during computer science coursework at IEC College of Engineering & Technology and GeeksforGeeks workshops. Focuses on asymptotic time complexity analysis, recursion trees, and modular problem decompositions.',
    highlights: [
      'Implementations of linked lists, trees, graphs, sorting, and dynamic programming',
      'Optimized space & time complexity verifications in Python',
      'Applied directly to academic excellence and technical workshop challenges'
    ],
    stack: ['Python', 'Data Structures & Algorithms', 'SQL', 'Git'],
    awards: ['7.95 SGPA Backing', 'GFG Workshop Tested', 'Algorithmic Mastery'],
    liveUrl: 'https://github.com/viplovk',
    githubUrl: 'https://github.com/viplovk',
    previewType: 'visual',
    accentColor: '#a855f7',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const AWARDS_LIST: Award[] = [
  {
    id: 'gfg-ds-workshop',
    title: 'Data Science Workshop',
    organization: 'GeeksforGeeks (Noida)',
    count: 'Certification',
    year: '2024',
    highlight: 'Intensive hands-on training in Python data pipelines, statistical analysis, and machine learning principles.',
    category: 'Technical Workshop',
    iconName: 'Zap'
  },
  {
    id: 'gfg-career-boost',
    title: 'Career Boost Workshop',
    organization: 'GeeksforGeeks (Noida)',
    count: 'Certification',
    year: '2024',
    highlight: 'Advanced technical interview prep, industry-grade problem solving, and software engineering career strategies.',
    category: 'Professional Excellence',
    iconName: 'Award'
  },
  {
    id: 'sgpa-distinction',
    title: '7.95 SGPA Academic Standing',
    organization: 'IEC College of Engineering & Technology',
    count: 'Top Tier',
    year: '1st Semester (2024-2025)',
    highlight: 'Exceptional academic performance across Computer Science and Engineering coursework and programming labs.',
    category: 'Undergraduate Honors',
    iconName: 'Trophy'
  },
  {
    id: 'science-stream-grad',
    title: 'Senior Secondary Science Graduate',
    organization: 'Bharti Public School, Delhi',
    count: 'Graduated 2025',
    year: '2025',
    highlight: 'Completed Class 12 Science stream with rigorous foundation in Physics, Chemistry, and Advanced Mathematics.',
    category: 'Academic Milestone',
    iconName: 'Crown'
  },
  {
    id: 'secondary-school-2022',
    title: 'Secondary School Certification',
    organization: 'Bharti Public School, Delhi',
    count: 'Class 10 (2022)',
    year: '2022',
    highlight: 'Completed foundational secondary education with strong analytical and scientific merit.',
    category: 'Foundational Milestone',
    iconName: 'Star'
  },
  {
    id: 'competitive-prep',
    title: 'Advanced Science & Engineering Prep',
    organization: 'Vidhyapeeth Preet Vihar',
    count: 'Coaching & Mentorship',
    year: '2023 - 2025',
    highlight: 'Intensive technical coaching and problem-solving discipline for engineering entrance and computational foundations.',
    category: 'Preparatory Excellence',
    iconName: 'Sparkles'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2024 - Present',
    period: '2024 — Present (Undergraduate)',
    role: 'B.Tech in Computer Science and Engineering',
    company: 'IEC College of Engineering & Technology (Greater Noida, India)',
    description: 'Pursuing undergraduate degree in Computer Science and Engineering. Achieved a standout 7.95 SGPA in the 1st Semester while actively building web applications and exploring modern AI integrations.',
    milestones: [
      'Achieved 7.95 SGPA in 1st Semester CSE coursework',
      'Developed and deployed web applications (Walkable, SpidermanBND) on Vercel',
      'Actively practicing Data Structures & Algorithms and Python engineering'
    ],
    technologies: ['Python', 'JavaScript', 'Data Structures & Algorithms', 'HTML5/Tailwind', 'SQL', 'Vercel', 'Git']
  },
  {
    year: '2024',
    period: '2024 (Specialized Workshops)',
    role: 'Data Science & Career Boost Workshop Fellow',
    company: 'GeeksforGeeks (Noida, India)',
    description: 'Attended specialized technical workshops in Noida covering practical data science workflows, algorithmic problem solving, and modern career development.',
    milestones: [
      'Completed GeeksforGeeks Data Science Workshop hands-on curriculum',
      'Completed GeeksforGeeks Career Boost Workshop on industry software engineering practices'
    ],
    technologies: ['Python Data Analysis', 'Problem Solving', 'Data Structures', 'Technical Workflows']
  },
  {
    year: '2023 - 2025',
    period: '2023 — 2025',
    role: 'Senior Secondary Science & Entrance Prep',
    company: 'Bharti Public School & Vidhyapeeth Preet Vihar (Delhi)',
    description: 'Graduated Class 12 Science stream in 2025 while undertaking comprehensive engineering preparation at Vidhyapeeth Preet Vihar.',
    milestones: [
      'Graduated Class 12 Science Stream from Bharti Public School in 2025',
      'Completed intensive engineering entrance preparation at Vidhyapeeth Preet Vihar',
      'Built early software utilities and algorithmic experiments (Calcx, Pixel Portfolio)'
    ],
    technologies: ['Physics & Advanced Math', 'Python Basics', 'Web Fundamentals', 'Algorithmic Thinking']
  },
  {
    year: '2022',
    period: '2022',
    role: 'Secondary School Education (Class 10)',
    company: 'Bharti Public School (Delhi, India)',
    description: 'Completed Class 10 board examinations, building core analytical acumen and passion for technology and computer programming.',
    milestones: [
      'Successfully completed Class 10 certification in 2022',
      'Initiated self-directed exploration of web technologies and programming'
    ],
    technologies: ['Computer Fundamentals', 'HTML', 'Mathematics', 'Science Foundations']
  }
];

export const STACK_CATEGORIES: StackCategory[] = [
  {
    category: 'Programming Languages & Web',
    skills: [
      { name: 'Python', level: 90, description: 'Algorithmic problem solving, data processing & scripting', category: 'core' },
      { name: 'JavaScript (ES6+)', level: 88, description: 'Modern DOM manipulation, async/await, event architecture', category: 'core' },
      { name: 'HTML5 & Semantic Markup', level: 95, description: 'Accessible, clean structure and web standards', category: 'core' },
      { name: 'Tailwind CSS', level: 92, description: 'Rapid utility styling, responsive design systems, animations', category: 'core' },
      { name: 'SQL & Database Basics', level: 80, description: 'Relational data modeling, querying, indexing basics', category: 'core' }
    ]
  },
  {
    category: 'Core Concepts & Design',
    skills: [
      { name: 'Data Structures & Algorithms', level: 85, description: 'Arrays, Linked Lists, Stacks, Queues, Trees, Searching & Sorting', category: 'core' },
      { name: 'Front-End Development', level: 90, description: 'Component design, responsive UI, micro-animations', category: 'animation' },
      { name: 'UI/UX Design (Figma)', level: 86, description: 'Wireframing, prototypes, typography & layout hierarchy', category: '3d' },
      { name: 'Interactive Animations', level: 84, description: 'CSS transforms, canvas drawing, kinetic visual states', category: 'animation' }
    ]
  },
  {
    category: 'Tools, Platforms & AI',
    skills: [
      { name: 'Git & GitHub (viplovk)', level: 90, description: 'Version control, branch workflows, repo management', category: 'tooling' },
      { name: 'Vercel Deployment', level: 92, description: 'Edge continuous deployment and live preview pipelines', category: 'tooling' },
      { name: 'Shopify Storefronts', level: 85, description: 'E-commerce configuration, theme customization, catalog workflows', category: 'tooling' },
      { name: 'AI Development Suites', level: 88, description: 'Leveraging AI tools for code optimization & asset automation', category: 'tooling' }
    ]
  }
];

export const CLIENT_BRANDS = [
  'GeeksforGeeks Noida',
  'IEC College of Engg',
  'Bharti Public School',
  'Vidhyapeeth Preet Vihar',
  'Vercel Platform',
  'GitHub Open Source',
  'Shopify Ecosystem',
  'Delhi Tech Community'
];
