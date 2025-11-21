import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Fale Conosco
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estamos prontos para atender sua empresa com excelência
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Telefones</h3>
              <p className="text-muted-foreground mb-2">Rio de Janeiro</p>
              <p className="text-foreground font-medium mb-4">(21) 3495-7111</p>
              <p className="text-muted-foreground mb-2">São Paulo</p>
              <p className="text-foreground font-medium">(11) 3254-7503</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Email</h3>
              <p className="text-muted-foreground mb-4">Envie sua mensagem</p>
              <a 
                href="mailto:contato@protetta.com.br" 
                className="text-primary font-medium hover:underline"
              >
                contato@protetta.com.br
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Escritórios</h3>
              <p className="text-muted-foreground">Rio de Janeiro e São Paulo</p>
            </Card>
          </div>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
