export const siteConfig = {
  name: "AdForge",
  tagline: "Simplify Your Facebook Advertising Workflow",
  description:
    "Create, review, publish, and monitor advertising campaigns through one centralized workspace powered by Meta's Marketing API.",
  subDescription:
    "AdForge helps authorized businesses and advertising teams manage campaign configuration and performance across their connected advertising resources.",
  url: "https://ad-forge-pi.vercel.app",
  contactEmail: "s.butsay@gmail.com",
  // Must match the name confirmed by official business verification documents, letter-for-
  // letter — do not append "individual entrepreneur"/"sole proprietor"/"FOP" or similar unless
  // that status and wording is itself confirmed by those documents (Сеньор, 2026-09-22).
  legalEntityName: "Буцай Олександр Геннадійович",
};

export const campaignManagementCards = [
  {
    title: "Campaigns",
    description: "Create and organize advertising campaigns from a centralized workspace.",
  },
  {
    title: "Ad Sets",
    description: "Configure budgets, schedules, targeting, and optimization settings.",
  },
  {
    title: "Ads & Creatives",
    description: "Create advertising creatives and associate them with campaigns and ad sets.",
  },
];

export const workflowSteps = ["Prepare", "Import", "Validate", "Review", "Publish"];

export const performanceItems = [
  "Campaign performance",
  "Ad Set performance",
  "Ad performance",
  "Advertising insights",
];

export const howItWorks = [
  {
    title: "Connect",
    description: "Connect authorized advertising resources to the platform.",
  },
  {
    title: "Configure",
    description: "Configure your campaign, ad set and advertising creative.",
  },
  {
    title: "Review",
    description: "Review campaign settings and advertising assets before publication.",
  },
  {
    title: "Publish",
    description: "Publish your advertising campaign through the connected Meta advertising resources.",
  },
  {
    title: "Monitor",
    description: "Review campaign performance and advertising insights.",
  },
];

export const faqs = [
  {
    question: "Does the platform use Meta's API?",
    answer: "Yes. Advertising campaign operations and campaign insights are performed through Meta's Marketing API.",
  },
  {
    question: "Does the platform manage Facebook Pages?",
    answer:
      "The platform allows authorized users to select an accessible Facebook Page as an advertising identity. It does not provide general Page content management functionality.",
  },
  {
    question: "Does the platform create Product Catalogs?",
    answer: "No. The platform works with existing Product Catalogs that are already available to authorized advertising resources.",
  },
  {
    question: "Can I import campaign configurations from spreadsheets?",
    answer: "Yes. The platform supports structured campaign configuration workflows using Excel and Google Sheets templates.",
  },
  {
    question: "Who can use the platform?",
    answer:
      "The platform is intended for authorized businesses and advertising teams with appropriate access to the Meta advertising resources they connect.",
  },
  {
    question: "Is the platform affiliated with Meta?",
    answer: "No. The platform is an independent software product and is not affiliated with or endorsed by Meta Platforms, Inc.",
  },
];
