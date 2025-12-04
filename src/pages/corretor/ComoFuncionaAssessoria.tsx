import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Users, Monitor, GraduationCap, DollarSign, FileKey, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ComoFuncionaAssessoria = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappMessage = "Olá! Sou corretor e gostaria de saber como funciona a assessoria da Protetta.";
  const phoneNumber = "5521999999999";

  const features = [
    {
      icon: Users,
      title: "Suporte",
      description: "Damos todo suporte técnico, comercial e operacional para sua Corretora. Canalizamos o suporte de mais de 30 Cias em um único lugar."
    },
    {
      icon: Monitor,
      title: "Tecnologia",
      description: "São diversas soluções em tecnologia para sua Corretora. Através da BaetaPRO, tenha acesso a multicálculo, simulador de saúde, leads, marketing digital e mais."
    },
    {
      icon: GraduationCap,
      title: "Capacitação",
      description: "Treinamentos ao vivo semanais, eventos especiais, parceria com a ENS e uma plataforma completa com mais de 800 conteúdos sobre seguros."
    }
  ];

  const benefits = [
    {
      icon: Building2,
      title: "Ponte entre Corretor e Seguradora",
      description: "Atuamos como facilitadores, conectando você às melhores seguradoras do mercado com processos simplificados."
    },
    {
      icon: DollarSign,
      title: "Custo Zero para o Corretor",
      description: "Nossa assessoria não tem custo algum para você. Ganhamos juntos quando você vende."
    },
    {
      icon: FileKey,
      title: "Seu Próprio Código",
      description: "Você mantém sua identidade e seu código de corretor. A parceria é transparente e respeitosa."
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
      <section className="pt-28 pb-16 bg-gradient-to-br from-[hsl(175,84%,55%)]/20 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-secondary">
                  <Home className="h-4 w-4 mr-2" />
                  Início
                </Button>
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/corretor">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-secondary">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Corretor
                </Button>
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Como Funciona uma Assessoria de Seguros?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Entenda como podemos potencializar suas vendas de saúde.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gradient-to-br from-[hsl(175,84%,55%)] to-[hsl(175,84%,45%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm md:text-base font-semibold text-white/90 tracking-wider mb-4">
                ASSESSORIA PARA TODOS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Tudo o que sua Corretora precisa para prosperar
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="p-8 bg-white/95 backdrop-blur-sm hover:bg-white transition-all hover:shadow-xl h-full">
                    <feature.icon className="h-12 w-12 text-[hsl(175,84%,45%)] mb-6" strokeWidth={1.5} />
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Como Funciona na Prática
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="p-8 text-center hover:shadow-xl transition-all h-full">
                    <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
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
              Passo a Passo
            </h2>
            
            <div className="space-y-6">
              {[
                "Você se cadastra como parceiro Protetta",
                "Recebe acesso às nossas ferramentas e plataformas",
                "Participa dos treinamentos e capacitações",
                "Começa a vender com nosso suporte integral",
                "Acompanha suas vendas e comissões em tempo real"
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 flex items-center gap-6 hover:shadow-lg transition-all">
                    <div className="bg-gradient-to-br from-secondary to-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0">
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

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Pronto para começar?
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato e torne-se um corretor parceiro da Protetta.
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90">
                Quero Ser Parceiro
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber={phoneNumber} message={whatsappMessage} />
    </motion.div>
  );
};

export default ComoFuncionaAssessoria;
