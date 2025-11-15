import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, Heart, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCard from "@/components/AnimatedCard";

const solutions = [
  {
    icon: BarChart3,
    tag: "GESTÃO EFICIENTE",
    title: "Sistema de Business Intelligence (B.I.)",
    description: "Transformamos dados em saúde. Com nosso sistema B.I., sua gestão de plano de saúde se torna mais transparente, com mapeamento de riscos e acompanhamento de sinistralidade.",
    cta: "Descubra o B.I.",
  },
  {
    icon: Heart,
    tag: "PRODUTIVIDADE E MOTIVAÇÃO",
    title: "Wellness Corporativo",
    description: "Implementamos uma cultura de bem-estar com protocolos mensais de saúde, spa day, palestras e ações que reduzem o absenteísmo e melhoram o ambiente de trabalho.",
    cta: "Conheça o Wellness",
  },
];

const Solutions = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="solucoes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Soluções Inteligentes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <AnimatedCard 
              key={index}
              delay={index * 200}
              className={`p-10 ${
                isVisible ? index === 0 ? "animate-fade-in-left" : "animate-fade-in-right" : "opacity-0"
              }`}
            >
              <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
                {solution.tag}
              </div>
              
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <solution.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {solution.description}
              </p>

              <Button variant="outline" className="group">
                {solution.cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
