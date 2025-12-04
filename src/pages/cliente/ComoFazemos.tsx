import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Lightbulb, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ComoFazemos = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappMessage = "Olá! Gostaria de saber mais sobre a metodologia da Protetta Seguros.";
  const phoneNumber = "5521999999999";

  const pillars = [
    {
      icon: Users,
      title: "Equipe Disruptiva",
      description: "Nossa equipe é formada por profissionais que pensam fora da caixa, sempre buscando soluções inovadoras e criativas para os desafios do mercado de seguros."
    },
    {
      icon: Lightbulb,
      title: "Conhecimento Técnico",
      description: "Anos de experiência e estudo contínuo nos permitem dominar todos os aspectos técnicos do mercado segurador, garantindo as melhores soluções para nossos clientes."
    },
    {
      icon: Globe,
      title: "Experiência Global",
      description: "Conhecemos as melhores práticas do mercado internacional e as adaptamos para a realidade brasileira, trazendo o que há de mais moderno em gestão de seguros."
    },
    {
      icon: Zap,
      title: "Trabalho Duro",
      description: "Acreditamos que resultados excepcionais vêm de dedicação excepcional. Nossa equipe está sempre pronta para ir além e entregar o melhor para você."
    }
  ];

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/cliente">
              <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-primary">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Cliente
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Como Fazemos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Combinando 4 pilares essenciais para entregar excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shrink-0">
                        <pillar.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {pillar.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Nossa Metodologia
            </h2>
            
            <div className="space-y-6">
              {["Análise do perfil da empresa", "Identificação de necessidades", "Pesquisa de mercado", "Apresentação de soluções", "Implementação e acompanhamento"].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 flex items-center gap-6 hover:shadow-lg transition-all">
                    <div className="bg-gradient-to-br from-primary to-secondary w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <p className="text-lg font-medium text-foreground">{step}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber={phoneNumber} message={whatsappMessage} />
    </motion.div>
  );
};

export default ComoFazemos;
