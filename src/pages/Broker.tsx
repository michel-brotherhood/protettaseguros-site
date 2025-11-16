import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import BrokerHero from "@/components/hero/BrokerHero";
import BrokerSections from "@/components/broker/BrokerSections";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useNavigate } from "react-router-dom";

const Broker = () => {
  const navigate = useNavigate();

  const handleSwitchMode = () => {
    navigate("/cliente");
  };

  const whatsappMessage = "Olá! Sou corretor e gostaria de me tornar parceiro da Protetta Seguros.";
  const phoneNumber = "5521999999999"; // Substitua pelo número real

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Header />
      <BrokerHero onSwitchMode={handleSwitchMode} />
      <BrokerSections />
      <ContactForm />
      <Footer />
      
      <WhatsAppButton 
        phoneNumber={phoneNumber}
        message={whatsappMessage}
        label="Quero ser Parceiro"
      />
    </motion.div>
  );
};

export default Broker;
