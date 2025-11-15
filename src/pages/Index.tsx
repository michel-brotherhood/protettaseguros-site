import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import Solutions from "@/components/Solutions";
import Partnership from "@/components/Partnership";
import Commitment from "@/components/Commitment";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Differentials />
      <Solutions />
      <Partnership />
      <Commitment />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
