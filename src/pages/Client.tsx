import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ClientHero from "@/components/hero/ClientHero";
import ClientSections from "@/components/client/ClientSections";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useNavigate } from "react-router-dom";

const Client = () => {
  const navigate = useNavigate();

  const handleSwitchMode = () => {
    navigate("/corretor");
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappMessage = "Olá! Gostaria de saber mais sobre as soluções da Protetta Seguros para minha empresa.";
  const phoneNumber = "5521999999999"; // Substitua pelo número real

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Header />
      <ClientHero onSwitchMode={handleSwitchMode} />
      <ClientLogos />
      <ClientSections />
      <ContactForm />
      <Footer />
      
      <WhatsAppButton 
        phoneNumber={phoneNumber}
        message={whatsappMessage}
      />
    </motion.div>
  );
};

export default Client;
