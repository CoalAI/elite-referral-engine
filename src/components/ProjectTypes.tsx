import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import luxuryKitchen from "@/assets/luxury-kitchen.jpg";
import luxuryBathroom from "@/assets/luxury-bathroom.jpg";
import luxuryAddition from "@/assets/luxury-addition.jpg";

const projects = [
  {
    title: "Custom Luxury Homes",
    description: "Ground-up construction of bespoke homes ranging from $1M to $8M+. Full architectural design and premium finishes.",
    image: luxuryKitchen,
    value: "$1M - $8M",
    commission: "$15K - $40K"
  },
  {
    title: "Major Renovations",
    description: "Whole-home renovations and luxury kitchen/bathroom remodels. Transform existing spaces into architectural masterpieces.",
    image: luxuryBathroom,
    value: "$200K - $2M",
    commission: "$6K - $30K"
  },
  {
    title: "Home Additions",
    description: "Seamless additions including master suites, second stories, and luxury outdoor living spaces.",
    image: luxuryAddition,
    value: "$150K - $1.5M",
    commission: "$4.5K - $22K"
  }
];

const ProjectTypes = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-muted to-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="heading-xl mb-6">Project Types</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in luxury residential projects that command premium pricing 
            and deliver exceptional commissions for our partner agents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-luxury overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-medium">Project Value</div>
                  <div className="text-2xl font-bold">{project.value}</div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="heading-md">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">Your Commission</span>
                  <span className="text-xl font-bold text-accent">{project.commission}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;