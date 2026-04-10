import { Eye, HeartPulse, Stethoscope, AlertTriangle, ShieldCheck, BookOpen, Ear } from "lucide-react";
import HereditaryDiseasePageLayout from "@/components/maladies/HereditaryDiseasePageLayout";
import type { SiblingLink, DiseaseSection } from "@/components/maladies/HereditaryDiseasePageLayout";

const siblings: SiblingLink[] = [
  { title: "Rétinite pigmentaire", to: "/maladies-yeux/maladies-hereditaires/retinite-pigmentaire" },
  { title: "Maladie de Leber", to: "/maladies-yeux/maladies-hereditaires/maladie-de-leber" },
  { title: "Maladie de Stargardt", to: "/maladies-yeux/maladies-hereditaires/maladie-de-stargardt" },
  { title: "Achromatopsie", to: "/maladies-yeux/maladies-hereditaires/achromatopsie" },
  { title: "Aniridie", to: "/maladies-yeux/maladies-hereditaires/aniridie" },
];

const sections: DiseaseSection[] = [
  {
    icon: Ear, title: "Qu'est-ce que le syndrome d'Usher ?",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Le syndrome d'Usher est la cause génétique la plus fréquente de surdicécité. Il réunit deux atteintes principales : une atteinte de l'oreille interne, responsable d'une surdité ou d'une hypoacousie, et une atteinte progressive de la rétine, le plus souvent sous la forme d'une rétinite pigmentaire.</p>
        <p>Selon les personnes, des troubles vestibulaires peuvent aussi être présents : équilibre fragile, marche plus tardive chez l'enfant ou gêne dans les déplacements dans l'obscurité.</p>
      </div>
    ),
  },
  {
    icon: HeartPulse, title: "Pourquoi parle-t-on d'une maladie génétique ?",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Le syndrome d'Usher est lié à des variants pathogènes touchant des gènes impliqués dans le fonctionnement des cellules sensorielles de l'oreille interne et de la rétine. La transmission est le plus souvent <strong>autosomique récessive</strong>.</p>
        <p>Parmi les gènes les plus souvent impliqués : MYO7A, USH1C, CDH23, PCDH15, USH1G, USH2A, ADGRV1, WHRN et CLRN1.</p>
      </div>
    ),
  },
  {
    icon: Stethoscope, title: "Les différents types cliniques",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p><strong>Type 1 :</strong> surdité profonde congénitale, troubles de l'équilibre marqués et rétinite pigmentaire apparaissant dans l'enfance ou l'adolescence.</p>
        <p><strong>Type 2 :</strong> hypoacousie bilatérale congénitale modérée à sévère, sans trouble vestibulaire majeur, atteinte visuelle débutant plus tard.</p>
        <p><strong>Type 3 :</strong> plus rare. L'audition parfois proche de la normale à la naissance, puis se dégrade progressivement.</p>
      </div>
    ),
  },
  {
    icon: Eye, title: "Signes visuels et auditifs",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>La rétinite pigmentaire entraîne souvent une baisse de la vision nocturne. Au fil du temps, le champ visuel se rétrécit. Plus tard, une baisse de l'acuité visuelle centrale peut apparaître.</p>
        <p>Sur le plan auditif, la gêne varie selon le type. Quand le système vestibulaire est touché, l'enfant peut marcher plus tard et l'adulte ressentir une instabilité dans le noir.</p>
      </div>
    ),
  },
  {
    icon: Eye, title: "Comment fait-on le diagnostic ?",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Le diagnostic repose sur un faisceau d'arguments cliniques, ophtalmologiques, auditifs et génétiques. Le bilan ophtalmologique peut comporter un fond d'œil, un champ visuel, une OCT et parfois un électrorétinogramme. Le bilan auditif repose sur des tests audiométriques adaptés à l'âge.</p>
        <p>Le test génétique permet de confirmer le diagnostic, de préciser le sous-type et d'orienter le conseil génétique.</p>
      </div>
    ),
  },
  {
    icon: ShieldCheck, title: "Prise en charge actuelle",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Il n'existe pas de traitement curatif validé en routine. La prise en charge précoce améliore nettement la qualité de vie : appareillages auditifs, implant cochléaire selon les situations, rééducation orthophonique et accompagnement en communication.</p>
        <p>La recherche progresse activement : thérapie génique, approches ARN, stratégies pharmacologiques, en particulier autour du gène USH2A.</p>
      </div>
    ),
  },
  {
    icon: BookOpen, title: "Vivre avec le syndrome d'Usher",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Le syndrome impose d'anticiper les situations de double déficit sensoriel. L'éclairage, la sécurité des déplacements, la signalétique contrastée et l'usage d'aides techniques ont une grande importance.</p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Privilégier un éclairage homogène, repérer les marches par des contrastes marqués</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Évaluer régulièrement les besoins en aides auditives et visuelles</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Ne pas attendre une gêne majeure pour demander un accompagnement</li>
        </ul>
      </div>
    ),
  },
];

const keyPoints = [
  { label: "Nature", value: "Maladie génétique rare associant surdité ou hypoacousie et rétinite pigmentaire." },
  { label: "Atteintes", value: "Vision, audition, et parfois équilibre." },
  { label: "Transmission", value: "Le plus souvent autosomique récessive." },
  { label: "Prise en charge", value: "Aides auditives, implant cochléaire selon les cas, basse vision, rééducation, adaptations." },
];

const SyndromeUsher = () => (
  <HereditaryDiseasePageLayout
    seoTitle="Syndrome d'Usher : Surdité et Rétinite | LirElia"
    seoDescription="Le syndrome d'Usher associe surdité et rétinite pigmentaire. Types cliniques, diagnostic génétique et accompagnement basse vision."
    canonicalPath="/maladies-yeux/maladies-hereditaires/syndrome-usher"
    diseaseName="Le syndrome d'Usher"
    subtitle="Comprendre une maladie génétique associant atteinte auditive, visuelle et parfois de l'équilibre"
    heroIntro="Le syndrome d'Usher est une maladie génétique rare qui associe une surdité ou une baisse auditive, une atteinte rétinienne de type rétinite pigmentaire, et selon les formes un trouble de l'équilibre."
    keyFact="Le syndrome d'Usher est la cause génétique la plus fréquente de surdicécité. Il évolue sur plusieurs années et nécessite un accompagnement précoce, coordonné et personnalisé."
    sections={sections}
    keyPoints={keyPoints}
    siblings={siblings}
  />
);

export default SyndromeUsher;
