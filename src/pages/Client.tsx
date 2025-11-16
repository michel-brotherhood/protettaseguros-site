import React from "react";
import Header from "@/components/Header";
import ClientHero from "@/components/hero/ClientHero";
import ClientSections from "@/components/client/ClientSections";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Client = () => {
  const navigate = useNavigate();

  const handleSwitchMode = () => {
    navigate("/corretor");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <ClientHero onSwitchMode={handleSwitchMode} />
      <ClientLogos />
      <ClientSections />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Client;
