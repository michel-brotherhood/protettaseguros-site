import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, DollarSign, Award, Headphones, Clock, Users, BookOpen, MapPin, Trophy, MessageCircle, UserPlus, Calendar, Gauge, Building2, Megaphone, Zap, MousePointerClick, Monitor, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import brokerMeeting from "@/assets/broker-meeting.jpg";
import brokerConsulting from "@/assets/broker-consulting.jpg";
import brokerTraining from "@/assets/broker-training.jpg";
import logoAIG from "@/assets/insurance-logos/aig.png";
import logoAkad from "@/assets/insurance-logos/akad.png";
import logoAllianz from "@/assets/insurance-logos/allianz.png";
import logoAmil from "@/assets/insurance-logos/amil.png";
import logoAruana from "@/assets/insurance-logos/aruana.png";
import logoAssim from "@/assets/insurance-logos/assim.png";
import logoAXA from "@/assets/insurance-logos/axa.png";
import logoAzos from "@/assets/insurance-logos/azos.png";
import logoAzul from "@/assets/insurance-logos/azul.png";
import logoBradesco from "@/assets/insurance-logos/bradesco.png";

const BrokerSections = () => {
  const { ref: assessoriaRef, isVisible: assessoriaVisible } = useScrollAnimation(0.1);
  const { ref: expandaRef, isVisible: expandaVisible } = useScrollAnimation(0.1);
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation(0.1);
  
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: "Mix de Carteira",
      description: "Ajudamos o Corretor de Seguros parceiro a aumentar o mix de carteira, atendendo a nova realidade do mercado de seguros.",
      image: brokerMeeting
    },
    {
      title: "Acompanhamento em reunião",
      description: "Precisa de apoio comercial, técnico e operacional em visita ao cliente? Nossa equipe está pronta para ajudar!",
      image: brokerConsulting
    },
    {
      title: "Cursos gratuitos",
      description: "Oferecemos semanalmente cursos gratuitos para o corretor parceiro aprimorar o conhecimento nos produtos das Companhias.",
      image: brokerTraining
    }
  ];

  const insuranceLogos = [
    { name: "AIG", logo: logoAIG },
    { name: "Akad", logo: logoAkad },
    { name: "Allianz", logo: logoAllianz },
    { name: "Amil", logo: logoAmil },
    { name: "Aruana", logo: logoAruana },
    { name: "Assim", logo: logoAssim },
    { name: "AXA", logo: logoAXA },
    { name: "Azos", logo: logoAzos },
    { name: "Azul", logo: logoAzul },
    { name: "Bradesco", logo: logoBradesco },
    // Placeholders para as logos restantes
    { name: "CNP", logo: null },
    { name: "Capemisa", logo: null },
    { name: "Coris", logo: null },
    { name: "Darwin", logo: null },
    { name: "Essor", logo: null },
    { name: "Excelsior", logo: null },
    { name: "EZZE", logo: null },
    { name: "Fator", logo: null },
    { name: "HDI", logo: null },
    { name: "Hapvida", logo: null },
    { name: "Icatu", logo: null },
    { name: "Junto", logo: null },
    { name: "Justos", logo: null },
    { name: "Klini", logo: null },
    { name: "Kovr", logo: null },
    { name: "Loovi", logo: null },
    { name: "Mapfre", logo: null },
    { name: "MBM", logo: null },
    { name: "MAG", logo: null },
    { name: "Omint", logo: null },
    { name: "Porto", logo: null },
    { name: "Pottencial", logo: null },
    { name: "Prudential", logo: null },
    { name: "Quali", logo: null },
    { name: "Sabemi", logo: null },
    { name: "Suhai", logo: null },
    { name: "SulAmérica", logo: null },
    { name: "Tokio Marine", logo: null },
    { name: "Usebens", logo: null },
    { name: "Yelum", logo: null },
    { name: "Youse", logo: null },
  ];

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
      <section ref={assessoriaRef} className="py-20 bg-gradient-to-br from-[hsl(175,84%,55%)] to-[hsl(175,84%,45%)]">
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
              {[
                { icon: Users, title: "Suporte", description: "Damos todo suporte técnico, comercial e operacional para sua Corretora. Canalizamos o suporte de mais de 30 Cias em um único lugar." },
                { icon: Monitor, title: "Tecnologia", description: "São diversas soluções em tecnologia para sua Corretora. Através da BaetaPRO, tenha acesso a multicálculo, simulador de saúde, leads, marketing digital e mais." },
                { icon: GraduationCap, title: "Capacitação", description: "Treinamentos ao vivo semanais, eventos especiais, parceria com a ENS e uma plataforma completa com mais de 800 conteúdos sobre seguros." }
              ].map((item, index) => (
                <Card 
                  key={index}
                  className={`p-8 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:shadow-xl transform ${
                    assessoriaVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <item.icon className="h-12 w-12 md:h-14 md:w-14 text-[hsl(175,84%,45%)] mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expanda seus horizontes */}
      <section ref={expandaRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm md:text-base font-semibold text-primary tracking-wider mb-4">
                ASSESSORIA PARA TODOS
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Expanda seus horizontes e cresça com o apoio de<br />uma equipe especializada.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFeature(index)}
                    className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                      selectedFeature === index 
                        ? 'bg-primary/10 border-l-4 border-primary' 
                        : 'bg-muted/30 hover:bg-muted/50'
                    } ${expandaVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-3 w-3 rounded-full bg-primary shrink-0 mt-2"></div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                expandaVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                <img 
                  src={features[selectedFeature].image} 
                  alt={features[selectedFeature].title}
                  className="w-full h-[500px] object-cover transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos e Benefícios */}
      <section className="py-20 bg-muted/30">
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

      {/* Seguradoras Parceiras */}
      <section ref={logosRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Seguradoras Parceiras
            </h2>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
              {insuranceLogos.map((item, index) => (
                <div 
                  key={index}
                  className={`bg-muted/30 rounded-lg p-4 flex items-center justify-center hover:bg-muted/50 transition-all duration-300 hover:shadow-md min-h-[80px] ${
                    logosVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  {item.logo ? (
                    <img 
                      src={item.logo} 
                      alt={item.name}
                      className="w-full h-auto object-contain max-h-[60px]"
                    />
                  ) : (
                    <span className="text-xs font-semibold text-muted-foreground text-center">
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
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
