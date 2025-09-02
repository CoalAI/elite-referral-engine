import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-accent to-luxury-bronze rounded-full"></div>
              <span className="text-2xl font-bold font-serif">EliteHomes</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Premier custom home builder specializing in luxury residential projects. 
              Partner with us to earn exceptional commissions on high-value construction projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold font-serif">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#benefits" className="text-primary-foreground/80 hover:text-accent transition-colors">Program Benefits</a></li>
              <li><a href="#how-it-works" className="text-primary-foreground/80 hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#projects" className="text-primary-foreground/80 hover:text-accent transition-colors">Project Types</a></li>
              <li><a href="#calculator" className="text-primary-foreground/80 hover:text-accent transition-colors">Commission Calculator</a></li>
              <li><a href="#testimonials" className="text-primary-foreground/80 hover:text-accent transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold font-serif">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#terms" className="text-primary-foreground/80 hover:text-accent transition-colors">Terms & Conditions</a></li>
              <li><a href="#privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#partner-portal" className="text-primary-foreground/80 hover:text-accent transition-colors">Partner Portal</a></li>
              <li><a href="#marketing-materials" className="text-primary-foreground/80 hover:text-accent transition-colors">Marketing Materials</a></li>
              <li><a href="#support" className="text-primary-foreground/80 hover:text-accent transition-colors">Support Center</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold font-serif">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">partners@elitehomes.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="text-primary-foreground/80">
                  123 Luxury Boulevard<br />
                  Beverly Hills, CA 90210
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-primary-foreground/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} EliteHomes Referral Program. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">Privacy</a>
            <a href="#terms" className="text-primary-foreground/60 hover:text-accent transition-colors">Terms</a>
            <a href="#cookies" className="text-primary-foreground/60 hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;