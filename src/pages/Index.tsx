import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { ORGANIZATION_JSONLD, WEBSITE_JSONLD } from "@/lib/seo";
import HeroSection from "@/components/sections/HeroSection";
import PathwaysSection from "@/components/sections/PathwaysSection";
import AppointmentSection from "@/components/sections/AppointmentSection";
import SituationsSection from "@/components/sections/SituationsSection";
import BilansProduitsSection from "@/components/sections/BilansProduitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BooksSection from "@/components/sections/BooksSection";
import ClubSection from "@/components/sections/ClubSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="LirElia – Bilans Basse Vision & Aides à la Lecture"
        description="Vous perdez la vue ? Retrouvez votre autonomie de lecture grâce à nos bilans basse vision et aides adaptées (DMLA, glaucome). 25 ans d'expertise à Paris."
        canonicalPath="/"
        jsonLd={[
          ORGANIZATION_JSONLD,
          WEBSITE_JSONLD,
          {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "LirElia",
            "description": "Accompagnement expert en basse vision, DMLA et glaucome. Bilans fonctionnels et aides à la lecture.",
            "medicalSpecialty": "Optometry",
            "knowsAbout": ["Basse vision", "DMLA", "Glaucome", "Aides à la lecture", "Bilans basse vision"]
          }
        ]}
      />
      <Header />
      <main id="main-content">
        <HeroSection />
        <PathwaysSection />
        <AppointmentSection />
        <SituationsSection />
        <BilansProduitsSection />
        <TestimonialsSection />
        <BooksSection />
        <ClubSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
