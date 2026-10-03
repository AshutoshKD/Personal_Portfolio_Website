export const site = {
  url: "https://ashutosh-dubey-portfolio.vercel.app",
  name: "Ashutosh Dubey",
  first: "Ashutosh",
  last: "Dubey",
  role: "Engineer 1, Cloud",
  company: "CrowdStrike",
  location: "Pune, India",
  timezone: "Asia/Kolkata",
  email: "ashutosh.db.mail@gmail.com",
  resume: "/Ashutosh_Dubey_Resume.pdf",
  intro:
    "Every system hides a trade-off between load and latency. I find it before it finds you. Right now: building the internet of AI.",
  about:
    "I'm drawn to the moment a system strains — load rising, trade-offs surfacing, something about to give. I study that edge. Today it leads me to the internet of AI: securing agentic harnesses and connectors, and creating the agents that live there.",
  now: [
    "Building the internet of AI",
    "Securing agentic harnesses & connectors",
    "Creating agents",
  ],
};

export const links = [
  { label: "GitHub", href: "https://github.com/AshutoshKD" },
  { label: "LinkedIn", href: "https://linkedin.com/in/AshutoshKD" },
  { label: "LeetCode", href: "https://leetcode.com/u/ashutosh_44" },
];

export const experience = [
  {
    company: "CrowdStrike",
    role: "Engineer 1, Cloud",
    period: "Apr 2026 — Now",
    place: "Pune",
    points: [
      "Go batch platform that fans out into 10,000+ concurrent per-customer jobs, processing 200M+ asset records a day with checkpoint and resume.",
      "Usage-metering pipeline over a 256-way sharded store, producing billable usage for 18K+ enterprise customers.",
      "Moved product logic into an OpenSearch-backed microservice with its own Kafka stream, migrating 2,800+ customers.",
    ],
  },
  {
    company: "Netcore Cloud",
    role: "Software Engineer",
    period: "Jun 2024 — Mar 2026",
    place: "Mumbai",
    points: [
      "MongoDB CSFLE across 15 microservices handling 2M+ daily events, under 50 ms P99 overhead.",
      "Thompson Sampling path-optimization API that cut latency from 180 ms to 125 ms.",
      "Circuit breakers and rate limiting reduced cascading failures by 80%, with 12 Go services on EKS at 99.9% uptime.",
    ],
  },
];

export const project = {
  name: "PionBid",
  kind: "Real-time bidding platform",
  description:
    "A live auction engine with anti-sniping soft close and deterministic ordering. Each auction runs as a single-writer goroutine state machine, with backpressure-aware fan-out delivering bids in under 100 ms in local tests.",
  stack: ["Go", "Pion WebRTC", "WebSocket", "Next.js", "TypeScript"],
  live: "https://real-time-bidding-platform-web.vercel.app",
  code: "https://github.com/AshutoshKD",
  image: "/screenshots/pionbid.png",
};

export const numbers = [
  { prefix: "", value: 200, decimals: 0, suffix: "M+", label: "asset records processed every day" },
  { prefix: "", value: 18, decimals: 0, suffix: "K+", label: "enterprise customers metered" },
  { prefix: "", value: 1975, decimals: 0, suffix: "", label: "LeetCode rating, Knight, top 5% globally" },
  { prefix: "Top ", value: 2.16, decimals: 2, suffix: "%", label: "worldwide in Google Farewell Round A" },
];

export const award = {
  title: "Best Demonstrated Impact",
  detail: "AI Agents League, Netcore Cloud — for SmartAlert, an AI-powered alerting system.",
};

export const toolkit = [
  { label: "Languages", items: ["Go", "Rust", "Java", "Python"] },
  { label: "Data", items: ["Cassandra", "OpenSearch", "MongoDB", "PostgreSQL", "Redis", "ClickHouse"] },
  { label: "Infrastructure", items: ["Kubernetes", "AWS", "Terraform", "Argo CD", "Docker", "gRPC"] },
  { label: "AI fluency", items: ["Claude Code", "Cursor", "RAG", "Agentic workflows"] },
];

export const education = {
  degree: "B.Tech, Computer Science",
  school: "Technocrats Institute of Technology",
  period: "2020 — 2024",
  gpa: "9.18 / 10",
};
