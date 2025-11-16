import React from "react";
import Header from "@/components/Header";
import BrokerHero from "@/components/hero/BrokerHero";
import BrokerSections from "@/components/broker/BrokerSections";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Broker = () => {
  const navigate = useNavigate();

  const handleSwitchMode = () => {
    navigate("/cliente");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <BrokerHero onSwitchMode={handleSwitchMode} />
      <BrokerSections />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Broker;
