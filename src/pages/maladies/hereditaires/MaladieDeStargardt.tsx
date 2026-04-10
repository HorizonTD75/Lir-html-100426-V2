import { Eye, HeartPulse, Stethoscope, AlertTriangle, ShieldCheck, BookOpen } from "lucide-react";
import HereditaryDiseasePageLayout from "@/components/maladies/HereditaryDiseasePageLayout";
import type { SiblingLink, DiseaseSection } from "@/components/maladies/HereditaryDiseasePageLayout";

const siblings: SiblingLink[] = [
  { title: "Rétinite pigmentaire", to: "/maladies-yeux/maladies-hereditaires/retinite-pigmentaire" },
  { title: "Maladie de Leber", to: "/maladies-yeux/maladies-hereditaires/maladie-de-leber" },
  { title: "Achromatopsie", to: "/maladies-yeux/maladies-hereditaires/achromatopsie" },
  { title: "Syndrome d'Usher", to: "/maladies-yeux/maladies-hereditaires/syndrome-usher" },
  { title: "Aniridie", to: "/maladies-yeux/maladies-hereditaires/aniridie" },
];

const sections: DiseaseSection[] = [
  {
    icon: Eye, title: "Qu'est-ce que la maladie de Stargardt ?",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>La maladie de Stargardt est une dystrophie maculaire héréditaire. Elle touche la macula, la zone centrale de la rétine qui permet de lire, reconnaître les visages, distinguer les détails fins et percevoir correctement les couleurs.</p>
        <p>Lorsque cette région se détériore, la vision centrale devient floue, déformée ou trouée, alors que la vision sur les côtés est souvent relativement préservée.</p>
      </div>
    ),
  },
  {
    icon: HeartPulse, title: "Origine génétique et transmission",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Dans la majorité des cas, la maladie est liée à des variations pathogènes du gène <strong>ABCA4</strong>. Ce gène participe normalement à l'élimination de sous-produits issus du cycle visuel. Lorsqu'il fonctionne mal, des substances toxiques s'accumulent progressivement sous forme de lipofuscine.</p>
        <p>Le plus souvent, la transmission est <strong>autosomique récessive</strong> : chaque parent porte une copie altérée du gène sans être malade. Le conseil génétique peut aider les familles à mieux comprendre le risque de transmission.</p>
        <p>La maladie débute souvent entre l'enfance et le début de l'âge adulte. Toute baisse inexpliquée de la vision centrale chez un sujet jeune justifie un avis spécialisé.</p>
      </div>
    ),
  },
  {
    icon: Stethoscope, title: "Les symptômes les plus fréquents",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <ul className="space-y-2 ml-4">
          {["Baisse progressive de l'acuité visuelle centrale", "Difficulté pour lire ou voir les détails fins", "Gêne à la lumière (photophobie)", "Altération de la perception des couleurs", "Difficultés à reconnaître les visages", "Parfois sensation de tache centrale, de flou ou d'ondulation des lignes"].map((s, i) => (
            <li key={i} className="flex items-start gap-2"><span className="text-primary font-bold">•</span> {s}</li>
          ))}
        </ul>
        <p>La vision nocturne et la vision périphérique peuvent rester relativement conservées pendant une longue période.</p>
      </div>
    ),
  },
  {
    icon: Eye, title: "Diagnostic",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Le diagnostic repose sur l'examen ophtalmologique et des examens complémentaires spécialisés : fond d'œil, autofluorescence, OCT, parfois électrorétinogramme et angiographie. Le test génétique est très utile pour confirmer le diagnostic et orienter le conseil génétique.</p>
        <p>Les médecins recherchent des lésions de la macula, une atrophie et des dépôts jaunâtres appelés « flecks » autour de la région maculaire.</p>
      </div>
    ),
  },
  {
    icon: AlertTriangle, title: "Évolution de la maladie",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>L'évolution est progressive mais sa vitesse est très variable. La vision centrale peut diminuer sur plusieurs années, avec un retentissement important sur la lecture, les écrans et certaines activités professionnelles.</p>
        <p>En revanche, la vision périphérique est souvent mieux conservée que dans d'autres maladies rétiniennes, permettant de continuer à se déplacer et réaliser certaines tâches avec des aides adaptées.</p>
      </div>
    ),
  },
  {
    icon: ShieldCheck, title: "Traitement et mesures de prudence",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>À ce jour, il n'existe pas encore de traitement curatif validé en routine. La recherche progresse activement. Certaines mesures sont recommandées :</p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Protéger les yeux de la lumière intense avec des verres filtrants</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Éviter le tabac et l'exposition au tabagisme passif</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Ne pas prendre de compléments fortement dosés en vitamine A sans avis médical</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Assurer un suivi régulier en ophtalmologie spécialisée</li>
        </ul>
      </div>
    ),
  },
  {
    icon: BookOpen, title: "Vivre avec la maladie de Stargardt",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>De nombreuses personnes conservent des capacités utiles grâce à leur vision périphérique, surtout lorsqu'elles sont accompagnées tôt. Les aides de basse vision peuvent améliorer le quotidien : loupes optiques ou électroniques, téléagrandisseurs, filtres, éclairage adapté, logiciels d'agrandissement, synthèse vocale.</p>
        <p>Un accompagnement spécialisé est pertinent dès que la baisse de vision gêne la lecture, les déplacements ou la vie professionnelle.</p>
      </div>
    ),
  },
];

const keyPoints = [
  { label: "Nature", value: "Dystrophie maculaire génétique rare." },
  { label: "Gène principal", value: "ABCA4, transmission autosomique récessive." },
  { label: "Symptômes", value: "Baisse de vision centrale, photophobie, altération des couleurs." },
  { label: "Diagnostic", value: "Fond d'œil, OCT, autofluorescence, test génétique." },
  { label: "Accompagnement", value: "Basse vision, aides techniques, suivi spécialisé, recherche clinique active." },
];

const MaladieDeStargardt = () => (
  <HereditaryDiseasePageLayout
    seoTitle="Maladie de Stargardt : Dystrophie Maculaire | LirElia"
    seoDescription="Comprendre la maladie de Stargardt : dystrophie maculaire héréditaire liée au gène ABCA4, symptômes, diagnostic, évolution et accompagnement basse vision."
    canonicalPath="/maladies-yeux/maladies-hereditaires/maladie-de-stargardt"
    diseaseName="La maladie de Stargardt"
    subtitle="Comprendre cette maladie génétique de la macula, ses symptômes, son évolution et les solutions d'accompagnement"
    heroIntro="La maladie de Stargardt est une maculopathie héréditaire rare, le plus souvent liée au gène ABCA4. Elle atteint principalement la vision centrale, souvent dès l'enfance, l'adolescence ou le début de l'âge adulte."
    keyFact="La vision périphérique reste généralement mieux conservée, ce qui permet souvent de préserver une part importante de l'autonomie avec un accompagnement adapté."
    sections={sections}
    keyPoints={keyPoints}
    siblings={siblings}
  />
);

export default MaladieDeStargardt;
