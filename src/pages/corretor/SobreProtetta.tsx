import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Target, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const SobreProtetta = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappMessage = "Olá! Sou corretor e gostaria de saber mais sobre a Protetta.";
  const phoneNumber = "5521967651919";

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
      <section className="pt-28 pb-16 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
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
            
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6">
              Desde 2017
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sobre a Protetta
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Facilitando a vida de corretores de seguros que desejam vender saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 md:p-10">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                Em 2017 a Protetta nasceu com um propósito: <span className="font-bold text-secondary">facilitar a vida de corretores de seguros</span> que desejam vender saúde. De lá para cá, trabalhamos duro e de forma genuína para tornar a experiência dos nossos corretores cada vez mais simples e intuitiva.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                Acreditamos que <span className="font-bold text-primary">todo corretor pode vender saúde</span> e, principalmente, que isso pode ser feito de forma leve e prática. Por isso, oferecemos suporte integral pra que você se sinta cada vez mais seguro, confiante e com autonomia em relação as suas vendas.
              </p>
            </Card>

            <Card className="p-8 md:p-10 bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
              <p className="text-xl md:text-2xl font-semibold text-foreground text-center">
                Nossa missão é fazer com que todos os nossos corretores <span className="text-secondary">prosperem</span> e <span className="text-primary">batam suas metas pessoais</span>, sem precisar se estressar para isso.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              O Que Oferecemos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Suporte Integral</h3>
                <p className="text-muted-foreground">
                  Acompanhamento completo da cotação ao pós-venda, para que você nunca fique sozinho.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Experiência Simples</h3>
                <p className="text-muted-foreground">
                  Processos intuitivos e descomplicados para você focar no que importa: vender.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Autonomia</h3>
                <p className="text-muted-foreground">
                  Ferramentas e conhecimento para você ter confiança em cada negociação.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Pronto para se tornar parceiro?
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato e descubra como podemos ajudar você a crescer.
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90">
                Fale Conosco
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

export default SobreProtetta;
