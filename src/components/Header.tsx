import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import protettaLogo from "@/assets/protetta-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={protettaLogo} alt="Protetta Seguros" className="h-10" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/sobre" className="text-foreground hover:text-primary transition-colors font-medium">
            Sobre Nós
          </Link>
          <a href="/#diferenciais" className="text-foreground hover:text-primary transition-colors font-medium">
            Nossos Diferenciais
          </a>
          <div className="relative group">
            <button className="text-foreground hover:text-primary transition-colors font-medium">
              Soluções
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link to="/sistema-bi" className="block px-4 py-3 hover:bg-muted transition-colors">
                Sistema B.I.
              </Link>
              <Link to="/wellness" className="block px-4 py-3 hover:bg-muted transition-colors">
                Wellness Corporativo
              </Link>
            </div>
          </div>
          <Link to="/contato" className="text-foreground hover:text-primary transition-colors font-medium">
            Contato
          </Link>
        </nav>

        <Link to="/contato">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
            Fale com um especialista
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
