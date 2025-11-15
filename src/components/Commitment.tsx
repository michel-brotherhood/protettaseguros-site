import React from "react";
import { Heart, Leaf } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCard from "@/components/AnimatedCard";

const commitments = [
  {
    icon: Heart,
    title: "#ProChange: Nosso braço social",
    description: "Parte de nosso lucro é revertido mensalmente para duas ONGs diferentes. Ao nos escolher, sua empresa também contribui para um mundo melhor.",
  },
  {
    icon: Leaf,
    title: "Saúde Ambiental: Cuidando do futuro",
    description: "A cada contrato fechado, adquirimos créditos de carbono para neutralizar emissões, cuidando da saúde do planeta para as futuras gerações.",
  },
];

const Commitment = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso compromisso vai além dos seguros
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {commitments.map((item, index) => (
            <AnimatedCard 
              key={index}
              delay={index * 200}
              className={`p-10 ${
                isVisible ? index === 0 ? "animate-fade-in-left" : "animate-fade-in-right" : "opacity-0"
              }`}
            >
              <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
