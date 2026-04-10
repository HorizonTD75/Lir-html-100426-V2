import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Video, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
{
  icon: MessageCircle,
  title: "Échanges",
  description: "Partagez vos astuces et retours d'expérience"
},
{
  icon: Video,
  title: "Visioconférences",
  description: "Mini-conférences thématiques régulières"
},
{
  icon: Calendar,
  title: "Rencontres",
  description: "Moments simples pour rompre l'isolement"
}];


const ClubSection = () => {
  return (
    <section className="py-20 bg-primary" id="club">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6">
            <span className="font-semibold">Gratuit</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Club & Rencontres
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Un espace d'échanges entre personnes malvoyantes et aidants : astuces, retours d'expérience, mini-conférences, et moments simples pour rompre l'isolement.
          
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                  <CardContent className="pt-8 text-center">
                    <div className="w-14 h-14 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-primary-foreground/80">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>);

            })}
          </div>

          <Button variant="hero" size="lg" asChild>
            <Link to="/club">
              <Users className="w-6 h-6" />
              Rejoindre le Club
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>);

};

export default ClubSection;