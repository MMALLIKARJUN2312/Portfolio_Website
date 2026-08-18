export const profile = {
  name: 'M Mallikarjun',
  roles: ['Backend Engineer', 'AI/ML Engineer'],
  tagline: 'Backend and AI/ML engineer building retrieval-grounded, production-ready systems.',
  summary:
    'I build backend systems and AI/ML products end to end - RAG pipelines, multi-agent workflows, and full-stack applications - with a focus on grounded, hallucination-resistant retrieval and production-grade engineering. B.Tech in Computer Science and Engineering from IIIT Dharwad.',
  email: 'mmallikarjun4368@gmail.com',
  github: 'https://www.github.com/MMALLIKARJUN2312',
  linkedin: 'https://www.linkedin.com/in/mallikarjun-m',
  resumeUrl: '/M-Mallikarjun-Resume.pdf',
} as const;

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'Frameworks & Runtime',
    skills: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'FastAPI',
      'Tailwind CSS',
      'LangGraph',
    ],
  },
  {
    label: 'Data & Storage',
    skills: ['MongoDB', 'PostgreSQL (pgvector)', 'SQLite', 'ChromaDB'],
  },
  {
    label: 'AI/ML & Tooling',
    skills: [
      'Google Gemini API',
      'Groq API',
      'RAG Pipelines',
      'System Design',
      'Docker',
      'n8n',
      'Git/GitHub',
    ],
  },
] as const;

export type Project = {
  name: string;
  context?: string;
  description: string;
  highlights: string[];
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    name: 'Atlas Tutor',
    context: 'AI-Powered RAG Learning Platform · Infotact Solutions',
    description:
      'A RAG-based tutoring platform that answers student queries with context-aware, citation-backed explanations from uploaded academic documents.',
    highlights: [
      'Adaptive quiz engine retrieves topic-specific context and auto-generates 5-question multiple-choice quizzes per topic to track understanding.',
      'Role-based access (Student/Admin) with an admin upload center that chunks, embeds, and indexes subject-wise PDFs into the vector database.',
    ],
    stack: ['Next.js', 'FastAPI', 'Gemini 2.0', 'ChromaDB'],
    href: 'https://www.github.com/MMALLIKARJUN2312',
  },
  {
    name: 'DocuFlow AI',
    context: 'Multi-Agent Document Generation Workflow · Infotact Solutions',
    description:
      'A stateful multi-agent workflow with a Writer agent and a Critic agent that drafts, scores, and revises documents, auto-deploying only once quality bar is met.',
    highlights: [
      'Writer agent (Gemini) and Critic agent (Llama 3.3 70B via Groq) draft, score, and revise documents, auto-deploying only when the Critic score reaches 95/100.',
      'pgvector semantic retrieval using Gemini embeddings truncated to 768 dimensions via Matryoshka Representation Learning (MRL), preserving 98%+ retrieval accuracy while speeding up similarity search.',
      'Circuit-breaker and human-in-the-loop review gate caps automatic revision cycles at 3 and routes further drafts to manual approval.',
    ],
    stack: ['LangGraph', 'Gemini', 'Groq (Llama 3.3 70B)', 'PostgreSQL (pgvector)'],
    href: 'https://www.github.com/MMALLIKARJUN2312',
  },
  {
    name: 'AI Atlas Platform',
    description:
      "Full-stack AI-vendor intelligence platform for Germany's F&B industry with a directory filterable across 4 dimensions (sector, company type, maturity, category), a grounded RAG assistant that answers only from indexed data, and automated news aggregation.",
    highlights: [
      'Directory filterable across sector, company type, maturity, and category.',
      'RAG assistant grounded strictly in indexed data, with automated news aggregation.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'PostgreSQL (pgvector)', 'Google Gemini'],
    href: 'https://www.github.com/MMALLIKARJUN2312',
  },
  {
    name: 'AI-Powered Support Assistant',
    description:
      'RAG-based customer support chatbot that answers strictly from a local knowledge base to prevent hallucinations, with persistent session memory and rate limiting.',
    highlights: [
      'Answers strictly from a local knowledge base to prevent hallucinations.',
      'Persistent 5-exchange session memory with IP-based rate limiting.',
    ],
    stack: ['React', 'Node.js/Express', 'SQLite', 'Google Gemini'],
    href: 'https://www.github.com/MMALLIKARJUN2312',
  },
  {
    name: 'Blog Application with GenAI Suggestions',
    description:
      'JWT-secured blogging platform that uses Gemini to auto-generate related topic ideas and an intro paragraph per draft.',
    highlights: [
      'Auto-generates 2 related topic ideas and 1 intro paragraph per draft using Gemini.',
      'JWT-secured authentication end to end.',
    ],
    stack: ['React', 'Node.js/Express', 'SQLite', 'JWT Authentication'],
    href: 'https://www.github.com/MMALLIKARJUN2312',
  },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Generative AI Intern',
    org: 'Infotact Solutions',
    period: 'Mar 2026 – Jun 2026',
    bullets: [
      'Built Atlas Tutor, a RAG-based tutoring platform delivering context-aware, citation-backed explanations from uploaded academic documents.',
      'Architected DocuFlow AI, a stateful multi-agent (LangGraph) document generation workflow with automated quality gating.',
    ],
  },
  {
    role: 'Technical Associate',
    org: 'Impaxive Solutions',
    period: 'Jun 2025 – Feb 2026',
    bullets: [
      'Implemented Role-Based Access Control (RBAC) for the Recupe product across defined user-role permission tiers.',
      'Developed and maintained the corporate website for client Apollo Microsystems Limited.',
      'Built a RAG-based chatbot grounded in company documentation to automate customer and internal query resolution.',
      'Automated internal workflows using n8n, integrating multiple services to cut manual, repetitive tasks.',
    ],
  },
  {
    role: 'Student Mentor',
    org: 'NxtWave',
    period: 'Jan 2025 – Jun 2025',
    bullets: [
      'Resolved technical doubts and reviewed code submissions for 250+ students across fullstack development courses.',
      'Mentored students through live debugging sessions to reinforce core programming concepts.',
    ],
  },
  {
    role: 'Fullstack Trainee',
    org: 'NxtWave',
    period: 'Oct 2023 – Dec 2024',
    bullets: [
      'Built multiple MERN stack projects covering authentication, REST APIs, and responsive UI, from database schema design to deployment.',
    ],
  },
];

export const education = {
  institution: 'Indian Institute of Information Technology, Dharwad',
  location: 'Dharwad, Karnataka',
  degree: 'B.Tech in Computer Science and Engineering',
  period: 'Aug 2019 – Jul 2023',
};

export const awards = [
  {
    name: 'AMD Slingshot Ideathon',
    description: "Participated in AMD's Slingshot Ideathon.",
  },
  {
    name: 'Hack2Skill Virtual PromptWars (with Google)',
    description: 'Participated in the Virtual PromptWars challenge.',
  },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const;
