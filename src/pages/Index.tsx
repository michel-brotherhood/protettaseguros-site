import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Handshake, ArrowRight, Award, Heart, Car, Home, Plane, Shield, HardHat, Smartphone, Flame, FileText, Briefcase } from "lucide-react";
import protettaLogo3D from "@/assets/protetta-logo-3d.webp";
import cyclingVideo from "@/assets/cycling-family.mp4";

// Insurance logos
import logoBradesco from "@/assets/insurance-logos/bradesco.png";
import logoSulAmerica from "@/assets/insurance-logos/sulamerica.png";
import logoPorto from "@/assets/insurance-logos/porto.png";
import logoAmil from "@/assets/insurance-logos/amil.png";
import logoOmint from "@/assets/insurance-logos/omint.png";
import logoAssim from "@/assets/insurance-logos/assim.png";
import logoKlini from "@/assets/insurance-logos/klini.webp";
import logoHapvida from "@/assets/insurance-logos/hapvida.png";
import logoQualicorp from "@/assets/insurance-logos/qualicorp.png";
import logoMAG from "@/assets/insurance-logos/mag.png";
import logoTokioMarine from "@/assets/insurance-logos/tokiomarine.png";
import logoMapfre from "@/assets/insurance-logos/mapfre.png";
import logoSuhai from "@/assets/insurance-logos/suhai.png";
import logoHDI from "@/assets/insurance-logos/hdi.png";
import logoAllianz from "@/assets/insurance-logos/allianz.png";

const specialties = [
  { label: "Planos de Saúde e Odontológicos", icon: Heart },
  { label: "Seguro de Vida e Previdência", icon: Shield },
  { label: "Seguro Auto", icon: Car },
  { label: "Seguro Fiança", icon: FileText },
  { label: "Seguro Viagem", icon: Plane },
  { label: "Seguro Residencial", icon: Home },
  { label: "RC Profissional", icon: Briefcase },
  { label: "Seguro Obras/Engenharia", icon: HardHat },
  { label: "Equipamentos Portáteis", icon: Smartphone },
  { label: "Seguro de Incêndio", icon: Flame },
  { label: "entre outros", icon: null },
];

type InsurancePartner = { name: string; logo?: string };

const insurancePartners: InsurancePartner[] = [
  { name: "Bradesco Seguros", logo: logoBradesco },
  { name: "SulAmérica", logo: logoSulAmerica },
  { name: "Porto Seguro", logo: logoPorto },
  { name: "Amil", logo: logoAmil },
  { name: "Omint", logo: logoOmint },
  { name: "Care Plus" },
  { name: "Assim Saúde", logo: logoAssim },
  { name: "Select" },
  { name: "Leve" },
  { name: "Klini", logo: logoKlini },
  { name: "Prevent Sênior" },
  { name: "Medsênior" },
  { name: "Hapvida", logo: logoHapvida },
  { name: "Integral Saúde" },
  { name: "Ampla" },
  { name: "Nova Saúde" },
  { name: "Onmed" },
  { name: "Ever Insurance" },
  { name: "Cemeru" },
  { name: "Samoc" },
  { name: "Healthmed" },
  { name: "Qualicorp", logo: logoQualicorp },
  { name: "Supermed" },
  { name: "Metlife" },
  { name: "MAG Seguros", logo: logoMAG },
  { name: "Tokio Marine", logo: logoTokioMarine },
  { name: "Mapfre", logo: logoMapfre },
  { name: "Suhai", logo: logoSuhai },
  { name: "HDI", logo: logoHDI },
  { name: "Allianz", logo: logoAllianz },
  { name: "Assist Card" },
  { name: "Sompo Seguros" },
  { name: "Unimed Seguros" },
];

const Index = () => {
  // Duplicate partners for seamless marquee
  const marqueeItems = [...insurancePartners, ...insurancePartners];

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
        <div className="absolute inset-0 bg-dark-blue/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-transparent to-dark-blue/50"></div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center w-full">
          {/* 3D Logo */}
          <div className="flex justify-center mb-6 animate-bounce-in">
            <img 
              src={protettaLogo3D} 
              alt="Protetta Seguros Logo" 
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-4 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            <Badge variant="secondary" className="px-4 py-2 text-xs sm:text-sm font-semibold bg-white/10 text-white border-white/20 backdrop-blur-sm">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
              Primeira Hub de Seguros do Brasil
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in drop-shadow-lg" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            Protetta Seguros
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
            Sua porta de entrada para o universo dos seguros.
          </p>

          {/* Choice Cards - Smaller Circles */}
          <div className="flex flex-row items-center justify-center gap-8 sm:gap-10 max-w-3xl mx-auto px-4 mb-10">
            <Link to="/cliente" className="animate-slide-in-left-bounce" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
              <div className="group relative w-32 h-32 sm:w-40 sm:h-40 bg-primary/80 backdrop-blur-md rounded-full border border-primary/40 hover:bg-primary transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_8px_hsl(var(--primary)/0.5)] cursor-pointer flex flex-col items-center justify-center text-center p-4">
                <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8 text-white mb-2" />
                <h2 className="text-sm sm:text-base font-bold text-white mb-0.5">Para Clientes</h2>
                <p className="text-[10px] sm:text-xs text-white/80 flex items-center gap-1">
                  Explorar
                  <ArrowRight className="h-3 w-3 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </p>
              </div>
            </Link>

            <Link to="/corretor" className="animate-slide-in-right-bounce" style={{ animationDelay: '750ms', animationFillMode: 'both' }}>
              <div className="group relative w-32 h-32 sm:w-40 sm:h-40 bg-secondary/80 backdrop-blur-md rounded-full border border-secondary/40 hover:bg-secondary transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_8px_hsl(var(--secondary)/0.5)] cursor-pointer flex flex-col items-center justify-center text-center p-4">
                <Handshake className="h-7 w-7 sm:h-8 sm:w-8 text-white mb-2" />
                <h2 className="text-sm sm:text-base font-bold text-white mb-0.5">Para Corretores</h2>
                <p className="text-[10px] sm:text-xs text-white/80 flex items-center gap-1">
                  Seja Parceiro
                  <ArrowRight className="h-3 w-3 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </p>
              </div>
            </Link>
          </div>

          {/* Especialidades */}
          <div className="animate-fade-in mb-10" style={{ animationDelay: '850ms', animationFillMode: 'both' }}>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">Especialidades</p>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto px-2">
              {specialties.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-white/10 text-white/90 border border-white/10 backdrop-blur-sm"
                >
                  {item.icon && <item.icon className="h-3 w-3 text-primary" />}
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Seguradoras / Operadoras - Marquee */}
          <div className="animate-fade-in mb-8" style={{ animationDelay: '1000ms', animationFillMode: 'both' }}>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">Seguradoras & Operadoras</p>
            <div className="relative overflow-hidden max-w-5xl mx-auto">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-dark-blue to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-dark-blue to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex animate-marquee gap-6 py-2">
                {marqueeItems.map((partner, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center justify-center h-10 px-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10"
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-6 w-auto object-contain brightness-0 invert opacity-80"
                      />
                    ) : (
                      <span className="text-[11px] font-medium text-white/80 whitespace-nowrap">
                        {partner.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="animate-fade-in" style={{ animationDelay: '1100ms', animationFillMode: 'both' }}>
            <p className="text-xs sm:text-sm text-white/50 font-medium">
              Desde 2017 revolucionando o mercado segurador brasileiro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
