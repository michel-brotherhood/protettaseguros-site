import React from "react";
import { Card } from "@/components/ui/card";
import { Users, Lightbulb, Globe, Zap, BarChart3, Heart, Scale, Leaf, Shield } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

const ClientSections = () => {

  return (
    <>
      {/* Quem Somos */}
      <section id="quem-somos" className="py-10 md:py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                Desde 2017
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Quem Somos
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Sua porta de entrada para o universo dos seguros.
              </p>
            </div>
            
            <div className="space-y-8">
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
        </div>
      </section>

      {/* O Que Fazemos */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              O Que Fazemos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
              Otimizamos a contratação de seguros por empresas em todo território nacional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Criamos estratégias inteligentes, através de minuciosa análise do perfil da empresa, observando o binômio necessidade x capacidade, a fim de:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
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
                  <p className="text-foreground">Simplificar os processos de contratação e renovação de seguros</p>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <p className="text-foreground">Encontrar o produto ideal para cada caso e a melhor forma de contratação</p>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-foreground">Criar mecanismos de diminuição ou controle de sinistralidade da apólice</p>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <p className="text-foreground">Facilitar o dia a dia do RH absorvendo tramites e procedimentos burocráticos</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Como Fazemos */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Como Fazemos
            </h2>
            <p className="text-xl text-muted-foreground">Combinando 4 pilares essenciais:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
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
      <section id="diferenciais" className="py-10 md:py-16 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
              Por Que Escolher a Protetta?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground px-4">Nossos Diferenciais</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6 md:space-y-16">
            {/* BI */}
            <Card className="p-6 md:p-8 lg:p-12">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-4 md:mb-6">
                <div className="bg-gradient-to-br from-primary to-secondary p-3 md:p-4 rounded-2xl shrink-0">
                  <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">1. Sistema B.I.</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    A saúde corporativa está diante de uma transformação inevitável: o uso estratégico dos dados para decisões mais seguras, rápidas e sustentáveis. Nesse cenário, o sistema Business Intelligence (BI) não é apenas uma ferramenta tecnológica, mas um novo paradigma de gestão.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    Com o BI, é possível unir dados assistenciais e financeiros, transformando-os em análises que orientam a redução de custos e promovem saúde de forma mais efetiva.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Ao aplicar dashboards dinâmicos, análises preditivas e indicadores personalizados, deixamos de atuar apenas como corretores de seguros e passamos a conduzir estratégias com visão de futuro. Isso significa prevenir doenças, melhorar a experiência do colaborador e garantir equilíbrio financeiro nos contratos de saúde.
                  </p>
                </div>
              </div>
            </Card>

            {/* Wellness */}
            <Card className="p-6 md:p-8 lg:p-12">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-4 md:mb-6">
                <div className="bg-gradient-to-br from-secondary to-primary p-3 md:p-4 rounded-2xl shrink-0">
                  <Heart className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">2. Wellness Corporativo</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    Contamos com uma equipe multidisciplinar de profissionais da área da saúde, que com base nas informações obtidas pelo sistema B.I., elabora e promove ações personalizadas de saúde e bem-estar para os colaboradores de nossos empresas-clientes.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Com isso, buscamos aumentar a produtividade, diminuir os afastamentos por motivo de saúde, melhorar a motivação e as relações no ambiente de trabalho e reduzir ou controlar a sinistralidade da apólice.
                  </p>
                </div>
              </div>
            </Card>

            {/* Projur */}
            <Card className="p-6 md:p-8 lg:p-12">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-4 md:mb-6">
                <div className="bg-gradient-to-br from-primary to-secondary p-3 md:p-4 rounded-2xl shrink-0">
                  <Scale className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">3. Projur</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    Acreditamos que as relações securitárias podem ser feitas sem complexidade, sem "juridiquês" e sem letras miúdas.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Por isso, disponibilizamos um time de advogados, que são verdadeiros descomplicadores, pra que nossos clientes se sintam cada vez mais confiantes e amparados em relação aos seus contratos.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Responsabilidade Social */}
      <section id="responsabilidade-social" className="py-10 md:py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
              Responsabilidade Social
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            {/* ProChange */}
            <Card className="p-6 md:p-8 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-secondary to-primary p-3 md:p-4 rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">ProChange</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                ProChange é o braço social da Protetta. Todo mês, uma parte do lucro é revertida para auxiliar duas ONGs diferentes, sempre cuidadosamente escolhidas por nossa equipe e divulgadas em nossas redes sociais.
              </p>
              <p className="text-base md:text-lg font-semibold text-primary">
                Desta forma, ao escolher a Protetta, você não está apenas escolhendo uma corretora de seguros, está realmente ajudando o mundo a se tornar um lugar melhor.
              </p>
            </Card>

            {/* ESG */}
            <Card className="p-6 md:p-8 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-3 md:p-4 rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                <Leaf className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">ESG e Créditos de Carbono</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                Na Protetta, a preocupação com saúde ocorre de maneira global. E, é claro, que não deixaríamos de lado a saúde ambiental.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                Sendo assim, a cada contrato fechado adquirimos créditos de carbono proporcionais ao valor do contrato. Um crédito de carbono é a representação de uma tonelada de carbono que deixou de ser emitida para a atmosfera, contribuindo para a diminuição do efeito estufa.
              </p>
              <p className="text-base md:text-lg font-semibold text-secondary">
                Para nós, meio ambiente é coisa séria. Tão séria quanto saúde.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientSections;
