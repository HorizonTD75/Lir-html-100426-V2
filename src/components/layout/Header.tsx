import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import headerBg from "@/assets/header-bg.jpg";
const logoLirelia = "/images/logo-lirelia-bleu-300.png";
import { CartDrawer } from "@/components/shop/CartDrawer";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
  { label: "Comprendre la basse vision", href: "/comprendre-basse-vision" },
  { label: "Vivre avec la basse vision", href: "/vivre-basse-vision" },
  { label: "Bilans visuels", href: "/bilans-bassevision" },
  { label: "Aides à la lecture", href: "/aides-lecture-bassevision" },
  { label: "Contact", href: "/contact-conseil" }];


  return (
    <header className="sticky top-0 z-50 border-b-2 border-border relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={headerBg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
          loading="eager"
          width={1440}
          height={80} />

        <div className="absolute inset-0 bg-card/85 backdrop-blur-sm" />
      </div>
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      
      <div className="container relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <img src={logoLirelia} alt="Logo LirElia – Expert en basse vision" className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 object-contain" width={56} height={56} />
            <div className="whitespace-nowrap">
              <span className="font-serif text-base sm:text-lg xl:text-xl font-bold text-primary">LirElia</span>
              <span className="block text-xs text-muted-foreground">Basse Vision</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center ml-2" aria-label="Navigation principale">
            {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-[20px] font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors px-2 text-left leading-snug">

                {link.label}
              </a>
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-1 sm:gap-2 ml-1 sm:ml-2 shrink-0">
            <Button variant="secondary" size="sm" asChild className="hidden xl:inline-flex">
              <Link to="/club">
                <Users className="w-4 h-4" />
                Le Club
              </Link>
            </Button>
            <CartDrawer />
            <a href="tel:0768474235" className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80" aria-label="Appelez-nous">
              <Phone className="w-4 h-4" />
              <span className="hidden 2xl:inline text-base font-bold">07 68 47 42 35</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-3 rounded-lg hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>

            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen &&
        <nav className="xl:hidden py-6 border-t-2 border-border animate-slide-up" aria-label="Menu mobile">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) =>
            <li key={link.href}>
                  <a
                href={link.href}
                className="block px-4 py-4 text-xl font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}>

                    {link.label}
                  </a>
                </li>
            )}
              <li className="pt-4 border-t-2 border-border mt-2">
                <Button variant="secondary" size="lg" className="w-full">
                  <Calendar className="w-5 h-5" />
                  Prendre RDV
                </Button>
              </li>
              <li>
                <a href="tel:0768474235" className="flex items-center justify-center gap-2 py-4 text-xl font-semibold text-primary">
                  <Phone className="w-6 h-6" />
                  07 68 47 42 35
                </a>
              </li>
            </ul>
          </nav>
        }
      </div>
    </header>);

};

export default Header;