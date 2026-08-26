export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'fintech' | 'security';
  description: string;
  longDescription?: string;
  url: string;
  role: string;
  technologies: string[];
  metrics?: string;
  featured: boolean;
  imageBg: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  credentialId?: string;
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    fullName: "Akor Anthony Makuochukwu",
    brandName: "Snowtech",
    displayName: "Akor Anthony Makuochukwu (Snowtech)",
    title: "Senior Full-Stack & Mobile App Developer | Cybersecurity Specialist",
    yearsExperience: 6,
    phone: "09045382250",
    phoneFormatted: "+234 904 538 2250",
    whatsappUrl: "https://wa.me/2349045382250?text=Hi%20Anthony,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    email: "contact@snowtech.dev",
    location: "Sangotedo, Lagos Island, Lagos State, Nigeria",
    bio: "Passionate Senior Developer with 6+ years of experience engineering high-performance web platforms, cross-platform mobile applications, and enterprise fintech ecosystems. Combining deep full-stack engineering with certified cybersecurity defense and CTO-level technical leadership.",
    stats: [
      { label: "Years Experience", value: "6+" },
      { label: "Live Client Apps & Platforms", value: "25+" },
      { label: "Security Audits Completed", value: "30+" },
      { label: "Uptime & Scalability", value: "99.9%" },
    ]
  },

  projects: [
    {
      id: "tallypadi",
      title: "TallyPadi",
      category: "fintech",
      description: "Comprehensive financial management & ledger application empowering businesses with automated bookkeeping, inventory tracking, and payment processing.",
      longDescription: "Architected and engineered TallyPadi from the ground up as CTO. Features multi-tenant accounting modules, real-time transaction synchronization, secure payment gateway integrations, and data encryption.",
      url: "https://tallypadi.com/",
      role: "CTO & Lead Architect",
      technologies: ["Next.js", "TypeScript", "Node.js", "React Native", "PostgreSQL", "Tailwind CSS", "PCI-DSS Security"],
      metrics: "Serving 10k+ Active Businesses",
      featured: true,
      imageBg: "from-emerald-900/60 via-slate-900 to-cyan-950/80"
    },
    {
      id: "rmg-emporium",
      title: "RMG Emporium",
      category: "web",
      description: "Modern, high-converting e-commerce web platform engineered for seamless product discovery, fast checkout flow, and inventory management.",
      longDescription: "Built a fully responsive luxury retail web store with server-side rendering, sub-second page loads, automated order tracking, and integrated secure payment gateways.",
      url: "https://www.rmg-emporium.com/",
      role: "Lead Full-Stack Web Developer",
      technologies: ["Next.js", "React", "Node.js", "Tailwind CSS", "Paystack/Stripe", "REST APIs"],
      metrics: "99.8% Faster Page Load",
      featured: true,
      imageBg: "from-purple-900/60 via-slate-900 to-slate-950"
    },
    {
      id: "wilson-elite",
      title: "Wilson Elite",
      category: "web",
      description: "High-tier corporate identity and enterprise solutions hub tailored for premium digital services, enterprise consulting, and client engagement.",
      longDescription: "Designed and developed an elegant brand portal showcasing technical solutions, client portfolios, interactive request portals, and optimized security architecture.",
      url: "https://wilson-elite.com/",
      role: "Principal Architect & Lead Developer",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Vercel Enterprise"],
      metrics: "Custom Enterprise Portal",
      featured: true,
      imageBg: "from-blue-900/60 via-slate-900 to-indigo-950"
    },
    {
      id: "smartweb-security-suite",
      title: "Smartweb Security Portal & Audit Suite",
      category: "security",
      description: "Cybersecurity vulnerability scanner, real-time threat detection interface, and automated web server security hardening system.",
      longDescription: "Developed penetration testing reporting tools and automated compliance monitoring software during technical tenure at Smartweb Security.",
      url: "#",
      role: "Cybersecurity Specialist & Developer",
      technologies: ["Python", "Node.js", "OWASP ZAP", "Linux Hardening", "Docker", "Tailwind CSS"],
      metrics: "Zero Critical Vulnerabilities",
      featured: true,
      imageBg: "from-emerald-950 via-slate-900 to-green-950"
    },
    {
      id: "mobile-wallet-app",
      title: "Cross-Platform Mobile FinTech App",
      category: "mobile",
      description: "Secure iOS & Android mobile banking companion with biometric authentication, instant fund transfers, and push transaction alerts.",
      longDescription: "Built with React Native and custom native modules, featuring end-to-end payload encryption and biometrics.",
      url: "#",
      role: "Lead Mobile App Developer",
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "Biometric Auth", "Node.js API"],
      metrics: "4.8★ App Store Rating",
      featured: false,
      imageBg: "from-cyan-950 via-slate-900 to-blue-950"
    }
  ] as Project[],

  experiences: [
    {
      company: "TallyPadi",
      role: "Chief Technology Officer (CTO)",
      period: "2023 - Present",
      location: "Lagos, Nigeria",
      description: "Steering technological strategy, product architecture, infrastructure scalability, and security posture for TallyPadi's business ledger and financial platforms.",
      achievements: [
        "Architected scalable cloud microservices handling thousands of daily financial transactions.",
        "Implemented end-to-end bank-grade security encryption and compliance protocols.",
        "Led cross-functional web and mobile engineering teams delivering 99.9% uptime."
      ],
      technologies: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Cloud Architecture", "Cybersecurity"]
    },
    {
      company: "Smartweb Security",
      role: "Cybersecurity Engineer & Full-Stack Developer",
      period: "2021 - 2023",
      location: "Lagos, Nigeria",
      description: "Conducted security audits, vulnerability assessments, penetration testing, and built secure web and mobile applications for enterprise clients.",
      achievements: [
        "Remediated high-risk OWASP Top 10 vulnerabilities across client web applications.",
        "Built automated security monitoring dashboards and incident reporting portals.",
        "Trained software engineers on secure coding guidelines and SSL/TLS hardening."
      ],
      technologies: ["Web Application Security", "OWASP", "Python", "Linux Security", "Network Hardening", "JavaScript"]
    },
    {
      company: "Snowtech Consulting",
      role: "Lead Full-Stack & Mobile Developer",
      period: "2018 - Present",
      location: "Sangotedo, Lagos Island, Nigeria",
      description: "Delivering custom Web & Mobile App solutions for startups, retail brands, and corporate platforms across Nigeria and internationally.",
      achievements: [
        "Successfully deployed 25+ web and mobile applications including wilson-elite.com and rmg-emporium.com.",
        "Optimized frontend performance, achieving >95 Lighthouse speed scores on desktop and mobile."
      ],
      technologies: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "RESTful APIs", "MongoDB"]
    }
  ] as ExperienceItem[],

  skillCategories: [
    {
      title: "Web & Frontend Engineering",
      iconName: "Layout",
      skills: [
        { name: "Next.js (App Router)", level: 95, highlight: true },
        { name: "React.js / Redux", level: 95, highlight: true },
        { name: "TypeScript", level: 92, highlight: true },
        { name: "Tailwind CSS / Glassmorphism", level: 95 },
        { name: "HTML5 / Modern CSS3 / SASS", level: 98 },
        { name: "Framer Motion / Web Animations", level: 88 }
      ]
    },
    {
      title: "Mobile App Development",
      iconName: "Smartphone",
      skills: [
        { name: "React Native (iOS & Android)", level: 92, highlight: true },
        { name: "Cross-Platform App Architecture", level: 90 },
        { name: "Native Module Integration", level: 85 },
        { name: "Mobile UI/UX Optimization", level: 92 },
        { name: "App Store & Play Store Deployment", level: 90 }
      ]
    },
    {
      title: "Backend & Cloud Architecture",
      iconName: "Server",
      skills: [
        { name: "Node.js / Express.js", level: 92, highlight: true },
        { name: "RESTful & GraphQL APIs", level: 94 },
        { name: "PostgreSQL / MongoDB / MySQL", level: 88 },
        { name: "Python / FastApi / Flask", level: 85 },
        { name: "Vercel / AWS / Docker", level: 86 }
      ]
    },
    {
      title: "Cybersecurity & Hardening",
      iconName: "ShieldCheck",
      skills: [
        { name: "Web App Penetration Testing (OWASP)", level: 92, highlight: true },
        { name: "Network & Server Security Hardening", level: 90, highlight: true },
        { name: "Data Encryption & SSL/TLS", level: 94 },
        { name: "Vulnerability Assessments & Auditing", level: 88 },
        { name: "PCI-DSS / FinTech Compliance", level: 86 }
      ]
    }
  ],

  certifications: [
    {
      title: "Certified Cybersecurity Specialist",
      issuer: "Cybersecurity Professional Accreditation",
      date: "Certified",
      icon: "ShieldAlert"
    },
    {
      title: "Web & Application Security Specialist",
      issuer: "Smartweb Security Academy",
      date: "Certified",
      icon: "Lock"
    },
    {
      title: "Advanced Full-Stack Engineering",
      issuer: "Full-Stack Development Certification",
      date: "Certified",
      icon: "Code2"
    }
  ] as Certification[]
};
