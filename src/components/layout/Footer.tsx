import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const logoJaune = "/images/logo-lirelia-jaune-300.png";
import { openCookiePreferences } from "@/components/CookieConsentBanner";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
            <img src={logoJaune} alt="Logo LirElia – Expert en basse vision" className="w-20 h-20 object-contain" width={80} height={80} />
              <span className="font-serif text-2xl font-bold">LirElia</span>
            </Link>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Expert en basse vision depuis 25 ans. Accompagnement, bilans et solutions adaptées.
            </p>
          </div>

          {/* Liens */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Comprendre</h3>
            <ul className="space-y-3">
              <li><Link to="/comprendre-basse-vision" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Comprendre la basse vision</Link></li>
              <li><Link to="/maladies-yeux" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Les maladies des yeux</Link></li>
              <li><Link to="/vivre-basse-vision" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Vivre au quotidien</Link></li>
              <li><Link to="/bilans-bassevision" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Bilans personnalisés</Link></li>
              <li><Link to="/club" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Club & Rencontres</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:0768474235" className="flex items-center gap-3 text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Phone className="w-6 h-6 text-secondary" />
                  07 68 47 42 35
                </a>
              </li>
              <li>
                <a href="mailto:contact@lirelia.fr" className="flex items-center gap-3 text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Mail className="w-6 h-6 text-secondary" />
                  contact@lirelia.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Infos */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Informations</h3>
            <ul className="space-y-3">
              <li><Link to="/qui-sommes-nous" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Qui sommes-nous</Link></li>
              <li><Link to="/cgv" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">CGV</Link></li>
              <li><Link to="/mentions-legales" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Mentions légales</Link></li>
              <li><Link to="/politique-de-confidentialite" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="/politique-cookies" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Politique de cookies</Link></li>
              <li>
                <button
                  onClick={() => openCookiePreferences()}
                  className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer text-left"
                >
                  Gérer mes cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lg text-primary-foreground/60">
            © 2026 LirElia. Tous droits réservés.
          </p>
          <p className="text-lg text-primary-foreground/60">
            Site accessible selon les normes WCAG 2.1
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;