import React, { useState } from "react";
import { motion } from "framer-motion";
import protettaLogo3D from "@/assets/protetta-logo-3d-new.webp";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message
}) => {
  const [showPulse, setShowPulse] = useState(false);

  const handleClick = () => {
    setShowPulse(true);
    setTimeout(() => setShowPulse(false), 600);
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1 
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={handleClick}
          className="h-16 w-16 rounded-full bg-transparent p-0 relative flex items-center justify-center"
        >
          <img 
            src={protettaLogo3D} 
            alt="Protetta - Fale conosco" 
            className="h-14 w-14 object-contain drop-shadow-lg"
          />
          
          {/* Pulse ring - só aparece ao clicar */}
          {showPulse && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 1.4, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            />
          )}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppButton;
