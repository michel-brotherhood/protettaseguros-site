import React from "react";
import { Card } from "@/components/ui/card";
import { Users, Lightbulb, Globe, Zap, BarChart3, Heart, Scale, Leaf, Shield } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

const ClientSections = () => {

  return (
    <>
      {/* Quem Somos */}
      <section id="quem-somos" className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 scroll-mt-20">
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
            </div>
            
            <div className="space-y-8">
              <Card className="p-8 md:p-10 bg-background/80 backdrop-blur-sm border-primary/10 hover:shadow-xl transition-all">
                <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                  Em 2017, a Protetta nasceu com um propósito claro: 
                  <span className="font-bold text-primary"> revolucionar o mercado segurador brasileiro</span>, 
                  oferecendo soluções inovadoras, personalizadas e de classe mundial para empresas em todo o país.
                </p>
              </Card>

              <Card className="p-8 md:p-10 bg-background/80 backdrop-blur-sm border-secondary/10 hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shrink-0">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed text-center md:text-left">
                    Somos <span className="font-bold text-secondary">especialistas em seguro saúde empresarial</span> e trabalhamos 
                    lado a lado com o RH e a gestão para transformar plano de saúde em 
                    <span className="font-bold text-primary"> estratégia de negócio</span>.
                  </p>
                </div>
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
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              O Que Fazemos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
              Otimizamos a contratação e a gestão de seguros para empresas em todo o território nacional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A partir de uma análise minuciosa do perfil da empresa, considerando sempre o binômio necessidade x capacidade, atuamos para:
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
                  <p className="text-foreground">Solucionar problemas existentes com contratos e coberturas</p>
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
                  <p className="text-foreground">Encontrar o produto ideal para cada caso e o melhor modelo de contratação</p>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-foreground">Criar mecanismos para reduzir ou controlar a sinistralidade da apólice</p>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <p className="text-foreground">Facilitar o dia a dia do RH, absorvendo trâmites e processos burocráticos</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Como Fazemos */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Como Fazemos
            </h2>
            <p className="text-xl text-muted-foreground">É essa base que nos permite ir além da corretagem tradicional e atuar como parceiros estratégicos da sua empresa</p>
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
      <section id="diferenciais" className="py-12 md:py-20 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
              Por Que Escolher a Protetta?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground px-4">Nossos diferenciais que transformam a gestão de saúde corporativa</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6 md:space-y-16">
            {/* BI */}
            <Card className="p-6 md:p-8 lg:p-12">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-4 md:mb-6">
                <div className="bg-gradient-to-br from-primary to-secondary p-3 md:p-4 rounded-2xl shrink-0">
                  <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">1. Sistema de Business Intelligence (BI)</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    A saúde corporativa está passando por uma transformação: decisões agora precisam ser guiadas por dados.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    Nosso sistema de Business Intelligence (BI) conecta dados assistenciais e financeiros e os transforma em análises que:
                  </p>
                  <ul className="space-y-2 md:space-y-2 mb-3 md:mb-4">
                    <li className="flex items-start gap-2 md:gap-2 text-sm md:text-base text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span>Orientam a redução de custos</span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-2 text-sm md:text-base text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span>Melhoram o cuidado com a saúde dos colaboradores</span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-2 text-sm md:text-base text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span>Trazem previsibilidade e sustentabilidade para os contratos de saúde</span>
                    </li>
                  </ul>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Com isso, deixamos de atuar apenas como corretores de seguros e passamos a conduzir estratégias com visão de futuro: 
                    prevenindo doenças, melhorando a experiência do colaborador e garantindo equilíbrio financeiro dos planos.
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
                    Contamos com uma equipe multidisciplinar de profissionais de saúde que, com base nas informações do BI, 
                    planeja e executa ações personalizadas de saúde e bem-estar para os colaboradores.
                  </p>
                  <p className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">Nossos objetivos:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                      <span>Aumentar produtividade</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                      <span>Reduzir afastamentos por motivo de saúde</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                      <span>Melhorar motivação e clima organizacional</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                      <span>Reduzir ou controlar a sinistralidade da apólice</span>
                    </li>
                  </ul>
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
                    Acreditamos que relações securitárias não precisam ser complicadas, cheias de "juridiquês" e letras miúdas.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Por isso, disponibilizamos um time de advogados que são verdadeiros descomplicadores, 
                    para que nossos clientes se sintam sempre seguros e amparados em relação aos seus contratos.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Responsabilidade Social */}
      <section id="responsabilidade-social" className="py-12 md:py-20 bg-background scroll-mt-20">
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
                ProChange é o braço social da Protetta. Todo mês, uma parte do lucro é destinada para apoiar 
                duas ONGs diferentes, escolhidas pela nossa equipe e divulgadas em nossas redes.
              </p>
              <p className="text-base md:text-lg font-semibold text-primary">
                Ao escolher a Protetta, você não está apenas contratando uma consultoria de seguros: 
                você também está ajudando a transformar o mundo em um lugar melhor.
              </p>
            </Card>

            {/* ESG */}
            <Card className="p-6 md:p-8 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-3 md:p-4 rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                <Leaf className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">ESG e Créditos de Carbono</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                Na Protetta, cuidar de saúde é algo global. Isso inclui a saúde ambiental.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                A cada contrato fechado, adquirimos créditos de carbono proporcionais ao valor do contrato. 
                Um crédito de carbono representa uma tonelada de CO₂ que deixou de ser emitida na atmosfera, 
                contribuindo para reduzir o efeito estufa.
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
