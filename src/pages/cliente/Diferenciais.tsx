import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, BarChart3, Heart, Scale, HandHeart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Diferenciais = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappMessage = "Olá! Gostaria de saber mais sobre os diferenciais da Protetta Seguros.";
  const phoneNumber = "5521967651919";

  const differentials = [
    {
      icon: BarChart3,
      title: "Sistema B.I.",
      subtitle: "Business Intelligence",
      description: [
        "A saúde corporativa está diante de uma transformação inevitável: o uso estratégico dos dados para decisões mais seguras, rápidas e sustentáveis. Nesse cenário, o sistema Business Intelligence (BI) não é apenas uma ferramenta tecnológica, mas um novo paradigma de gestão.",
        "Com o BI, é possível unir dados assistenciais e financeiros, transformando-os em análises que orientam a redução de custos e promovem saúde de forma mais efetiva.",
        "Ao aplicar dashboards dinâmicos, análises preditivas e indicadores personalizados, deixamos de atuar apenas como corretores de seguros e passamos a conduzir estratégias com visão de futuro. Isso significa prevenir doenças, melhorar a experiência do colaborador e garantir equilíbrio financeiro nos contratos de saúde."
      ],
      gradient: "from-primary to-secondary"
    },
    {
      icon: Heart,
      title: "Wellness Corporativo",
      subtitle: "Saúde e Bem-estar",
      description: [
        "Contamos com uma equipe multidisciplinar de profissionais da área da saúde, que com base nas informações obtidas pelo sistema B.I., elabora e promove ações personalizadas de saúde e bem-estar para os colaboradores de nossos empresas-clientes.",
        "Com isso, buscamos aumentar a produtividade, diminuir os afastamentos por motivo de saúde, melhorar a motivação e as relações no ambiente de trabalho e reduzir ou controlar a sinistralidade da apólice."
      ],
      gradient: "from-secondary to-primary"
    },
    {
      icon: Scale,
      title: "Projur",
      subtitle: "Assessoria Jurídica",
      description: [
        "Acreditamos que as relações securitárias podem ser feitas sem complexidade, sem \"juridiquês\" e sem letras miúdas.",
        "Por isso, disponibilizamos um time de advogados, que são verdadeiros descomplicadores, pra que nossos clientes se sintam cada vez mais confiantes e amparados em relação aos seus contratos."
      ],
      gradient: "from-primary to-secondary"
    },
    {
      icon: HandHeart,
      title: "ProChange",
      subtitle: "Responsabilidade Social",
      description: [
        "Aqui na Protetta, assumimos o compromisso de apoiar continuamente diversas ONGs que atuam com programas socioeducativos, promovem acesso à alimentação e fortalecem comunidades locais em situação de vulnerabilidade.",
        "Revertemos parte dos nossos lucros para ajudar instituições que estão na linha de frente do cuidado com quem mais precisa."
      ],
      gradient: "from-secondary to-primary"
    },
    {
      icon: Leaf,
      title: "ESG",
      subtitle: "Saúde Ambiental",
      description: [
        "Desenvolvemos um programa de sustentabilidade chamado Saúde Ambiental, através do qual neutralizamos nossa pegada de carbono anualmente por meio da compra de créditos de carbono.",
        "Com isso, ajudamos diretamente projetos que atuam na preservação da mata nativa brasileira, protegendo espécies da flora e da fauna das queimadas e do desmatamento, ao mesmo tempo em que plantamos árvores novas e compensamos a emissão de CO2."
      ],
      gradient: "from-primary to-secondary"
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
              Por Que Escolher a Protetta?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Nossos diferenciais que fazem toda a diferença para sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Happy People Image Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80" 
                alt="Pessoas saudáveis e felizes"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  Cuidando da saúde e do bem-estar dos seus colaboradores
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {differentials.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-8 md:p-12 hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                    <div className={`bg-gradient-to-br ${diff.gradient} p-4 rounded-2xl shrink-0`}>
                      <diff.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        {diff.subtitle}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
                        {index + 1}. {diff.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-4 md:pl-20">
                    {diff.description.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Conheça nossos diferenciais na prática
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato e descubra como nossos diferenciais podem transformar a gestão de seguros da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sistema-bi">
                <Button size="lg" variant="outline">
                  Saiba mais sobre B.I.
                </Button>
              </Link>
              <Link to="/wellness">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Conheça o Wellness
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber={phoneNumber} message={whatsappMessage} />
    </motion.div>
  );
};

export default Diferenciais;