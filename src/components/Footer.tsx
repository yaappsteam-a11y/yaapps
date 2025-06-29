
import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-card border-t border-border section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-4">TechStudio</h3>
            <p className="text-muted-foreground mb-6">
              Building digital excellence through innovative solutions and creative design.
            </p>
            <div className="flex space-x-4">
              <button className="bg-primary/20 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="bg-primary/20 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="bg-primary/20 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="bg-primary/20 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Contact Us */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-xl font-semibold mb-4 text-card-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">hello@techstudio.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+91 9876543210</span>
              </div>
            </div>
          </div>
          
          {/* Address */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-semibold mb-4 text-card-foreground">Chittoor Address</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div className="text-muted-foreground">
                <p>123 Tech Street,</p>
                <p>Chittoor, Andhra Pradesh</p>
                <p>517001, India</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-xl font-semibold mb-4 text-card-foreground">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About Us', 'Team'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase().replace(' ', '')}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 TechStudio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
