import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, AlertCircle, Users } from "lucide-react";

const benefits = [
  "Pour échanger des solutions concrètes (lecture, déplacements, fatigue visuelle…)",
  "Pour découvrir des outils et nouveautés (aides visuelles, applis, IA)",
  "Pour retrouver une routine sociale simple, depuis chez soi",
];

const ClubAudienceSection = () => {
  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background" id="audience">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            À qui s'adresse le Club ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Benefits */}
            <Card variant="elevated" className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Pour malvoyants et proches
                  </h3>
                </div>

                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      <span className="text-lg text-foreground/90 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Right Column - Important Notice */}
            <Card variant="highlighted" className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-bold text-lg">
                    Important
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Ce n'est pas un site de rencontre !
                </h3>
                
                <p className="text-lg text-foreground/90 leading-relaxed">
                  C'est un espace d'échanges et de convivialité, animé et modéré, 
                  centré sur le partage d'expérience autour de la basse vision.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="secondary" size="lg" onClick={scrollToRegistration}>
              <Users className="w-6 h-6" />
              Je m'inscris même si je ne suis pas client
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubAudienceSection;
