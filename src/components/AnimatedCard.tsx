import React, { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative group perspective-1000"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Glow Effect */}
      <div
        className={cn(
          "absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500",
          isHovered && "animate-gradient bg-[length:200%_auto]"
        )}
      />
      
      {/* Particles */}
      {isHovered && (
        <>
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-particle-1" />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-particle-2" />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary rounded-full animate-particle-3" />
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-secondary rounded-full animate-particle-4" />
        </>
      )}

      <Card
        className={cn(
          "relative transition-all duration-300 border-border hover:shadow-2xl hover:scale-[1.02]",
          className
        )}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(20px)`,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </Card>
    </div>
  );
};

export default AnimatedCard;
