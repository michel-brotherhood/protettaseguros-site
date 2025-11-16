import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, UserCheck, ArrowRight, Shield, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
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

      <div className="container mx-auto px-4 py-20 relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <Badge variant="secondary" className="px-6 py-3 text-base font-semibold bg-primary/10 text-primary border-primary/20">
              <Award className="w-5 h-5 mr-2" />
              Primeira Hub de Seguros do Brasil
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Protetta Seguros
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl -z-10"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms] opacity-0" style={{ animationFillMode: 'forwards' }}>
            Sua porta de entrada para o universo dos seguros de saúde empresariais
          </p>

          {/* Choice Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in [animation-delay:400ms] opacity-0" style={{ animationFillMode: 'forwards' }}>
            {/* Cliente Card */}
            <Link to="/cliente">
              <div className="group relative p-8 bg-card rounded-2xl border-2 border-border hover:border-primary hover:bg-primary transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all">
                    <Building2 className="h-10 w-10 text-white" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground group-hover:text-white transition-colors mb-4">Para Clientes</h2>
                  
                  <p className="text-muted-foreground group-hover:text-white/90 transition-colors mb-6 leading-relaxed">
                    Especialistas em seguro saúde empresarial com tecnologia de Business Intelligence e consultoria personalizada
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-colors">
                      <Shield className="w-3 h-3 mr-1" />
                      Business Intelligence
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-colors">
                      Wellness
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-colors">
                      Consultoria
                    </Badge>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group-hover:bg-white group-hover:text-primary transition-all"
                    size="lg"
                  >
                    Explorar Soluções
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Corretor Card */}
            <Link to="/corretor">
              <div className="group relative p-8 bg-card rounded-2xl border-2 border-border hover:border-secondary hover:bg-secondary transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-secondary to-primary p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all">
                    <UserCheck className="h-10 w-10 text-white" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground group-hover:text-white transition-colors mb-4">Para Corretores</h2>
                  
                  <p className="text-muted-foreground group-hover:text-white/90 transition-colors mb-6 leading-relaxed">
                    Assessoria especializada para você vender saúde com segurança, suporte integral e custo zero
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-colors">
                      <Shield className="w-3 h-3 mr-1" />
                      Suporte 24/7
                    </Badge>
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-colors">
                      Custo Zero
                    </Badge>
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-colors">
                      Treinamentos
                    </Badge>
                  </div>
                  
                  <Button 
                    variant="secondary"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 group-hover:bg-white group-hover:text-secondary transition-all"
                    size="lg"
                  >
                    Seja Parceiro
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-16 animate-fade-in [animation-delay:600ms] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <p className="text-sm text-muted-foreground">
              Desde 2017 revolucionando o mercado segurador brasileiro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
