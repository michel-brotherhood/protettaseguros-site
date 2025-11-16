import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Building2, UserCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomeModal = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = localStorage.getItem("protetta-visited");
    if (!hasVisited) {
      setOpen(true);
      localStorage.setItem("protetta-visited", "true");
    }
  }, []);

  const handleNavigate = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-2">
            Bem-vindo à Protetta Seguros!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Escolha o caminho ideal para você
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Cliente Option */}
          <div className="group relative p-6 bg-card rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer">
            <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-3 text-center">
              Sou Cliente
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">
              Busco soluções completas em seguros saúde empresarial com tecnologia e consultoria especializada
            </p>
            
            <Button 
              onClick={() => handleNavigate("/cliente")}
              className="w-full"
              size="lg"
            >
              Acessar como Cliente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Corretor Option */}
          <div className="group relative p-6 bg-card rounded-xl border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-xl cursor-pointer">
            <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UserCheck className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-3 text-center">
              Sou Corretor
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">
              Quero fazer parte do hub e ter acesso a suporte 24/7, sem custos e com treinamentos completos
            </p>
            
            <Button 
              onClick={() => handleNavigate("/corretor")}
              variant="secondary"
              className="w-full"
              size="lg"
            >
              Acessar como Corretor
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-6">
          <Button 
            variant="ghost" 
            onClick={() => setOpen(false)}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Fechar e explorar livremente
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
