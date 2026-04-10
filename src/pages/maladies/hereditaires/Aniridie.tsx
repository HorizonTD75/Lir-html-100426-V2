import { Eye, HeartPulse, Stethoscope, AlertTriangle, ShieldCheck, BookOpen } from "lucide-react";
import HereditaryDiseasePageLayout from "@/components/maladies/HereditaryDiseasePageLayout";
import type { SiblingLink, DiseaseSection } from "@/components/maladies/HereditaryDiseasePageLayout";

const siblings: SiblingLink[] = [
  { title: "Rétinite pigmentaire", to: "/maladies-yeux/maladies-hereditaires/retinite-pigmentaire" },
  { title: "Maladie de Leber", to: "/maladies-yeux/maladies-hereditaires/maladie-de-leber" },
  { title: "Maladie de Stargardt", to: "/maladies-yeux/maladies-hereditaires/maladie-de-stargardt" },
  { title: "Achromatopsie", to: "/maladies-yeux/maladies-hereditaires/achromatopsie" },
  { title: "Syndrome d'Usher", to: "/maladies-yeux/maladies-hereditaires/syndrome-usher" },
];

const sections: DiseaseSection[] = [
  {
    icon: Eye, title: "Qu'est-ce que l'aniridie ?",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>L'aniridie congénitale est une anomalie rare du développement de l'œil, présente dès la naissance. Le mot peut faire penser à une simple absence d'iris, mais la réalité est plus large. Les spécialistes parlent souvent d'une maladie panoculaire, c'est-à-dire d'une atteinte pouvant concerner plusieurs structures de l'œil.</p>
        <p>Dans la forme classique, l'iris est partiellement ou presque totalement absent, ce qui entraîne une forte sensibilité à la lumière. Mais d'autres anomalies sont fréquentes : hypoplasie fovéale, nystagmus, baisse d'acuité visuelle, troubles de la surface oculaire, cataracte, subluxation du cristallin ou glaucome.</p>
        <p>La sévérité est variable d'une personne à l'autre, y compris au sein d'une même famille.</p>
      </div>
    ),
  },
  {
    icon: HeartPulse, title: "Origine génétique",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Dans la majorité des cas, l'aniridie classique est liée à une anomalie du gène <strong>PAX6</strong>, essentiel au développement de l'œil. La transmission est le plus souvent <strong>autosomique dominante</strong> : une seule copie altérée du gène peut suffire.</p>
        <p>Lorsque l'aniridie est sporadique, un bilan génétique plus large est important pour rechercher une délétion impliquant le gène WT1. Cette situation fait craindre un <strong>syndrome WAGR</strong>, qui associe aniridie et risque tumoral rénal (tumeur de Wilms).</p>
      </div>
    ),
  },
  {
    icon: Stethoscope, title: "Signes et symptômes habituels",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Les premiers signes sont souvent visibles très tôt : photophobie importante, yeux paraissant très sombres, nystagmus, regard instable et baisse de la vision. L'enfant peut aussi présenter un strabisme.</p>
        <p>L'hypoplasie fovéale joue souvent un rôle majeur dans la baisse de vision. La surface oculaire mérite une attention particulière : beaucoup de patients présentent une sécheresse oculaire ou une kératopathie associée à l'aniridie (AAK/ARK), pouvant entraîner une opacification progressive de la cornée.</p>
      </div>
    ),
  },
  {
    icon: Eye, title: "Diagnostic",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Le diagnostic repose sur l'examen ophtalmologique, souvent dès la petite enfance : analyse de l'iris, transparence cornéenne, cristallin, pression intraoculaire, fond d'œil et macula.</p>
        <p>Des examens complémentaires sont souvent utiles : OCT, mesure de la pression oculaire, photographie du segment antérieur. Le test génétique confirme l'anomalie et oriente vers un éventuel syndrome WAGR chez les formes sporadiques.</p>
      </div>
    ),
  },
  {
    icon: AlertTriangle, title: "Évolution et complications",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>L'aniridie n'est pas seulement une anomalie statique. Certaines complications peuvent apparaître ou s'aggraver avec le temps :</p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Le glaucome survient fréquemment pendant l'enfance, l'adolescence ou plus tard</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> La cataracte est également fréquente</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Troubles de la cornée et sécheresse oculaire</li>
        </ul>
        <p>Un suivi régulier, dans un centre connaissant les maladies rares oculaires, est essentiel.</p>
      </div>
    ),
  },
  {
    icon: ShieldCheck, title: "Prise en charge en 2026",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Il n'existe pas de traitement curatif standard. La prise en charge repose sur le suivi spécialisé, la prévention des complications et les adaptations visuelles.</p>
        <p>Les verres filtrants, lunettes teintées, certaines lentilles et aménagements lumineux peuvent réduire la photophobie. En cas de glaucome, le traitement associe collyres et chirurgie selon les situations.</p>
        <p>La recherche progresse sur la biologie du gène PAX6, les cellules souches limbiques et des approches expérimentales de thérapie génique. Ces pistes ne constituent pas encore un traitement validé en routine.</p>
      </div>
    ),
  },
  {
    icon: BookOpen, title: "Vivre avec l'aniridie",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>L'accompagnement basse vision aide à choisir des filtres adaptés, optimiser l'éclairage sans éblouissement, sélectionner des aides optiques ou numériques et réduire la fatigue visuelle.</p>
        <p>Chez l'enfant, des aménagements scolaires sont souvent nécessaires : place adaptée en classe, supports numériques, limitation des reflets, contrastes renforcés et temps supplémentaire.</p>
        <p>Chez l'adulte, l'objectif est de préserver l'autonomie dans la lecture, les déplacements, l'usage des écrans et l'organisation de l'environnement.</p>
      </div>
    ),
  },
];

const keyPoints = [
  { label: "Type de maladie", value: "Maladie génétique rare du développement de l'œil, souvent panoculaire." },
  { label: "Gène principal", value: "PAX6 dans la majorité des formes classiques." },
  { label: "Transmission", value: "Le plus souvent autosomique dominante ; certains cas sont de novo." },
  { label: "Signes majeurs", value: "Photophobie, baisse d'acuité, nystagmus, hypoplasie fovéale, atteinte de l'iris." },
  { label: "Complications", value: "Glaucome, cataracte, kératopathie, sécheresse oculaire." },
  { label: "Prise en charge", value: "Suivi spécialisé, traitement des complications, filtres, aides de basse vision, conseil génétique." },
];

const Aniridie = () => (
  <HereditaryDiseasePageLayout
    seoTitle="Aniridie — Maladie génétique rare de l'œil | LirElia"
    seoDescription="Comprendre l'aniridie congénitale : maladie génétique rare liée au gène PAX6, photophobie, complications oculaires, diagnostic et accompagnement basse vision."
    canonicalPath="/maladies-yeux/maladies-hereditaires/aniridie"
    diseaseName="L'aniridie"
    subtitle="Comprendre cette maladie génétique rare de l'œil et ses complications possibles"
    heroIntro="L'aniridie congénitale est une maladie génétique rare du développement de l'œil. Malgré son nom, elle ne se limite pas à l'absence partielle ou totale d'iris : elle peut aussi toucher la cornée, le cristallin, la pression de l'œil, la macula et parfois le nerf optique."
    keyFact="La vision est souvent réduite dès l'enfance, avec une photophobie marquée et un risque de complications comme le glaucome, la cataracte et la kératopathie. Le gène PAX6 est en cause dans la majorité des formes."
    sections={sections}
    keyPoints={keyPoints}
    siblings={siblings}
  />
);

export default Aniridie;
