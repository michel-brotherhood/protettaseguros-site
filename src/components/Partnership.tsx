import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Partnership = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sua empresa e seus executivos merecem o melhor cuidado
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed">
            Oferecemos Assessoria Jurídica Consultiva e parceria exclusiva com a Med-Rio Check-Up, 
            a melhor clínica de check-up do Rio de Janeiro, com condições especiais para a diretoria.
          </p>

          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-2xl"
          >
            Fale com um especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
