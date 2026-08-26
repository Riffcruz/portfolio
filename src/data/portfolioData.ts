export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'fintech' | 'security';
  subtitle: string;
  description: string;
  longDescription: string;
  url: string;
  role: string;
  technologies: string[];
  metrics: string;
  featured: boolean;
  tag: string;
}

export interface SkillGroup {
  category: string;
  subtitle: string;
  iconName: string;
  items: { name: string; tag: string; description: string }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  code: string;
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    fullName: "Akor Anthony Makuochukwu",
    alias: "Snowtech",
    headline: "Chief Technology Officer & Senior Full-Stack Architect",
    experienceYears: "6+",
    phone: "09045382250",
    phoneFormatted: "+234 904 538 2250",
    whatsappUrl: "https://wa.me/2349045382250?text=Hello%20Anthony,%20I'm%20reaching%20out%20from%20your%20portfolio%20website.",
    email: "anthony@snowtech.dev",
    location: "Sangotedo, Lagos Island, Lagos, Nigeria",
    bioShort: "Chief Technology Officer at TallyPadi & former Cybersecurity Engineer at Smartweb Security. 6+ years of experience engineering enterprise web platforms, cross-platform mobile apps, and hardened cloud infrastructure.",
    stats: [
      { number: "06+", label: "Years Engineering Experience" },
      { number: "25+", label: "Production Deployments" },
      { number: "10K+", label: "Businesses Served" },
      { number: "99.9%", label: "Uptime & System Integrity" }
    ]
  },

  projects: [
    {
      id: "tallypadi",
      title: "TallyPadi",
      subtitle: "FinTech & Automated Business Accounting Engine",
      category: "fintech",
      description: "Engineered and architected TallyPadi as CTO — a business management platform empowering over 10,000 active enterprises with automated bookkeeping, digital inventory, and instant payment settlement.",
      longDescription: "Led the core engineering roadmap from zero to scale. Designed multi-tenant microservices, real-time ledger sync, bank-grade encryption, and cross-platform mobile apps for iOS and Android.",
      url: "https://tallypadi.com/",
      role: "CTO & Chief Architect",
      technologies: ["Next.js App Router", "React Native", "Node.js", "PostgreSQL", "Tailwind CSS", "PCI-DSS Security"],
      metrics: "10,000+ Active Businesses",
      featured: true,
      tag: "CTO Spotlight"
    },
    {
      id: "rmg-emporium",
      title: "RMG Emporium",
      subtitle: "Enterprise E-Commerce Platform",
      category: "web",
      description: "Built a high-converting luxury web store engineered for catalog browsing, real-time checkout synchronization, and payment gateway security.",
      longDescription: "Implemented server-side rendering with Next.js, custom checkout workflows, automated inventory webhooks, and sub-second page load speeds.",
      url: "https://www.rmg-emporium.com/",
      role: "Lead Full-Stack Developer",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Paystack", "Stripe API", "Vercel Edge"],
      metrics: "Sub-second Page Load",
      featured: true,
      tag: "Live E-Commerce"
    },
    {
      id: "wilson-elite",
      title: "Wilson Elite",
      subtitle: "Corporate Enterprise Platform",
      category: "web",
      description: "Designed and built an enterprise corporate platform for digital services, enterprise consulting, and client engagement.",
      longDescription: "Structured corporate web portal with optimized UI components, interactive client request modules, and web performance architecture.",
      url: "https://wilson-elite.com/",
      role: "Founder & Lead Developer",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Vercel"],
      metrics: "Enterprise Portal",
      featured: true,
      tag: "Corporate Platform"
    },
    {
      id: "smartweb-security-suite",
      title: "Smartweb Security & Audit Suite",
      subtitle: "Threat Detection & Server Hardening Portal",
      category: "security",
      description: "Developed web application security auditing tools, penetration test reporting dashboards, and threat monitoring suites during technical tenure at Smartweb Security.",
      longDescription: "Engineered automated scanners for OWASP Top 10 vulnerabilities, server SSL/TLS compliance checkers, and secure client communication channels.",
      url: "#",
      role: "Cybersecurity Specialist",
      technologies: ["Python", "Node.js", "OWASP Audits", "Linux Hardening", "Docker", "Security Headers"],
      metrics: "Zero Vulnerability Compliance",
      featured: true,
      tag: "Security Suite"
    }
  ] as Project[],

  skillGroups: [
    {
      category: "Frontend & Web Architecture",
      subtitle: "High-throughput SSR, reactive UIs, and state management",
      iconName: "Layout",
      items: [
        { name: "Next.js 14 / App Router", tag: "Expert", description: "Server components, streaming, static generation & route handlers." },
        { name: "React.js & TypeScript", tag: "Core", description: "Strict type safety, custom hooks, and state orchestration." },
        { name: "Tailwind CSS & Animations", tag: "Design Systems", description: "Bespoke glassmorphism, responsive grid math, and Framer Motion." },
        { name: "Performance Tuning", tag: "Optimized", description: "Core Web Vitals, sub-second LCP, and image optimizations." }
      ]
    },
    {
      category: "Cross-Platform Mobile Development",
      subtitle: "Native performance iOS & Android mobile applications",
      iconName: "Smartphone",
      items: [
        { name: "React Native (iOS & Android)", tag: "Mobile Core", description: "Single codebase apps with 60fps native animations." },
        { name: "Biometric & Secure Auth", tag: "Security", description: "FaceID, Fingerprint auth, and encrypted keytar storage." },
        { name: "App Store & Play Store Deploys", tag: "DevOps", description: "TestFlight, Play Console release pipelines, and OTA updates." }
      ]
    },
    {
      category: "Backend Microservices & Cloud",
      subtitle: "Scalable REST APIs, relational databases, and serverless compute",
      iconName: "Server",
      items: [
        { name: "Node.js / Express / Python", tag: "Backend", description: "Event-driven REST APIs, WebSockets, and background workers." },
        { name: "PostgreSQL / MongoDB", tag: "Database", description: "Complex SQL indexing, ACID transactions, and document stores." },
        { name: "Vercel / Docker / Cloud", tag: "Infrastructure", description: "CI/CD pipelines, containerization, and environment management." }
      ]
    },
    {
      category: "Cybersecurity & System Defense",
      subtitle: "OWASP protection, server hardening, and security audits",
      iconName: "ShieldCheck",
      items: [
        { name: "Web App Penetration Audits", tag: "Certified", description: "OWASP Top 10 mitigation, SQLi, XSS, and CSRF defense." },
        { name: "SSL/TLS & Server Hardening", tag: "Security", description: "Nginx hardening, strict HSTS, content security policies (CSP)." },
        { name: "FinTech PCI-DSS Security", tag: "Compliance", description: "Encrypted payload handling and bank integration security." }
      ]
    }
  ] as SkillGroup[],

  experiences: [
    {
      company: "TallyPadi",
      role: "Chief Technology Officer (CTO)",
      period: "2023 - Present",
      location: "Lagos, Nigeria",
      summary: "Directing technology vision, cloud infrastructure, cross-platform engineering, and product security for TallyPadi's business ledger ecosystem.",
      bullets: [
        "Architected scalable backend microservices serving over 10,000 active business users.",
        "Implemented bank-grade encryption protocols and secure payment gateway integrations.",
        "Led mobile & web development teams achieving 99.9% platform availability."
      ],
      stack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Cybersecurity", "Cloud Architecture"]
    },
    {
      company: "Smartweb Security",
      role: "Cybersecurity Engineer & Developer",
      period: "2021 - 2023",
      location: "Lagos, Nigeria",
      summary: "Executed web application penetration testing, vulnerability assessments, and secure code audits for enterprise web platforms.",
      bullets: [
        "Identified and patched critical security flaws across high-traffic web applications.",
        "Engineered automated vulnerability reporting dashboards for clients.",
        "Configured server hardening, SSL pinning, and security header policies."
      ],
      stack: ["Web Application Security", "OWASP", "Python", "Linux Hardening", "Network Auditing"]
    },
    {
      company: "Snowtech Engineering",
      role: "Lead Software & App Consultant",
      period: "2018 - Present",
      location: "Sangotedo, Lagos Island, Nigeria",
      summary: "Delivering bespoke mobile apps, web solutions, and technical advisory for startups and retail enterprises across Nigeria & globally.",
      bullets: [
        "Delivered over 25+ successful web and mobile products including wilson-elite.com and rmg-emporium.com.",
        "Achieved 95+ performance ratings across mobile and desktop audits."
      ],
      stack: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "MongoDB", "REST APIs"]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      title: "Certified Cybersecurity Specialist",
      issuer: "Professional Security Accreditation",
      date: "Certified",
      code: "SEC-CERT-01"
    },
    {
      title: "Web & Application Defense Specialist",
      issuer: "Smartweb Security Academy",
      date: "Certified",
      code: "SEC-AUDIT-02"
    },
    {
      title: "Advanced Full-Stack Architect",
      issuer: "Software Engineering Certification",
      date: "Certified",
      code: "ARCH-DEV-03"
    }
  ] as Certification[]
};
