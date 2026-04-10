import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Lock, UserCheck, LogOut, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const rules = [
  {
    icon: Heart,
    title: "Respect & écoute",
    description: "Pas d'interruption, chacun peut s'exprimer librement",
  },
  {
    icon: Shield,
    title: "Pas de démarchage",
    description: "Aucune vente, spam ou sollicitation commerciale",
  },
  {
    icon: Lock,
    title: "Confidentialité",
    description: "Ce qui est dit reste dans le groupe",
  },
  {
    icon: UserCheck,
    title: "Modération active",
    description: "Un animateur veille au bon déroulement",
  },
  {
    icon: LogOut,
    title: "Liberté de partir",
    description: "Vous pouvez quitter à tout moment, sans justification",
  },
];

const ClubCharterSection = () => {
  return (
    <section className="py-20 bg-muted" id="charter">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Un cadre simple, pour que chacun se sente bien
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Règles de bienveillance pour des échanges sereins
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {rules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <Card key={index} variant="elevated">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                      {rule.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {rule.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button variant="ghost" size="lg" className="text-primary" asChild>
              <Link to="/charte-club-lirelia">
                <FileText className="w-5 h-5" />
                Lire la charte complète
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubCharterSection;
