import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft, Mail } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const BientotDisponible = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Bientôt disponible – LirElia"
        description="Cette page arrive très prochainement. Laissez-nous votre email ou revenez bientôt."
      />
      {/* Pas de canonical pour les pages temporaires */}
      <Header />
      <main id="main-content" className="flex-1 flex items-center justify-center py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            {/* Illustration */}
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Clock className="w-12 h-12 text-primary" aria-hidden="true" />
            </div>

            {/* Titre */}
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bientôt disponible sur LirElia
            </h1>

            {/* Sous-texte */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
              Cette page arrive très prochainement. Laissez-nous votre email ou revenez bientôt.
            </p>

            {/* Ligne décorative */}
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-10" />

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/">
                  <ArrowLeft className="w-5 h-5" />
                  Retour à l'accueil
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact-conseil">
                  <Mail className="w-5 h-5" />
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BientotDisponible;
