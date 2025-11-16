import React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, DollarSign, Award, Headphones, Clock, Users, BookOpen, MapPin, Trophy, MessageCircle, UserPlus } from "lucide-react";

const BrokerSections = () => {
  const advantages = [
    { icon: Headphones, text: "Suporte integral ao corretor: da cotação ao pós-venda" },
    { icon: Clock, text: "Atendimento instantâneo: tempo máximo de resposta de 5 minutos" },
    { icon: Award, text: "Acesso gratuito a cotador multicalculos" },
    { icon: BookOpen, text: "Treinamentos constantes de atualização de regras e campanhas" },
    { icon: MapPin, text: "Espaço para receber clientes e fazer reuniões no centro do Rio" },
    { icon: Trophy, text: "Campanhas exclusivas de vendas com premiações oferecidas pela Protetta" },
    { icon: MessageCircle, text: "Grupo exclusivo no WhatsApp com atualizações diárias" },
    { icon: Clock, text: "Plantão de dúvidas disponível inclusive aos fins de semana" },
    { icon: UserPlus, text: "Supervisor para te acompanhar em reuniões com clientes corporativos" },
  ];

  return (
    <>
      {/* Sobre a Protetta */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Sobre a Protetta
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Em 2017 a Protetta nasceu com um propósito: facilitar a vida de corretores de seguros que desejam 
              vender saúde. De lá para cá, trabalhamos duro e de forma genuína para tornar a experiência dos 
              nossos corretores cada vez mais simples e intuitiva.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Acreditamos que todo corretor pode vender saúde e, principalmente, que isso pode ser feito de 
              forma leve e prática. Por isso, oferecemos suporte integral para que você se sinta cada vez mais 
              seguro, confiante e com autonomia em relação às suas vendas.
            </p>
            <p className="text-xl font-semibold text-foreground">
              Nossa missão é fazer com que todos os nossos corretores prosperem e batam suas metas pessoais, 
              sem precisar se estressar para isso.
            </p>
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Por Que Escolher a Protetta?
            </h2>
            <Card className="p-8 md:p-12 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Somos uma assessoria especializada em planos de saúde!
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sabemos que vender saúde é algo sério e complexo. Além de ser uma enorme responsabilidade 
                cuidar do bem mais precioso de seus clientes, são muitas regras comerciais, que mudam de 
                seguradora para seguradora, com muitos detalhes, e é normal que o corretor se sinta confuso 
                com tudo isso!
              </p>
              <p className="text-xl font-semibold text-primary text-center mb-6">
                Mas aqui na Protetta não tem erro! A gente te acompanha do início ao fim da venda!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-1" />
                  <p className="text-foreground">
                    Tem muito tempo que não vende saúde? Não tem problema, a gente te tira da inércia!
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-1" />
                  <p className="text-foreground">
                    Está se sentindo inseguro para fazer reunião com o cliente? Não tem problema, a gente vai junto com você!
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-1" />
                  <p className="text-foreground">
                    Está com alguma dúvida acerca de regras comerciais? Não tem problema, a gente te responde na mesma hora!
                  </p>
                </div>
              </div>
              
              <p className="text-2xl font-bold text-center text-foreground mt-8">
                Vem crescer com a gente!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Como Funciona?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Ponte entre Corretor e Seguradora</h3>
                <p className="text-muted-foreground">
                  Intermediamos procedimentos técnicos, operacionais e comerciais
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Custo Zero</h3>
                <p className="text-muted-foreground">
                  Serviços totalmente gratuitos. Somos remunerados pelas seguradoras
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Seu Próprio Código</h3>
                <p className="text-muted-foreground">
                  Seus dados constam nas apólices. Seguros feitos diretamente no seu código
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-center text-foreground mb-4">
                Não ficamos com parte do seu comissionamento!
              </h3>
              <p className="text-center text-lg text-muted-foreground">
                Você não ganha menos comissão por estar vinculado à Protetta. Aqui o corretor só tem a ganhar!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section id="vantagens" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Quais as Vantagens?
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Tudo o que a Protetta oferece para você deslanchar suas vendas!
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {advantages.map((advantage, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-secondary to-primary p-2 rounded-lg shrink-0">
                      <advantage.icon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-foreground">{advantage.text}</p>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/20">
              <h3 className="text-3xl font-bold text-center text-foreground mb-4">
                Tudo isso sem onerar em nada o corretor!
              </h3>
              <p className="text-center text-2xl text-secondary font-bold">
                Tá esperando o que? Vem com a gente!
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrokerSections;
