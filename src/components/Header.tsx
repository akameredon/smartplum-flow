import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              Smart<span className="text-accent">Plum</span>
            </div>
            <div className="ml-2 text-sm text-muted-foreground hidden sm:block">
              Licensed Plumbing Experts
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth font-medium">
              Reviews
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <a href="tel:+15551234567" className="hover:text-primary transition-smooth">
                (555) 123-4567
              </a>
            </div>
            <Button className="btn-hero">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              <a
                href="#home"
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-smooth"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-smooth"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-smooth"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#testimonials"
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-smooth"
                onClick={toggleMenu}
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-smooth"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="px-4 py-2 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+15551234567" className="hover:text-primary transition-smooth">
                    (555) 123-4567
                  </a>
                </div>
                <Button className="btn-hero w-full">
                  Get Free Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;