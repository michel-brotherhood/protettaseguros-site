import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ClientLogos = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  // Clientes fictícios para demonstração
  const clients = [
    { name: "Domino's Pizza", logo: "text-red-600 font-bold text-2xl" },
    { name: "Nuuvem", logo: "text-blue-600 font-bold text-2xl" },
    { name: "TechCorp", logo: "text-purple-600 font-bold text-2xl" },
    { name: "HealthPlus", logo: "text-green-600 font-bold text-2xl" },
    { name: "GlobalBiz", logo: "text-orange-600 font-bold text-2xl" },
    { name: "StartupHub", logo: "text-cyan-600 font-bold text-2xl" },
  ];

  return (
    <section className="py-16 bg-muted/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">
            Confiança de grandes empresas
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Mais de 500 empresas confiam na Protetta
          </h2>
        </div>

        {/* Carrossel Infinito */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                >
                  <div className={client.logo}>{client.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
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
