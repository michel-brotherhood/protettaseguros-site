import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Home, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const QuemSomos = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappMessage = "Olá! Gostaria de saber mais sobre a Protetta Seguros.";
  const phoneNumber = "5521999999999";

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
            
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Desde 2017
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Quem Somos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Sua porta de entrada para o universo dos seguros.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 md:p-10 bg-background/80 backdrop-blur-sm border-primary/10 hover:shadow-xl transition-all">
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                Muito mais que brokers, somos a <span className="font-bold text-primary">primeira hub de seguros do Brasil</span> com foco em seguro saúde empresarial.
              </p>
            </Card>

            <Card className="p-8 md:p-10 bg-background/80 backdrop-blur-sm border-secondary/10 hover:shadow-xl transition-all">
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                Em 2017 a Protetta nasceu com um propósito: <span className="font-bold text-secondary">revolucionar o mercado segurador brasileiro</span>, oferecendo soluções inovadoras, personalizadas e de classe mundial para empresas Brasil a fora.
              </p>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-primary/5 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">2017</div>
                <div className="text-sm text-muted-foreground">Ano de Fundação</div>
              </div>
              <div className="text-center p-6 bg-secondary/5 rounded-xl">
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Focados em Saúde</div>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">1º</div>
                <div className="text-sm text-muted-foreground">Hub de Seguros do Brasil</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Nossa Essência
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Revolucionar o mercado segurador brasileiro, oferecendo soluções inovadoras e personalizadas para empresas de todo o Brasil.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida como a principal referência em seguros empresariais no Brasil, transformando a relação das empresas com seus benefícios.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Valores</h3>
                <p className="text-muted-foreground">
                  Transparência, inovação, excelência no atendimento e compromisso com resultados que transformam a vida das pessoas.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber={phoneNumber} message={whatsappMessage} />
    </motion.div>
  );
};

export default QuemSomos;
