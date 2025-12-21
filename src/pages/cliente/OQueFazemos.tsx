import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, DollarSign, Shield, FileCheck, Target, TrendingDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const OQueFazemos = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da Protetta Seguros.";
  const phoneNumber = "5521967651919";

  const services = [
    { icon: DollarSign, title: "Reduzir os custos da empresa com seguros", color: "primary" },
    { icon: Shield, title: "Solucionar eventuais problemas com seguros", color: "primary" },
    { icon: FileCheck, title: "Simplificar os processos de contratação e renovação de seguros", color: "secondary" },
    { icon: Target, title: "Encontrar o produto ideal para cada caso e a melhor forma de contratação", color: "secondary" },
    { icon: TrendingDown, title: "Criar mecanismos de diminuição ou controle de sinistralidade da apólice", color: "primary" },
    { icon: Users, title: "Facilitar o dia a dia do RH absorvendo trâmites e procedimentos burocráticos", color: "secondary" },
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
      
      {/* Hero Section with Background Image */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-secondary/10 via-background to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" 
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Home className="h-4 w-4 mr-2" />
                  Início
                </Button>
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/cliente">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Cliente
                </Button>
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              O Que Fazemos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Otimizamos a contratação de seguros por empresas em todo território nacional.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-10 mb-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Criamos estratégias inteligentes, através de minuciosa análise do perfil da empresa, observando o binômio <span className="font-bold text-foreground">necessidade x capacidade</span>, a fim de:
              </p>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${service.color === 'primary' ? 'from-primary to-secondary' : 'from-secondary to-primary'} p-3 rounded-xl shrink-0`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-foreground font-medium">{service.title}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Pronto para otimizar seus seguros?
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato e descubra como podemos ajudar sua empresa.
            </p>
            <Link to="/cotacao">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Solicitar Cotação
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

export default OQueFazemos;