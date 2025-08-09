import { ArrowRight, Phone, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-plumber.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional SmartPlum plumber providing expert service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl">
          <div className="reveal-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Trusted Local
              <span className="block text-accent">Plumbing Experts</span>
            </h1>
          </div>
          
          <div className="reveal-up reveal-delay-1">
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Fast, reliable, and professional plumbing services for your home and business. 
              Licensed, insured, and available 24/7 for emergencies.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="reveal-up reveal-delay-2 flex flex-wrap items-center gap-6 mb-10 text-white/80">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-medium">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">⭐⭐⭐⭐⭐ 500+ Reviews</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="reveal-up reveal-delay-3 flex flex-col sm:flex-row gap-4">
            <Button className="btn-hero group">
              Get Free Estimate
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-4 rounded-xl font-semibold"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (555) 123-4567
            </Button>
          </div>

          {/* Special Offer */}
          <div className="reveal-up reveal-delay-3 mt-8 inline-block">
            <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-lg px-6 py-3">
              <p className="text-white font-medium">
                🎉 <strong>Special Offer:</strong> Save $50 on your first service call!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to learn more</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;