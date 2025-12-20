import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, UserCheck, ArrowRight, Shield, Award, Heart, Users } from "lucide-react";
import protettaLogo3D from "@/assets/protetta-logo-3d.webp";
import { useParallax } from "@/hooks/useParallax";

const Index = () => {
  // Parallax effects for different layers
  const parallaxSlow = useParallax(0.08, 25);
  const parallaxMedium = useParallax(0.15, 40);
  const parallaxFast = useParallax(0.25, 60);
  const parallaxReverse = useParallax(-0.1, 30);
  return (
    <div className="min-h-screen relative overflow-hidden bg-dark-blue">
      {/* Dark Blue Background with Subtle Decorative Elements */}
      <div className="absolute inset-0">
        {/* Base gradient - dark blue */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-[hsl(210_35%_20%)] to-[hsl(210_40%_15%)]"></div>
        
        {/* Subtle cyan accent - top right - with parallax */}
        <div 
          className="absolute top-0 right-0 w-[60%] h-[50%] bg-gradient-to-bl from-primary/20 via-primary/5 to-transparent rounded-bl-[100%] transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translateY(${parallaxReverse.y}px)` }}
        ></div>
        
        {/* Subtle lime accent - bottom left - with parallax */}
        <div 
          className="absolute bottom-0 left-0 w-[50%] h-[40%] bg-gradient-to-tr from-secondary/15 via-secondary/5 to-transparent rounded-tr-[100%] transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translateY(${parallaxReverse.y * 0.7}px)` }}
        ></div>
        
        {/* Organic wave shapes - with subtle parallax */}
        <svg 
          className="absolute top-1/4 left-0 right-0 w-full h-64 opacity-10 transition-transform duration-100 ease-out will-change-transform" 
          viewBox="0 0 1440 200" 
          preserveAspectRatio="none"
          style={{ transform: `translateY(${parallaxSlow.y}px)` }}
        >
          <path 
            fill="hsl(var(--primary))" 
            d="M0,100 C320,180 420,20 720,100 C1020,180 1120,20 1440,100 L1440,200 L0,200 Z"
          />
        </svg>
        <svg 
          className="absolute bottom-1/4 left-0 right-0 w-full h-64 opacity-10 transition-transform duration-100 ease-out will-change-transform" 
          viewBox="0 0 1440 200" 
          preserveAspectRatio="none"
          style={{ transform: `translateY(${parallaxSlow.y * 0.5}px)` }}
        >
          <path 
            fill="hsl(var(--secondary))" 
            d="M0,100 C320,20 420,180 720,100 C1020,20 1120,180 1440,100 L1440,0 L0,0 Z"
          />
        </svg>
        
        {/* Floating orbs - subtle glow with parallax */}
        <div 
          className="absolute top-[15%] left-[10%] w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translateY(${parallaxMedium.y}px)` }}
        ></div>
        <div 
          className="absolute top-[25%] right-[15%] w-56 h-56 bg-secondary/10 rounded-full blur-3xl animate-pulse transition-transform duration-100 ease-out will-change-transform" 
          style={{ animationDelay: '1s', transform: `translateY(${parallaxSlow.y}px)` }}
        ></div>
        <div 
          className="absolute bottom-[20%] left-[20%] w-48 h-48 bg-primary/8 rounded-full blur-3xl animate-pulse transition-transform duration-100 ease-out will-change-transform" 
          style={{ animationDelay: '2s', transform: `translateY(${parallaxFast.y}px)` }}
        ></div>
        <div 
          className="absolute bottom-[30%] right-[10%] w-36 h-36 bg-secondary/10 rounded-full blur-3xl animate-pulse transition-transform duration-100 ease-out will-change-transform" 
          style={{ animationDelay: '0.5s', transform: `translateY(${parallaxMedium.y}px)` }}
        ></div>
        
        {/* Small floating dots with faster parallax */}
        <div 
          className="absolute top-[20%] left-[30%] w-2 h-2 bg-primary/50 rounded-full animate-float transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translateY(${parallaxFast.y}px)` }}
        ></div>
        <div 
          className="absolute top-[35%] right-[25%] w-3 h-3 bg-secondary/60 rounded-full animate-float transition-transform duration-100 ease-out will-change-transform" 
          style={{ animationDelay: '0.5s', transform: `translateY(${parallaxMedium.y}px)` }}
        ></div>
        <div 
          className="absolute bottom-[40%] left-[15%] w-2 h-2 bg-primary/40 rounded-full animate-float transition-transform duration-100 ease-out will-change-transform" 
          style={{ animationDelay: '1s', transform: `translateY(${parallaxFast.y}px)` }}
        ></div>
        <div 
          className="absolute bottom-[25%] right-[30%] w-3 h-3 bg-secondary/50 rounded-full animate-float transition-transform duration-100 ease-out will-change-transform" 
          style={{ animationDelay: '1.5s', transform: `translateY(${parallaxMedium.y}px)` }}
        ></div>
      </div>

      {/* Happy People Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundBlendMode: 'overlay',
          }}
        ></div>
        {/* Gradient overlay to blend the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/80 to-dark-blue/60"></div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          {/* 3D Logo with bounce animation */}
          <div className="flex justify-center mb-8 animate-bounce-in">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/10">
              <img 
                src={protettaLogo3D} 
                alt="Protetta Seguros Logo" 
                className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Badge with fade-in */}
          <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            <Badge variant="secondary" className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold bg-white/10 text-white border-white/20 backdrop-blur-sm">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Primeira Hub de Seguros do Brasil
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in drop-shadow-lg" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <span className="relative inline-block">
              Protetta Seguros
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10 rounded-full"></div>
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 sm:mb-16 max-w-2xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
            Sua porta de entrada para o universo dos seguros.
          </p>

          {/* Choice Cards with elaborate slide animations */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
            {/* Cliente Card - Slide from left */}
            <Link to="/cliente" className="animate-slide-in-left-bounce" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
              <div className="group relative p-6 sm:p-8 bg-white backdrop-blur-md rounded-[2.5rem] border-2 border-white/50 hover:border-primary transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.4)] hover:scale-[1.03] cursor-pointer overflow-hidden">
                {/* Animated Glow Effect - more subtle */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 rounded-[4rem] opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-500 -z-10"></div>
                
                <div className="relative">
                  {/* Icon with pop-in animation */}
                  <div className="bg-gradient-to-br from-primary to-primary/80 p-5 sm:p-6 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 group-hover:rotate-2 transition-all duration-700 ease-out shadow-lg group-hover:shadow-primary/40 group-hover:shadow-2xl ring-0 group-hover:ring-4 group-hover:ring-primary/20">
                    <Building2 className="h-10 w-10 sm:h-12 sm:w-12 text-white group-hover:animate-icon-float transition-transform duration-500 ease-out" />
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground transition-colors duration-300 mb-3 sm:mb-4">Para Clientes</h2>
                  
                  <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground/70 transition-colors mb-4 sm:mb-6 leading-relaxed">
                    Soluções personalizadas de seguro saúde empresarial com tecnologia e consultoria especializada
                  </p>
                  
                  {/* Pills - better contrast on hover */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Shield className="w-3 h-3 mr-1" />
                      B.I.
                    </Badge>
                    <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Heart className="w-3 h-3 mr-1" />
                      Wellness
                    </Badge>
                    <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Users className="w-3 h-3 mr-1" />
                      Consultoria
                    </Badge>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all group-hover:shadow-lg group-hover:shadow-primary/30"
                    size="lg"
                  >
                    Explorar Soluções
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Corretor Card - Slide from right */}
            <Link to="/corretor" className="animate-slide-in-right-bounce" style={{ animationDelay: '750ms', animationFillMode: 'both' }}>
              <div className="group relative p-6 sm:p-8 bg-white backdrop-blur-md rounded-[2.5rem] border-2 border-white/50 hover:border-secondary transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(var(--secondary)/0.4)] hover:scale-[1.03] cursor-pointer overflow-hidden">
                {/* Animated Glow Effect - more subtle */}
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 via-primary/20 to-secondary/30 rounded-[4rem] opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-500 -z-10"></div>
                
                <div className="relative">
                  {/* Icon with pop-in animation */}
                  <div className="bg-gradient-to-br from-secondary to-secondary/80 p-5 sm:p-6 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 group-hover:-rotate-2 transition-all duration-700 ease-out shadow-lg group-hover:shadow-secondary/40 group-hover:shadow-2xl ring-0 group-hover:ring-4 group-hover:ring-secondary/20">
                    <UserCheck className="h-10 w-10 sm:h-12 sm:w-12 text-white group-hover:animate-icon-float transition-transform duration-500 ease-out" />
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground transition-colors duration-300 mb-3 sm:mb-4">Para Corretores</h2>
                  
                  <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground/70 transition-colors mb-4 sm:mb-6 leading-relaxed">
                    Assessoria especializada para você vender saúde com segurança, suporte integral e custo zero
                  </p>
                  
                  {/* Pills - better contrast on hover */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full px-4 py-1 group-hover:bg-secondary group-hover:text-white transition-colors">
                      <Shield className="w-3 h-3 mr-1" />
                      Suporte 24/7
                    </Badge>
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full px-4 py-1 group-hover:bg-secondary group-hover:text-white transition-colors">
                      Custo Zero
                    </Badge>
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full px-4 py-1 group-hover:bg-secondary group-hover:text-white transition-colors">
                      Treinamentos
                    </Badge>
                  </div>
                  
                  <Button 
                    variant="secondary"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full transition-all group-hover:shadow-lg group-hover:shadow-secondary/30"
                    size="lg"
                  >
                    Seja Parceiro
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 sm:mt-16 animate-fade-in px-4" style={{ animationDelay: '900ms', animationFillMode: 'both' }}>
            <p className="text-sm sm:text-base text-white/60 font-medium">
              Desde 2017 revolucionando o mercado segurador brasileiro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;