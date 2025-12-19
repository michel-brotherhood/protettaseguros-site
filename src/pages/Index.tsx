import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, UserCheck, ArrowRight, Shield, Award, Heart, Users } from "lucide-react";
import protettaLogo3D from "@/assets/protetta-logo-3d.webp";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Vibrant Alternating Background with Brand Colors */}
      <div className="absolute inset-0">
        {/* Top section - Primary (Cyan) */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
        
        {/* Bottom section - Secondary (Lime/Green) */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-tr from-secondary via-secondary/90 to-secondary/80"></div>
        
        {/* Organic wave separator */}
        <svg className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-48" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path 
            fill="hsl(var(--primary))" 
            d="M0,100 C320,180 420,20 720,100 C1020,180 1120,20 1440,100 L1440,0 L0,0 Z"
            className="opacity-90"
          />
        </svg>
        <svg className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-48" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path 
            fill="hsl(var(--secondary))" 
            d="M0,100 C320,20 420,180 720,100 C1020,20 1120,180 1440,100 L1440,200 L0,200 Z"
            className="opacity-90"
          />
        </svg>
        
        {/* Floating organic shapes */}
        <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-[20%] right-[10%] w-48 h-48 bg-white/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-[15%] left-[15%] w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[25%] right-[5%] w-56 h-56 bg-white/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Additional decorative circles */}
        <div className="absolute top-[30%] left-[25%] w-4 h-4 bg-white/40 rounded-full animate-float"></div>
        <div className="absolute top-[40%] right-[20%] w-3 h-3 bg-white/50 rounded-full animate-float" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-[35%] left-[30%] w-5 h-5 bg-white/30 rounded-full animate-float" style={{ animationDelay: '1.2s' }}></div>
      </div>

      {/* Happy People Decorative Image - Abstract representation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 pointer-events-none opacity-20">
        <div className="absolute bottom-4 left-[10%] flex items-end gap-2">
          <div className="w-8 h-16 bg-white/40 rounded-full"></div>
          <div className="w-8 h-20 bg-white/50 rounded-full"></div>
          <div className="w-8 h-14 bg-white/40 rounded-full"></div>
        </div>
        <div className="absolute bottom-4 right-[10%] flex items-end gap-2">
          <div className="w-8 h-18 bg-white/40 rounded-full"></div>
          <div className="w-8 h-16 bg-white/50 rounded-full"></div>
          <div className="w-8 h-20 bg-white/40 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          {/* 3D Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
              <img 
                src={protettaLogo3D} 
                alt="Protetta Seguros Logo" 
                className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fade-in [animation-delay:100ms] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <Badge variant="secondary" className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Primeira Hub de Seguros do Brasil
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in [animation-delay:200ms] opacity-0 drop-shadow-lg" style={{ animationFillMode: 'forwards' }}>
            <span className="relative inline-block">
              Protetta Seguros
              <div className="absolute -inset-1 bg-white/10 blur-2xl -z-10 rounded-full"></div>
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 sm:mb-16 max-w-2xl mx-auto px-4 animate-fade-in [animation-delay:300ms] opacity-0 drop-shadow" style={{ animationFillMode: 'forwards' }}>
            Sua porta de entrada para o universo dos seguros.
          </p>

          {/* Choice Cards - More Organic/Rounded Design */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 animate-fade-in [animation-delay:400ms] opacity-0" style={{ animationFillMode: 'forwards' }}>
            {/* Cliente Card */}
            <Link to="/cliente">
              <div className="group relative p-6 sm:p-8 bg-white/95 backdrop-blur-md rounded-[2.5rem] border-2 border-white/50 hover:border-primary hover:bg-white transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[3rem] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                
                <div className="relative">
                  {/* Circular Icon Container */}
                  <div className="bg-gradient-to-br from-primary to-primary/80 p-5 sm:p-6 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Building2 className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-3 sm:mb-4">Para Clientes</h2>
                  
                  <p className="text-sm sm:text-base text-muted-foreground transition-colors mb-4 sm:mb-6 leading-relaxed">
                    Soluções personalizadas de seguro saúde empresarial com tecnologia e consultoria especializada
                  </p>
                  
                  {/* Pills - More rounded */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">
                      <Shield className="w-3 h-3 mr-1" />
                      B.I.
                    </Badge>
                    <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">
                      <Heart className="w-3 h-3 mr-1" />
                      Wellness
                    </Badge>
                    <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">
                      <Users className="w-3 h-3 mr-1" />
                      Consultoria
                    </Badge>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all group-hover:shadow-lg"
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
              <div className="group relative p-6 sm:p-8 bg-white/95 backdrop-blur-md rounded-[2.5rem] border-2 border-white/50 hover:border-secondary hover:bg-white transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-[3rem] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                
                <div className="relative">
                  {/* Circular Icon Container */}
                  <div className="bg-gradient-to-br from-secondary to-secondary/80 p-5 sm:p-6 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <UserCheck className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-secondary transition-colors mb-3 sm:mb-4">Para Corretores</h2>
                  
                  <p className="text-sm sm:text-base text-muted-foreground transition-colors mb-4 sm:mb-6 leading-relaxed">
                    Assessoria especializada para você vender saúde com segurança, suporte integral e custo zero
                  </p>
                  
                  {/* Pills - More rounded */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full px-4 py-1">
                      <Shield className="w-3 h-3 mr-1" />
                      Suporte 24/7
                    </Badge>
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full px-4 py-1">
                      Custo Zero
                    </Badge>
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full px-4 py-1">
                      Treinamentos
                    </Badge>
                  </div>
                  
                  <Button 
                    variant="secondary"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full transition-all group-hover:shadow-lg"
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
          <div className="mt-12 sm:mt-16 animate-fade-in [animation-delay:600ms] opacity-0 px-4" style={{ animationFillMode: 'forwards' }}>
            <p className="text-sm sm:text-base text-white/80 font-medium drop-shadow">
              Desde 2017 revolucionando o mercado segurador brasileiro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
