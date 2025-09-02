import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ReferralCalculator = () => {
  const [projectValue, setProjectValue] = useState([1000000]);
  const [projectType, setProjectType] = useState("custom-home");
  
  const getCommissionRate = (type: string, value: number) => {
    switch (type) {
      case "custom-home":
        if (value >= 3000000) return 0.05;
        if (value >= 1500000) return 0.045;
        return 0.04;
      case "renovation":
        if (value >= 1000000) return 0.045;
        if (value >= 500000) return 0.04;
        return 0.035;
      case "addition":
        if (value >= 800000) return 0.04;
        if (value >= 400000) return 0.035;
        return 0.03;
      default:
        return 0.035;
    }
  };
  
  const commissionRate = getCommissionRate(projectType, projectValue[0]);
  const estimatedPayout = projectValue[0] * commissionRate;
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="calculator" className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="heading-xl mb-6">Commission Calculator</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate your potential earnings based on project type and value. 
            Our commission rates are among the highest in the industry.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-luxury">
            <CardHeader className="text-center">
              <CardTitle className="heading-lg">Your Potential Earnings</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Project Type Selection */}
              <div className="space-y-3">
                <label className="text-lg font-medium">Project Type</label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="custom-home">Custom Luxury Home</SelectItem>
                    <SelectItem value="renovation">Major Renovation</SelectItem>
                    <SelectItem value="addition">Home Addition</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Project Value Slider */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-lg font-medium">Project Value</label>
                  <span className="text-2xl font-bold text-accent">
                    {formatCurrency(projectValue[0])}
                  </span>
                </div>
                
                <Slider
                  value={projectValue}
                  onValueChange={setProjectValue}
                  max={5000000}
                  min={100000}
                  step={50000}
                  className="w-full"
                />
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>$100K</span>
                  <span>$5M+</span>
                </div>
              </div>
              
              {/* Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Commission Rate</div>
                  <div className="text-3xl font-bold text-accent">
                    {(commissionRate * 100).toFixed(1)}%
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Project Value</div>
                  <div className="text-3xl font-bold">
                    {formatCurrency(projectValue[0])}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Your Payout</div>
                  <div className="text-4xl font-bold text-accent">
                    {formatCurrency(estimatedPayout)}
                  </div>
                </div>
              </div>
              
              {/* Disclaimer */}
              <div className="text-center text-sm text-muted-foreground pt-6 border-t border-border">
                * Estimates based on current commission structure. Final commission may vary based on 
                project specifics and contract terms. Higher rates available for exclusive partnerships.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReferralCalculator;