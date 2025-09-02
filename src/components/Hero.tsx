import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-luxury-home.jpg";

const Hero = () => {
  const scrollToApply = () => {
    const element = document.getElementById("apply");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-luxury text-center text-white fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badge */}
          <Badge className="mb-8 bg-accent/20 text-accent border-accent/30 px-6 py-2 text-sm font-medium">
            🏆 Elite Partner Program • Est. 2019
          </Badge>
          
          {/* Main Headline */}
          <h1 className="heading-hero mb-6">
            Earn Premium Commissions
            <br />
            <span className="text-accent">Luxury Home Projects</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join our exclusive referral program and earn up to <strong className="text-accent">$25,000+</strong> 
            per qualified client. Partner with the region's premier custom home builder.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToApply}
              className="btn-hero"
            >
              Join the Program
            </Button>
            <Button 
              onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline-luxury"
            >
              Learn More
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="slide-up">
              <div className="text-3xl font-bold text-accent mb-2">$2M+</div>
              <div className="text-white/80">Average Project Value</div>
            </div>
            <div className="slide-up">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div className="slide-up">
              <div className="text-3xl font-bold text-accent mb-2">24hr</div>
              <div className="text-white/80">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;