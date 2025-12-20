import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Award, TrendingUp } from "lucide-react";
import familyVideo from "@/assets/family-loving.mp4";

interface ClientHeroProps {
  onSwitchMode: () => void;
}

const ClientHero: React.FC<ClientHeroProps> = ({ onSwitchMode }) => {
  const scrollToContact = () => {
    document.getElementById('contato-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-28 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Video for Mobile/Tablet - shown at top */}
          <div 
            className="block lg:hidden mb-8 animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            <div className="relative max-w-xs sm:max-w-sm mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
              <video 
                src={familyVideo}
                autoPlay
                muted
                loop
                playsInline
                className="relative rounded-xl shadow-xl w-full h-auto object-cover max-h-[280px] sm:max-h-[320px]"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Badges */}
              <div 
                className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 animate-fade-in"
                style={{ animationDelay: '200ms' }}
              >
                <Badge variant="secondary" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Primeira Hub de Seguros
                </Badge>
                <Badge variant="secondary" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold bg-secondary/10 text-secondary-foreground border-secondary/20 hover:bg-secondary/20 transition-colors">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  100% Seguro
                </Badge>
                <Badge variant="secondary" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Desde 2017
                </Badge>
              </div>

              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight animate-fade-in"
                style={{ animationDelay: '300ms' }}
              >
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] drop-shadow-sm">
                    Sua porta de entrada
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl -z-10"></div>
                </span>
                <br />
                <span className="drop-shadow-sm">para o universo dos seguros.</span>
              </h1>
              
              <p 
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in font-light"
                style={{ animationDelay: '400ms' }}
              >
                Muito mais que brokers, somos a 
                <span className="text-primary font-semibold"> primeira hub de seguros do Brasil </span> 
                com foco em seguro saúde empresarial.
              </p>

              {/* Stats */}
              <div 
                className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0 mb-8 sm:mb-10 animate-fade-in"
                style={{ animationDelay: '500ms' }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">2017</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Ano de Fundação</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-1">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Satisfação</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Suporte</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in"
                style={{ animationDelay: '600ms' }}
              >
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:ring-2 focus:ring-primary/50"
                >
                  Solicite uma Análise Gratuita
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('diferenciais')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  Conheça nossos diferenciais
                </Button>
              </div>
            </div>

            {/* Video for Desktop */}
            <div 
              className="hidden lg:block animate-fade-in"
              style={{ animationDelay: '400ms' }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                <video 
                  src={familyVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHero;
