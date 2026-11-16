export const personalInfo = {
  name: "Alex Morgan",
  title: "Java Full Stack Developer & Technical Enablement Engineer",
  tagline: "Architecting resilient distributed systems & empowering engineering teams with high-impact developer tooling.",
  location: "San Francisco, CA / Remote",
  email: "alex.developer@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  availability: "Open to High-Impact Roles & Enablement Consulting",
  yearsExperience: "6+",
  teamsEnabled: "25+",
  productionServices: "40+",
  uptimeRecord: "99.99%",
  about: `I am a hybrid software engineer bridging the gap between deep backend systems and high-velocity developer enablement. As a Full Stack Java Developer, I design, build, and optimize enterprise-grade microservices using Java, Spring Boot, React, and cloud-native infrastructure. As a Technical Enablement Engineer, I champion Developer Experience (DevEx), build reusable starter archetypes and internal developer platforms (IDPs), author technical blueprints, and mentor engineering teams to accelerate delivery cycles safely.`
};

export const skillsData = {
  backend: [
    { name: "Java (17 / 21)", level: "Expert", icon: "Coffee" },
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
    description: "Authored enterprise-wide API design standards, Microservices communication guidelines, and security baselines adopted across 14 autonomous squads.",
    metric: "14 squads aligned",
    icon: "ShieldAlert",
    badge: "Governance"
  },
  {
    id: "education",
    title: "Technical Evangelism & Workshops",
    description: "Conducted hands-on workshops on Java 21 Virtual Threads, Kafka event modeling, and resilient microservices patterns with 300+ engineer attendees.",
    metric: "300+ engineers trained",
    icon: "Users",
    badge: "Knowledge Sharing"
  },
  {
    id: "portal",
    title: "Internal Developer Portal (IDP)",
    description: "Implemented a unified developer hub with live API catalogs, automated service registration, and self-service cloud infrastructure provisioning.",
    metric: "40+ services cataloged",
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
    github: "https://github.com",
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
      "Sub-25ms response latency under peak flash sale load",
      "Live WebSocket-driven operations dashboard in React"
    ],
    github: "https://github.com",
    demo: "#",
    badge: "Full Stack Architecture"
  },
  {
    id: "api-governance-hub",
    title: "API Catalog & Contract Testing Portal",
    category: "enablement",
    subtitle: "Self-Service Developer Hub",
    description: "A developer portal aggregating OpenAPI specs across 50+ microservices, providing interactive mock environments, linting against company API guidelines, and automated breaking-change alerts.",
    tech: ["React", "TypeScript", "Node/Java Gateway", "OpenAPI Spec", "Spectral Linter", "Docker"],
    highlights: [
      "Eliminated 90% of breaking API changes before production release",
      "Interactive Swagger playground with synthetic JWT token generator",
      "Integrated Slack webhook alerting for spec violations"
    ],
    github: "https://github.com",
    demo: "#",
    badge: "Platform & DevEx"
  },
  {
    id: "realtime-fleet-monitor",
    title: "IoT Telemetry & Fleet Management Platform",
    category: "fullstack",
    subtitle: "Full Stack Analytics & Alerting",
    description: "Full stack monitoring system ingesting sensor data streams, processing anomaly detection with Spring WebFlux and Kafka Streams, and rendering real-time geo-spatial maps in React.",
    tech: ["Java 17", "Spring WebFlux", "Reactive Mongo", "Kafka Streams", "React", "Mapbox GL"],
    highlights: [
      "Processes 80k telemetry events per minute with reactive backpressure",
      "Sub-second alert notification dispatch via Server-Sent Events (SSE)",
      "Interactive responsive dashboard with dark mode and metric filtering"
    ],
    github: "https://github.com",
    demo: "#",
    badge: "Full Stack System"
  }
];

export const experience = [
  {
    period: "2023 - Present",
    role: "Senior Technical Enablement Engineer & Full Stack Lead",
    company: "CloudScale Technologies",
    location: "San Francisco / Remote",
    summary: "Leading technical enablement and architectural standards for 120+ engineers across 15 squad teams while contributing core features to the unified enterprise platform.",
    achievements: [
      "Designed and deployed the company-wide Golden Path template for Spring Boot & React services, driving a 70% decrease in deployment pipeline failures.",
      "Spearheaded Java 21 migration initiative, transitioning 35 legacy microservices to Virtual Threads, trimming memory footprints by 30%.",
      "Organized bi-weekly 'Tech Craftsmanship' guilds and interactive sandbox labs on Kafka event architectures and zero-trust security."
    ],
    skills: ["Java 21", "Spring Boot", "React", "Developer Experience", "Kafka", "Platform Architecture"]
  },
  {
    period: "2021 - 2023",
    role: "Java Full Stack Developer",
    company: "FinVantage Solutions",
    location: "New York, NY",
    summary: "Built and optimized mission-critical payment orchestration pipelines and customer-facing banking portals handling over $40M daily transactional volume.",
    achievements: [
      "Implemented idempotent payment processing microservices using Spring Boot, Hibernate, and PostgreSQL with strict ACID guarantees.",
      "Engineered customer onboarding web application using React, reducing KYC completion friction and improving checkout conversions by 22%.",
      "Authored custom Gradle plugins and mock server containers to accelerate integration test execution speed by 4x."
    ],
    skills: ["Java 11/17", "Spring Boot", "PostgreSQL", "React", "Docker", "JUnit 5 / Testcontainers"]
  },
  {
    period: "2019 - 2021",
    role: "Software Engineer",
    company: "Nexus Software Labs",
    location: "Boston, MA",
    summary: "Developed RESTful APIs, batch processing jobs, and internal admin portals for enterprise healthcare clients.",
    achievements: [
      "Migrated monolithic Spring MVC application into 6 decoupled microservices deployed on AWS ECS.",
      "Built responsive analytical dashboards using React and Chart.js for hospital workflow monitoring.",
      "Standardized Swagger/OpenAPI documentation and wrote automated Postman collection test runners."
    ],
    skills: ["Java", "Spring Boot", "MySQL", "JavaScript", "AWS", "REST APIs"]
  }
];

export const testimonialsOrMetrics = [
  {
    quote: "Alex transformed how our backend teams build services. The starter archetypes alone saved our team months of boilerplating and eliminated constant security review bottlenecks.",
    author: "Elena Rostova",
    title: "VP of Engineering, CloudScale",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "A rare breed of engineer who possesses both deep Java systems architecture prowess and the empathy and clarity required to level up entire engineering organizations.",
    author: "David Chen",
    title: "Principal Architect, FinVantage",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  }
];
