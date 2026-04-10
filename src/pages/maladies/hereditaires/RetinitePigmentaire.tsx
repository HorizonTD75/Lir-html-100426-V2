import { Eye, HeartPulse, Stethoscope, AlertTriangle, ShieldCheck, BookOpen, Lightbulb } from "lucide-react";
import HereditaryDiseasePageLayout from "@/components/maladies/HereditaryDiseasePageLayout";
import type { SiblingLink, DiseaseSection } from "@/components/maladies/HereditaryDiseasePageLayout";

const siblings: SiblingLink[] = [
  { title: "Maladie de Leber", to: "/maladies-yeux/maladies-hereditaires/maladie-de-leber" },
  { title: "Maladie de Stargardt", to: "/maladies-yeux/maladies-hereditaires/maladie-de-stargardt" },
  { title: "Achromatopsie", to: "/maladies-yeux/maladies-hereditaires/achromatopsie" },
  { title: "Syndrome d'Usher", to: "/maladies-yeux/maladies-hereditaires/syndrome-usher" },
  { title: "Aniridie", to: "/maladies-yeux/maladies-hereditaires/aniridie" },
];

const sections: DiseaseSection[] = [
  {
    icon: Eye,
    title: "Définition",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>La rétinite pigmentaire, souvent abrégée RP, désigne un groupe de maladies génétiques de la rétine responsables d'une dégénérescence progressive des photorécepteurs. Dans la forme la plus classique, les bâtonnets sont touchés en premier, puis les cônes.</p>
        <p>Le mot « rétinite » peut prêter à confusion : il ne s'agit pas d'une infection ni d'une inflammation au sens habituel du terme, mais d'une dystrophie rétinienne héréditaire. La maladie évolue généralement lentement sur plusieurs années, avec une grande variabilité d'une personne à l'autre.</p>
      </div>
    ),
  },
  {
    icon: HeartPulse,
    title: "Origine génétique",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>La rétinite pigmentaire n'est pas une maladie unique. C'est un ensemble de dystrophies héréditaires causées par des anomalies touchant de très nombreux gènes impliqués dans le fonctionnement, la structure ou le renouvellement des photorécepteurs et de l'épithélium pigmentaire rétinien.</p>
        <p>Les modes de transmission sont variables : formes autosomiques dominantes, autosomiques récessives, liées au chromosome X, et plus rarement mitochondriales ou isolées. Cette diversité explique l'intérêt majeur du diagnostic génétique.</p>
        <p>La rétinite pigmentaire touche environ <strong>1 personne sur 4 000</strong> en Europe et aux États-Unis. Les premiers signes apparaissent souvent dans l'enfance, l'adolescence ou le début de l'âge adulte.</p>
      </div>
    ),
  },
  {
    icon: Stethoscope,
    title: "Les symptômes typiques",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Le premier signe est souvent la difficulté à voir lorsque la lumière baisse. Cette gêne peut être discrète au début.</p>
        <ul className="space-y-2 ml-4">
          {[
            "Héméralopie, c'est-à-dire baisse de la vision nocturne",
            "Rétrécissement progressif du champ visuel, donnant parfois une impression de vision en tunnel",
            "Difficulté à repérer les obstacles latéraux, les marches ou les personnes arrivant de côté",
            "Éblouissement et récupération visuelle plus lente après une forte lumière",
            "Baisse de la sensibilité aux contrastes",
            "Dans certaines formes, altération de la vision centrale et de la lecture à un stade plus avancé",
            "Parfois photopsies, c'est-à-dire perception d'éclairs ou de petites lumières",
          ].map((s, i) => (
            <li key={i} className="flex items-start gap-2"><span className="text-primary font-bold">•</span> {s}</li>
          ))}
        </ul>
        <p>Le rythme d'évolution varie beaucoup. Certaines formes restent longtemps compatibles avec une vie autonome et une bonne lecture.</p>
      </div>
    ),
  },
  {
    icon: Eye,
    title: "Comment le diagnostic est-il posé ?",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Le diagnostic repose sur l'interrogatoire et l'examen ophtalmologique. Le médecin évalue l'acuité visuelle, le champ visuel, la vision des couleurs, l'adaptation à l'obscurité et l'aspect du fond d'œil.</p>
        <p>Des examens complémentaires sont très utiles :</p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> OCT pour analyser la structure de la rétine</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> ERG pour mesurer la réponse fonctionnelle des photorécepteurs</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Champ visuel pour quantifier la perte périphérique</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Analyse génétique, élément central de la confirmation diagnostique</li>
        </ul>
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    title: "Évolution et pronostic",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>La rétinite pigmentaire évolue généralement de manière progressive sur des années ou des décennies. Le plus souvent, la vision nocturne est touchée d'abord, puis le champ visuel périphérique se réduit progressivement.</p>
        <p>Deux personnes atteintes peuvent avoir des parcours très différents selon le gène concerné, le mode de transmission et l'âge de début. Des complications peuvent s'ajouter, notamment une cataracte postérieure sous-capsulaire ou un œdème maculaire cystoïde.</p>
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Traitement et prise en charge",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>À ce jour, il n'existe pas de traitement curatif standard capable de guérir l'ensemble des rétinites pigmentaires. La prise en charge repose sur le suivi ophtalmologique, le dépistage des complications, l'accompagnement en basse vision et la confirmation génétique.</p>
        <p><strong>Le cas particulier des formes liées à RPE65 :</strong> la thérapie génique voretigene neparvovec (Luxturna®) est autorisée pour les patients présentant une dystrophie rétinienne liée à des mutations bialléliques du gène RPE65, à condition qu'il reste des cellules rétiniennes viables. Cette indication concerne seulement une petite partie des patients.</p>
        <p>La recherche est particulièrement dynamique : thérapie génique ciblée, optogénétique, thérapies cellulaires, neuroprotection, implants rétiniens et approches « mutation-agnostiques ».</p>
      </div>
    ),
  },
  {
    icon: BookOpen,
    title: "Vivre avec une rétinite pigmentaire",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>L'accompagnement en basse vision joue un rôle essentiel. Même sans traitement curatif, il est souvent possible d'améliorer le confort et l'autonomie :</p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Évaluation fonctionnelle en basse vision</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Choix d'aides optiques ou électroniques selon les besoins</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Travail sur l'éclairage, les contrastes et l'organisation de l'espace</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Apprentissage de stratégies de balayage visuel</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Orientation et mobilité en cas de rétrécissement important du champ visuel</li>
        </ul>
        <p>Le handicap visuel peut être mal compris par l'entourage, car la personne paraît parfois « bien voir » dans certaines situations. Un bilan précoce et un accompagnement adapté font toute la différence.</p>
      </div>
    ),
  },
];

const keyPoints = [
  { label: "Nature de la maladie", value: "Dystrophie rétinienne héréditaire progressive touchant les photorécepteurs." },
  { label: "Symptômes initiaux", value: "Vision nocturne difficile, gêne en faible lumière, perte progressive du champ visuel." },
  { label: "Examens clés", value: "Fond d'œil, champ visuel, OCT, ERG, imagerie rétinienne et analyse génétique." },
  { label: "Complications possibles", value: "Cataracte, œdème maculaire cystoïde, baisse croissante de la vision fonctionnelle." },
  { label: "Traitement", value: "Pas de traitement curatif global ; prise en charge personnalisée selon la forme génétique." },
  { label: "Accompagnement", value: "Basse vision, aides techniques, orientation-mobilité, conseil génétique et suivi spécialisé." },
];

const RetinitePigmentaireHereditaire = () => (
  <HereditaryDiseasePageLayout
    seoTitle="Rétinite Pigmentaire Héréditaire | LirElia"
    seoDescription="Comprendre la rétinite pigmentaire : dystrophie rétinienne héréditaire, symptômes, diagnostic génétique, évolution, traitement et accompagnement basse vision."
    canonicalPath="/maladies-yeux/maladies-hereditaires/retinite-pigmentaire"
    diseaseName="La rétinite pigmentaire"
    subtitle="Comprendre cette maladie génétique de la rétine"
    heroIntro="La rétinite pigmentaire désigne un groupe de maladies génétiques de la rétine responsables d'une dégénérescence progressive des photorécepteurs. Elle se manifeste par une perte de la vision nocturne, un rétrécissement du champ visuel et peut évoluer vers une basse vision importante."
    keyFact="La rétinite pigmentaire touche environ 1 personne sur 4 000 en Europe. Le diagnostic repose sur l'examen ophtalmologique, l'ERG, l'imagerie rétinienne et surtout l'analyse génétique. Certaines formes ciblées, notamment liées à RPE65, disposent d'une option thérapeutique spécifique."
    sections={sections}
    keyPoints={keyPoints}
    siblings={siblings}
  />
);

export default RetinitePigmentaireHereditaire;
