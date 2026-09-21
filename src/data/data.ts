export const siteConfig = {
  name: "AdForge",
  tagline: "Simplify Your Facebook Advertising Workflow",
  description:
    "Create, manage and monitor Facebook advertising campaigns from one centralized platform using Meta's Marketing API.",
  subDescription: "Built for authorized advertising teams and businesses.",
  // TODO (Сеньор): replace with the real domain once it's registered — this is only a
  // placeholder used for metadata/canonical URLs during local development.
  url: "https://www.adforge.example",
  // TODO (Сеньор): replace with a real support mailbox on your own domain before submitting
  // this to Meta for App Review — it appears on the Privacy Policy/Terms pages and the footer.
  contactEmail: "support@yourdomain.com",
  // TODO (Сеньор): replace with your legal entity name EXACTLY as it appears on your business
  // verification documents (the EDR extract) — Meta checks this matches Business Manager
  // settings and the submitted document letter-for-letter.
  legalEntityName: "Your Company",
  legalAddress: "[Your registered business address — as in your EDR extract]",
};

export const campaignManagementCards = [
  {
    title: "Campaigns",
    description: "Create and organize advertising campaigns from a centralized workspace.",
  },
  {
    title: "Ad Sets",
    description: "Configure budgets, schedules, targeting and optimization settings.",
  },
  {
    title: "Ads & Creatives",
    description: "Create advertising creatives and associate them with your campaigns and ad sets.",
  },
];

export const workflowSteps = ["Spreadsheet", "Import", "Validate", "Review", "Publish"];

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
