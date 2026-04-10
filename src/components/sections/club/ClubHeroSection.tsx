import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Video, Users, Check, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    title: "Échanges",
    description: "Astuces du quotidien",
  },
  {
    icon: Video,
    title: "Visioconférences",
    description: "Mini-conférences thématiques",
  },
  {
    icon: Users,
    title: "Rencontres",
    description: "Lien social, sans pression",
  },
];

const reassurances = [
  "Ouvert à tous : clients et non-clients",
  "Animation supervisée (cadre bienveillant)",
  "Accessible via Zoom (aide à la connexion si besoin)",
];

const ClubHeroSection = () => {
  const scrollToProgram = () => {
    document.getElementById("program")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
      </div>

      <div className="container relative px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6">
              <span className="font-semibold">Gratuit</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 break-words overflow-hidden">
              Club LirElia : rencontres & échanges pour{" "}
              <span className="text-secondary">rompre l'isolement</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Un espace d'échanges entre personnes concernées et aidants : 
              astuces, retours d'expérience, mini-conférences et moments simples, 
              en visioconférence, avec un animateur.
            </p>

            {/* Benefits Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-primary-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/80">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Button - scroll to program */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="heroOutline" size="lg" onClick={scrollToProgram}>
                Voir le programme du mois
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Reassurance Block */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <ul className="space-y-3">
                {reassurances.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <span className="text-lg text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Video */}
          <div className="hidden lg:block">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-4 border border-primary-foreground/20">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <video
                  src="/videos/club-lirelia-hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                  aria-label="Aperçu d'une session du Club LirElia en visioconférence"
                  width={640}
                  height={480}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default ClubHeroSection;
