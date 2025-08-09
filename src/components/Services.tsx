import { 
  Wrench, 
  Droplets, 
  Zap, 
  Home, 
  AlertTriangle, 
  Thermometer,
  Settings,
  Circle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    description: "24/7 emergency response for burst pipes, severe leaks, and urgent plumbing issues.",
    features: ["Available 24/7", "Fast response time", "Emergency repairs"]
  },
  {
    icon: Droplets,
    title: "Leak Detection & Repair",
    description: "Advanced leak detection technology to find and fix leaks before they cause damage.",
    features: ["Electronic leak detection", "Pipe repair", "Water damage prevention"]
  },
  {
    icon: Circle,
    title: "Drain Cleaning",
    description: "Professional drain cleaning to clear blockages and prevent future clogs.",
    features: ["Hydro jetting", "Snake services", "Preventive maintenance"]
  },
  {
    icon: Thermometer,
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance of all types of water heating systems.",
    features: ["Tank & tankless units", "Energy efficient upgrades", "Regular maintenance"]
  },
  {
    icon: Home,
    title: "Bathroom Remodeling",
    description: "Complete bathroom renovation services from design to installation.",
    features: ["Custom design", "Quality fixtures", "Professional installation"]
  },
  {
    icon: Settings,
    title: "Pipe Installation",
    description: "New pipe installation and replacement for residential and commercial properties.",
    features: ["PEX & copper piping", "Pipe replacement", "System upgrades"]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From emergency repairs to complete installations, we provide comprehensive 
            plumbing solutions for your home and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground ml-3">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-medium max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Service Not Listed?
            </h3>
            <p className="text-muted-foreground mb-6">
              We handle all types of plumbing work. Contact us to discuss your specific needs.
            </p>
            <Button className="btn-hero">
              <Wrench className="mr-2 w-5 h-5" />
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;