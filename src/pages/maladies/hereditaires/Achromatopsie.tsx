import { Eye, HeartPulse, Stethoscope, AlertTriangle, ShieldCheck, BookOpen } from "lucide-react";
import HereditaryDiseasePageLayout from "@/components/maladies/HereditaryDiseasePageLayout";
import type { SiblingLink, DiseaseSection } from "@/components/maladies/HereditaryDiseasePageLayout";

const siblings: SiblingLink[] = [
  { title: "Rétinite pigmentaire", to: "/maladies-yeux/maladies-hereditaires/retinite-pigmentaire" },
  { title: "Maladie de Leber", to: "/maladies-yeux/maladies-hereditaires/maladie-de-leber" },
  { title: "Maladie de Stargardt", to: "/maladies-yeux/maladies-hereditaires/maladie-de-stargardt" },
  { title: "Syndrome d'Usher", to: "/maladies-yeux/maladies-hereditaires/syndrome-usher" },
  { title: "Aniridie", to: "/maladies-yeux/maladies-hereditaires/aniridie" },
];

const sections: DiseaseSection[] = [
  {
    icon: Eye, title: "Qu'est-ce que l'achromatopsie ?",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>L'achromatopsie est une dystrophie rétinienne héréditaire rare. Elle correspond à un dysfonctionnement important des photorécepteurs appelés cônes. En pratique, la vision en plein jour est difficile, la perception des couleurs est très altérée, et l'acuité visuelle reste réduite.</p>
        <p>Il existe une forme complète, dans laquelle la perception des couleurs est quasiment absente, et une forme incomplète. L'achromatopsie ne doit pas être confondue avec le « daltonisme » habituel : les troubles sont plus larges.</p>
      </div>
    ),
  },
  {
    icon: HeartPulse, title: "Origine génétique",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Dans la majorité des cas, l'achromatopsie est transmise sur un mode <strong>autosomique récessif</strong>. Les gènes les plus souvent en cause sont <strong>CNGA3</strong> et <strong>CNGB3</strong>. D'autres gènes peuvent aussi être impliqués : GNAT2, PDE6C, PDE6H et ATF6.</p>
        <p>La prévalence mondiale est estimée autour de <strong>1 personne sur 30 000</strong>.</p>
      </div>
    ),
  },
  {
    icon: Stethoscope, title: "Symptômes habituels",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Les signes apparaissent très tôt, souvent dans les premières semaines ou mois de vie :</p>
        <ul className="space-y-2 ml-4">
          {["Photophobie importante", "Baisse d'acuité visuelle", "Nystagmus", "Très mauvaise discrimination des couleurs", "Parfois petit scotome central", "Souvent hypermétropie, parfois myopie"].map((s, i) => (
            <li key={i} className="flex items-start gap-2"><span className="text-primary font-bold">•</span> {s}</li>
          ))}
        </ul>
        <p>La gêne est particulièrement forte à l'extérieur, par temps ensoleillé, dans les lieux très éclairés ou face à des reflets.</p>
      </div>
    ),
  },
  {
    icon: Eye, title: "Comment le diagnostic est-il posé ?",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Le diagnostic repose sur l'examen ophtalmologique, l'histoire clinique et la précocité des symptômes. Il est conforté par l'électrorétinogramme (réponses photopiques absentes ou très diminuées), l'OCT, la mesure de l'acuité visuelle et l'évaluation de la vision des couleurs.</p>
        <p>Le test génétique permet de confirmer le gène en cause, d'affiner le conseil génétique et d'envisager l'accès à des protocoles de recherche.</p>
      </div>
    ),
  },
  {
    icon: AlertTriangle, title: "Évolution et pronostic visuel",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>L'achromatopsie a longtemps été décrite comme globalement stable. Toutefois, certaines atteintes maculaires structurelles peuvent évoluer lentement chez une partie des patients. Même lorsque la maladie évolue peu, la gêne visuelle reste réelle et justifie un accompagnement adapté.</p>
      </div>
    ),
  },
  {
    icon: ShieldCheck, title: "Traitement et prise en charge",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>À ce jour, il n'existe pas de traitement curatif approuvé en routine. La prise en charge repose sur l'adaptation visuelle, la réduction de l'éblouissement, la correction optique et les aides de basse vision.</p>
        <p>Les lunettes filtrantes, les verres teintés adaptés peuvent diminuer la photophobie. La recherche est active : des essais cliniques de thérapie génique ont été menés pour les formes liées à CNGA3 et CNGB3.</p>
      </div>
    ),
  },
  {
    icon: BookOpen, title: "Vivre avec une achromatopsie",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>L'orientation basse vision permet d'identifier les filtres utiles, les aides de lecture, les réglages numériques confortables et les stratégies pratiques. Adaptations souvent utiles :</p>
        <ul className="space-y-2 ml-4">
          {["Casquette ou visière à l'extérieur, filtres sélectifs", "Écran moins éblouissant, augmentation des contrastes", "Police agrandie, préférences de fond plus doux que le blanc pur", "Chez l'enfant : aménagement scolaire, support numérique, temps supplémentaire"].map((s, i) => (
            <li key={i} className="flex items-start gap-2"><span className="text-primary font-bold">•</span> {s}</li>
          ))}
        </ul>
      </div>
    ),
  },
];

const keyPoints = [
  { label: "Type de maladie", value: "Maladie rétinienne génétique rare touchant principalement les cônes." },
  { label: "Transmission", value: "Le plus souvent autosomique récessive." },
  { label: "Signes majeurs", value: "Photophobie, baisse d'acuité visuelle, nystagmus, altération sévère des couleurs." },
  { label: "Diagnostic", value: "Examen ophtalmologique, ERG, OCT, bilan couleurs, confirmation génétique." },
  { label: "Prise en charge", value: "Filtres, correction optique, aides de basse vision, recherche clinique en cours." },
];

const Achromatopsie = () => (
  <HereditaryDiseasePageLayout
    seoTitle="Achromatopsie : Maladie Génétique des Cônes | LirElia"
    seoDescription="L'achromatopsie est une maladie rétinienne rare touchant les cônes. Photophobie, baisse d'acuité, altération des couleurs : diagnostic et accompagnement."
    canonicalPath="/maladies-yeux/maladies-hereditaires/achromatopsie"
    diseaseName="L'achromatopsie"
    subtitle="Comprendre cette maladie génétique rare de la vision des cônes"
    heroIntro="L'achromatopsie est une maladie rétinienne héréditaire rare, présente dès la naissance ou la toute petite enfance. Elle touche surtout le fonctionnement des cônes, responsables de la vision fine, de la vision en lumière du jour et de la perception des couleurs."
    keyFact="L'achromatopsie entraîne le plus souvent une très forte gêne à la lumière, une baisse d'acuité visuelle, un nystagmus et une altération majeure de la vision des couleurs. La prévalence est d'environ 1 personne sur 30 000."
    sections={sections}
    keyPoints={keyPoints}
    siblings={siblings}
  />
);

export default Achromatopsie;
