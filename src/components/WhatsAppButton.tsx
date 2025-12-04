import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import protettaLogo3D from "@/assets/protetta-logo-3d-new.webp";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message
}) => {
  const handleClick = () => {
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
        <Button
          onClick={handleClick}
          size="lg"
          className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-xl p-0 relative overflow-hidden"
        >
          <img 
            src={protettaLogo3D} 
            alt="Protetta" 
            className="h-10 w-10 object-contain"
          />
          
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            animate={{
              scale: [1, 1.3],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppButton;
