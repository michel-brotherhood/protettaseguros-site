import { Card } from "@/components/ui/card";
import { Headphones, FileText, Star, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const differentials = [
  {
    icon: Headphones,
    title: "Canal para o Colaborador",
    description: "Um canal exclusivo de telefone e WhatsApp para que seus funcionários agendem consultas e exames com total agilidade.",
  },
  {
    icon: FileText,
    title: "Suporte para o RH",
    description: "Facilitamos a vida do RH com um canal direto para solicitar faturas, relatórios e gerenciar a movimentação de vidas.",
  },
  {
    icon: Star,
    title: "Concierge para a Diretoria",
    description: "Oferecemos um serviço de concierge exclusivo para os diretores e seus dependentes, garantindo um atendimento premium.",
  },
  {
    icon: User,
    title: "Especialista In Company",
    description: "Alocamos um especialista em sua empresa para dar suporte in loco, humanizando o atendimento e desafogando o RH.",
  },
];

const Differentials = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="diferenciais" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Uma estrutura de atendimento completa para sua empresa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <Card 
              key={index} 
              className={`p-8 hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 hover:scale-105 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
