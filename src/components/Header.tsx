import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Building2, UserCheck } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import protettaLogo from "@/assets/protetta-logo.png";
import protettaLogo3D from "@/assets/protetta-logo-3d-new.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isClientPage = location.pathname === "/cliente";
  const isBrokerPage = location.pathname === "/corretor";
  const isOtherPage = !isClientPage && !isBrokerPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

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

          {/* Desktop Navigation - Cliente */}
          {isClientPage && (
            <nav className="hidden lg:flex items-center gap-1 ml-auto mr-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="px-4 py-2 text-sm font-normal text-foreground hover:text-primary hover:bg-primary/5 transition-all flex items-center gap-1">
                    A Protetta
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-64 bg-background/95 backdrop-blur-md border border-border shadow-xl animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
                >
                  <DropdownMenuItem 
                    onClick={() => scrollToSection("quem-somos")} 
                    className="cursor-pointer hover:bg-primary/10 transition-colors duration-200 focus:bg-primary/10"
                  >
                    <div className="py-2">
                      <div className="font-semibold text-foreground">Quem somos</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/cliente" 
                      onClick={() => scrollToSection("o-que-fazemos")} 
                      className="cursor-pointer hover:bg-primary/10 transition-colors duration-200 focus:bg-primary/10"
                    >
                      <div className="py-2">
                        <div className="font-semibold text-foreground">O que fazemos</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/cliente" 
                      onClick={() => scrollToSection("como-fazemos")} 
                      className="cursor-pointer hover:bg-primary/10 transition-colors duration-200 focus:bg-primary/10"
                    >
                      <div className="py-2">
                        <div className="font-semibold text-foreground">Como fazemos</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => scrollToSection("diferenciais")} 
                    className="cursor-pointer hover:bg-primary/10 transition-colors duration-200 focus:bg-primary/10"
                  >
                    <div className="py-2">
                      <div className="font-semibold text-foreground">Por que escolher a Protetta?</div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button 
                onClick={() => scrollToSection("diferenciais")}
                className="px-4 py-2 text-sm font-normal text-foreground hover:text-primary hover:bg-primary/5 transition-all"
              >
                Especialidades
              </button>

              <button 
                onClick={() => scrollToSection("responsabilidade-social")}
                className="px-4 py-2 text-sm font-normal text-foreground hover:text-primary hover:bg-primary/5 transition-all"
              >
                Responsabilidade Social
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="px-4 py-2 text-sm font-normal text-foreground hover:text-primary hover:bg-primary/5 transition-all flex items-center gap-1">
                    Carreiras
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-64 bg-background/95 backdrop-blur-md border border-border shadow-xl animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
                >
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/prochange" 
                      className="cursor-pointer hover:bg-primary/10 transition-colors duration-200 focus:bg-primary/10"
                    >
                      <div className="py-2">
                        <div className="font-semibold text-foreground">Pro Orange</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => scrollToSection("responsabilidade-social")} 
                    className="cursor-pointer hover:bg-primary/10 transition-colors duration-200 focus:bg-primary/10"
                  >
                    <div className="py-2">
                      <div className="font-semibold text-foreground">ESG</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/contato" 
                      className="cursor-pointer hover:bg-primary/10 transition-colors duration-200 focus:bg-primary/10"
                    >
                      <div className="py-2">
                        <div className="font-semibold text-foreground">Enviar CV</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link 
                to="/contato" 
                className="px-4 py-2 text-sm font-normal text-foreground hover:text-primary hover:bg-primary/5 transition-all"
              >
                Fale com a Protetta
              </Link>
            </nav>
          )}

          {/* Desktop Navigation - Corretor */}
          {isBrokerPage && (
            <nav className="hidden lg:flex items-center gap-1 ml-auto mr-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="px-4 py-2 text-sm font-normal text-foreground hover:text-primary hover:bg-primary/5 transition-all flex items-center gap-1">
                    A Protetta
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-80 bg-background/95 backdrop-blur-md border border-border shadow-xl animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
                >
                  <DropdownMenuItem 
                    onClick={() => scrollToSection("sobre-protetta")} 
                    className="cursor-pointer hover:bg-primary/10 transition-colors duration-200 focus:bg-primary/10"
                  >
                    <div className="py-2">
                      <div className="font-semibold text-foreground">Sobre a Protetta</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => scrollToSection("como-funciona")} 
                    className="cursor-pointer hover:bg-primary/10 transition-colors duration-200 focus:bg-primary/10"
                  >
                    <div className="py-2">
                      <div className="font-semibold text-foreground">Como funciona uma assessoria de seguros?</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => scrollToSection("como-funciona")} 
                    className="cursor-pointer hover:bg-primary/10 transition-colors duration-200 focus:bg-primary/10"
                  >
                    <div className="py-2">
                      <div className="font-semibold text-foreground">Mas por que escolher a Protetta como assessoria?</div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button 
                onClick={() => scrollToSection("vantagens")}
                className="px-4 py-2 text-sm font-normal text-foreground hover:text-primary hover:bg-primary/5 transition-all whitespace-nowrap"
              >
                Quais as vantagens de me associar a uma assessoria?
              </button>

              <Link 
                to="/contato" 
                className="px-4 py-2 text-sm font-normal text-foreground hover:text-primary hover:bg-primary/5 transition-all"
              >
                Contato
              </Link>
            </nav>
          )}

          {/* Desktop Navigation - Outras páginas */}
          {isOtherPage && (
            <nav className="hidden lg:flex items-center gap-2 ml-auto mr-4">
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
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium flex items-center gap-1">
                    Soluções
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-64 bg-background/95 backdrop-blur-md border border-border shadow-xl animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
                >
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/sistema-bi" 
                      className="cursor-pointer hover:bg-primary/10 transition-colors duration-200 focus:bg-primary/10"
                    >
                      <div className="py-2">
                        <div className="font-semibold text-foreground mb-1">Sistema B.I.</div>
                        <div className="text-sm text-muted-foreground">Business Intelligence para gestão</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/wellness" 
                      className="cursor-pointer hover:bg-primary/10 transition-colors duration-200 focus:bg-primary/10"
                    >
                      <div className="py-2">
                        <div className="font-semibold text-foreground mb-1">Wellness Corporativo</div>
                        <div className="text-sm text-muted-foreground">Cultura de bem-estar</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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
          )}

          <div className="flex items-center gap-4">
            {/* Toggle Buttons Cliente/Corretor - Only on Client/Broker pages */}
            {(isClientPage || isBrokerPage) && (
              <div className="hidden lg:flex items-center gap-3 border-l border-border pl-6">
                <button
                  onClick={() => navigate("/cliente")}
                  className={`flex items-center gap-2 px-3 py-1.5 text-sm transition-all ${
                    isClientPage 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Building2 className="h-4 w-4" />
                  Cliente
                </button>
                <button
                  onClick={() => navigate("/corretor")}
                  className={`flex items-center gap-2 px-3 py-1.5 text-sm transition-all ${
                    isBrokerPage 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <UserCheck className="h-4 w-4" />
                  Corretor
                </button>
              </div>
            )}

            {/* CTA Button */}
            {isOtherPage && (
              <Link to="/cotacao" className="hidden lg:block">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all">
                  Solicitar Cotação
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Cliente */}
        {isClientPage && isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-background z-50 overflow-y-auto">
            <div className="container mx-auto px-6 py-8">
              <div className="flex justify-center mb-8">
                <img 
                  src={protettaLogo3D} 
                  alt="Protetta Seguros" 
                  className="h-24 w-auto animate-fade-in hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
              </div>
              
              <div className="mb-4 px-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Menu
                </span>
              </div>
              
              <nav className="flex flex-col gap-2">
                <button 
                  onClick={() => scrollToSection("quem-somos")}
                  className="px-4 py-4 text-foreground hover:text-primary transition-all text-left font-medium text-base"
                >
                  Quem somos
                </button>
                <button 
                  onClick={() => scrollToSection("diferenciais")}
                  className="px-4 py-4 text-foreground hover:text-primary transition-all text-left font-medium text-base"
                >
                  Especialidades
                </button>
                <button 
                  onClick={() => scrollToSection("responsabilidade-social")}
                  className="px-4 py-4 text-foreground hover:text-primary transition-all text-left font-medium text-base"
                >
                  Responsabilidade Social
                </button>
                <button 
                  onClick={() => scrollToSection("fale-com-a-protetta")}
                  className="px-4 py-4 text-foreground hover:text-primary transition-all text-left font-medium text-base"
                >
                  Fale com a Protetta
                </button>
                <Link 
                  to="/contato" 
                  className="px-4 py-4 text-foreground hover:text-primary transition-all font-medium text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contato
                </Link>
              </nav>
              
              <div className="mt-8 px-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    navigate("/corretor");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all py-6 text-base font-semibold rounded-xl"
                >
                  <UserCheck className="h-5 w-5 mr-2" />
                  Ver como Corretor
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu - Corretor */}
        {isBrokerPage && isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-background z-50 overflow-y-auto">
            <div className="container mx-auto px-6 py-8">
              <div className="flex justify-center mb-8">
                <img 
                  src={protettaLogo3D} 
                  alt="Protetta Seguros" 
                  className="h-24 w-auto animate-fade-in hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
              </div>
              
              <div className="mb-4 px-2">
                <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
                  Menu
                </span>
              </div>
              
              <nav className="flex flex-col gap-2">
                <button 
                  onClick={() => scrollToSection("sobre-protetta")}
                  className="px-4 py-4 text-foreground hover:text-secondary transition-all text-left font-medium text-base"
                >
                  Sobre a Protetta
                </button>
                <button 
                  onClick={() => scrollToSection("como-funciona")}
                  className="px-4 py-4 text-foreground hover:text-secondary transition-all text-left font-medium text-base"
                >
                  Como funciona
                </button>
                <button 
                  onClick={() => scrollToSection("vantagens")}
                  className="px-4 py-4 text-foreground hover:text-secondary transition-all text-left font-medium text-base"
                >
                  Vantagens
                </button>
                <Link 
                  to="/contato" 
                  className="px-4 py-4 text-foreground hover:text-secondary transition-all font-medium text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contato
                </Link>
              </nav>
              
              <div className="mt-8 px-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    navigate("/cliente");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full border-2 border-secondary/30 text-secondary hover:bg-secondary hover:text-white transition-all py-6 text-base font-semibold rounded-xl"
                >
                  <Building2 className="h-5 w-5 mr-2" />
                  Ver como Cliente
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu - Outras páginas */}
        {isOtherPage && isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-background z-50 overflow-y-auto">
            <div className="container mx-auto px-6 py-8">
              <div className="flex justify-center mb-8">
                <img 
                  src={protettaLogo3D} 
                  alt="Protetta Seguros" 
                  className="h-24 w-auto animate-fade-in hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
              </div>
              
              <div className="mb-4 px-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Navegação
                </span>
              </div>
              
              <nav className="flex flex-col gap-2">
              <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Navegação
              </div>
              <Link 
                to="/sobre" 
                className={`px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all font-medium border-l-2 border-transparent hover:border-primary ${
                  isMobileMenuOpen ? 'animate-fade-in' : ''
                } [animation-delay:50ms] opacity-0`}
                style={{ animationFillMode: 'forwards' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <a 
                href="/#diferenciais" 
                className={`px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all font-medium border-l-2 border-transparent hover:border-primary ${
                  isMobileMenuOpen ? 'animate-fade-in' : ''
                } [animation-delay:100ms] opacity-0`}
                style={{ animationFillMode: 'forwards' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Diferenciais
              </a>
              
              <div className="px-2 py-1 mt-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Soluções
              </div>
              <Link 
                to="/sistema-bi" 
                className={`px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all font-medium border-l-2 border-transparent hover:border-primary ${
                  isMobileMenuOpen ? 'animate-fade-in' : ''
                } [animation-delay:150ms] opacity-0`}
                style={{ animationFillMode: 'forwards' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sistema B.I.
              </Link>
              <Link 
                to="/wellness" 
                className={`px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all font-medium border-l-2 border-transparent hover:border-primary ${
                  isMobileMenuOpen ? 'animate-fade-in' : ''
                } [animation-delay:200ms] opacity-0`}
                style={{ animationFillMode: 'forwards' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Wellness Corporativo
              </Link>
              <Link 
                to="/prochange" 
                className={`px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all font-medium border-l-2 border-transparent hover:border-primary ${
                  isMobileMenuOpen ? 'animate-fade-in' : ''
                } [animation-delay:250ms] opacity-0`}
                style={{ animationFillMode: 'forwards' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                #ProChange
              </Link>
              
              <div className="h-px bg-border/50 my-3 mx-4" />
              
              <Link 
                to="/contato" 
                className={`px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all font-medium border-l-2 border-transparent hover:border-primary ${
                  isMobileMenuOpen ? 'animate-fade-in' : ''
                } [animation-delay:300ms] opacity-0`}
                style={{ animationFillMode: 'forwards' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
              
              <div className={`mt-4 px-4 ${
                isMobileMenuOpen ? 'animate-fade-in' : ''
              } [animation-delay:350ms] opacity-0`}
              style={{ animationFillMode: 'forwards' }}>
                <Link to="/cotacao" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg">
                    Solicitar Cotação
                  </Button>
                </Link>
              </div>
            </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
