export const PROFILE = {
  name: "Ishita Gupta",
  title: "Cloud & DevOps Engineer",
  tagline: "Cloud Infrastructure • Automation • CI/CD • Containers",
  email: "ishitagupta605@gmail.com",
  github: "https://github.com/ixhita12",
  githubHandle: "ixhita12",
  linkedin: "https://linkedin.com/in/ishita-gupta-devops",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export type SkillCategory = {
  id: string;
  name: string;
  blurb: string;
  tools: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "cloud",
    name: "Cloud",
    blurb: "Provisioning and running workloads on managed cloud platforms.",
    tools: ["Microsoft Azure", "AWS", "Azure Resource Groups", "EC2", "S3", "IAM", "VPC"],
  },
  {
    id: "iac",
    name: "Infrastructure as Code",
    blurb: "Describing infrastructure in code so environments stay repeatable.",
    tools: ["Terraform", "Ansible (basics)", "YAML", "JSON"],
  },
  {
    id: "cicd",
    name: "CI/CD",
    blurb: "Pipelines that build, test and ship on every push.",
    tools: ["GitHub Actions", "Jenkins", "Azure DevOps", "SonarQube"],
  },
  {
    id: "containers",
    name: "Containers & Orchestration",
    blurb: "Packaging applications and running them at scale.",
    tools: ["Docker", "Docker Compose", "Kubernetes", "AKS"],
  },
  {
    id: "monitoring",
    name: "Monitoring & Operations",
    blurb: "Keeping visibility on what infrastructure is actually doing.",
    tools: ["Prometheus", "Grafana", "Grafana Loki", "Azure Monitor", "CloudWatch", "Alerting"],
  },
  {
    id: "automation",
    name: "Automation & Scripting",
    blurb: "Removing repetitive manual steps from day-to-day operations.",
    tools: ["Linux (Ubuntu)", "Bash", "PowerShell", "Azure CLI", "Python", "SSH"],
  },
  {
    id: "vcs",
    name: "Version Control",
    blurb: "Branching and review workflows that keep changes traceable.",
    tools: ["Git", "GitHub", "Pull Requests", "Jira"],
  },
];

export const PIPELINE_STAGES = [
  { name: "CODE", tools: ["Git", "GitHub"] },
  { name: "BUILD", tools: ["Jenkins", "GitHub Actions", "Azure DevOps"] },
  { name: "TEST", tools: ["Pipeline tests", "Gradle"] },
  { name: "QUALITY", tools: ["SonarQube"] },
  { name: "CONTAINERIZE", tools: ["Docker", "Compose"] },
  { name: "DEPLOY", tools: ["Terraform", "Kubernetes", "AKS"] },
  { name: "MONITOR", tools: ["Prometheus", "Grafana", "Azure Monitor"] },
];

export const INFRA_NODES = [
  { id: "dev", label: "Developer", note: "A change starts as a commit on a branch." },
  { id: "gh", label: "GitHub", note: "Source of truth for code and pipeline definitions." },
  { id: "cicd", label: "CI/CD", note: "Automated build, test and quality gates on every push." },
  { id: "tf", label: "Terraform", note: "Infrastructure as Code for repeatable provisioning." },
  { id: "cloud", label: "Azure / AWS", note: "Cloud platform hosting networks and compute." },
  { id: "k8s", label: "Docker / Kubernetes", note: "Container orchestration and workload management." },
  { id: "app", label: "Application", note: "The running service users actually reach." },
  { id: "mon", label: "Monitoring", note: "Visibility into application and infrastructure health." },
];

export type Project = {
  name: string;
  repo: string;
  slug: string;
  tags: string[];
  category: "Cloud" | "DevOps" | "Automation" | "AI" | "Development" | "Other";
  featured?: boolean;
  short: string;
  built: string;
  concepts: string[];
};

export const PROJECTS: Project[] = [
  {
    name: "terraform-github-actions",
    slug: "terraform-github-actions",
    repo: "https://github.com/ixhita12/terraform-github-actions",
    tags: ["Terraform", "GitHub Actions", "IaC", "CI/CD"],
    category: "Cloud",
    featured: true,
    short: "Terraform configurations driven through a GitHub Actions workflow instead of local runs.",
    built:
      "A workflow that runs the Terraform lifecycle from CI, so infrastructure changes are proposed, reviewed and applied from the repository rather than someone's laptop.",
    concepts: ["Infrastructure as Code", "Plan/apply in CI", "Reviewable infra changes", "Pipeline secrets"],
  },
  {
    name: "terraform-docker-container",
    slug: "terraform-docker-container",
    repo: "https://github.com/ixhita12/terraform-docker-container",
    tags: ["Terraform", "Docker", "IaC"],
    category: "DevOps",
    featured: true,
    short: "Provisioning and tearing down a containerized web server entirely through Terraform.",
    built:
      "Terraform configuration that declares a Docker image and container as code, exercising the full init → plan → apply → destroy cycle so the environment can be recreated identically.",
    concepts: ["Declarative provisioning", "Terraform providers", "State & lifecycle", "Repeatable environments"],
  },
  {
    name: "git-devops-workflow-project",
    slug: "git-devops-workflow-project",
    repo: "https://github.com/ixhita12/git-devops-workflow-project",
    tags: ["Git", "GitHub", "Workflow"],
    category: "DevOps",
    featured: true,
    short: "A practice ground for branching, merging and collaborative Git workflows used in DevOps teams.",
    built:
      "A repository set up to rehearse the day-to-day Git motions a DevOps engineer relies on — feature branches, merges, conflict resolution and a clean commit history.",
    concepts: ["Branching strategy", "Merge & conflict handling", "Commit hygiene", "Collaboration flow"],
  },
  {
    name: "aws-ec2-web-server",
    slug: "aws-ec2-web-server",
    repo: "https://github.com/ixhita12/aws-ec2-web-server",
    tags: ["AWS", "EC2", "Linux", "Security Groups"],
    category: "Cloud",
    featured: true,
    short: "A static site served from an EC2 instance with SSH access and security groups configured by hand.",
    built:
      "An end-to-end walkthrough of launching a Linux instance on AWS, configuring the web server, locking down inbound rules and reaching the site publicly.",
    concepts: ["EC2 lifecycle", "Security groups", "SSH key access", "Linux server setup"],
  },
  {
    name: "CodeAlpha-DevOps-Learning-Hub",
    slug: "codealpha-devops-learning-hub",
    repo: "https://github.com/ixhita12/CodeAlpha-DevOps-Learning-Hub",
    tags: ["DevOps", "Documentation", "Learning"],
    category: "DevOps",
    short: "A collected set of DevOps exercises and notes gathered while working through an internship track.",
    built:
      "A hub repository that keeps hands-on DevOps tasks, notes and references in one place so each concept has a worked example attached to it.",
    concepts: ["Structured learning", "Documentation", "Hands-on practice"],
  },
  {
    name: "CodeAlpha_Java_Gradle",
    slug: "codealpha-java-gradle",
    repo: "https://github.com/ixhita12/CodeAlpha_Java_Gradle",
    tags: ["Java", "Gradle", "Build"],
    category: "Development",
    short: "A Java project wired up with Gradle to explore build automation from the developer side.",
    built:
      "A Gradle-managed Java application used to understand how build tools compile, test and package code — the step a CI pipeline automates.",
    concepts: ["Build automation", "Dependency management", "Build lifecycle"],
  },
  {
    name: "AI-Autonomous-Research-Agent",
    slug: "ai-autonomous-research-agent",
    repo: "https://github.com/ixhita12/AI-Autonomous-Research-Agent",
    tags: ["Python", "AI", "Automation"],
    category: "AI",
    short: "An experiment in getting an agent to break down a research question and work through it on its own.",
    built:
      "A Python experiment exploring autonomous agent behaviour — planning steps, gathering information and assembling a result without manual intervention at each turn.",
    concepts: ["Agent loops", "Task decomposition", "Python scripting"],
  },
  {
    name: "daily-report-management",
    slug: "daily-report-management",
    repo: "https://github.com/ixhita12/daily-report-management",
    tags: ["Application", "CRUD", "Reporting"],
    category: "Development",
    short: "A small application for recording and managing daily work reports.",
    built:
      "An application built around creating, storing and reviewing daily reports — useful practice in modelling data and shipping a working tool end to end.",
    concepts: ["Data modelling", "CRUD flows", "Application structure"],
  },
  {
    name: "avi-test-automation",
    slug: "avi-test-automation",
    repo: "https://github.com/ixhita12/avi-test-automation",
    tags: ["Testing", "Automation"],
    category: "Automation",
    short: "Automated test scripts written to replace repetitive manual verification.",
    built:
      "A test automation repository focused on scripting checks that would otherwise be run by hand — the same instinct that drives pipeline test stages.",
    concepts: ["Test scripting", "Repeatable verification", "Automation mindset"],
  },
];

export const PROJECT_FILTERS = ["All", "Cloud", "DevOps", "Automation", "AI", "Development", "Other"] as const;

export const TIMELINE = [
  {
    role: "DevOps Engineer — Intern",
    org: "DevOps Insiders",
    period: "Apr 2025 — Present",
    body: "Working day to day with Azure infrastructure, pipelines and containers — provisioning Linux VMs, codifying resources with Terraform and wiring build/deploy automation around real applications.",
    chips: ["Azure", "Terraform", "CI/CD", "Docker", "Kubernetes", "Monitoring", "Automation"],
  },
  {
    role: "Master of Computer Applications",
    org: "INMANTEC Institutions (AKTU)",
    period: "2024 — 2026",
    body: "Deepening the fundamentals behind the tooling — systems, networking and databases — while building infrastructure projects alongside coursework.",
    chips: ["Linux", "Networking", "Databases", "Python"],
  },
  {
    role: "Bachelor of Computer Applications",
    org: "Gautam Buddha University",
    period: "2021 — 2024",
    body: "Where the shift from writing applications to caring about how they get built, shipped and kept running started.",
    chips: ["Programming", "Java", "SQL", "Git"],
  },
];

export const LEARNING = [
  { topic: "Advanced Kubernetes", state: "Deepening" },
  { topic: "Terraform Modules", state: "Building" },
  { topic: "Ansible Automation", state: "Learning" },
  { topic: "Monitoring & Observability", state: "Deepening" },
  { topic: "Cloud Security", state: "Learning" },
  { topic: "DevSecOps Practices", state: "Exploring" },
];

export const SERVICES = [
  { title: "Cloud Setup", body: "Getting a small Azure or AWS footprint organised — resource groups, networking basics and access." },
  { title: "Linux Server Setup", body: "Provisioning and configuring Ubuntu servers with sane SSH and firewall defaults." },
  { title: "Dockerization", body: "Packaging an existing application into containers with a reproducible build." },
  { title: "Basic CI/CD Setup", body: "A first pipeline in GitHub Actions or Jenkins that builds, tests and deploys on push." },
  { title: "Terraform Infrastructure", body: "Turning click-ops setups into version-controlled Terraform configuration." },
  { title: "Git/GitHub Workflows", body: "Branching, review and release conventions a small team can actually stick to." },
  { title: "Cloud Deployment Support", body: "Help getting an app from a local machine onto a cloud host reliably." },
  { title: "Basic Monitoring Setup", body: "Prometheus and Grafana dashboards so failures are visible before users report them." },
];
