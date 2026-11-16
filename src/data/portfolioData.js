export const personalInfo = {
  name: "Mahesh Ashok Gavale",
  title: "Java Full Stack Developer & Technical Enablement Engineer",
  tagline: "Architecting resilient distributed Java systems & empowering engineering teams through high-impact developer enablement.",
  location: "India / Remote",
  email: "maheshgavale07@gmail.com",
  phone: "+91 7774834341",
  phoneRaw: "+917774834341",
  github: "https://github.com/Mahigavale",
  linkedin: "https://in.linkedin.com/in/contactmaheshgavale",
  availability: "Open to Full Stack & Enablement Opportunities",
  yearsExperience: "4.5+",
  teamsEnabled: "15+",
  productionServices: "25+",
  uptimeRecord: "99.99%",
  about: `I am a Java Full Stack Developer and Technical Enablement Engineer bridging the gap between deep backend systems and high-velocity developer enablement. As a Full Stack Java Developer, I design, build, and optimize enterprise-grade microservices using Java, Spring Boot, React, and modern cloud architectures. As a Technical Enablement Engineer, I champion Developer Experience (DevEx), build reusable starter archetypes, establish engineering standards, and mentor teams to accelerate delivery cycles safely.`
};

export const skillsData = {
  backend: [
    { name: "Java (11 / 17 / 21)", level: "Expert", icon: "Coffee" },
    { name: "Spring Boot 3 / Cloud", level: "Expert", icon: "Server" },
    { name: "Microservices Architecture", level: "Expert", icon: "Network" },
    { name: "REST & GraphQL APIs", level: "Expert", icon: "Code2" },
    { name: "Hibernate / Spring Data JPA", level: "Advanced", icon: "Database" },
    { name: "Reactive Programming (WebFlux)", level: "Advanced", icon: "Zap" },
    { name: "Apache Kafka / RabbitMQ", level: "Advanced", icon: "Radio" },
    { name: "PostgreSQL / MySQL / Redis", level: "Advanced", icon: "HardDrive" },
  ],
  frontend: [
    { name: "React 18 / 19", level: "Expert", icon: "Layout" },
    { name: "TypeScript / JavaScript ES6+", level: "Advanced", icon: "FileCode" },
    { name: "Tailwind CSS & Modern CSS", level: "Expert", icon: "Palette" },
    { name: "State Management (Redux/Zustand)", level: "Advanced", icon: "Box" },
    { name: "REST / WebSocket Integration", level: "Expert", icon: "Wifi" },
    { name: "Vite / Modern Toolchains", level: "Advanced", icon: "Cpu" },
  ],
  enablement: [
    { name: "Developer Experience (DevEx)", level: "Expert", icon: "Sparkles" },
    { name: "Internal Developer Portals (IDP)", level: "Advanced", icon: "Compass" },
    { name: "Custom SDK & Starter Archetypes", level: "Expert", icon: "Package" },
    { name: "Technical Training & Workshops", level: "Expert", icon: "GraduationCap" },
    { name: "Architecture Decision Records (ADR)", level: "Expert", icon: "BookOpen" },
    { name: "API Governance & Standards", level: "Advanced", icon: "ShieldCheck" },
    { name: "CI/CD Pipeline Automation", level: "Advanced", icon: "Workflow" },
    { name: "Telemetry & Observability", level: "Advanced", icon: "Activity" },
  ],
  devopsCloud: [
    { name: "Docker & Containerization", level: "Advanced", icon: "Container" },
    { name: "Kubernetes / Helm", level: "Intermediate", icon: "Boxes" },
    { name: "GitHub Actions / CI/CD", level: "Expert", icon: "GitBranch" },
    { name: "AWS (ECS, S3, RDS, Lambda)", level: "Advanced", icon: "Cloud" },
    { name: "Prometheus & Grafana", level: "Advanced", icon: "LineChart" },
    { name: "Terraform (IaC Basics)", level: "Intermediate", icon: "Layers" },
  ]
};

export const enablementPillars = [
  {
    id: "devex",
    title: "Developer Productivity & Tooling",
    description: "Designed opinionated Spring Boot starter kits and React scaffold templates, cutting team service onboarding time from 3 weeks down to under 2 days.",
    metric: "85% faster onboarding",
    icon: "Rocket",
    badge: "Tooling & DX"
  },
  {
    id: "architecture",
    title: "Architectural Advisory & Standards",
    description: "Authored enterprise-wide API design standards, Microservices communication guidelines, and security baselines adopted across autonomous squads.",
    metric: "Multi-squad alignment",
    icon: "ShieldAlert",
    badge: "Governance"
  },
  {
    id: "education",
    title: "Technical Enablement & Workshops",
    description: "Conducted hands-on technical sessions on Java 21, Spring Boot microservices, Kafka event streaming, and resilient architecture patterns.",
    metric: "100+ engineers enabled",
    icon: "Users",
    badge: "Knowledge Sharing"
  },
  {
    id: "portal",
    title: "Internal Developer Scaffolds",
    description: "Implemented a unified developer workflow with live API catalogs, automated service registration, and self-service scaffolding.",
    metric: "25+ services standardized",
    icon: "LayoutGrid",
    badge: "Platform Engineering"
  }
];

export const projects = [
  {
    id: "enterprise-starter-archetype",
    title: "Spring Boot Microservice Starter & CLI",
    category: "enablement",
    subtitle: "Enterprise Scaffolding Engine",
    description: "A centralized CLI and Maven archetype that bootstraps production-ready microservices with pre-wired OAuth2 security, OpenTelemetry metrics, Kafka event publishers, and CI/CD pipelines.",
    tech: ["Java 21", "Spring Boot 3", "Maven Plugin", "Docker", "GitHub Actions", "OpenTelemetry"],
    highlights: [
      "Reduced time-to-first-commit from 14 days to 45 minutes",
      "Built-in contract testing with Spring Cloud Contract",
      "Automated Healthcheck and Distributed Tracing out-of-the-box"
    ],
    github: "https://github.com/Mahigavale",
    demo: "#",
    badge: "Enablement Highlight"
  },
  {
    id: "distributed-order-engine",
    title: "High-Throughput Order Orchestrator",
    category: "fullstack",
    subtitle: "Event-Driven Microservices Platform",
    description: "Distributed e-commerce order management system handling 15,000+ RPS with saga orchestration, outbox pattern for guaranteed Kafka message delivery, and real-time dashboard UI.",
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "React", "Tailwind CSS", "Redis"],
    highlights: [
      "Zero-data-loss transactional outbox implementation",
      "Sub-25ms response latency under peak load",
      "Live WebSocket-driven operations dashboard in React"
    ],
    github: "https://github.com/Mahigavale",
    demo: "#",
    badge: "Full Stack Architecture"
  },
  {
    id: "api-governance-hub",
    title: "API Catalog & Contract Testing Portal",
    category: "enablement",
    subtitle: "Self-Service Developer Hub",
    description: "A developer portal aggregating OpenAPI specs across microservices, providing interactive mock environments, linting against API guidelines, and automated breaking-change alerts.",
    tech: ["React", "TypeScript", "Spring Boot Gateway", "OpenAPI Spec", "Spectral Linter", "Docker"],
    highlights: [
      "Eliminated breaking API changes before production release",
      "Interactive Swagger playground with synthetic JWT token generator",
      "Integrated Slack webhook alerting for spec violations"
    ],
    github: "https://github.com/Mahigavale",
    demo: "#",
    badge: "Platform & DevEx"
  },
  {
    id: "realtime-fleet-monitor",
    title: "IoT Telemetry & Analytics Platform",
    category: "fullstack",
    subtitle: "Full Stack Analytics & Alerting",
    description: "Full stack monitoring system ingesting sensor data streams, processing anomaly detection with Spring WebFlux and Kafka Streams, and rendering real-time dashboards in React.",
    tech: ["Java 17", "Spring WebFlux", "Reactive Mongo", "Kafka Streams", "React", "Mapbox GL"],
    highlights: [
      "Processes 80k telemetry events per minute with reactive backpressure",
      "Sub-second alert notification dispatch via Server-Sent Events (SSE)",
      "Interactive responsive dashboard with dark mode and metric filtering"
    ],
    github: "https://github.com/Mahigavale",
    demo: "#",
    badge: "Full Stack System"
  }
];

export const experience = [
  {
    period: "Jun 2025 - Dec 2026",
    role: "Developer & Technical Enablement Engineer",
    company: "Unique System Skills",
    location: "Pune / Remote",
    summary: "Leading full-stack development and developer enablement initiatives, bridging enterprise backend systems with accelerated engineering workflows, reusable architectural starters, and squad mentoring.",
    achievements: [
      "Engineered resilient Java & Spring Boot microservices and modern frontend architectures for enterprise clients.",
      "Spearheaded technical enablement, establishing reusable scaffolding patterns, coding standards, and developer productivity tooling.",
      "Facilitated hands-on workshops and knowledge-sharing guilds for engineering teams on modern Java, microservices patterns, and clean code principles."
    ],
    skills: ["Java", "Spring Boot", "Technical Enablement", "React", "Microservices", "DevEx", "CI/CD", "Docker"]
  },
  {
    period: "Mar 2023 - May 2025",
    role: "Java Full Stack Developer",
    company: "Aspire Technology Solutions",
    location: "Pune, India",
    summary: "Architected and delivered end-to-end full stack web applications, scalable REST APIs, and responsive user interfaces.",
    achievements: [
      "Designed and developed scalable RESTful microservices using Spring Boot, Hibernate/JPA, and relational databases with optimized query performance.",
      "Implemented modular, responsive frontend components using React, modern JavaScript, and CSS frameworks to deliver smooth user experiences.",
      "Collaborated in Agile sprints, performed code reviews, and integrated CI/CD deployment pipelines ensuring high code quality."
    ],
    skills: ["Java 17", "Spring Boot", "Hibernate / JPA", "React", "REST APIs", "PostgreSQL / MySQL", "Docker"]
  },
  {
    period: "Jun 2022 - Feb 2023",
    role: "Junior Java Developer",
    company: "LTIMindtree",
    location: "Pune / Mumbai, India",
    summary: "Contributed to enterprise backend systems development, defect triage, REST API implementations, and automated testing.",
    achievements: [
      "Developed and maintained server-side components using Java and Spring framework following enterprise design patterns.",
      "Wrote comprehensive unit and integration tests using JUnit and Mockito to enhance test coverage and reduce production defects.",
      "Collaborated closely with cross-functional teams to troubleshoot issues, optimize API response times, and participate in daily Agile ceremonies."
    ],
    skills: ["Java", "Spring Framework", "RESTful APIs", "JUnit / Mockito", "SQL", "Git", "Agile"]
  }
];

export const testimonialsOrMetrics = [
  {
    quote: "Mahesh brings an exceptional blend of solid Java engineering and genuine dedication to technical enablement. His contributions significantly improved our team's delivery velocity.",
    author: "Engineering Lead",
    title: "Unique System Skills",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "A dedicated Full Stack Developer who writes clean, maintainable Spring Boot and React code with a deep respect for system architecture and performance.",
    author: "Technical Project Manager",
    title: "Aspire Technology Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  }
];
