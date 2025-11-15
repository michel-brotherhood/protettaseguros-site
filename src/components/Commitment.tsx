import { Card } from "@/components/ui/card";
import { Heart, Leaf } from "lucide-react";

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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso compromisso vai além dos seguros
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {commitments.map((item, index) => (
            <Card 
              key={index} 
              className="p-10 hover:shadow-xl transition-all duration-300 border-border"
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
