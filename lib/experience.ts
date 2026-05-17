export interface Role {
  title: string;
  company: string;
  dateRange: string;
  description: string;
  stack: string[];
}

export const experience: Role[] = [
  {
    title: "Software Engineer II",
    company: "Coinbase",
    dateRange: "Feb 2026 – Present",
    description:
      "Focused on compliance automation and the reliability of our core LLM infrastructure. Took a manual review process and rebuilt it as an ML-integrated pipeline, increasing throughput significantly. Part of the on-call rotation — handling production incidents and shipping reliability improvements to the LLM platform and internal AI interfaces.",
    stack: ["langgraph", "fastmcp", "litellm", "mcp", "python", "go"],
  },
  {
    title: "Software Engineer I",
    company: "Coinbase",
    dateRange: "Jul 2024 – Feb 2026",
    description:
      "Built Coinbase's internal LLM platform from early days — multi-cloud across AWS Bedrock, GCP Vertex AI, and Azure, handling hundreds of thousands of daily requests across internal and customer-facing use cases. Deployed an internal LibreChat fork used by 4,000+ employees, built RAG pipelines, agentic systems, and a billing pipeline that surfaced significant untracked infrastructure spend.",
    stack: [
      "rag",
      "pgvector",
      "langgraph",
      "litellm",
      "librechat",
      "aws bedrock",
      "airflow",
      "snowflake",
      "kafka",
      "redis",
      "python",
      "go",
      "typescript",
    ],
  },
  {
    title: "Software Engineer",
    company: "PolicyBazaar",
    dateRange: "Jan 2024 – Jun 2024",
    description:
      "Full-stack role on the customer journey and CX tooling. Built a consolidated agent panel in .NET Core 8 and React that cut case resolution time by 30%+. Migrated the customer journey from .NET Framework to .NET Core, saw a 5% bump in conversion rate.",
    stack: [".net core", "react", "mongodb", "sql"],
  },
  {
    title: "Software Engineer Intern",
    company: "Coinbase",
    dateRange: "May 2023 – Aug 2023",
    description:
      "Worked on the Customer Experience team — revamped the Help Center portal and built an automated data pipeline in Python for AI model ingestion. Returned full-time after graduation.",
    stack: ["python", "go", "typescript", "next.js"],
  },
];
