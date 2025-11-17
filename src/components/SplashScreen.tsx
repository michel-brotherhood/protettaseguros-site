import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import protettaLogo3D from "@/assets/protetta-logo-3d-new.webp";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotateY: 0,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                scale: { duration: 0.6 },
                rotateY: { duration: 0.8 },
              }
            }}
            className="relative"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src={protettaLogo3D}
                alt="Protetta Seguros"
                className="h-32 w-auto drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
