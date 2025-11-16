import React from "react";
import { Card } from "@/components/ui/card";
import { Users, Lightbulb, Globe, Zap, BarChart3, Heart, Scale, Leaf, Shield } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

const ClientSections = () => {

  return (
    <>
      {/* Quem Somos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Quem Somos</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Em 2017 a Protetta nasceu com um propósito: revolucionar o mercado segurador brasileiro, 
              oferecendo soluções inovadoras, personalizadas e de classe mundial para empresas Brasil a fora.
            </p>
          </div>
        </div>
      </section>

      {/* O Que Fazemos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              O Que Fazemos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
              Otimizamos a contratação de seguros por empresas em todo território nacional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Criamos estratégias inteligentes, através de minuciosa análise do perfil da empresa, 
              observando o binômio necessidade x capacidade, a fim de:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-foreground">Reduzir os custos da empresa com seguros</p>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-foreground">Solucionar eventuais problemas com seguros</p>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <p className="text-foreground">Simplificar os processos de contratação e renovação</p>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <p className="text-foreground">Encontrar o produto ideal para cada caso</p>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-foreground">Criar mecanismos de diminuição ou controle de sinistralidade</p>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <p className="text-foreground">Facilitar o dia a dia do RH absorvendo trâmites burocráticos</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Como Fazemos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Como Fazemos
            </h2>
            <p className="text-xl text-muted-foreground">Combinando 4 pilares essenciais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <AnimatedCard
              delay={0}
              className="p-8 text-center hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Equipe Disruptiva</h3>
            </AnimatedCard>

            <AnimatedCard
              delay={100}
              className="p-8 text-center hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Conhecimento Técnico</h3>
            </AnimatedCard>

            <AnimatedCard
              delay={200}
              className="p-8 text-center hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Experiência Global</h3>
            </AnimatedCard>

            <AnimatedCard
              delay={300}
              className="p-8 text-center hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Trabalho Duro</h3>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section id="diferenciais" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos Diferenciais
            </h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* BI */}
            <Card className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shrink-0">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Sistema B.I.</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    A saúde corporativa está diante de uma transformação inevitável: o uso estratégico dos dados 
                    para decisões mais seguras, rápidas e sustentáveis.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Com o BI, unimos dados assistenciais e financeiros, transformando-os em análises que orientam 
                    a redução de custos e promovem saúde de forma mais efetiva.
                  </p>
                </div>
              </div>
            </Card>

            {/* Wellness */}
            <Card className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl shrink-0">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Wellness Corporativo</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Contamos com uma equipe multidisciplinar de profissionais da área da saúde, que com base nas 
                    informações obtidas pelo sistema B.I., elabora e promove ações personalizadas de saúde e 
                    bem-estar para os colaboradores.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Buscamos aumentar a produtividade, diminuir afastamentos, melhorar a motivação e reduzir 
                    a sinistralidade da apólice.
                  </p>
                </div>
              </div>
            </Card>

            {/* Projur */}
            <Card className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shrink-0">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Projur</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Acreditamos que as relações securitárias podem ser feitas sem complexidade, sem "juridiquês" 
                    e sem letras miúdas. Por isso, disponibilizamos um time de advogados, que são verdadeiros 
                    descomplicadores, para que nossos clientes se sintam cada vez mais confiantes e amparados 
                    em relação aos seus contratos.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Responsabilidade Social */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Responsabilidade Social
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* ProChange */}
            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">ProChange</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ProChange é o braço social da Protetta. Todo mês, uma parte do lucro é revertida para auxiliar 
                duas ONGs diferentes, sempre cuidadosamente escolhidas por nossa equipe.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao escolher a Protetta, você está realmente ajudando o mundo a se tornar um lugar melhor.
              </p>
            </Card>

            {/* ESG */}
            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">ESG</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Na Protetta, a preocupação com saúde ocorre de maneira global. E, é claro, que não deixaríamos 
                de lado a saúde ambiental.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A cada contrato fechado adquirimos créditos de carbono proporcionais ao valor do contrato, 
                contribuindo para a diminuição do efeito estufa.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientSections;
