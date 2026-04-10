import { Eye, HeartPulse, Stethoscope, AlertTriangle, ShieldCheck, BookOpen } from "lucide-react";
import HereditaryDiseasePageLayout from "@/components/maladies/HereditaryDiseasePageLayout";
import type { SiblingLink, DiseaseSection } from "@/components/maladies/HereditaryDiseasePageLayout";

const siblings: SiblingLink[] = [
  { title: "Rétinite pigmentaire", to: "/maladies-yeux/maladies-hereditaires/retinite-pigmentaire" },
  { title: "Maladie de Stargardt", to: "/maladies-yeux/maladies-hereditaires/maladie-de-stargardt" },
  { title: "Achromatopsie", to: "/maladies-yeux/maladies-hereditaires/achromatopsie" },
  { title: "Syndrome d'Usher", to: "/maladies-yeux/maladies-hereditaires/syndrome-usher" },
  { title: "Aniridie", to: "/maladies-yeux/maladies-hereditaires/aniridie" },
];

const sections: DiseaseSection[] = [
  {
    icon: Eye, title: "Définition",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>La neuropathie optique héréditaire de Leber, souvent abrégée NOHL (ou LHON en anglais), est une maladie rare qui touche les cellules ganglionnaires de la rétine et le nerf optique. Elle se manifeste par une perte visuelle centrale brutale ou subaiguë, habituellement sans douleur.</p>
        <p>La personne voit encore sur les côtés, mais les détails deviennent flous ou disparaissent au centre du champ visuel : lecture, reconnaissance des visages, vision des contrastes fins et perception des couleurs sont alors fortement perturbées.</p>
        <p>Cette maladie ne doit pas être confondue avec l'amaurose congénitale de Leber, qui est une maladie différente touchant la rétine dès l'enfance.</p>
      </div>
    ),
  },
  {
    icon: HeartPulse, title: "Une origine mitochondriale",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Dans la majorité des cas, la maladie de Leber est liée à une anomalie de l'ADN mitochondrial. Les mitochondries produisent l'énergie nécessaire au fonctionnement des cellules. Or, les cellules du nerf optique ont des besoins énergétiques très élevés.</p>
        <p>La transmission est dite maternelle : une mère porteuse peut transmettre l'anomalie à ses enfants, filles comme garçons. Un père atteint ne transmet pas la mutation mitochondriale.</p>
        <p>Trois variants mitochondriaux expliquent la majorité des cas : m.11778G&gt;A dans MT-ND4, m.3460G&gt;A dans MT-ND1 et m.14484T&gt;C dans MT-ND6. Être porteur ne signifie pas toujours que la maladie se déclarera (pénétrance incomplète).</p>
        <p>En Europe, la prévalence est estimée entre environ 1 personne sur 27 000 et 1 sur 54 000. Les hommes sont nettement plus souvent touchés, avec un pic entre 15 et 35 ans.</p>
      </div>
    ),
  },
  {
    icon: Stethoscope, title: "Les symptômes typiques",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>La baisse de vision apparaît généralement sur un œil puis atteint l'autre dans les semaines ou les mois qui suivent.</p>
        <ul className="space-y-2 ml-4">
          {["Baisse rapide et indolore de la vision centrale", "Vision floue, brouillée ou voilée au centre", "Difficulté à lire, reconnaître les visages ou voir les détails", "Altération de la vision des couleurs, surtout du rouge et du vert", "Scotome central, c'est-à-dire une tache centrale plus ou moins sombre", "Gêne importante pour les activités fines alors que la vision périphérique reste en partie préservée"].map((s, i) => (
            <li key={i} className="flex items-start gap-2"><span className="text-primary font-bold">•</span> {s}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    icon: Eye, title: "Comment le diagnostic est-il posé ?",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Le diagnostic repose sur l'histoire clinique et l'examen ophtalmologique : acuité visuelle, vision des couleurs, champ visuel et aspect du nerf optique. Des examens comme l'OCT et parfois des explorations électrophysiologiques peuvent aider.</p>
        <p>La confirmation se fait par l'analyse génétique. Le conseil génétique est important car il permet d'expliquer le risque familial. Le médecin doit aussi éliminer d'autres causes de neuropathie optique.</p>
      </div>
    ),
  },
  {
    icon: AlertTriangle, title: "Évolution et facteurs aggravants",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>L'évolution est variable. Dans beaucoup de cas, la baisse visuelle devient sévère. Une récupération visuelle spontanée est possible chez certains patients mais n'est ni constante ni prévisible. Elle semble plus favorable avec la mutation m.14484T&gt;C.</p>
        <p>Certains facteurs pourraient favoriser l'expression de la maladie : le <strong>tabac</strong> et la <strong>consommation excessive d'alcool</strong>. L'arrêt du tabac et la modération de l'alcool sont fortement recommandés.</p>
      </div>
    ),
  },
  {
    icon: ShieldCheck, title: "Traitement et prise en charge",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>Il n'existe pas de traitement curatif garantissant une récupération complète. En revanche, l'<strong>idébénone (Raxone®)</strong> dispose d'une autorisation en Europe. Le bénéfice semble surtout marqué lorsqu'il est instauré précocement, idéalement dans la première année suivant le début des symptômes.</p>
        <p>La recherche avance, notamment dans la thérapie génique pour certaines formes liées au gène MT-ND4.</p>
      </div>
    ),
  },
  {
    icon: BookOpen, title: "Vivre avec la maladie de Leber",
    content: (
      <div className="space-y-4 text-lg text-foreground leading-relaxed">
        <p>La prise en charge comprend l'accompagnement en basse vision : rééducation orthoptique, adaptation de l'éclairage, aides optiques ou électroniques, agrandissement des caractères, outils de lecture vocale et conseils pratiques.</p>
        <p>Un suivi psychologique peut être utile. La perte visuelle rapide est souvent vécue comme un choc, en particulier chez des patients jeunes. Des solutions existent pour continuer à étudier, travailler, communiquer et se déplacer.</p>
        <p><strong>Toute baisse brutale de la vision centrale, en particulier chez un sujet jeune et sans douleur, justifie une consultation ophtalmologique rapide.</strong></p>
      </div>
    ),
  },
];

const keyPoints = [
  { label: "Nature de la maladie", value: "Neuropathie optique génétique rare liée le plus souvent à l'ADN mitochondrial." },
  { label: "Transmission", value: "Transmission maternelle." },
  { label: "Symptôme majeur", value: "Perte rapide, indolore et centrale de la vision, souvent bilatérale." },
  { label: "Facteurs à éviter", value: "Tabac, excès d'alcool, toxiques, carences nutritionnelles." },
  { label: "Prise en charge", value: "Diagnostic génétique, suivi spécialisé, idébénone selon indication, rééducation basse vision." },
];

const MaladieDeLeber = () => (
  <HereditaryDiseasePageLayout
    seoTitle="Maladie de Leber — Neuropathie optique héréditaire | LirElia"
    seoDescription="Neuropathie optique héréditaire de Leber (NOHL) : symptômes, diagnostic génétique, traitement par idébénone et accompagnement basse vision."
    canonicalPath="/maladies-yeux/maladies-hereditaires/maladie-de-leber"
    diseaseName="La maladie de Leber"
    subtitle="Neuropathie optique héréditaire de Leber (NOHL / LHON)"
    heroIntro="La maladie de Leber est une maladie génétique rare du nerf optique, liée dans la majorité des cas à une anomalie de l'ADN mitochondrial. Elle provoque une baisse rapide et indolore de la vision centrale, le plus souvent chez l'adolescent ou l'adulte jeune."
    keyFact="La maladie de Leber est rare (1 sur 27 000 à 54 000 en Europe). Elle touche plus souvent les hommes. L'idébénone dispose d'une autorisation européenne. La recherche en thérapie génique progresse."
    sections={sections}
    keyPoints={keyPoints}
    siblings={siblings}
  />
);

export default MaladieDeLeber;
