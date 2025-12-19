import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Headphones, Clock, Award, BookOpen, MapPin, Trophy, MessageCircle, UserPlus, Sparkles, CheckCircle, AlertCircle, Users, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const PorQueEscolher = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappMessage = "Olá! Sou corretor e gostaria de saber por que escolher a Protetta como assessoria.";
  const phoneNumber = "5521967651919";

  const advantages = [
    { icon: Headphones, text: "Suporte integral ao corretor: da cotação ao pós-venda" },
    { icon: Clock, text: "Atendimento instantâneo ao corretor: nosso tempo máximo de resposta é de 5 minutos" },
    { icon: Award, text: "Acesso gratuito a cotador multicalculos" },
    { icon: BookOpen, text: "Treinamentos constantes de atualização de regras e campanhas de vendas das seguradoras" },
    { icon: MapPin, text: "Espaço para receber clientes e fazer reuniões no centro do Rio" },
    { icon: Trophy, text: "Campanhas exclusivas de vendas com premiações oferecidas pela Protetta" },
    { icon: MessageCircle, text: "Participe de um grupo exclusivo no WhatsApp com atualizações diárias sobre novidades e mudanças do mercado" },
    { icon: Clock, text: "Plantão de dúvidas disponível inclusive aos fins de semana" },
    { icon: UserPlus, text: "Um supervisor para te acompanhar em reuniões com clientes corporativos se desejar" },
    { icon: Sparkles, text: "e muito mais!" },
  ];

  const challengePoints = [
    { 
      icon: AlertCircle, 
      title: "Inércia", 
      description: "Seu cliente tem dificuldade de movimentar o benefício e você não consegue ajudá-lo" 
    },
    { 
      icon: Users, 
      title: "Reunião Importante", 
      description: "Você quer participar de uma reunião para vender um corporativo, mas não domina o assunto de saúde" 
    },
    { 
      icon: HelpCircle, 
      title: "Dúvidas Técnicas", 
      description: "Você sente que precisa de alguém para te ajudar a entender melhor o tema de saúde" 
    },
  ];

  const highlights = [
    "Especialização em planos de saúde empresariais",
    "Mais de 30 seguradoras parceiras",
    "Tecnologia de ponta para cotações",
    "Comissões competitivas",
    "Transparência total nos processos"
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
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80" 
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
              Por Que Escolher a Protetta?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Descubra as vantagens de ser um corretor parceiro.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section - NEW */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Porque somos uma assessoria especializada em planos de saúde!
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
                Vender saúde é complexo. Existem regras específicas, regulamentações, informações técnicas, reajustes, sinistralidade e outras variáveis que tornam a jornada do corretor mais desafiadora. <span className="font-semibold text-foreground">E é exatamente para isso que estamos aqui!</span>
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {challengePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <Card className="p-6 h-full bg-background hover:shadow-lg transition-all">
                      <div className="bg-gradient-to-br from-secondary to-primary p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                        <point.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-xl md:text-2xl font-bold text-center text-secondary">
                Vem crescer com a gente!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Happy Professionals Image */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" 
                alt="Corretores de sucesso celebrando"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  Junte-se a uma comunidade de corretores de sucesso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Vantagens de ser um Corretor Parceiro
              </h2>
              
              <div className="grid gap-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all"
                  >
                    <div className="bg-gradient-to-br from-secondary to-primary p-2 rounded-lg shrink-0">
                      <advantage.icon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-foreground">{advantage.text}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Nossos Diferenciais
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 flex items-center gap-4 hover:shadow-lg transition-all">
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0" />
                    <p className="text-lg font-medium text-foreground">{highlight}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 italic">
                "Na Protetta, acreditamos que o sucesso do corretor é o nosso sucesso. Por isso, investimos continuamente em ferramentas, treinamentos e suporte para que você possa focar no que faz de melhor: <span className="font-bold text-secondary">vender e construir relacionamentos</span>."
              </p>
              <p className="text-muted-foreground font-semibold">
                Equipe Protetta
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Pronto para fazer parte do time?
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato e descubra como podemos crescer juntos.
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

export default PorQueEscolher;