import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Award, TrendingUp } from "lucide-react";

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

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <Award className="w-4 h-4 mr-2" />
              Primeira Hub de Seguros
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold bg-secondary/10 text-secondary-foreground border-secondary/20 hover:bg-secondary/20 transition-colors">
              <Shield className="w-4 h-4 mr-2" />
              100% Seguro
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <TrendingUp className="w-4 h-4 mr-2" />
              Desde 2017
            </Badge>
          </div>

          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Sua porta de entrada
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl -z-10"></div>
              </span>
              <br />
              para o universo dos seguros de saúde empresariais
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms] opacity-0 font-light" style={{ animationFillMode: 'forwards' }}>
              Muito mais do que brokers: somos o 
              <span className="text-primary font-semibold"> primeiro hub de seguros do Brasil </span> 
              focado em saúde corporativa
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12 animate-fade-in [animation-delay:400ms] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">2017</div>
                <div className="text-sm text-muted-foreground">Ano de Fundação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Solicite uma Análise Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('diferenciais')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-6 border-2 hover:bg-primary/10"
              >
                Conheça nossos diferenciais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHero;
