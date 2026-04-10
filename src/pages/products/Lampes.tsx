import { Lightbulb } from "lucide-react";
import CategoryPageLayout from "@/components/products/CategoryPageLayout";
import lampeBureau from "@/assets/products/lampe-bureau-daylight.jpg";
import lampeSurPied from "@/assets/products/lampe-sur-pied.jpg";
import lampeLoupe from "@/assets/products/lampe-loupe.jpg";
import heroImage from "@/assets/lampe-lecture.jpg";

const products = [
  {
    name: "Lampe de bureau lumière du jour",
    slug: "lampe-bureau-daylight",
    image: lampeBureau,
    imageAlt: "Illustration aquarelle d'une lampe de bureau articulée éclairant un livre",
    description:
      "Lampe de bureau à bras articulé avec éclairage LED « lumière du jour » (5 500 K). Reproduit la lumière naturelle pour un confort optimal sans éblouissement.",
    features: [
      "Température de couleur 5 500 K (lumière du jour)",
      "Intensité réglable en continu",
      "Bras articulé orientable",
      "Faible consommation LED",
      "Pas de scintillement (flicker-free)",
    ],
    idealFor: [
      "Lecture prolongée au bureau ou en fauteuil",
      "Personnes sensibles aux lumières artificielles",
      "Complément à une loupe optique ou électronique",
    ],
    priceRange: "À partir de 45 €",
  },
  {
    name: "Lampe sur pied de lecture",
    slug: "lampe-sur-pied",
    image: lampeSurPied,
    imageAlt: "Illustration aquarelle d'un lampadaire sur pied à côté d'un fauteuil",
    description:
      "Lampadaire sur pied avec tête orientable, conçu pour éclairer une zone de lecture depuis le fauteuil. Position haute pour un éclairage ciblé sans ombre.",
    features: [
      "Hauteur ajustable (1,20 m à 1,70 m)",
      "Tête orientable à 360°",
      "LED dimmable (chaud à froid)",
      "Socle stable et discret",
      "Interrupteur accessible (pied ou variateur)",
    ],
    idealFor: [
      "Lecture en fauteuil ou dans le canapé",
      "Personnes à mobilité réduite (pas de lampe à déplacer)",
      "Salon ou chambre avec éclairage insuffisant",
    ],
    priceRange: "À partir de 80 €",
  },
  {
    name: "Lampe-loupe à pince",
    slug: "lampe-loupe",
    image: lampeLoupe,
    imageAlt: "Illustration aquarelle d'une lampe-loupe à pince fixée sur un bureau",
    description:
      "Combine éclairage LED puissant et lentille grossissante. Se fixe au bureau par pince ou base lestée. Idéale pour la lecture et les travaux de précision.",
    features: [
      "Lentille grossissante ×3 à ×5 intégrée",
      "Éclairage LED annulaire anti-ombre",
      "Fixation par pince ou base lestée",
      "Bras articulé repositionnable",
      "Mains libres pour lire ou écrire",
    ],
    idealFor: [
      "Lecture et écriture simultanées",
      "Travaux de précision (couture, modélisme)",
      "Personnes avec tremblements (mains libres)",
    ],
    priceRange: "À partir de 55 €",
  },
];

const buyingGuide = {
  title: "Comment choisir son éclairage de lecture ?",
  intro:
    "Un bon éclairage est souvent le premier facteur d'amélioration du confort de lecture. Il ne s'agit pas d'éclairer plus, mais d'éclairer mieux.",
  criteria: [
    {
      title: "Température de couleur",
      description:
        "5 000-5 500 K (lumière du jour) est le standard recommandé pour la lecture. Les tons chauds (3 000 K) sont moins fatigants le soir.",
    },
    {
      title: "Orientation de la lumière",
      description:
        "La lumière doit être dirigée sur le texte, pas vers les yeux. Un bras articulé et une tête orientable sont indispensables.",
    },
    {
      title: "Anti-éblouissement",
      description:
        "Privilégiez les lampes LED sans scintillement (flicker-free) avec un diffuseur pour éviter les reflets sur le papier.",
    },
    {
      title: "Combinaison loupe + lampe",
      description:
        "Une lampe-loupe combine les deux fonctions et libère les mains. Particulièrement utile pour les personnes avec des tremblements.",
    },
  ],
};

const Lampes = () => (
  <CategoryPageLayout
    icon={Lightbulb}
    heroImage={heroImage}
    title="Lampes de lecture adaptées"
    subtitle="Voir mieux grâce à un éclairage maîtrisé, sans éblouissement"
    intro="Un éclairage inadapté est l'une des premières causes de fatigue visuelle chez les personnes malvoyantes. Les lampes de lecture spécifiques basse vision sont conçues pour améliorer la perception du texte grâce à une température de couleur adaptée, une orientation précise et une intensité réglable — sans éblouir."
    semanticKeywords="lampe de lecture malvoyant, éclairage basse vision, lumière anti-éblouissement, fatigue visuelle, lampe adaptée, lampe loupe, éclairage lumière du jour, lampe LED lecture, lampadaire lecture basse vision"
    products={products}
    buyingGuide={buyingGuide}
    heroCta="Avoir de l'aide pour le choix d'une lampe adaptée"
    bottomCta="Demandez-nous des informations sur les lampes adaptées"
    contactSubject="eclairage-basse-vision"
    ctaText="Optimiser mon éclairage de lecture"
    seo={{
      title: "Lampes Basse Vision – Éclairage Adapté | LirElia",
      description: "Un bon éclairage change tout. Découvrez nos lampes lumière du jour, orientables et sans éblouissement, conçues pour la lecture en basse vision.",
      canonicalPath: "/aides-lecture-bassevision/lampes",
    }}
  />
);

export default Lampes;
