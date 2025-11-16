import React, { useState } from "react";
import Header from "@/components/Header";
import ClientHero from "@/components/hero/ClientHero";
import BrokerHero from "@/components/hero/BrokerHero";
import ClientSections from "@/components/client/ClientSections";
import BrokerSections from "@/components/broker/BrokerSections";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [mode, setMode] = useState<"client" | "broker">("client");

  const toggleMode = () => {
    setMode(mode === "client" ? "broker" : "client");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {mode === "client" ? (
        <>
          <ClientHero onSwitchMode={toggleMode} />
          <ClientLogos />
          <ClientSections />
        </>
      ) : (
        <>
          <BrokerHero onSwitchMode={toggleMode} />
          <BrokerSections />
        </>
      )}
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
