import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const criteria = [
  {
    label: "Grossissement",
    loupeVerre: "×2 à ×5 (fixe)",
    loupeElec: "×2 à ×25 (réglable)",
    teleAgr: "×2 à ×60 (réglable)",
    lampe: "Aucun (complément)",
  },
  {
    label: "Contraste renforcé",
    loupeVerre: false,
    loupeElec: true,
    teleAgr: true,
    lampe: false,
  },
  {
    label: "Éclairage intégré",
    loupeVerre: "Certains modèles",
    loupeElec: "Rétro-éclairage écran",
    teleAgr: "Oui",
    lampe: "Oui (fonction principale)",
  },
  {
    label: "Mains libres",
    loupeVerre: "Loupe dôme uniquement",
    loupeElec: "Modèles de bureau",
    teleAgr: true,
    lampe: true,
  },
  {
    label: "Lecture prolongée",
    loupeVerre: false,
    loupeElec: "Modèles de bureau",
    teleAgr: true,
    lampe: true,
  },
  {
    label: "Portable / mobile",
    loupeVerre: true,
    loupeElec: "Modèles portables",
    teleAgr: "Modèles portables",
    lampe: false,
  },
  {
    label: "Sans batterie",
    loupeVerre: true,
    loupeElec: false,
    teleAgr: "Secteur",
    lampe: "Secteur",
  },
  {
    label: "Budget indicatif",
    loupeVerre: "10 – 90 €",
    loupeElec: "150 – 1 200 €",
    teleAgr: "500 – 3 500 €",
    lampe: "45 – 120 €",
  },
];

const columns = [
  { key: "loupeVerre" as const, label: "Loupes en verre", link: "/aides-lecture-bassevision/loupes-verre" },
  { key: "loupeElec" as const, label: "Loupes électroniques", link: "/aides-lecture-bassevision/loupes-electroniques" },
  { key: "teleAgr" as const, label: "Télé-agrandisseurs", link: "/aides-lecture-bassevision/tele-agrandisseurs" },
  { key: "lampe" as const, label: "Lampes adaptées", link: "/aides-lecture-bassevision/lampes" },
];

const CellContent = ({ value }: { value: boolean | string }) => {
  if (value === true) return <Check className="w-6 h-6 text-accent mx-auto" aria-label="Oui" />;
  if (value === false) return <X className="w-6 h-6 text-destructive mx-auto" aria-label="Non" />;
  return <span className="whitespace-nowrap">{value}</span>;
};

const ComparisonSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comparatif des aides à la lecture
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Chaque catégorie répond à des besoins différents. Ce tableau vous aide 
            à identifier rapidement la solution la plus adaptée à votre situation.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block overflow-x-auto -mx-4 px-4">
          <table className="w-full border-collapse table-fixed" role="table">
            <caption className="sr-only">
              Comparatif des 4 catégories d'aides à la lecture pour malvoyants
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-left text-base font-bold text-foreground p-3 bg-card border-2 border-border rounded-tl-xl w-[18%]"
                >
                  Critère
                </th>
                {columns.map((col, i) => (
                  <th
                    key={col.key}
                    scope="col"
                    className={`text-center text-base font-bold text-primary-foreground p-3 bg-primary w-[20.5%] ${
                      i === columns.length - 1 ? "rounded-tr-xl" : ""
                    }`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, ri) => (
                <tr key={row.label} className={ri % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                  <th
                    scope="row"
                    className="text-left text-base font-semibold text-foreground p-3 border-2 border-border"
                  >
                    {row.label}
                  </th>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="text-center text-base text-foreground p-3 border-2 border-border"
                    >
                      <CellContent value={row[col.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-3 border-2 border-border bg-card rounded-bl-xl" />
                {columns.map((col, i) => (
                  <td
                    key={col.key}
                    className={`p-3 border-2 border-border bg-card text-center ${
                      i === columns.length - 1 ? "rounded-br-xl" : ""
                    }`}
                  >
                    <Button variant="outline" size="sm" asChild>
                      <Link to={col.link}>
                        Voir la sélection
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-8">
          {columns.map((col) => (
            <div
              key={col.key}
              className="bg-card rounded-2xl border-2 border-border overflow-hidden"
            >
              <div className="bg-primary p-4">
                <h3 className="text-xl font-bold text-primary-foreground text-center">
                  {col.label}
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {criteria.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 py-2 border-b border-border last:border-0"
                  >
                    <span className="text-lg font-semibold text-foreground">
                      {row.label}
                    </span>
                    <span className="text-lg text-foreground text-right shrink-0">
                      <CellContent value={row[col.key]} />
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-4 pt-0">
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <Link to={col.link}>
                    Voir la sélection
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
