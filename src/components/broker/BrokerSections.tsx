import React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, DollarSign, Award, Headphones, Clock, Users, BookOpen, MapPin, Trophy, MessageCircle, UserPlus, Calendar, Gauge, Building2, Megaphone, Zap, MousePointerClick, Monitor, GraduationCap } from "lucide-react";

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
      <section id="sobre-protetta" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Sobre a Protetta
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Desde 2017, a Protetta existe com um propósito: facilitar a vida do corretor que deseja vender planos de saúde. 
              De lá para cá, trabalhamos duro e de forma genuína para tornar essa experiência cada vez mais simples, intuitiva e lucrativa.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Acreditamos que todo corretor pode vender saúde de forma leve e prática. 
              Por isso, oferecemos suporte integral, para que você se sinta cada vez mais seguro, confiante e com autonomia nas suas vendas.
            </p>
            <p className="text-xl font-semibold text-foreground">
              Nossa missão é simples e direta: fazer com que nossos corretores prosperem e batam suas metas pessoais sem precisar se estressar para isso.
            </p>
          </div>
        </div>
      </section>

      {/* Assessoria Para Todos */}
      <section className="py-20 bg-gradient-to-br from-[hsl(175,84%,55%)] to-[hsl(175,84%,45%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm md:text-base font-semibold text-white/90 tracking-wider mb-4">
                ASSESSORIA PARA TODOS
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Tudo o que sua Corretora precisa para prosperar
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <Card className="p-8 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-xl">
                <Users className="h-12 w-12 md:h-14 md:w-14 text-[hsl(175,84%,45%)] mb-6" strokeWidth={1.5} />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Suporte
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Damos todo suporte técnico, comercial e operacional para sua Corretora. 
                  Canalizamos o suporte de mais de 30 Cias em um único lugar.
                </p>
              </Card>

              <Card className="p-8 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-xl">
                <Monitor className="h-12 w-12 md:h-14 md:w-14 text-[hsl(175,84%,45%)] mb-6" strokeWidth={1.5} />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Tecnologia
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  São diversas soluções em tecnologia para sua Corretora. Através da BaetaPRO, 
                  tenha acesso a multicálculo, simulador de saúde, leads, marketing digital e mais.
                </p>
              </Card>

              <Card className="p-8 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-xl">
                <GraduationCap className="h-12 w-12 md:h-14 md:w-14 text-[hsl(175,84%,45%)] mb-6" strokeWidth={1.5} />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Capacitação
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Treinamentos ao vivo semanais, eventos especiais, parceria com a ENS e uma 
                  plataforma completa com mais de 800 conteúdos sobre seguros.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos e Benefícios */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center gap-4">
              <Award className="h-12 w-12 md:h-16 md:w-16 text-primary" strokeWidth={1.5} />
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Assessoria<br />Completa
              </h3>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <Calendar className="h-12 w-12 md:h-16 md:w-16 text-primary" strokeWidth={1.5} />
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Treinamentos<br />Semanais
              </h3>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <Gauge className="h-12 w-12 md:h-16 md:w-16 text-primary" strokeWidth={1.5} />
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Cálculo e<br />Transmissão
              </h3>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <Building2 className="h-12 w-12 md:h-16 md:w-16 text-primary" strokeWidth={1.5} />
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Instalações<br />Modernas
              </h3>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <Users className="h-12 w-12 md:h-16 md:w-16 text-primary" strokeWidth={1.5} />
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Leads<br />Indicações
              </h3>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <Megaphone className="h-12 w-12 md:h-16 md:w-16 text-primary" strokeWidth={1.5} />
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Marketing<br />Digital
              </h3>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <Zap className="h-12 w-12 md:h-16 md:w-16 text-primary" strokeWidth={1.5} />
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Campanhas<br />Exclusivas
              </h3>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <MousePointerClick className="h-12 w-12 md:h-16 md:w-16 text-primary" strokeWidth={1.5} />
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Ferramentas<br />de Vendas
              </h3>
            </div>
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
                Sabemos que vender saúde é algo sério e complexo: muitas regras comerciais, que mudam de seguradora para seguradora, 
                muitos detalhes operacionais, e uma responsabilidade enorme com o bem mais precioso do seu cliente: a saúde.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                É normal o corretor se sentir confuso com tudo isso. Aqui, você não fica sozinho.
              </p>
              <p className="text-xl font-semibold text-primary text-center mb-6">
                Na Protetta, não tem erro: a gente te acompanha do início ao fim da venda.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-1" />
                  <p className="text-foreground">
                    Faz tempo que você não vende saúde? A gente te tira da inércia.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-1" />
                  <p className="text-foreground">
                    Está inseguro para fazer reunião com o cliente? A gente vai junto com você.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-1" />
                  <p className="text-foreground">
                    Está com dúvidas sobre regras comerciais? A gente te responde na hora.
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
      <section id="como-funciona" className="py-20 bg-muted/30 scroll-mt-20">
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
                  Intermediamos os processos técnicos, operacionais e comerciais entre seguradoras/operadoras e corretores parceiros
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Custo Zero</h3>
                <p className="text-muted-foreground">
                  Os serviços da Protetta são totalmente gratuitos para corretores parceiros. Somos remunerados pelas seguradoras
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Seu Próprio Código</h3>
                <p className="text-muted-foreground">
                  Você terá seu próprio código nas seguradoras. Seus dados constarão nas apólices dos seus clientes
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-center text-foreground mb-4">
                Não ficamos com parte da sua comissão!
              </h3>
              <p className="text-center text-lg text-muted-foreground">
                Você não ganha menos por estar vinculado à Protetta. Aqui, o corretor só tem a ganhar.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section id="vantagens" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Vantagens de Ser Corretor Parceiro Protetta
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Tudo o que você precisa para destravar suas vendas de saúde
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
