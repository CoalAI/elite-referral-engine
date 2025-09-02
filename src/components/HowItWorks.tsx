import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Share2, FileText, CreditCard } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: UserCheck,
    title: "Apply & Get Approved",
    description: "Submit your application with your real estate credentials. We'll review and approve qualified agents within 48 hours."
  },
  {
    step: 2,
    icon: Share2,
    title: "Share Your Referral Link",
    description: "Receive your unique referral link and marketing materials. Share with clients interested in custom homes or major renovations."
  },
  {
    step: 3,
    icon: FileText,
    title: "We Qualify & Propose",
    description: "Our team qualifies your leads and creates detailed proposals. You stay informed throughout the entire process."
  },
  {
    step: 4,
    icon: CreditCard,
    title: "Get Paid",
    description: "Receive your commission within 30 days of contract signing. Track all your referrals in our partner portal."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="heading-xl mb-6">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process makes it easy to start earning premium commissions 
            on luxury home projects in just four simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-accent to-luxury-bronze transform translate-x-4 z-0"></div>
              )}
              
              <Card className="card-luxury relative z-10 text-center group hover:scale-105 transition-all duration-300">
                <CardContent className="pt-8">
                  {/* Step Number */}
                  <div className="w-12 h-12 mx-auto mb-6 bg-gradient-to-r from-accent to-luxury-bronze rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="heading-md mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;