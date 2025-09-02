import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Luxury Real Estate Agent",
    brokerage: "Coldwell Banker Elite",
    content: "This referral program has transformed my business. I've earned over $180,000 in commissions this year alone. The white-glove service keeps my clients happy and coming back.",
    rating: 5,
    commission: "$32,500",
    project: "Custom Estate Home"
  },
  {
    name: "Michael Rodriguez",
    role: "Principal Agent",
    brokerage: "Sotheby's International",
    content: "EliteHomes delivers exceptional quality and communication. My clients are consistently impressed with the process and final results. The commission rates are unmatched in our market.",
    rating: 5,
    commission: "$28,750",
    project: "Luxury Renovation"
  },
  {
    name: "Jennifer Chen",
    role: "Senior Associate",
    brokerage: "Compass Real Estate",
    content: "The dedicated project manager makes all the difference. I never have to worry about client communication or project updates. It's completely hands-off for me while maintaining my reputation.",
    rating: 5,
    commission: "$19,200",
    project: "Master Suite Addition"
  },
  {
    name: "David Thompson",
    role: "Luxury Specialist",
    brokerage: "Douglas Elliman",
    content: "Working with EliteHomes for 3 years now. They've referred business back to me and helped grow my luxury portfolio. True partnership that benefits everyone involved.",
    rating: 5,
    commission: "$156,000",
    project: "Multiple Projects"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-background to-muted">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="heading-xl mb-6">What Our Partners Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a network of successful real estate professionals who are earning 
            premium commissions through our exclusive referral program.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-luxury">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                {/* Star Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-2xl lg:text-3xl leading-relaxed mb-8 font-serif italic">
                  "{currentTestimonial.content}"
                </blockquote>
                
                {/* Agent Info */}
                <div className="space-y-2">
                  <div className="text-xl font-bold">{currentTestimonial.name}</div>
                  <div className="text-muted-foreground">{currentTestimonial.role}</div>
                  <div className="text-accent font-medium">{currentTestimonial.brokerage}</div>
                </div>
                
                {/* Commission Info */}
                <div className="mt-8 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Commission Earned</div>
                    <div className="text-2xl font-bold text-accent">{currentTestimonial.commission}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Project Type</div>
                    <div className="text-xl font-semibold">{currentTestimonial.project}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={previous}
              className="w-12 h-12 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-accent w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next}
              className="w-12 h-12 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;