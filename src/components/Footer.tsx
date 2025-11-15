import React from "react";
import protettaLogo from "@/assets/protetta-logo.png";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-dark-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={protettaLogo} alt="Protetta Seguros" className="h-10 mb-6 brightness-0 invert" />
            <p className="text-white/70 text-sm leading-relaxed">
              Excelência em Seguros
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">A Protetta</h3>
            <ul className="space-y-3">
              <li><a href="#sobre" className="text-white/70 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Prêmios</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">#ProChange</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Saúde Ambiental</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Nossas Soluções</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Gestão de Benefícios</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Sistema B.I.</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Wellness Corporativo</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Assessoria Jurídica</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <div>
                  <div className="text-white/70 text-sm">RJ: (21) 3495-7111</div>
                  <div className="text-white/70 text-sm">SP: (11) 3254-7503</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contato@protetta.com.br" className="text-white/70 hover:text-white transition-colors">
                  contato@protetta.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>Copyright © 2025 Protetta Seguros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
