import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, Clock, Trophy, Shield, Headphones } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Premium Payouts",
    description: "Earn 3-5% commission on projects ranging from $500K to $5M+. Our average payout is $15,000 per qualified referral.",
    highlight: "Up to $25K+"
  },
  {
    icon: Shield,
    title: "White-Glove Service",
    description: "Your clients receive VIP treatment throughout the entire process. We protect your reputation with exceptional service.",
    highlight: "VIP Treatment"
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "24-hour response guarantee for all leads. Quick proposals and transparent timeline keeps your clients engaged.",
    highlight: "24hr Response"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Your personal project manager handles all communication, keeping you informed every step of the way.",
    highlight: "Personal PM"
  },
  {
    icon: Trophy,
    title: "Exclusive Territory",
    description: "Limited partner program ensures reduced competition and higher conversion rates in your market area.",
    highlight: "Exclusive Access"
  },
  {
    icon: Headphones,
    title: "Marketing Support",
    description: "Professional marketing materials, referral tracking system, and co-marketing opportunities provided.",
    highlight: "Full Support"
  }
];

const ProgramBenefits = () => {
  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-background to-muted">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="heading-xl mb-6">Why Partner With Us?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join an exclusive network of real estate professionals earning premium commissions 
            on luxury custom home projects with full white-glove support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-luxury group hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-accent to-luxury-bronze rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="heading-md">{benefit.title}</CardTitle>
                <div className="text-accent font-semibold text-lg">{benefit.highlight}</div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramBenefits;