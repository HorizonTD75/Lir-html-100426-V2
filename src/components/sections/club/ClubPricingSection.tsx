import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Users, Gift } from "lucide-react";

const ClubPricingSection = () => {
  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Gratuit pour démarrer, et ensuite ?
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            On commence simple : testez le Club sans engagement.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Free Card */}
            <Card variant="highlighted" className="relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-bl-2xl font-bold">
                  Offre de lancement
                </div>
              </div>
              <CardHeader className="pt-14">
                <div className="w-14 h-14 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center mb-4">
                  <Gift className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">Rencontre mensuelle</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="font-serif text-5xl font-bold text-secondary">Gratuit</span>
                  <span className="text-muted-foreground ml-2">pendant la phase de démarrage</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">1 session par mois</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">Thématique tournante</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">Accès à tous les thèmes</span>
                  </li>
                </ul>
                <Button variant="secondary" size="lg" className="w-full" onClick={scrollToRegistration}>
                  <Users className="w-5 h-5" />
                  Je rejoins la liste d'invités
                </Button>
              </CardContent>
            </Card>

            {/* Future Card */}
            <Card variant="elevated" className="relative">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-muted text-muted-foreground flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">Rencontres hebdomadaires</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="font-serif text-3xl font-bold text-muted-foreground">À venir</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Un abonnement pourra être proposé si le format hebdomadaire se met en place.
                </p>
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-foreground font-semibold flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    Vous serez informé avant tout changement
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground">
            Pas de frais cachés. Pas d'engagement. Vous pouvez vous désinscrire à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClubPricingSection;
