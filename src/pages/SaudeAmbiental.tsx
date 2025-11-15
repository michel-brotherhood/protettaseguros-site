import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, TreePine, Droplets, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCard from "@/components/AnimatedCard";
import environmentalPlanting from "@/assets/environmental-planting.jpg";
import environmentalSolar from "@/assets/environmental-solar.jpg";

const SaudeAmbiental = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: impactRef, isVisible: impactVisible } = useScrollAnimation(0.1);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.1);

  const impactMetrics = [
    { icon: TreePine, value: "50.000+", label: "Árvores Plantadas" },
    { icon: Wind, value: "500t", label: "CO₂ Neutralizado" },
    { icon: Droplets, value: "30+", label: "Projetos de Preservação" },
    { icon: Leaf, value: "100%", label: "Operação Carbono Neutro" },
  ];

  const initiatives = [
    {
      title: "Reflorestamento e Preservação",
      description: "Investimos em projetos de plantio de árvores nativas e preservação de áreas de mata atlântica e amazônica.",
      image: environmentalPlanting,
    },
    {
      title: "Energia Renovável",
      description: "Apoio a iniciativas de energia limpa e sustentável, reduzindo a dependência de combustíveis fósseis.",
      image: environmentalSolar,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para home
          </Link>

          <div
            ref={heroRef}
            className={`max-w-4xl transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 rounded-full mb-6">
              <Leaf className="h-5 w-5 text-white" />
              <span className="text-white font-semibold">Sustentabilidade</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Saúde Ambiental:{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Cuidando do Futuro
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Acreditamos que a saúde do planeta está diretamente ligada à saúde das pessoas. 
              Por isso, a cada contrato fechado, adquirimos créditos de carbono para neutralizar 
              nossas emissões e investimos ativamente em projetos de preservação ambiental.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div
            ref={impactRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto transition-all duration-700 ${
              impactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {impactMetrics.map((metric, index) => (
              <AnimatedCard
                key={index}
                delay={index * 100}
                className="text-center p-8"
              >
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            ref={galleryRef}
            className={`text-center mb-16 transition-all duration-700 ${
              galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossas Iniciativas Ambientais
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Projetos concretos que estão fazendo a diferença para o planeta e para as futuras gerações.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {initiatives.map((initiative, index) => (
              <AnimatedCard
                key={index}
                delay={index * 200}
                className={`overflow-hidden ${
                  galleryVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* How It Works */}
          <div className="bg-muted/30 rounded-3xl p-12 max-w-4xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Como Funciona Nosso Programa
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cálculo de Emissões</h4>
                  <p className="text-muted-foreground">
                    Medimos o impacto ambiental de cada contrato, considerando operações, deslocamentos e recursos utilizados.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Aquisição de Créditos</h4>
                  <p className="text-muted-foreground">
                    Compramos créditos de carbono certificados de projetos verificados internacionalmente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Investimento em Preservação</h4>
                  <p className="text-muted-foreground">
                    Apoiamos ativamente projetos de reflorestamento e preservação de ecossistemas no Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <AnimatedCard className="max-w-2xl mx-auto p-12 bg-gradient-to-br from-green-600/10 to-emerald-600/10">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Juntos por um planeta mais saudável
              </h3>
              <p className="text-muted-foreground mb-8">
                Ao contratar a Protetta, você também está investindo no futuro do meio ambiente.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90 transition-opacity"
                asChild
              >
                <Link to="/contato">Saiba mais</Link>
              </Button>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SaudeAmbiental;
