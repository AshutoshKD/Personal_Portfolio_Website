export const personalInfo = {
  name: "Ashutosh",
  lastName: "Dubey",
  title: "Software Engineer",
  company: "Netcore Cloud",
  location: "Mumbai, India",
  email: "ashutosh.db.mail@gmail.com",
  phone: "+919890715220",
  tagline: "I build systems that scale beautifully.",
  bio: "Backend engineer passionate about distributed systems & real-time applications",
  github: "https://github.com/AshutoshKD",
  linkedin: "https://linkedin.com/in/ashutosh-dubey-19b469202",
  leetcode: "https://leetcode.com/u/ashutosh_44",
  resumeLink: "/Ashutosh_Dubey_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/AshutoshKD",
  linkedin: "https://linkedin.com/in/ashutosh-dubey-19b469202",
  leetcode: "https://leetcode.com/u/ashutosh_44",
};

export const workExperience = [
  {
    company: "Netcore Cloud",
    role: "Software Engineer",
    period: "Jun 2024 — Present",
    location: "Mumbai",
    highlights: [
      "Integrated MongoDB Client-Side Field-Level Encryption (CSFLE) across distributed microservices, ensuring 100% data confidentiality with minimal 5% latency impact",
      "Created a Path Optimizer API endpoint using Thompson Sampling, improving route computation efficiency by 30%",
      "Built a local frequency capping endpoint in Go using goroutines, channels, and worker-pool concurrency patterns",
      "Designed microservices architecture with rate limiting and circuit breaker patterns, ensuring 99.9% uptime",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science",
  institution: "Technocrats Institute of Technology",
  period: "Jul 2020 - Jun 2024",
  gpa: "9.18/10",
  relevantCoursework: [
    "Data Structures",
    "Algorithms",
    "Operating Systems",
    "DBMS",
    "Computer Networks",
    "System Design",
  ],
};

export const projects = [
  {
    name: "PionBid",
    tagline: "Real-time Auction Platform",
    description: "Live auction platform handling thousands of concurrent bids with anti-sniping protection and sub-100ms response times across distributed nodes.",
    longDescription: "Architected a single-writer, per-auction goroutine state machine with anti-sniping soft-close, deterministic ordering, and backpressure-aware fan-out for high burst traffic.",
    tech: ["Go", "WebRTC", "WebSocket", "Next.js", "Tailwind"],
    status: "live",
    link: "https://real-time-bidding-platform-web.vercel.app",
    image: "/screenshots/pionbid.png",
  },
  {
    name: "MonkeyChat",
    tagline: "P2P Video Communication",
    description: "Peer-to-peer video calling platform with WebRTC achieving 99.9% connection reliability and real-time signaling via Go WebSockets.",
    longDescription: "Engineered WebSocket signaling server handling 1,000+ concurrent sessions with sub-100ms latency. Implemented rate limiting and pprof profiling for production stability.",
    tech: ["Go", "gRPC", "WebRTC", "React", "MySQL", "Docker"],
    status: "live",
    link: "https://monkey-chat.vercel.app",
    image: "/screenshots/monkeychat.png",
  },
  {
    name: "Median",
    tagline: "Publishing Platform",
    description: "Full-stack content platform with secure JWT authentication, optimized database queries, and 60% reduction in authentication errors.",
    longDescription: "Built complete CRUD operations with token-based auth achieving 99.9% success rate. Implemented caching strategies and query optimization for improved performance.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "Maven"],
    status: "github",
    link: "https://github.com/AshutoshKD/Median_App",
    image: "animated",
  },
];

export const achievements = [
  {
    number: "1610",
    label: "Global Rank",
    description: "Google Farewell Round A",
    subtext: "Top 2.16% worldwide",
  },
  {
    number: "1900+",
    label: "LeetCode Rating",
    description: "Competitive Programming",
    subtext: "Institute Rank #3",
  },
  {
    number: "173",
    label: "Worldwide Rank",
    description: "CodeChef Cook-Off",
    subtext: "April 2022 Div 2",
  },
  {
    number: "🏆",
    label: "Best Impact",
    description: "AI Agents League",
    subtext: "SmartAlert Project",
  },
];

export const skills = {
  languages: ["Go", "Java", "Python", "C++", "TypeScript"],
  frameworks: ["Gin", "Spring Boot", "React.js", "gRPC", "REST APIs", "GraphQL"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "ClickHouse"],
  cloudDevOps: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "CI/CD"],
  concepts: ["Concurrency", "Rate Limiting", "Circuit Breaker", "System Design", "Distributed Systems"],
};

export const quote = {
  text: "Code is poetry written for machines to execute and humans to admire.",
  author: "Anonymous",
};
