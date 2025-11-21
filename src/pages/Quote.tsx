import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

const Quote = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Solicite sua Cotação
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Receba uma proposta personalizada em poucos minutos
            </p>
          </div>
        </div>
      </section>

      <QuoteForm />

      <Footer />
    </div>
  );
};

export default Quote;
