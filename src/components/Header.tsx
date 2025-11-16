import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import protettaLogo from "@/assets/protetta-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative z-10">
            <img 
              src={protettaLogo} 
              alt="Protetta Seguros" 
              className="h-10 transition-transform duration-300 hover:scale-105" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link 
              to="/sobre" 
              className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium"
            >
              Sobre Nós
            </Link>
            <a 
              href="/#diferenciais" 
              className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium"
            >
              Diferenciais
            </a>
            
            {/* Dropdown Soluções */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium flex items-center gap-1">
                Soluções
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
                  isSolutionsOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <Link 
                  to="/sistema-bi" 
                  className="block px-6 py-4 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent transition-all border-b border-border"
                >
                  <div className="font-semibold text-foreground mb-1">Sistema B.I.</div>
                  <div className="text-sm text-muted-foreground">Business Intelligence para gestão</div>
                </Link>
                <Link 
                  to="/wellness" 
                  className="block px-6 py-4 hover:bg-gradient-to-r hover:from-secondary/10 hover:to-transparent transition-all"
                >
                  <div className="font-semibold text-foreground mb-1">Wellness Corporativo</div>
                  <div className="text-sm text-muted-foreground">Cultura de bem-estar</div>
                </Link>
              </div>
            </div>

            <Link 
              to="/prochange" 
              className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium"
            >
              #ProChange
            </Link>
            
            <Link 
              to="/contato" 
              className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium"
            >
              Contato
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/cotacao" className="hidden lg:block">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all">
                Solicitar Cotação
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-2 py-4 border-t border-border">
            <Link 
              to="/sobre" 
              className="px-4 py-3 rounded-lg text-foreground hover:bg-primary/5 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <a 
              href="/#diferenciais" 
              className="px-4 py-3 rounded-lg text-foreground hover:bg-primary/5 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Diferenciais
            </a>
            <Link 
              to="/sistema-bi" 
              className="px-4 py-3 rounded-lg text-foreground hover:bg-primary/5 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sistema B.I.
            </Link>
            <Link 
              to="/wellness" 
              className="px-4 py-3 rounded-lg text-foreground hover:bg-primary/5 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Wellness Corporativo
            </Link>
            <Link 
              to="/prochange" 
              className="px-4 py-3 rounded-lg text-foreground hover:bg-primary/5 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              #ProChange
            </Link>
            <Link 
              to="/contato" 
              className="px-4 py-3 rounded-lg text-foreground hover:bg-primary/5 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
            <Link to="/cotacao" className="mt-2" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                Solicitar Cotação
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
