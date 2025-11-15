import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Building2, User, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  company: z
    .string()
    .trim()
    .min(2, { message: "Nome da empresa deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome da empresa deve ter no máximo 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "Email deve ter no máximo 255 caracteres" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Telefone deve ter pelo menos 10 dígitos" })
    .max(20, { message: "Telefone deve ter no máximo 20 caracteres" })
    .regex(/^[\d\s\-\(\)\+]+$/, { message: "Telefone inválido" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
    .max(1000, { message: "Mensagem deve ter no máximo 1000 caracteres" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Sanitize and encode data for WhatsApp
      const message = encodeURIComponent(
        `*Nova solicitação de contato - Protetta Seguros*\n\n` +
        `*Nome:* ${data.name}\n` +
        `*Empresa:* ${data.company}\n` +
        `*Email:* ${data.email}\n` +
        `*Telefone:* ${data.phone}\n` +
        `*Mensagem:* ${data.message}`
      );

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      reset();

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contato-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha o formulário e nossa equipe entrará em contato
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-2xl border-border">
            {isSubmitted ? (
              <div className="text-center py-12 animate-scale-in">
                <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Mensagem enviada!
                </h3>
                <p className="text-lg text-muted-foreground">
                  Obrigado pelo contato. Nossa equipe responderá em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Nome completo *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Empresa *
                    </Label>
                    <Input
                      id="company"
                      placeholder="Nome da empresa"
                      {...register("company")}
                      className={errors.company ? "border-destructive" : ""}
                    />
                    {errors.company && (
                      <p className="text-sm text-destructive">{errors.company.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Telefone *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="(00) 00000-0000"
                      {...register("phone")}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Como podemos ajudar sua empresa?"
                    rows={6}
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 shadow-xl hover:shadow-2xl transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
