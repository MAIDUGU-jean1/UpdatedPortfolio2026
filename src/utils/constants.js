export const PROJECTS = [
  {
    title: 'Atlas Data Pipeline',
    description: 'Real-time data processing platform that ingests, transforms, and visualizes streaming data from multiple sources.',
    problem: 'Companies struggle with processing large volumes of real-time data efficiently while maintaining data integrity.',
    features: [
      'Real-time data streaming with WebSocket',
      'Automated data validation and transformation',
      'Interactive dashboard with custom visualizations',
      'Scalable microservices architecture'
    ],
    tech: ['Node.js', 'React', 'WebSocket', 'MongoDB', 'Redis', 'Docker'],
    impact: 'Reduced data processing time by 70% for clients',
    github: 'https://github.com/username/atlas-pipeline',
    demo: 'https://atlas-demo.example.com'
  },
  // ... other projects
];

export const EXPERIENCES = [
  {
    company: 'Melah Information Technology',
    role: 'Software Engineer',
    period: '2023 - Present',
    location: 'Remote',
    description: [
      'Develop and maintain scalable microservices handling 10k+ daily transactions',
      'Implement real-time data processing pipelines using Node.js and WebSocket',
      'Lead migration of legacy systems to modern React/TypeScript architecture',
      'Collaborate with product teams to define technical requirements and API contracts',
      'Mentor junior developers and conduct code reviews'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Docker']
  },
  // ... other experiences
];

export const SKILLS = {
  frontend: [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Vue.js', level: 75 },
    { name: 'Sass/SCSS', level: 90 }
  ],
  backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'Express.js', level: 88 },
    { name: 'GraphQL', level: 80 },
    { name: 'REST APIs', level: 92 }
  ],
  // ... other skills
};

export const CV_FILENAME = 'Alex_Evans_Software_Engineer_CV.pdf';
export const CV_PATH = '/cv/Alex_Evans_Software_Engineer_CV.pdf';