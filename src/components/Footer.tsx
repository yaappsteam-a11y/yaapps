
import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">TechStudio</h3>
            <p className="text-gray-300 mb-6">
              Building digital excellence through innovative solutions and creative design.
            </p>
            <div className="flex space-x-4">
              <button className="bg-primary/20 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="bg-primary/20 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="bg-primary/20 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="bg-primary/20 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">hello@techstudio.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
            </div>
          </div>
          
          {/* Address */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Chittoor Address</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div className="text-gray-300">
                <p>123 Tech Street,</p>
                <p>Chittoor, Andhra Pradesh</p>
                <p>517001, India</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
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
                  className="block text-gray-300 hover:text-primary transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TechStudio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-primary text-sm transition-colors">
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
