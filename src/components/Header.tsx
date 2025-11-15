import React from "react";
import { Button } from "@/components/ui/button";
import protettaLogo from "@/assets/protetta-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img src={protettaLogo} alt="Protetta Seguros" className="h-10" />
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
            Sobre Nós
          </a>
          <a href="#diferenciais" className="text-foreground hover:text-primary transition-colors font-medium">
            Nossos Diferenciais
          </a>
          <a href="#solucoes" className="text-foreground hover:text-primary transition-colors font-medium">
            Soluções
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
            Contato
          </a>
        </nav>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
          Fale com um especialista
        </Button>
      </div>
    </header>
  );
};

export default Header;
