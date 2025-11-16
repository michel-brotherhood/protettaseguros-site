import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const quoteSchema = z.object({
  // Step 1: Tipo de Seguro
  insuranceType: z.enum(["vida", "saude", "odonto", "acidentes"], {
    required_error: "Selecione o tipo de seguro",
  }),
  
  // Step 2: Informações da Empresa
  companyName: z.string().min(2, "Nome muito curto").max(100, "Nome muito longo"),
  cnpj: z.string().min(14, "CNPJ inválido").max(18, "CNPJ inválido"),
  employeeCount: z.string().min(1, "Selecione o número de funcionários"),
  
  // Step 3: Informações de Contato
  contactName: z.string().min(2, "Nome muito curto").max(100, "Nome muito longo"),
  email: z.string().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().min(10, "Telefone inválido").max(15, "Telefone inválido"),
  
  // Step 4: Detalhes do Plano
  coverage: z.enum(["basico", "intermediario", "completo"], {
    required_error: "Selecione a cobertura",
  }),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const QuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    mode: "onChange",
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const insuranceType = watch("insuranceType");
  const employeeCount = watch("employeeCount");
  const coverage = watch("coverage");

  // Cálculo estimado de preço
  React.useEffect(() => {
    if (insuranceType && employeeCount && coverage) {
      const basePrice = {
        vida: 50,
        saude: 300,
        odonto: 80,
        acidentes: 40,
      }[insuranceType] || 0;

      const employeeMultiplier = parseInt(employeeCount) || 1;
      
      const coverageMultiplier = {
        basico: 1,
        intermediario: 1.5,
        completo: 2,
      }[coverage] || 1;

      const calculated = basePrice * employeeMultiplier * coverageMultiplier;
      setEstimatedPrice(calculated);
    }
  }, [insuranceType, employeeCount, coverage]);

  const nextStep = async () => {
    let fieldsToValidate: (keyof QuoteFormData)[] = [];
    
    switch (currentStep) {
      case 1:
        fieldsToValidate = ["insuranceType"];
        break;
      case 2:
        fieldsToValidate = ["companyName", "cnpj", "employeeCount"];
        break;
      case 3:
        fieldsToValidate = ["contactName", "email", "phone"];
        break;
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: QuoteFormData) => {
    try {
      // Validação e sanitização dos dados
      const sanitizedData = {
        ...data,
        companyName: data.companyName.trim(),
        cnpj: data.cnpj.trim(),
        contactName: data.contactName.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.trim(),
      };

      console.log("Cotação enviada:", sanitizedData);
      
      // Simular envio
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("Cotação enviada com sucesso! Entraremos em contato em breve.");
      setIsSubmitted(true);
    } catch (error) {
      toast.error("Erro ao enviar cotação. Tente novamente.");
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Cotação Recebida!
            </h2>
            <p className="text-muted-foreground mb-2">
              Sua cotação foi enviada com sucesso.
            </p>
            <p className="text-muted-foreground mb-8">
              Nossa equipe entrará em contato em até 24 horas úteis.
            </p>
            {estimatedPrice > 0 && (
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl mb-8">
                <p className="text-sm text-muted-foreground mb-2">
                  Valor estimado mensal
                </p>
                <p className="text-4xl font-bold text-foreground">
                  R$ {estimatedPrice.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  *Valor aproximado sujeito a análise
                </p>
              </div>
            )}
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setEstimatedPrice(0);
              }}
              variant="outline"
            >
              Nova Cotação
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card
          ref={ref}
          className={`max-w-3xl mx-auto p-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">
                Etapa {currentStep} de {totalSteps}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Step 1: Tipo de Seguro */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Qual tipo de seguro você precisa?
                  </h2>
                  <p className="text-muted-foreground">
                    Selecione o seguro que melhor atende suas necessidades
                  </p>
                </div>

                <RadioGroup
                  value={insuranceType}
                  onValueChange={(value) => setValue("insuranceType", value as any)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <Label
                    htmlFor="vida"
                    className={`flex items-center space-x-3 border-2 rounded-xl p-6 cursor-pointer transition-all hover:border-primary ${
                      insuranceType === "vida" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <RadioGroupItem value="vida" id="vida" />
                    <div>
                      <div className="font-semibold text-foreground">Seguro de Vida</div>
                      <div className="text-sm text-muted-foreground">
                        Proteção para você e sua família
                      </div>
                    </div>
                  </Label>

                  <Label
                    htmlFor="saude"
                    className={`flex items-center space-x-3 border-2 rounded-xl p-6 cursor-pointer transition-all hover:border-primary ${
                      insuranceType === "saude" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <RadioGroupItem value="saude" id="saude" />
                    <div>
                      <div className="font-semibold text-foreground">Plano de Saúde</div>
                      <div className="text-sm text-muted-foreground">
                        Assistência médica completa
                      </div>
                    </div>
                  </Label>

                  <Label
                    htmlFor="odonto"
                    className={`flex items-center space-x-3 border-2 rounded-xl p-6 cursor-pointer transition-all hover:border-primary ${
                      insuranceType === "odonto" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <RadioGroupItem value="odonto" id="odonto" />
                    <div>
                      <div className="font-semibold text-foreground">Plano Odontológico</div>
                      <div className="text-sm text-muted-foreground">
                        Cuidados dentários para todos
                      </div>
                    </div>
                  </Label>

                  <Label
                    htmlFor="acidentes"
                    className={`flex items-center space-x-3 border-2 rounded-xl p-6 cursor-pointer transition-all hover:border-primary ${
                      insuranceType === "acidentes" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <RadioGroupItem value="acidentes" id="acidentes" />
                    <div>
                      <div className="font-semibold text-foreground">Acidentes Pessoais</div>
                      <div className="text-sm text-muted-foreground">
                        Cobertura para imprevistos
                      </div>
                    </div>
                  </Label>
                </RadioGroup>

                {errors.insuranceType && (
                  <p className="text-sm text-destructive">{errors.insuranceType.message}</p>
                )}
              </div>
            )}

            {/* Step 2: Informações da Empresa */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Informações da Empresa
                  </h2>
                  <p className="text-muted-foreground">
                    Conte-nos mais sobre sua organização
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="companyName">Nome da Empresa *</Label>
                    <Input
                      id="companyName"
                      {...register("companyName")}
                      placeholder="Digite o nome da empresa"
                      className="mt-2"
                    />
                    {errors.companyName && (
                      <p className="text-sm text-destructive mt-1">{errors.companyName.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="cnpj">CNPJ *</Label>
                    <Input
                      id="cnpj"
                      {...register("cnpj")}
                      placeholder="00.000.000/0000-00"
                      className="mt-2"
                    />
                    {errors.cnpj && (
                      <p className="text-sm text-destructive mt-1">{errors.cnpj.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="employeeCount">Número de Funcionários *</Label>
                    <RadioGroup
                      value={employeeCount}
                      onValueChange={(value) => setValue("employeeCount", value)}
                      className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2"
                    >
                      {["1-10", "11-50", "51-200", "201+"].map((range) => (
                        <Label
                          key={range}
                          htmlFor={range}
                          className={`flex items-center justify-center border-2 rounded-lg p-3 cursor-pointer transition-all hover:border-primary ${
                            employeeCount === range ? "border-primary bg-primary/5" : "border-border"
                          }`}
                        >
                          <RadioGroupItem value={range} id={range} className="sr-only" />
                          <span className="font-medium">{range}</span>
                        </Label>
                      ))}
                    </RadioGroup>
                    {errors.employeeCount && (
                      <p className="text-sm text-destructive mt-1">{errors.employeeCount.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Informações de Contato */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Informações de Contato
                  </h2>
                  <p className="text-muted-foreground">
                    Como podemos entrar em contato com você?
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="contactName">Nome Completo *</Label>
                    <Input
                      id="contactName"
                      {...register("contactName")}
                      placeholder="Digite seu nome completo"
                      className="mt-2"
                    />
                    {errors.contactName && (
                      <p className="text-sm text-destructive mt-1">{errors.contactName.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="seu@email.com"
                      className="mt-2"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="(00) 00000-0000"
                      className="mt-2"
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Detalhes do Plano */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Escolha sua Cobertura
                  </h2>
                  <p className="text-muted-foreground">
                    Selecione o nível de cobertura ideal para sua empresa
                  </p>
                </div>

                <RadioGroup
                  value={coverage}
                  onValueChange={(value) => setValue("coverage", value as any)}
                  className="space-y-4"
                >
                  <Label
                    htmlFor="basico"
                    className={`flex justify-between items-start border-2 rounded-xl p-6 cursor-pointer transition-all hover:border-primary ${
                      coverage === "basico" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="basico" id="basico" className="mt-1" />
                      <div>
                        <div className="font-semibold text-foreground text-lg mb-1">Plano Básico</div>
                        <div className="text-sm text-muted-foreground">
                          Cobertura essencial com bom custo-benefício
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">a partir de</div>
                      <div className="text-xl font-bold text-foreground">1x</div>
                    </div>
                  </Label>

                  <Label
                    htmlFor="intermediario"
                    className={`flex justify-between items-start border-2 rounded-xl p-6 cursor-pointer transition-all hover:border-primary ${
                      coverage === "intermediario" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="intermediario" id="intermediario" className="mt-1" />
                      <div>
                        <div className="font-semibold text-foreground text-lg mb-1">Plano Intermediário</div>
                        <div className="text-sm text-muted-foreground">
                          Cobertura ampliada com mais benefícios
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">a partir de</div>
                      <div className="text-xl font-bold text-foreground">1.5x</div>
                    </div>
                  </Label>

                  <Label
                    htmlFor="completo"
                    className={`flex justify-between items-start border-2 rounded-xl p-6 cursor-pointer transition-all hover:border-primary ${
                      coverage === "completo" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="completo" id="completo" className="mt-1" />
                      <div>
                        <div className="font-semibold text-foreground text-lg mb-1">Plano Completo</div>
                        <div className="text-sm text-muted-foreground">
                          Cobertura premium com todos os recursos
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">a partir de</div>
                      <div className="text-xl font-bold text-foreground">2x</div>
                    </div>
                  </Label>
                </RadioGroup>

                {errors.coverage && (
                  <p className="text-sm text-destructive">{errors.coverage.message}</p>
                )}

                {/* Estimativa de Preço */}
                {estimatedPrice > 0 && (
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Valor estimado mensal
                        </p>
                        <p className="text-3xl font-bold text-foreground">
                          R$ {estimatedPrice.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          *Valor aproximado sujeito a análise detalhada
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Voltar
              </Button>

              {currentStep < totalSteps ? (
                <Button type="button" onClick={nextStep} className="gap-2">
                  Próximo
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting} className="gap-2">
                  {isSubmitting ? "Enviando..." : "Enviar Cotação"}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default QuoteForm;
