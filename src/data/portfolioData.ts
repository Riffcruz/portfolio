export interface Project {
  id: string;
  title: string;
  type: 'CTO Role' | 'Client Work' | 'Security Work';
  description: string;
  url: string;
  role: string;
  technologies: string[];
  metrics?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    fullName: "Akor Anthony Makuochukwu",
    alias: "Snowtech",
    headline: "Senior Full-Stack & App Developer | CTO at TallyPadi",
    experienceYears: "6+",
    phone: "09045382250",
    phoneFormatted: "+234 904 538 2250",
    whatsappUrl: "https://wa.me/2349045382250?text=Hello%20Anthony,%20I'm%20reaching%20out%20from%20your%20portfolio%20website.",
    email: "anthony@snowtech.dev",
    location: "Sangotedo, Lagos Island, Lagos, Nigeria",
    bio: "Senior Web & App Developer with 6+ years of experience building production applications. Currently Chief Technology Officer (CTO) at TallyPadi, with background at Smartweb Security and cybersecurity certifications.",
  },

  projects: [
    {
      id: "tallypadi",
      title: "TallyPadi",
      type: "CTO Role",
      description: "Financial management and business accounting platform empowering businesses with automated bookkeeping, inventory tracking, and payment processing.",
      url: "https://tallypadi.com/",
      role: "CTO & Lead Engineer",
      technologies: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Cybersecurity"],
      metrics: "10,000+ Active Businesses"
    },
    {
      id: "rmg-emporium",
      title: "RMG Emporium",
      type: "Client Work",
      description: "Modern, high-converting e-commerce web platform developed for client to handle retail inventory, product cataloging, and online payments.",
      url: "https://www.rmg-emporium.com/",
      role: "Full-Stack Web Developer (Client Project)",
      technologies: ["Next.js", "React", "Tailwind CSS", "Paystack", "REST APIs"],
      metrics: "E-Commerce Client Site"
    },
    {
      id: "wilson-elite",
      title: "Wilson Elite",
      type: "Client Work",
      description: "Corporate web portal designed and developed for client business consulting, service showcases, and customer lead engagement.",
      url: "https://wilson-elite.com/",
      role: "Web Developer (Client Project)",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      metrics: "Corporate Client Site"
    },
    {
      id: "smartweb-security-suite",
      title: "Smartweb Security Tools",
      type: "Security Work",
      description: "Web application security reporting tools and vulnerability audit dashboards developed during tenure at Smartweb Security.",
      url: "#",
      role: "Cybersecurity Specialist",
      technologies: ["Python", "OWASP Audits", "Linux Security", "Docker"],
      metrics: "Security & Penetration Testing"
    }
  ] as Project[],

  skills: [
    { category: "Web Development", items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"] },
    { category: "Mobile App Development", items: ["React Native (iOS & Android)", "Cross-Platform Apps", "Mobile UI/UX"] },
    { category: "Backend & Cloud", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "Vercel"] },
    { category: "Cybersecurity", items: ["Web App Security (OWASP)", "Vulnerability Audits", "Server Hardening", "SSL/TLS"] }
  ],

  experiences: [
    {
      company: "TallyPadi",
      role: "Chief Technology Officer (CTO)",
      period: "2023 - Present",
      location: "Lagos, Nigeria",
      description: "Leading tech architecture, cloud infrastructure, and product development for TallyPadi's business ledger app.",
      stack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Cloud"]
    },
    {
      company: "Smartweb Security",
      role: "Cybersecurity Engineer & Developer",
      period: "2021 - 2023",
      location: "Lagos, Nigeria",
      description: "Conducted web vulnerability audits, penetration testing, and security hardening for client web applications.",
      stack: ["OWASP", "Python", "Linux Security", "Web Audits"]
    },
    {
      company: "App & Web Consulting (Freelance / Client Projects)",
      role: "Senior Full-Stack Developer",
      period: "2018 - Present",
      location: "Sangotedo, Lagos Island, Nigeria",
      description: "Developing custom web applications and mobile apps for client businesses including rmg-emporium.com and wilson-elite.com.",
      stack: ["Next.js", "React Native", "TypeScript", "Tailwind CSS"]
    }
  ] as ExperienceItem[],

  certifications: [
    "Certified Cybersecurity Specialist",
    "Smartweb Security Web Defense Certification",
    "Full-Stack Web & Mobile Architecture Certification"
  ]
};
