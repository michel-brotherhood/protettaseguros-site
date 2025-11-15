import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Smile, Activity, Calendar, ArrowRight } from "lucide-react";

const Wellness = () => {
  const scrollToContact = () => {
    window.location.href = '/#contato-form';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-secondary/20 text-secondary-foreground text-sm font-bold px-4 py-2 rounded-full mb-6">
              PRODUTIVIDADE E MOTIVAÇÃO
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Wellness Corporativo
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Construa uma cultura de bem-estar que transforma o ambiente de trabalho
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Implementar Wellness
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">O que é Wellness Corporativo?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nosso programa de Wellness Corporativo vai além de benefícios tradicionais. Criamos uma 
              cultura de bem-estar genuína, com ações mensais que melhoram a saúde física e mental 
              dos colaboradores, reduzem o absenteísmo e aumentam a produtividade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada empresa tem suas particularidades, por isso personalizamos o programa de acordo 
              com a cultura e necessidades específicas do seu negócio.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Programas e Ações
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Protocolos Mensais de Saúde
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Campanhas mensais focadas em diferentes aspectos da saúde: nutrição, atividade física, 
                saúde mental, prevenção de doenças e muito mais.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Smile className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Spa Day
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Momentos de relaxamento e autocuidado na própria empresa, com massagens, 
                meditação e atividades de bem-estar.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Palestras e Workshops
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Conteúdos educativos ministrados por especialistas em saúde, nutrição, 
                gestão de estresse e qualidade de vida.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Programas Preventivos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Iniciativas focadas em prevenção de doenças crônicas, vacinação, 
                check-ups e acompanhamento de grupos de risco.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
              Benefícios Comprovados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">-35%</div>
                <p className="text-muted-foreground">Redução no absenteísmo</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">+45%</div>
                <p className="text-muted-foreground">Aumento na produtividade</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">+60%</div>
                <p className="text-muted-foreground">Melhora na satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Invista no bem-estar da sua equipe
            </h2>
            <p className="text-xl mb-10 opacity-95">
              Colaboradores saudáveis são mais produtivos e engajados
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90"
            >
              Começar agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wellness;
