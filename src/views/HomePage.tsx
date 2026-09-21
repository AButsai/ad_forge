import { Header } from "./Header";
import { MainSection } from "./MainSection";
import { FeaturesSection } from "./FeaturesSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { WhoSection } from "./WhoSection";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WhoSection />
      </main>
      <Footer />
    </>
  );
}
