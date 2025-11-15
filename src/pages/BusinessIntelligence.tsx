import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, AlertCircle, FileText, ArrowRight } from "lucide-react";

const BusinessIntelligence = () => {
  const scrollToContact = () => {
    window.location.href = '/#contato-form';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-full mb-6">
              GESTÃO EFICIENTE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Sistema de Business Intelligence
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Transforme dados em decisões inteligentes sobre a saúde da sua empresa
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Solicite uma demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">O que é o Sistema B.I.?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nossa plataforma de Business Intelligence transforma dados complexos de sinistralidade e utilização 
              do plano de saúde em informações claras e acionáveis. Com dashboards intuitivos e relatórios 
              personalizados, você tem total controle sobre os custos e a saúde dos seus colaboradores.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Recursos Principais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Análise de Sinistralidade
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Acompanhe em tempo real o índice de sinistralidade do seu plano, identifique tendências 
                e tome decisões preventivas antes que os custos aumentem.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <AlertCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Mapeamento de Riscos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Identifique perfis de risco na sua base de colaboradores e implemente programas 
                preventivos para reduzir custos futuros.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Relatórios Personalizados
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Gere relatórios detalhados por departamento, faixa etária, tipo de procedimento 
                e muito mais. Informações que você precisa, quando precisa.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Dashboards Interativos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Visualize dados complexos de forma simples e intuitiva. Gráficos interativos 
                que facilitam a compreensão e a tomada de decisão.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para ter controle total sobre seu plano de saúde?
            </h2>
            <p className="text-xl mb-10 opacity-95">
              Agende uma demonstração e veja como nosso B.I. pode transformar sua gestão
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90"
            >
              Falar com especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessIntelligence;
