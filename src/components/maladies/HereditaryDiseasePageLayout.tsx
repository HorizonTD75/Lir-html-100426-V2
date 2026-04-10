import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, Lightbulb, Eye, AlertTriangle, Stethoscope, ShieldCheck, HeartPulse, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface SiblingLink {
  title: string;
  to: string;
}

interface DiseaseSection {
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}

interface HereditaryDiseasePageProps {
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  diseaseName: string;
  subtitle: string;
  heroIntro: string;
  keyFact: string;
  sections: DiseaseSection[];
  keyPoints?: { label: string; value: string }[];
  siblings: SiblingLink[];
}

const HereditaryDiseasePageLayout = ({
  seoTitle, seoDescription, canonicalPath, diseaseName, subtitle, heroIntro, keyFact, sections, keyPoints, siblings,
}: HereditaryDiseasePageProps) => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath={canonicalPath}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": diseaseName,
          "description": seoDescription,
          "about": { "@type": "MedicalCondition", "name": diseaseName },
        }}
      />
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav className="bg-muted py-3 border-b border-border" aria-label="Fil d'Ariane">
          <div className="container">
            <ol className="flex items-center gap-2 text-lg flex-wrap">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <li><Link to="/maladies-yeux" className="text-muted-foreground hover:text-primary transition-colors">Maladies des yeux</Link></li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <li><Link to="/maladies-yeux/maladies-hereditaires" className="text-muted-foreground hover:text-primary transition-colors">Maladies héréditaires</Link></li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <li><span className="text-foreground font-semibold">{diseaseName}</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <p className="text-primary-foreground/80 font-bold text-lg mb-3">Maladie héréditaire de la vue</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{diseaseName}</h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">{subtitle}</p>
            </div>
          </div>
        </section>

        {/* Hero intro */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-foreground leading-relaxed mb-6">{heroIntro}</p>
              <Card variant="highlighted" className="p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed"><strong>À retenir :</strong> {keyFact}</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Dynamic sections */}
        {sections.map((section, i) => {
          const Icon = section.icon;
          const bgClass = i % 2 === 0 ? "bg-muted" : "bg-background";
          return (
            <section key={i} className={`py-16 ${bgClass}`}>
              <div className="container">
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${i % 2 === 0 ? "bg-primary" : "bg-muted"} flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${i % 2 === 0 ? "text-primary-foreground" : "text-foreground"}`} />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{section.title}</h2>
                  </div>
                  <Card variant="elevated" className="p-8">
                    {section.content}
                  </Card>
                </div>
              </div>
            </section>
          );
        })}

        {/* Key points */}
        {keyPoints && keyPoints.length > 0 && (
          <section className="py-16 bg-muted">
            <div className="container">
              <div className="max-w-5xl mx-auto">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Points clés à retenir</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {keyPoints.map((kp, i) => (
                    <Card key={i} className="p-5">
                      <p className="font-bold text-foreground mb-1">{kp.label}</p>
                      <p className="text-lg text-muted-foreground">{kp.value}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Siblings cross-links */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Autres maladies héréditaires de la vue</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {siblings.map((s) => (
                  <Button key={s.to} variant="outline" asChild className="h-auto py-4 justify-start text-left">
                    <Link to={s.to}>
                      <span className="font-semibold">{s.title}</span>
                      <ArrowRight className="w-4 h-4 ml-auto shrink-0" />
                    </Link>
                  </Button>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="default" asChild>
                  <Link to="/maladies-yeux/maladies-hereditaires">
                    <ArrowRight className="w-4 h-4" />
                    Retour à la page principale
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Un accompagnement adapté à votre situation
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Le bilan basse vision permet de mieux comprendre vos difficultés concrètes et de trouver les aides les plus adaptées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/bilans-bassevision">Découvrir nos bilans <ArrowRight className="w-5 h-5" /></Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/contact-conseil">Demander un conseil <ArrowRight className="w-5 h-5" /></Link>
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

export default HereditaryDiseasePageLayout;
export { HereditaryDiseasePageLayout };
export type { SiblingLink, DiseaseSection };
