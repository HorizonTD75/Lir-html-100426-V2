import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  AlertCircle,
  Users,
  Glasses,
  Stethoscope,
  BookOpen,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Lightbulb } from
"lucide-react";
import { Link } from "react-router-dom";
import eyeAnatomyImage from "@/assets/eye-anatomy.jpg";
import eyeExamImage from "@/assets/eye-exam.jpg";
import comprendreHeroImage from "@/assets/comprendre-basse-vision-hero.jpg";
import seniorManStreetImage from "@/assets/senior-man-street.png";
import professionnelsOptiqueImage from "@/assets/professionnels-optique-600.jpg";
import comprendreHeaderImage from "@/assets/comprendre-basse-vision-header-800.jpg";

const ComprendreBasseVision = () => {
  const symptoms = [
  "La lecture du journal ou de documents devient très lente, même avec une bonne lumière",
  "Reconnaître le visage des proches à quelques mètres devient difficile",
  "Se sentir moins à l'aise pour sortir seul, traverser la rue, repérer les trottoirs",
  "Devoir approcher très près pour voir la télévision, l'ordinateur, la tablette",
  "Être ébloui facilement par les phares, les vitrines, le soleil",
  "Se sentir vite fatigué ou découragé quand il faut utiliser la vue longtemps"];


  const feelings = [
  "« Je dois choisir entre lire ou faire autre chose, car je suis épuisé si je lis trop longtemps. »",
  "« Je vois que quelqu'un arrive, mais je ne reconnais pas son visage. »",
  "« Je n'ose plus sortir seul, j'ai peur de trébucher ou de me perdre. »",
  "« Je dois monter la luminosité de tous mes écrans au maximum. »",
  "« Ce que j'aimais faire (coudre, bricoler, jardiner, lire…) est devenu trop difficile. »"];


  const professionals: {title: string;icon: typeof Eye;description: string;link?: string;}[] = [
  {
    title: "L'ophtalmologiste",
    icon: Stethoscope,
    description: "Médecin spécialiste des yeux. Il diagnostique et surveille les maladies oculaires (DMLA, glaucome, rétinopathie diabétique, etc.). \n\n\n\nIl prescrit les traitements médicaux, les injections et la chirurgie si besoin."
  },
  {
    title: "L'orthoptiste",
    icon: Eye,
    description: "Il réalise des examens de la vision et des séances de rééducation visuelle, souvent sur prescription de l'oplogiste. \nlogiste. \nlogiste. \n. Il intervient parfois dans des centres basse vision."
  },
  {
    title: "L'opticien-optométriste",
    icon: Glasses,
    description: "Il réalise les mesures de correction et conseille sur les verres, montures et filtres. Formé à la basse vision, il peut alors proposer des lunettes très spécifiques, des loupes, des éclairages, pour la lecture, la télévision ou le sport."
  },
  {
    title: "Le visiopraticien",
    icon: Users,
    description: "Chez LirElia, il intervient à côté de ces professionnels. Son rôle est de traduire vos difficultés de vision , en solutions concrètes : aides techniques, organisation du domicile, habitudes de lecture, loisirs, déplacements. Spécialiste de l'accompagnement basse vision, il aide chaque personne malvoyante à retrouver autonomie dans la lecture et le quotidien.",
    link: "/visiopraticien"
  }];


  const whenToConsult = [
  {
    professional: "Consulter un ophtalmologiste si :",
    items: [
    "Votre vue baisse brutalement",
    "Vous voyez des taches sombres, des éclairs, des déformations des lignes",
    "Vous avez des douleurs oculaires, une rougeur importante, des maux de tête violents"]

  },
  {
    professional: "Consulter un orthoptiste pour :",
    items: [
    "Un bilan de champ visuel",
    "Une rééducation",
    "Un avis complémentaire"]

  },
  {
    professional: "Voir un opticien-optométriste si :",
    items: [
    "Vous avez déjà un diagnostic (DMLA, glaucome, etc.)",
    "Vos lunettes actuelles sont récentes mais ne suffisent plus pour lire, regarder la TV ou faire du sport",
    "Vous souhaitez des lunettes plus adaptées à une activité précise"]

  }];


  return (
    <div className="min-h-screen">
      <SEOHead
        title="Comprendre la Basse Vision : Définition, Causes et Repères"
        description="Votre vue baisse malgré vos lunettes ? Comprenez ce qu'est la basse vision, ses causes (DMLA, glaucome) et les professionnels qui peuvent vous aider."
        canonicalPath="/comprendre-basse-vision" />
      
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <img src={comprendreHeaderImage} alt="Illustration aquarelle évoquant la compréhension de la basse vision" className="w-full h-full object-cover opacity-40" loading="eager" decoding="async" width={1440} height={500} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative py-20 lg:py-28">
            <div className="max-w-4xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Comprendre la Basse Vision
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                La basse vision ne veut pas dire « ne plus rien voir ». C'est le terme utilisé quand la vue reste difficile malgré des lunettes bien adaptées et un suivi ophtalmologique correct.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Illustration Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                    À ne pas confondre
                  </h2>
                  
                  <div className="space-y-6">
                    <Card variant="outline" className="p-4 sm:p-6 overflow-hidden">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                          <Glasses className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                            Baisse de vision « classique »
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            Myopie, hypermétropie, astigmatisme, presbytie. Ces défauts optiques courants se corrigent avec des lunettes ou des lentilles.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card variant="highlighted" className="p-4 sm:p-6 overflow-hidden">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                          <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                            La basse vision
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            Même avec la meilleure correction possible, la vue reste limitée. Elle est liée à une atteinte plus profonde de l'œil ou du nerf optique.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="flex justify-center mt-8">
                    <Button variant="outline" size="default" className="whitespace-normal text-center h-auto py-2" asChild>
                      <Link to="/maladies-yeux">
                        <span>Les maladies entraînant une basse vision</span>
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="relative overflow-hidden order-first lg:order-last">
                  <img
                    src={comprendreHeroImage}
                    alt="Illustration aquarelle montrant différentes situations de basse vision"
                    className="w-full max-w-full rounded-2xl shadow-card" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manifestations Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comment se manifeste la basse vision ?
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Il peut s'agir par exemple de zones floues ou manquantes au centre de l'image, d'une vision « en tunnel » avec un champ visuel très réduit, ou d'une sensibilité extrême à la lumière.
              </p>
              
              <Card className="p-4 sm:p-6 lg:p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Concrètement, cela peut se traduire par :
                </h3>
                <ul className="space-y-4">
                  {symptoms.map((symptom, index) =>
                  <li key={index} className="flex items-start gap-4">
                      <AlertCircle className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                      <span className="text-lg text-foreground">{symptom}</span>
                    </li>
                  )}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Feelings Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Que ressentez vous au quotidien ?  
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Vous vous reconnaîtrez peut-être dans certaines de ces situations :
              </p>
              
              <div className="space-y-4">
                {feelings.map((feeling, index) =>
                <Card key={index} variant="outline" className="p-6">
                    <p className="text-lg text-foreground italic">{feeling}</p>
                  </Card>
                )}
              </div>

              <Card variant="highlighted" className="mt-10 p-4 sm:p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-secondary shrink-0" />
                  <div>
                    <p className="text-lg text-foreground leading-relaxed">
                      Ces difficultés ne sont pas « dans votre tête ». Elles sont liées à la façon dont vos yeux et votre cerveau reçoivent les images.
                    </p>
                    <p className="text-lg text-foreground font-bold mt-4">
                      La bonne nouvelle, c'est que nous pouvons travailler ensemble sur des solutions : aides visuelles, éclairage, organisation de l'espace, lunettes spécifiques, etc.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Professionals Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-8 items-start mb-12">
                <div className="lg:col-span-2">
                  <img
                    src={professionnelsOptiqueImage}
                    alt="Illustration aquarelle d'un professionnel de l'optique réalisant un examen visuel"
                    className="w-full rounded-2xl shadow-card" />
                  
                </div>
                <div className="lg:col-span-3">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Quels professionnels de l'optique ?
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Plusieurs professionnels peuvent vous accompagner dans votre parcours basse vision. Chacun a un rôle complémentaire pour vous aider à mieux voir et vivre au quotidien.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {professionals.map((pro, index) =>
                <Card key={index} variant="elevated" className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0">
                        <pro.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                          {pro.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {pro.description}
                        </p>
                        {pro.link &&
                      <Button variant="outline" size="sm" className="mt-4" asChild>
                            <Link to={pro.link}>
                              Découvrir le Visiopraticien
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                      }
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* When to Consult Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Quand consulter ?
              </h2>
              
              <div className="space-y-8">
                {whenToConsult.map((item, index) =>
                <Card key={index} className="p-4 sm:p-6 lg:p-8">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      {item.professional}
                    </h3>
                    <ul className="space-y-3">
                      {item.items.map((point, i) =>
                    <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-lg text-foreground">{point}</span>
                        </li>
                    )}
                    </ul>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                La basse vision n'est pas une fatalité
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Même si la maladie de l'œil ne peut pas toujours être guérie, on peut adapter l'environnement, le matériel et les habitudes pour mieux utiliser la vision qui reste.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/maladies-yeux">
                    <BookOpen className="w-5 h-5" />
                    Découvrir les maladies des yeux
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/vivre-basse-vision">
                    Vivre au quotidien
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default ComprendreBasseVision;