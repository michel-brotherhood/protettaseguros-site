import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Award, TrendingUp } from "lucide-react";
import familyVideo from "@/assets/family-loving.mp4";
import { useParallax } from "@/hooks/useParallax";

interface ClientHeroProps {
  onSwitchMode: () => void;
}

const ClientHero: React.FC<ClientHeroProps> = ({ onSwitchMode }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const parallax = useParallax(0.3, 40);

  const scrollToContact = () => {
    document.getElementById('contato-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Lazy load video when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement;
            if (video.dataset.src) {
              video.src = video.dataset.src;
              video.load();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    if (desktopVideoRef.current) observer.observe(desktopVideoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-28 overflow-hidden">
      {/* Animated Background with Parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 will-change-transform"
        style={{ 
          transform: `translateY(${parallax.y}px)`,
          opacity: parallax.opacity 
        }}
      >
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${parallax.y * 0.5}px)` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" 
          style={{ 
            animationDelay: '1s',
            transform: `translateY(${parallax.y * 0.8}px)` 
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"
          style={{ transform: `translate(-50%, -50%) translateY(${parallax.y * 0.3}px)` }}
        />
      </div>

      {/* Floating Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"
          style={{ transform: `translateY(${parallax.y * 1.2}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-float" 
          style={{ 
            animationDelay: '0.5s',
            transform: `translateY(${parallax.y * 0.7}px)` 
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-float" 
          style={{ 
            animationDelay: '1s',
            transform: `translateY(${parallax.y * 1.5}px)` 
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Video for Mobile/Tablet - shown at top */}
          <div 
            className="block lg:hidden mb-8 opacity-0 animate-scale-in"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            <div className="relative max-w-xs sm:max-w-sm mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
              
              <video 
                ref={videoRef}
                data-src={familyVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="relative rounded-xl shadow-xl w-full h-auto object-cover max-h-[280px] sm:max-h-[320px]"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Badges */}
              <div 
                className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 opacity-0 animate-fade-in-left"
                style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
              >
                <Badge variant="secondary" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Primeira Hub de Seguros
                </Badge>
                <Badge variant="secondary" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold bg-secondary/10 text-secondary-foreground border-secondary/20 hover:bg-secondary/20 transition-colors">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  100% Seguro
                </Badge>
                <Badge variant="secondary" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Desde 2017
                </Badge>
              </div>

              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: '250ms', 
                  animationFillMode: 'forwards',
                  textShadow: '0 2px 10px hsl(var(--background) / 0.5)'
                }}
              >
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] drop-shadow-sm">
                    Sua porta de entrada
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl -z-10" />
                </span>
                <br />
                <span className="drop-shadow-sm">para o universo dos seguros.</span>
              </h1>
              
              <p 
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-in font-light"
                style={{ 
                  animationDelay: '400ms', 
                  animationFillMode: 'forwards',
                  textShadow: '0 1px 5px hsl(var(--background) / 0.3)'
                }}
              >
                Muito mais que brokers, somos a 
                <span className="text-primary font-semibold"> primeira hub de seguros do Brasil </span> 
                com foco em seguro saúde empresarial.
              </p>

              {/* Stats */}
              <div 
                className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0 mb-8 sm:mb-10 opacity-0 animate-scale-in"
                style={{ animationDelay: '550ms', animationFillMode: 'forwards' }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">2017</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Ano de Fundação</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-1">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Satisfação</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Suporte</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start opacity-0 animate-fade-in"
                style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
              >
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                >
                  Solicite uma Análise Gratuita
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('diferenciais')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                >
                  Conheça nossos diferenciais
                </Button>
              </div>
            </div>

            {/* Video for Desktop with lazy loading */}
            <div 
              className="hidden lg:block opacity-0 animate-fade-in-right"
              style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                
                <video 
                  ref={desktopVideoRef}
                  data-src={familyVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHero;
