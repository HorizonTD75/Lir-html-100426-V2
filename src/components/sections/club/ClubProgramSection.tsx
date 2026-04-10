import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Cpu, BookOpen, Music, Clock, Users, UserCheck, Heart, MessageSquare } from "lucide-react";

const themes = [
  {
    icon: Plane,
    title: "Voyage",
    week: "Semaine 1",
    description: "Récits, astuces, préparation (mobilité, sécurité, applis utiles)",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Cpu,
    title: "Technologie & IA",
    week: "Semaine 2",
    description: "Outils, nouveautés, démos simples (lecture, reconnaissance, accessibilité)",
    color: "bg-purple-100 text-purple-700",
  },
  {
    icon: BookOpen,
    title: "Livres",
    week: "Semaine 3",
    description: "Lecture autrement : audio, liseuses, grands caractères, loupes, clubs de lecture",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Music,
    title: "Musiques",
    week: "Semaine 4",
    description: "Découvertes, souvenirs, playlists, instruments, concerts accessibles",
    color: "bg-orange-100 text-orange-700",
  },
];

const formatDetails = [
  { icon: Clock, label: "Durée", value: "60 minutes (18h–19h)" },
  { icon: Users, label: "Taille", value: "Petits groupes (8–12 pers.)" },
  { icon: UserCheck, label: "Animation", value: "Superviseur formé" },
  { icon: Heart, label: "Ton", value: "Bienveillance, simplicité" },
];

const ClubProgramSection = () => {
  return (
    <section className="py-20 bg-primary" id="program">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-4">
            Le Programme du Mois
          </h2>
          <p className="text-xl text-primary-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Chaque semaine, un thème différent pour varier les échanges et les découvertes.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Themes Grid - 2 columns */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {themes.map((theme, index) => {
                const Icon = theme.icon;
                return (
                  <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/15 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl ${theme.color} flex items-center justify-center shrink-0`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-secondary mb-1 block">
                            {theme.week}
                          </span>
                          <h3 className="font-serif text-xl font-bold text-primary-foreground mb-2">
                            {theme.title}
                          </h3>
                          <p className="text-primary-foreground/80 text-sm leading-relaxed">
                            {theme.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Format Details Sidebar */}
            <div>
              <Card className="bg-primary-foreground border-0 h-full">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                    Format & durée
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {formatDetails.map((detail, index) => {
                      const Icon = detail.icon;
                      return (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <span className="text-sm text-muted-foreground">{detail.label}</span>
                            <p className="font-semibold text-foreground">{detail.value}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <Button
                    variant="outline"
                    size="default"
                    className="w-full"
                    onClick={() => {
                      const el = document.getElementById("registration");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <MessageSquare className="w-5 h-5" />
                    Proposer un thème
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubProgramSection;
