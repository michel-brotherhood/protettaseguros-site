import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Sobre a Protetta Seguros
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Excelência em seguros com um compromisso genuíno com o bem-estar de nossos clientes
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">Nossa História</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A Protetta Seguros nasceu com a missão de revolucionar a forma como as empresas gerenciam seus planos de saúde. 
              Percebemos que o mercado de seguros corporativos precisava de uma abordagem mais humana, eficiente e transparente.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Desde nossa fundação, nos dedicamos a oferecer não apenas seguros, mas uma parceria completa que simplifica 
              a gestão de benefícios e melhora a qualidade de vida dos colaboradores de nossos clientes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Confiança</h3>
              <p className="text-muted-foreground">
                Construímos relacionamentos sólidos baseados em transparência e honestidade
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Humanização</h3>
              <p className="text-muted-foreground">
                Tratamos cada cliente com atenção personalizada e cuidado genuíno
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Excelência</h3>
              <p className="text-muted-foreground">
                Buscamos constantemente a melhor qualidade em todos os nossos serviços
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Inovação</h3>
              <p className="text-muted-foreground">
                Utilizamos tecnologia e dados para oferecer soluções inteligentes
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
