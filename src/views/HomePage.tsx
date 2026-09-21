import { Header } from "./Header";
import { MainSection } from "./MainSection";
import { CampaignManagementSection } from "./CampaignManagementSection";
import { WorkflowSection } from "./WorkflowSection";
import { CatalogsSection } from "./CatalogsSection";
import { PageIdentitySection } from "./PageIdentitySection";
import { PerformanceSection } from "./PerformanceSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { SecuritySection } from "./SecuritySection";
import { FAQSection } from "./FAQSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <CampaignManagementSection />
        <WorkflowSection />
        <CatalogsSection />
        <PageIdentitySection />
        <PerformanceSection />
        <HowItWorksSection />
        <SecuritySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
