import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import ClubHeroSection from "@/components/sections/club/ClubHeroSection";
import ClubAudienceSection from "@/components/sections/club/ClubAudienceSection";
import ClubHowItWorksSection from "@/components/sections/club/ClubHowItWorksSection";
import ClubProgramSection from "@/components/sections/club/ClubProgramSection";
import ClubPricingSection from "@/components/sections/club/ClubPricingSection";
import ClubCharterSection from "@/components/sections/club/ClubCharterSection";
import ClubRegistrationSection from "@/components/sections/club/ClubRegistrationSection";

const Club = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Club Basse Vision LirElia : Rencontres Gratuites"
        description="Rejoignez le Club LirElia : échanges gratuits entre malvoyants et aidants, mini-conférences et astuces du quotidien. En visioconférence, sans engagement."
        canonicalPath="/club"
      />
      <Header />
      <main id="main-content" className="flex-1">
        <ClubHeroSection />
        <ClubAudienceSection />
        <ClubHowItWorksSection />
        <ClubProgramSection />
        <ClubPricingSection />
        <ClubCharterSection />
        <ClubRegistrationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Club;
