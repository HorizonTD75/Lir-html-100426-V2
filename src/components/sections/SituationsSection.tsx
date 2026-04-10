import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Activity, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const situations = [
{
  icon: BookOpen,
  title: "Je n'arrive plus à lire comme avant",
  description: "Journal, courrier, livre, étiquettes… on part du concret.",
  solution: "Solutions pour lire",
  href: "/aides-lecture-bassevision",
  color: "border-l-primary",
  iconBg: "bg-primary/10",
  iconColor: "text-primary"
},
{
  icon: Activity,
  title: "Je suis sportif(ve) et ma vue change",
  description: "Lunettes et sports sur-mesure via notre opticien partenaire.",
  solution: "Lunettes adaptées",
  href: "/bientot-disponible",
  color: "border-l-secondary",
  iconBg: "bg-secondary/20",
  iconColor: "text-secondary-foreground"
},
{
  icon: Users,
  title: "Un proche a une DMLA ou autre pathologie",
  description: "Aidant : on vous guide pas à pas (priorités, sécurité, solutions).",
  solution: "Guide aidant",
  href: "/aidants",
  color: "border-l-accent",
  iconBg: "bg-accent/10",
  iconColor: "text-accent"
}];


const SituationsSection = () => {
  return (
    <section className="py-20 bg-background" id="situations">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quelle est  votre situation ? 
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selon votre profil, nous vous orientons vers les meilleures solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {situations.map((situation, index) => {
            const Icon = situation.icon;
            return (
              <Link key={index} to={situation.href} className="block group">
                <Card
                  variant="elevated"
                  className={`border-l-4 ${situation.color} group cursor-pointer h-full`}>
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl ${situation.iconBg} ${situation.iconColor} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl">{situation.title}</CardTitle>
                    <CardDescription className="text-lg">{situation.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 h-auto text-lg group-hover:gap-3 transition-all" asChild>
                      <span>
                        {situation.solution}
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>);
          })}
        </div>

        










      </div>
    </section>);

};

export default SituationsSection;