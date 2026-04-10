import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import heroImage from "@/assets/qui-sommes-nous-hero.jpg";
import fondateursImage from "@/assets/fondateurs-lirelia.jpg";

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Qui sommes-nous ? — LirElia, experts en basse vision"
        description="25 ans d'expérience en basse vision, un visiopraticien et un ingénieur réunis par une conviction : chacun mérite un accompagnement humain et concret."
        canonicalPath="/qui-sommes-nous"
      />
      <Header />
      <main id="main-content">
        {/* Hero Banner */}
        <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" loading="eager" decoding="async" width={1440} height={500} />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <p className="text-secondary font-semibold text-lg mb-3">Notre histoire</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Qui sommes-nous ? L'expertise LirElia en basse vision
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Deux expertises complémentaires au service de la basse vision. Une conviction commune : face à la malvoyance, chacun mérite un accompagnement humain, expérimenté et concret.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-foreground leading-relaxed mb-6">
                LirElia est né de la rencontre de deux parcours et d'une conviction commune : face à la malvoyance, les personnes ont besoin d'un accompagnement à la fois humain, expérimenté et concret.
              </p>
            </div>
          </div>
        </section>

        {/* Two columns: Visiopraticien + Ingénieur */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
              {/* Le visiopraticien */}
              <div className="bg-card rounded-2xl border-2 border-border p-8 lg:p-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Le visiopraticien
                </h2>
                <div className="space-y-5 text-lg text-foreground leading-relaxed">
                  <p>
                    L'un des fondateurs est visiopraticien spécialisé en basse vision depuis plus de vingt-cinq ans. Depuis de nombreuses années, il accompagne des personnes atteintes de DMLA, de glaucome, de rétinopathie et d'autres pathologies visuelles.
                  </p>
                  <p>
                    Son expérience de terrain lui a appris une chose essentielle : la malvoyance ne se résume jamais à un chiffre sur une ordonnance. Elle touche la lecture, les déplacements, les gestes du quotidien, l'autonomie et la confiance en soi.
                  </p>
                  <p>
                    Il apporte l'expérience du terrain : compréhension des besoins, regard pratique sur la basse vision, connaissance des difficultés du quotidien et accompagnement personnalisé.
                  </p>
                </div>
              </div>

              {/* L'ingénieur passionné */}
              <div className="bg-card rounded-2xl border-2 border-border p-8 lg:p-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  L'ingénieur passionné
                </h2>
                <div className="space-y-5 text-lg text-foreground leading-relaxed">
                  <p>
                    À ses côtés, un ingénieur passionné par les nouvelles technologies apporte une expertise complémentaire. Il explore, analyse et évalue les aides électroniques, les systèmes d'agrandissement, les solutions de lecture et les outils numériques capables d'améliorer concrètement la vie des personnes déficientes visuelles.
                  </p>
                  <p>
                    L'ingénieur apporte la veille technologique : analyse des innovations, test des nouveaux outils, compréhension des usages et sélection des solutions réellement utiles.
                  </p>
                  <p>
                    Ensemble, ils croisent expérience humaine et innovation technique pour proposer des repères fiables, des conseils concrets et des solutions adaptées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders photo */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-md mx-auto text-center">
              <div className="rounded-2xl overflow-hidden border-2 border-border shadow-lg mb-6">
                <img
                  src={fondateursImage}
                  alt="Les deux fondateurs de LirElia : un visiopraticien expérimenté et un ingénieur passionné"
                  className="w-full h-auto"
                />
              </div>
              <p className="font-serif text-xl font-bold text-foreground">Les fondateurs</p>
            </div>
          </div>
        </section>

        {/* Équipe et réseau */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                Une équipe et un réseau engagés
              </h2>
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  Autour des fondateurs, LirElia s'appuie sur une équipe soudée composée de professionnels attentifs aux enjeux du handicap visuel, de spécialistes des technologies d'assistance et d'entrepreneurs engagés dans le domaine de la basse vision.
                </p>
                <p>
                  Cette dynamique collective permet de :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>suivre les innovations utiles ;</li>
                  <li>tester de nouveaux produits ;</li>
                  <li>évaluer leur intérêt réel dans la vie quotidienne ;</li>
                  <li>rester proche des besoins du terrain.</li>
                </ul>
                <p>
                  LirElia entretient également des relations solides avec des acteurs locaux, notamment des opticiens et optométristes, afin de garder une approche concrète, cohérente et connectée à la réalité des patients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Two columns: Approche centrée + Attention aux aidants */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
              {/* Approche centrée */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Une approche centrée sur la vie réelle
                </h2>
                <div className="space-y-5 text-lg text-foreground leading-relaxed">
                  <p>
                    LirElia n'a pas été conçu comme un simple catalogue d'aides visuelles ou de loupes électroniques. Le projet repose sur une idée plus large : aider les personnes malvoyantes à rester actrices de leur vie, en leur apportant des solutions utiles, compréhensibles et adaptées à leur quotidien.
                  </p>
                  <p>
                    C'est aussi dans cet esprit qu'a été imaginé le Club LirElia : un espace d'échange destiné aux personnes malvoyantes, à leurs proches et à leurs aidants, pour partager des expériences, découvrir de nouvelles solutions et ne pas rester seuls face aux difficultés.
                  </p>
                </div>
              </div>

              {/* Attention aux aidants */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Une attention particulière aux proches aidants
                </h2>
                <div className="space-y-5 text-lg text-foreground leading-relaxed">
                  <p>
                    La malvoyance touche bien sûr la personne concernée, mais aussi son entourage. C'est pourquoi les fondateurs de LirElia accordent une place importante aux aidants et aux familles.
                  </p>
                  <p>
                    Cette volonté de transmission se retrouve également dans les ouvrages déjà publiés autour de la DMLA et de l'accompagnement des proches, avec le même objectif : rendre l'information plus claire, plus rassurante et plus utile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ambition */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                Notre ambition
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                LirElia s'adresse aux personnes malvoyantes, à leurs proches et à tous ceux qui recherchent des repères fiables dans l'univers de la basse vision. Notre ambition est simple : proposer un accompagnement sérieux, accessible et profondément humain, à la croisée de l'expérience, de la technologie et de l'attention portée à chacun. LirElia, c'est la rencontre de l'expertise terrain, de l'innovation utile et d'une équipe engagée pour aider chacun à continuer à vivre pleinement malgré la baisse de vision.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuiSommesNous;
