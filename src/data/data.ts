export const siteConfig = {
  name: "AdForge",
  tagline: "Bulk campaign automation for Meta Ads",
  description:
    "AdForge automates the creation and management of Facebook and Instagram catalog advertising campaigns — configure once, generate many campaigns from a bulk input, validate against Meta's own rules, and publish in bulk across multiple ad accounts.",
  // TODO (Сеньор): replace with the real domain once it's registered — this is only a
  // placeholder used for metadata/canonical URLs during local development.
  url: "https://www.adforge.example",
  // TODO (Сеньор): replace with a real support mailbox on your own domain before submitting
  // this to Meta for App Review — it appears on the Privacy Policy/Terms pages and the footer.
  contactEmail: "support@adforge.example",
  // TODO (Сеньор): replace with your legal entity name EXACTLY as it appears on your business
  // verification documents (the EDR extract) — Meta checks this matches Business Manager
  // settings and the submitted document letter-for-letter.
  legalEntityName: "[Your legal entity name — FOP/ФОП, as in your EDR extract]",
  legalAddress: "[Your registered business address — as in your EDR extract]",
};

export const features = [
  {
    title: "Bulk campaign generation",
    description:
      "Turn a spreadsheet of rows — country, catalog, product set, budget, media buyer — into fully configured Campaign / Ad Set / Ad structures in one pass, built from a shared, reusable template.",
  },
  {
    title: "Live validation before anything goes to Meta",
    description:
      "Every row is checked against Meta's own field rules before a single API call is made — catalog access, targeting, budgets, duplicate names — so failing rows never block the rows that are ready.",
  },
  {
    title: "Multi-account publishing",
    description:
      "Build a campaign once and launch it across several ad accounts at the same time, or spin up a separate, independently named copy on one specific account — from the same source configuration.",
  },
  {
    title: "Per-row status tracking",
    description:
      "Every generated campaign keeps its own Meta object IDs, validation state, and publish result — a failure on one row never blocks or hides the rest of the batch, and only failed rows are retried.",
  },
  {
    title: "Paused by default",
    description:
      "Every real Campaign, Ad Set and Ad this tool creates in Meta starts PAUSED — nothing goes live until a person on the team reviews it and turns it on.",
  },
  {
    title: "Business Manager-scoped access",
    description:
      "Access to the Marketing API is scoped per Business Portfolio via a System User token — no personal user tokens, no access beyond the ad accounts a team has explicitly been assigned.",
  },
];

export const steps = [
  {
    title: "Configure once",
    description:
      "Set the ad account, Page/Instagram account, catalog, pixel, objective, budget type and bid strategy as a reusable template.",
  },
  {
    title: "Generate from bulk input",
    description:
      "Paste or upload rows — one per campaign — and preview the exact Campaign/Ad Set/Ad names and settings each one will get.",
  },
  {
    title: "Validate the whole batch",
    description:
      "Every row is checked against Meta's own requirements before anything is sent to the Marketing API — no surprises mid-publish.",
  },
  {
    title: "Publish and track results",
    description:
      "Valid rows are created in Meta as paused objects; each row keeps its own Campaign/Ad Set/Ad IDs and status, ready for a person to review and activate.",
  },
];
