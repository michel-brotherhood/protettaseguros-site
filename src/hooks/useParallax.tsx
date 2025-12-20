import { useState, useEffect, useCallback } from 'react';

interface ParallaxValues {
  y: number;
  opacity: number;
}

export const useParallax = (speed: number = 0.5, maxOffset: number = 50): ParallaxValues => {
  const [values, setValues] = useState<ParallaxValues>({ y: 0, opacity: 1 });

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const y = Math.min(scrollY * speed, maxOffset);
    const opacity = Math.max(1 - scrollY / 800, 0.3);
    
    setValues({ y, opacity });
  }, [speed, maxOffset]);

  useEffect(() => {
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return values;
};
