import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, BookOpen, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCard from "@/components/AnimatedCard";
import prochangeEducation from "@/assets/prochange-education.jpg";
import prochangeFood from "@/assets/prochange-food.jpg";

const ProChange = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: impactRef, isVisible: impactVisible } = useScrollAnimation(0.1);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.1);

  const impactMetrics = [
    { icon: Users, value: "50+", label: "ONGs Apoiadas" },
    { icon: Heart, value: "R$ 2M+", label: "Investido em Causas Sociais" },
    { icon: BookOpen, value: "10.000+", label: "Crianças Beneficiadas" },
    { icon: Utensils, value: "100.000+", label: "Refeições Distribuídas" },
  ];

  const projects = [
    {
      title: "Educação Transformadora",
      description: "Apoio a ONGs que promovem educação de qualidade para crianças em situação de vulnerabilidade social.",
      image: prochangeEducation,
    },
    {
      title: "Combate à Fome",
      description: "Distribuição de cestas básicas e refeições através de parcerias com instituições de assistência social.",
      image: prochangeFood,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
        
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full mb-6">
              <Heart className="h-5 w-5 text-white" />
              <span className="text-white font-semibold">Compromisso Social</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              #ProChange:{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nosso Braço Social
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Acreditamos que empresas têm o poder e a responsabilidade de transformar a sociedade. 
              Por isso, parte de nosso lucro é revertido mensalmente para duas ONGs diferentes, 
              promovendo mudanças reais nas comunidades que mais precisam.
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
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
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
              Projetos em Andamento
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça algumas das iniciativas que apoiamos e os resultados concretos que alcançamos juntos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {projects.map((project, index) => (
              <AnimatedCard
                key={index}
                delay={index * 200}
                className={`overflow-hidden ${
                  galleryVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <AnimatedCard className="max-w-2xl mx-auto p-12 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Faça parte dessa transformação
              </h3>
              <p className="text-muted-foreground mb-8">
                Ao escolher a Protetta, sua empresa também contribui para construir um mundo mais justo e solidário.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity"
                asChild
              >
                <Link to="/contato">Entre em contato</Link>
              </Button>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProChange;
