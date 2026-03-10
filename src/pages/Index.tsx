import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Handshake, ArrowRight, Award } from "lucide-react";
import protettaLogo3D from "@/assets/protetta-logo-3d.webp";
import cyclingVideo from "@/assets/cycling-family.mp4";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-dark-blue">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={cyclingVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-dark-blue/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-transparent to-dark-blue/50"></div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          {/* 3D Logo */}
          <div className="flex justify-center mb-8 animate-bounce-in">
            <img 
              src={protettaLogo3D} 
              alt="Protetta Seguros Logo" 
              className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            <Badge variant="secondary" className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold bg-white/10 text-white border-white/20 backdrop-blur-sm">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Primeira Hub de Seguros do Brasil
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in drop-shadow-lg" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            Protetta Seguros
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 sm:mb-16 max-w-2xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
            Sua porta de entrada para o universo dos seguros.
          </p>

          {/* Choice Cards - Circular modern design */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 max-w-3xl mx-auto px-4">
            {/* Cliente Card */}
            <Link to="/cliente" className="animate-slide-in-left-bounce" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
              <div className="group relative w-44 h-44 sm:w-52 sm:h-52 bg-primary/80 backdrop-blur-md rounded-full border border-primary/40 hover:bg-primary transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_8px_hsl(var(--primary)/0.5)] cursor-pointer flex flex-col items-center justify-center text-center p-5">
                <Building2 className="h-9 w-9 text-white mb-3" />
                <h2 className="text-lg sm:text-xl font-bold text-white mb-1">Para Clientes</h2>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  Explorar Soluções
                  <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </p>
              </div>
            </Link>

            {/* Corretor Card */}
            <Link to="/corretor" className="animate-slide-in-right-bounce" style={{ animationDelay: '750ms', animationFillMode: 'both' }}>
              <div className="group relative w-44 h-44 sm:w-52 sm:h-52 bg-secondary/80 backdrop-blur-md rounded-full border border-secondary/40 hover:bg-secondary transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_8px_hsl(var(--secondary)/0.5)] cursor-pointer flex flex-col items-center justify-center text-center p-5">
                <UserCheck className="h-9 w-9 text-white mb-3" />
                <h2 className="text-lg sm:text-xl font-bold text-white mb-1">Para Corretores</h2>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  Seja Parceiro
                  <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </p>
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
