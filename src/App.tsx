import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useCartSync } from "@/hooks/useCartSync";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsentWrapper from "./components/CookieConsentWrapper";

// Critical: load eagerly for LCP
import Index from "./pages/Index";

// Lazy-loaded pages for code splitting
const NotFound = lazy(() => import("./pages/NotFound"));
const ComprendreBasseVision = lazy(() => import("./pages/ComprendreBasseVision"));
const MaladiesYeux = lazy(() => import("./pages/MaladiesYeux"));
const VivreBasseVision = lazy(() => import("./pages/VivreBasseVision"));
const Club = lazy(() => import("./pages/Club"));
const AidesLecture = lazy(() => import("./pages/AidesLecture"));
const LoupesVerre = lazy(() => import("./pages/products/LoupesVerre"));
const LoupesElectroniques = lazy(() => import("./pages/products/LoupesElectroniques"));
const Lampes = lazy(() => import("./pages/products/Lampes"));
const TeleAgrandisseurs = lazy(() => import("./pages/products/TeleAgrandisseurs"));
const ContactConseil = lazy(() => import("./pages/ContactConseil"));
const Bilans = lazy(() => import("./pages/Bilans"));
const BilanEssentiel = lazy(() => import("./pages/bilans/BilanEssentiel"));
const BilanExpert = lazy(() => import("./pages/bilans/BilanExpert"));
const BilanSuivi = lazy(() => import("./pages/bilans/BilanSuivi"));
const ContactBilan = lazy(() => import("./pages/ContactBilan"));
const Glaucome = lazy(() => import("./pages/maladies/Glaucome"));
const DMLA = lazy(() => import("./pages/maladies/DMLA"));
const Cataracte = lazy(() => import("./pages/maladies/Cataracte"));
const Nystagmus = lazy(() => import("./pages/maladies/Nystagmus"));
const RetinitePigmentaire = lazy(() => import("./pages/maladies/RetinitePigmentaire"));
const RetinopathieDiabetique = lazy(() => import("./pages/maladies/RetinopathieDiabetique"));
const Myopie = lazy(() => import("./pages/maladies/Myopie"));
const Hypermetropie = lazy(() => import("./pages/maladies/Hypermetropie"));
const Astigmatisme = lazy(() => import("./pages/maladies/Astigmatisme"));
const Presbytie = lazy(() => import("./pages/maladies/Presbytie"));
const BientotDisponible = lazy(() => import("./pages/BientotDisponible"));
const Visiopraticien = lazy(() => import("./pages/Visiopraticien"));
const LivreDmla = lazy(() => import("./pages/LivreDmla"));
const Aidants = lazy(() => import("./pages/Aidants"));
const LivreAidants = lazy(() => import("./pages/LivreAidants"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const CGV = lazy(() => import("./pages/CGV"));
const CharteClub = lazy(() => import("./pages/CharteClub"));
const VisitesDomicile = lazy(() => import("./pages/bilans/VisitesDomicile"));
const LoupeAmelie = lazy(() => import("./pages/products/LoupeAmelie"));
const QuiSommesNous = lazy(() => import("./pages/QuiSommesNous"));
const MaladiesHereditaires = lazy(() => import("./pages/maladies/MaladiesHereditaires"));
const RetinitePigmentaireHereditaire = lazy(() => import("./pages/maladies/hereditaires/RetinitePigmentaire"));
const MaladieDeLeber = lazy(() => import("./pages/maladies/hereditaires/MaladieDeLeber"));
const MaladieDeStargardt = lazy(() => import("./pages/maladies/hereditaires/MaladieDeStargardt"));
const AchromatopsieHereditaire = lazy(() => import("./pages/maladies/hereditaires/Achromatopsie"));
const SyndromeUsher = lazy(() => import("./pages/maladies/hereditaires/SyndromeUsher"));
const Aniridie = lazy(() => import("./pages/maladies/hereditaires/Aniridie"));
const PolitiqueCookies = lazy(() => import("./pages/PolitiqueCookies"));

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/comprendre-basse-vision" element={<ComprendreBasseVision />} />
            <Route path="/maladies-yeux" element={<MaladiesYeux />} />
            <Route path="/maladies-yeux/glaucome" element={<Glaucome />} />
            <Route path="/maladies-yeux/dmla" element={<DMLA />} />
            <Route path="/maladies-yeux/cataracte" element={<Cataracte />} />
            <Route path="/maladies-yeux/nystagmus" element={<Nystagmus />} />
            <Route path="/maladies-yeux/retinite-pigmentaire" element={<RetinitePigmentaire />} />
            <Route path="/maladies-yeux/retinopathie-diabetique" element={<RetinopathieDiabetique />} />
            <Route path="/maladies-yeux/myopie" element={<Myopie />} />
            <Route path="/maladies-yeux/hypermetropie" element={<Hypermetropie />} />
            <Route path="/maladies-yeux/astigmatisme" element={<Astigmatisme />} />
            <Route path="/maladies-yeux/presbytie" element={<Presbytie />} />
            <Route path="/maladies-yeux/maladies-hereditaires" element={<MaladiesHereditaires />} />
            <Route path="/maladies-yeux/maladies-hereditaires/retinite-pigmentaire" element={<RetinitePigmentaireHereditaire />} />
            <Route path="/maladies-yeux/maladies-hereditaires/maladie-de-leber" element={<MaladieDeLeber />} />
            <Route path="/maladies-yeux/maladies-hereditaires/maladie-de-stargardt" element={<MaladieDeStargardt />} />
            <Route path="/maladies-yeux/maladies-hereditaires/achromatopsie" element={<AchromatopsieHereditaire />} />
            <Route path="/maladies-yeux/maladies-hereditaires/syndrome-usher" element={<SyndromeUsher />} />
            <Route path="/maladies-yeux/maladies-hereditaires/aniridie" element={<Aniridie />} />
            <Route path="/vivre-basse-vision" element={<VivreBasseVision />} />
            <Route path="/visiopraticien" element={<Visiopraticien />} />
            <Route path="/aides-lecture-bassevision" element={<AidesLecture />} />
            <Route path="/aides-lecture-bassevision/loupes-verre" element={<LoupesVerre />} />
            <Route path="/aides-lecture-bassevision/loupes-electroniques" element={<LoupesElectroniques />} />
            <Route path="/aides-lecture-bassevision/lampes" element={<Lampes />} />
            <Route path="/aides-lecture-bassevision/tele-agrandisseurs" element={<TeleAgrandisseurs />} />
            <Route path="/boutique/loupe-amelie" element={<LoupeAmelie />} />
            <Route path="/bilans-bassevision" element={<Bilans />} />
            <Route path="/bilans-bassevision/essentiel" element={<BilanEssentiel />} />
            <Route path="/bilans-bassevision/expert" element={<BilanExpert />} />
            <Route path="/bilans-bassevision/suivi" element={<BilanSuivi />} />
            <Route path="/bilans-bassevision/visites-domicile" element={<VisitesDomicile />} />
            <Route path="/rdv-bilan" element={<ContactBilan />} />
            <Route path="/bilans-bassevision/contact" element={<Navigate to="/rdv-bilan" replace />} />
            <Route path="/aides-lecture" element={<Navigate to="/aides-lecture-bassevision" replace />} />
            <Route path="/aides-lecture/*" element={<Navigate to="/aides-lecture-bassevision" replace />} />
            <Route path="/bilans" element={<Navigate to="/bilans-bassevision" replace />} />
            <Route path="/bilans/*" element={<Navigate to="/bilans-bassevision" replace />} />
            <Route path="/contact-conseil" element={<ContactConseil />} />
            <Route path="/club" element={<Club />} />
            <Route path="/livre-dmla-votre-vie-ne-sarrete-pas" element={<LivreDmla />} />
            <Route path="/bientot-disponible" element={<BientotDisponible />} />
            <Route path="/aidants" element={<Aidants />} />
            <Route path="/livre-aider-proche-dmla" element={<LivreAidants />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/charte-club-lirelia" element={<CharteClub />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/politique-cookies" element={<PolitiqueCookies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsentWrapper />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
