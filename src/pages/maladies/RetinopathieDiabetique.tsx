import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Lightbulb,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Activity,
  BookOpen,
  Droplets,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/retinopathie-diabetique-hero.jpg";

const RetinopathieDiabetique = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Rétinopathie Diabétique : Causes et Soins | LirElia"
        description="Comprendre la rétinopathie diabétique : causes, symptômes, diagnostic, traitements et accompagnement basse vision. Première cause de cécité avant 65 ans."
        canonicalPath="/maladies-yeux/retinopathie-diabetique"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Rétinopathie Diabétique – Maladie des Yeux liée au Diabète",
          "description": "Guide complet sur la rétinopathie diabétique : causes, diagnostic, traitements et aides à la vision pour les personnes diabétiques.",
          "about": { "@type": "MedicalCondition", "name": "Rétinopathie diabétique" },
        }}
      />
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav className="bg-muted py-3 border-b border-border" aria-label="Fil d'Ariane">
          <div className="container">
            <ol className="flex items-center gap-2 text-lg">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <li><Link to="/maladies-yeux" className="text-muted-foreground hover:text-primary transition-colors">Maladies des yeux</Link></li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <li><span className="text-foreground font-semibold">La Rétinopathie Diabétique</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" loading="eager" decoding="async" width={1440} height={500} />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <p className="text-primary-foreground/80 font-bold text-lg mb-3">Maladie des yeux</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                La Rétinopathie Diabétique : prévenir et traiter
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                La rétinopathie diabétique est une complication du diabète qui endommage les vaisseaux sanguins de la rétine. Première cause de cécité avant 65 ans, elle touche plus de 50 % des diabétiques de type 2 et nécessite une surveillance ophtalmologique régulière.
              </p>
            </div>
          </div>
        </section>

        {/* Key stats */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2 whitespace-nowrap">50&nbsp;%</p>
                <p className="text-lg text-foreground">des diabétiques de type&nbsp;2 touchés</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2 whitespace-nowrap">4&nbsp;M</p>
                <p className="text-lg text-foreground">de diabétiques en France</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">1<sup>re</sup></p>
                <p className="text-lg text-foreground">cause de cécité avant 65&nbsp;ans</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">1×/an</p>
                <p className="text-lg text-foreground">fond d'œil recommandé</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Dans cette page</h2>
              <Card className="p-6">
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Qu'est-ce que la rétinopathie diabétique ?",
                    "Le diabète et l'œil",
                    "Symptômes et signes d'alerte",
                    "Diagnostic et classification",
                    "Facteurs de risque",
                    "Traitements et prise en charge",
                    "Vivre avec la rétinopathie diabétique",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Definition */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Qu'est-ce que la rétinopathie diabétique ?
                </h2>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    La rétinopathie diabétique est une <strong>complication oculaire du diabète</strong>. L'excès de sucre dans le sang fragilise les minuscules vaisseaux sanguins (capillaires) qui irriguent la rétine, la membrane sensible à la lumière située au fond de l'œil.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Lorsque ces vaisseaux sont endommagés, ils peuvent fuir, enfler ou se boucher. Des zones de la rétine ne sont alors plus correctement oxygénées. En réaction, l'œil produit de <strong>nouveaux vaisseaux</strong> (néovascularisation), encore plus fragiles, qui aggravent la situation.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Ce processus peut atteindre la <strong>macula</strong> (centre de la vision), provoquer un <strong>œdème maculaire</strong> et entraîner une baisse importante de l'acuité visuelle. Dans les cas les plus graves, une hémorragie dans le vitré ou un décollement de la rétine peuvent survenir.
                  </p>
                </Card>

                <Card variant="muted" className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <p className="text-lg text-foreground leading-relaxed">
                      <strong>Important :</strong> la rétinopathie diabétique s'installe souvent de manière silencieuse, sans symptômes visibles pendant des années. Lorsque la baisse de vision apparaît, les dégâts sont souvent déjà significatifs. C'est pourquoi le dépistage régulier est essentiel.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Diabetes and the eye */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <Droplets className="w-7 h-7 text-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Le diabète et l'œil
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Le diabète en bref</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Le diabète est une maladie qui empêche le corps de réguler correctement le taux de sucre dans le sang. L'insuline, hormone produite par le pancréas, ne joue plus suffisamment son rôle.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Le <strong>diabète de type 1</strong> (génétique) se déclare dans l'enfance. Le <strong>diabète de type 2</strong> (le plus fréquent) apparaît plus tard, souvent lié au mode de vie et à l'alimentation.
                  </p>
                </Card>
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Comment le diabète affecte l'œil</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    La rétine est irriguée par de très petits vaisseaux sanguins qui lui apportent oxygène et glucose. Lorsque ces vaisseaux sont fragilisés par le diabète, le sang peut s'infiltrer dans l'œil et les cellules rétiniennes ne sont plus nourries correctement.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Sans traitement, ces lésions progressent et peuvent entraîner un <strong><Link to="/maladies-yeux/glaucome" className="text-primary underline hover:text-primary/80">glaucome</Link></strong>, une <strong>hémorragie vitréenne</strong> ou un <strong>décollement de la rétine</strong>.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Activity className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Symptômes et signes d'alerte
                  </h2>
                  <p className="text-lg text-muted-foreground font-semibold">Une maladie souvent silencieuse au début</p>
                </div>
              </div>

              <Card variant="elevated" className="p-8 mb-6">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  La rétinopathie diabétique est généralement <strong>indolore</strong> et ne provoque pas de symptômes aux stades précoces. Certains signes doivent cependant alerter :
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Vision floue ou fluctuante",
                    "Lettres déformées à la lecture",
                    "Taches sombres ou « mouches volantes » dans le champ visuel",
                    "Difficulté à passer de l'obscurité à la lumière",
                    "Perte progressive de l'acuité visuelle",
                    "Vision des couleurs altérée",
                    "Zones sombres ou vides dans le champ visuel",
                    "Baisse soudaine de la vision (urgence)",
                  ].map((symptom, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card variant="highlighted" className="p-6">
                <div className="flex items-start gap-4">
                  <Stethoscope className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">
                    <strong>Conseil :</strong> même si votre vue semble normale, faites contrôler vos yeux <strong>au moins une fois par an</strong> si vous êtes diabétique. Un fond d'œil permet de détecter la rétinopathie bien avant l'apparition des symptômes.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Diagnosis */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Diagnostic et classification
                </h2>
              </div>

              <Card variant="elevated" className="p-8 mb-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Le fond d'œil</h3>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  L'examen du fond d'œil permet à l'ophtalmologiste d'observer directement la rétine et de détecter les lésions vasculaires. Il recherche notamment :
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { label: "Microanévrismes", detail: "Dilatations localisées des petits vaisseaux rétiniens" },
                    { label: "Hémorragies rétiniennes", detail: "Saignements visibles au niveau de la rétine" },
                    { label: "Exsudats", detail: "Dépôts lipidiques résultant de fuites vasculaires" },
                    { label: "Néovascularisation", detail: "Formation anormale de nouveaux vaisseaux fragiles" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-foreground">{item.label}</span>
                        <p className="text-foreground">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card variant="elevated" className="p-8">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Les stades de la maladie</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { stage: "Minime", desc: "Quelques microanévrismes isolés" },
                    { stage: "Modérée", desc: "Hémorragies et exsudats en quantité modérée" },
                    { stage: "Sévère", desc: "Lésions étendues avec risque de néovascularisation" },
                    { stage: "Proliférante", desc: "Présence de néovaisseaux, risque d'hémorragie vitréenne" },
                  ].map((item, i) => (
                    <Card key={i} variant="muted" className="p-4">
                      <p className="font-bold text-foreground text-lg">{item.stage}</p>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Risk factors */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <HeartPulse className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Facteurs de risque
                </h2>
              </div>

              <Card variant="elevated" className="p-8">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Plusieurs facteurs augmentent le risque de développer une rétinopathie diabétique ou d'en accélérer l'évolution :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Ancienneté du diabète",
                    "Mauvais équilibre glycémique",
                    "Hypertension artérielle",
                    "Variations importantes de la glycémie",
                    "Grossesse chez une femme diabétique",
                    "Tabagisme",
                    "Insuffisance rénale",
                    "Obésité et sédentarité",
                  ].map((factor, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-lg">{factor}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Traitements et prise en charge
                  </h2>
                  <p className="text-lg text-muted-foreground font-semibold">Prévenir, traiter et accompagner</p>
                </div>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Prévention : le meilleur traitement</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    La meilleure façon de prévenir la rétinopathie diabétique est de <strong>bien gérer son diabète</strong> : équilibrer les repas, surveiller la glycémie, suivre rigoureusement son traitement et contrôler sa tension artérielle.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Un fond d'œil annuel est recommandé pour tous les patients diabétiques, même en l'absence de symptômes.
                  </p>
                </Card>

                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Traitements médicaux</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Photocoagulation au laser", detail: "Technique permettant de cautériser les vaisseaux anormaux pour stopper les saignements rétiniens" },
                      { label: "Injections intravitréennes", detail: "Anti-VEGF ou corticoïdes injectés directement dans l'œil pour réduire l'œdème maculaire et la néovascularisation" },
                      { label: "Vitrectomie", detail: "Ablation chirurgicale du vitré en cas d'hémorragie sévère ou de décollement de rétine" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-foreground">{item.label}</span>
                          <p className="text-foreground">{item.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Living with */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Vivre avec la rétinopathie diabétique
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Gérer son diabète</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    L'équilibre glycémique et la surveillance de la tension artérielle restent les meilleurs remparts contre l'aggravation de la maladie. N'hésitez pas à rejoindre une association de patients pour partager et vous informer.
                  </p>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Aides visuelles</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    En cas de baisse de vision, des aides techniques permettent de maintenir l'autonomie : loupes, télé-agrandisseurs, éclairages adaptés, logiciels d'agrandissement et applications de lecture vocale.
                  </p>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Accompagnement</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    Les personnes touchées par une rétinopathie diabétique sont souvent jeunes et actives. Un accompagnement en basse vision permet de préserver les activités personnelles et professionnelles.
                  </p>
                </Card>
              </div>

              <Card variant="highlighted" className="p-8">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                      Rétinopathie diabétique et basse vision
                    </h2>
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      La rétinopathie diabétique est l'une des principales causes de <strong>basse vision</strong> chez les personnes en âge actif. Lorsque la vision est durablement affectée, un accompagnement spécialisé permet de retrouver du confort et de l'autonomie.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed mb-6">
                      Le Visiopraticien LirElia peut vous aider à identifier les aides les plus adaptées à votre situation et à mettre en place des solutions concrètes pour votre quotidien.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="default" asChild>
                        <Link to="/bilans-bassevision">
                          Découvrir les bilans basse vision
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/maladies-yeux">
                          Autres maladies des yeux
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Un bilan pour mieux comprendre votre situation visuelle
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Si vous êtes diabétique et que votre vision est affectée, un bilan basse vision permet de faire le point et de trouver des solutions concrètes pour améliorer votre quotidien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/bilans-bassevision">
                    Découvrir nos bilans
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/visiopraticien">
                    Le Visiopraticien LirElia
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RetinopathieDiabetique;
