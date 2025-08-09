import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-bold">
                Smart<span className="text-accent">Plum</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Your trusted local plumbing experts providing fast, reliable, and professional 
              services for over 15 years. Licensed, insured, and available 24/7.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+15551234567" className="hover:text-accent transition-smooth">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@smartplum.com" className="hover:text-accent transition-smooth">
                  info@smartplum.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Greater Metro Area</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-accent transition-smooth">
                  Emergency Plumbing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-smooth">
                  Leak Detection & Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-smooth">
                  Drain Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-smooth">
                  Water Heater Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-smooth">
                  Bathroom Remodeling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-smooth">
                  Pipe Installation
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-accent transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent transition-smooth">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-smooth">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-smooth">
                  Emergency Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-smooth">
                  Free Estimates
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 SmartPlum Plumbing. All rights reserved. | Licensed & Insured
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex space-x-4 text-sm text-primary-foreground/60">
                <a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a>
                <a href="#" className="hover:text-accent transition-smooth">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;