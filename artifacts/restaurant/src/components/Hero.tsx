import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "./ui/button";
import { Star, Phone } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(containerRef);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(q(".hero-bg"), 
      { scale: 1.1, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 2 }
    )
    .fromTo(q(".hero-badge"),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=1.2"
    )
    .fromTo(q(".hero-title"),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
      "-=0.8"
    )
    .fromTo(q(".hero-subtitle"),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(q(".hero-buttons"),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    );
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 hero-bg">
        {/* hero background authentic indian food spread */}
        <img 
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&q=80" 
          alt="Indian food spread" 
          className="w-full h-full object-cover"
        />
        {/* Gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-6 md:inset-10 border border-secondary/30 z-10 pointer-events-none flex items-center justify-center">
        {/* Corner Ornaments */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-secondary"></div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-secondary"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-start pt-20">
        
        <div className="hero-badge inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
          <Star className="w-4 h-4 text-secondary fill-secondary" />
          <span className="text-sm font-sans text-secondary-foreground font-medium text-secondary">
            4.7 | 1400+ Google Reviews
          </span>
        </div>

        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold max-w-4xl leading-[1.1] mb-6 drop-shadow-2xl">
          <span className="block text-foreground">Authentic Taste</span>
          <span className="block text-glow">of India</span>
        </h1>

        <div className="hero-subtitle mb-10 max-w-2xl">
          <p className="text-xl md:text-2xl text-foreground/90 font-serif mb-2">
            Family Restaurant in Malad East
          </p>
          <p className="text-lg text-secondary/80 font-sans tracking-wider">
            श्री लक्ष्मी विलास फैमिली रेस्टोरेंट
          </p>
        </div>

        <div className="hero-buttons flex flex-wrap items-center gap-4">
          <Button size="lg" variant="secondary" onClick={() => window.location.href = "#menu"}>
            View Menu
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary-foreground hover:bg-primary hover:text-white" onClick={() => window.location.href = "#contact"}>
            Reserve Table
          </Button>
          <a href="tel:+919819269169" className="flex items-center gap-2 text-foreground/80 hover:text-secondary transition-colors font-sans tracking-wide ml-2 group">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors border border-secondary/30">
              <Phone className="w-4 h-4 text-secondary" />
            </div>
            +91 98192 69169
          </a>
        </div>
      </div>
    </section>
  );
}
