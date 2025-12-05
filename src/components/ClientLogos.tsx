import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logoAIG from "@/assets/insurance-logos/aig.png";
import logoAkad from "@/assets/insurance-logos/akad.png";
import logoAllianz from "@/assets/insurance-logos/allianz.png";
import logoAmil from "@/assets/insurance-logos/amil.png";
import logoAruana from "@/assets/insurance-logos/aruana.png";
import logoAssim from "@/assets/insurance-logos/assim.png";
import logoAXA from "@/assets/insurance-logos/axa.png";
import logoAzos from "@/assets/insurance-logos/azos.png";
import logoAzul from "@/assets/insurance-logos/azul.png";
import logoBradesco from "@/assets/insurance-logos/bradesco.png";
import logoCapemisa from "@/assets/insurance-logos/capemisa.png";
import logoCNP from "@/assets/insurance-logos/cnp.svg";
import logoCoris from "@/assets/insurance-logos/coris.png";
import logoDarwin from "@/assets/insurance-logos/darwin.png";
import logoEssor from "@/assets/insurance-logos/essor.png";
import logoExcelsior from "@/assets/insurance-logos/excelsior.png";
import logoEzze from "@/assets/insurance-logos/ezze.png";
import logoFator from "@/assets/insurance-logos/fator.png";
import logoHapvida from "@/assets/insurance-logos/hapvida.png";
import logoHDI from "@/assets/insurance-logos/hdi.png";
import logoIcatu from "@/assets/insurance-logos/icatu.png";
import logoJunto from "@/assets/insurance-logos/junto.png";
import logoJustos from "@/assets/insurance-logos/justos.png";
import logoKlini from "@/assets/insurance-logos/klini.webp";
import logoKovr from "@/assets/insurance-logos/kovr.png";
import logoLoovi from "@/assets/insurance-logos/loovi.webp";
import logoMAG from "@/assets/insurance-logos/mag.png";
import logoMapfre from "@/assets/insurance-logos/mapfre.png";
import logoMBM from "@/assets/insurance-logos/mbm.png";
import logoOmint from "@/assets/insurance-logos/omint.png";
import logoPorto from "@/assets/insurance-logos/porto.png";
import logoPottencial from "@/assets/insurance-logos/pottencial.png";
import logoPrudential from "@/assets/insurance-logos/prudential.png";
import logoQualicorp from "@/assets/insurance-logos/qualicorp.png";
import logoSabemi from "@/assets/insurance-logos/sabemi.png";
import logoSuhai from "@/assets/insurance-logos/suhai.png";
import logoSulAmerica from "@/assets/insurance-logos/sulamerica.png";
import logoTokioMarine from "@/assets/insurance-logos/tokiomarine.png";
import logoUsebens from "@/assets/insurance-logos/usebens.png";
import logoYouse from "@/assets/insurance-logos/youse.png";

const ClientLogos = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation(0.1);

  const insuranceLogos = [
    { name: "AIG", logo: logoAIG },
    { name: "Akad", logo: logoAkad },
    { name: "Allianz", logo: logoAllianz },
    { name: "Amil", logo: logoAmil },
    { name: "Aruana", logo: logoAruana },
    { name: "Assim", logo: logoAssim },
    { name: "AXA", logo: logoAXA },
    { name: "Azos", logo: logoAzos },
    { name: "Azul", logo: logoAzul },
    { name: "Bradesco", logo: logoBradesco },
    { name: "Capemisa", logo: logoCapemisa },
    { name: "CNP", logo: logoCNP },
    { name: "Coris", logo: logoCoris },
    { name: "Darwin", logo: logoDarwin },
    { name: "Essor", logo: logoEssor },
    { name: "Excelsior", logo: logoExcelsior },
    { name: "EZZE", logo: logoEzze },
    { name: "Fator", logo: logoFator },
    { name: "Hapvida", logo: logoHapvida },
    { name: "HDI", logo: logoHDI },
    { name: "Icatu", logo: logoIcatu },
    { name: "Junto", logo: logoJunto },
    { name: "Justos", logo: logoJustos },
    { name: "Klini", logo: logoKlini },
    { name: "Kovr", logo: logoKovr },
    { name: "Loovi", logo: logoLoovi },
    { name: "MAG", logo: logoMAG },
    { name: "Mapfre", logo: logoMapfre },
    { name: "MBM", logo: logoMBM },
    { name: "Omint", logo: logoOmint },
    { name: "Porto", logo: logoPorto },
    { name: "Pottencial", logo: logoPottencial },
    { name: "Prudential", logo: logoPrudential },
    { name: "Qualicorp", logo: logoQualicorp },
    { name: "Sabemi", logo: logoSabemi },
    { name: "Suhai", logo: logoSuhai },
    { name: "SulAmérica", logo: logoSulAmerica },
    { name: "Tokio Marine", logo: logoTokioMarine },
    { name: "Usebens", logo: logoUsebens },
    { name: "Youse", logo: logoYouse },
  ];

  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">
            Trabalhamos com as melhores
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Seguradoras Parceiras
          </h2>
        </div>

        {/* Grid de Logos */}
        <div ref={logosRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-6">
            {insuranceLogos.map((item, index) => (
              <div 
                key={index}
                className={`bg-background rounded-lg p-4 flex items-center justify-center hover:bg-muted/50 transition-all duration-300 hover:shadow-md min-h-[80px] ${
                  logosVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                <img 
                  src={item.logo} 
                  alt={item.name}
                  className="w-full h-auto object-contain max-h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-sm text-muted-foreground">Vidas Protegidas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-sm text-muted-foreground">Anos de Mercado</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
