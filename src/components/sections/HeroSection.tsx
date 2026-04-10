import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image-800.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Illustration aquarelle sur le thème de la vision"
          className="w-full h-full object-cover opacity-50"
          loading="eager"
          fetchPriority="high"
          width={1440}
          height={600} />
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
      </div>

      <div className="container relative py-20 lg:py-28">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-8 animate-fade-in">
            <span className="text-lg font-semibold">25 ans d'expertise en basse vision</span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Lire et Voir{" "}
            <span className="text-secondary">Autrement</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 max-w-3xl animate-slide-up delay-100">
            Accompagnement basse vision pour les patients et leurs aidants. Continuer à vivre pleinement avec une DMLA, un glaucome , c'est possible.
          
          </p>

          {/* Value proposition */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-primary-foreground/20 animate-slide-up delay-200">
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Ici, vous trouverez une approche pratique : comprendre la basse vision, faire un bilan fonctionnel, choisir des loupes, des lampes, des aides utiles au quotidien.
            
            </p>
            <p className="text-base text-primary-foreground/70 mt-3 italic">
              Important : nous ne réalisons pas de diagnostic médical. Le suivi médical reste assuré par votre ophtalmologiste.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact-conseil">
                <Calendar className="w-6 h-6" />
                Prendre rendez-vous
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/bilans-bassevision">
                <BookOpen className="w-6 h-6" />
                Découvrir les bilans
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))" />
          
        </svg>
      </div>
    </section>);

};

export default HeroSection;