import { Shield, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import serviceVan from '@/assets/service-van.jpg';

const stats = [
  { number: "15+", label: "Years Experience", icon: Clock },
  { number: "5000+", label: "Happy Customers", icon: Users },
  { number: "24/7", label: "Emergency Service", icon: Shield },
  { number: "100%", label: "Satisfaction Rate", icon: Award }
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose SmartPlum?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For over 15 years, SmartPlum has been the trusted plumbing partner for 
              homeowners and businesses throughout the metro area. We combine traditional 
              craftsmanship with modern technology to deliver exceptional results.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Licensed & Insured</h3>
                  <p className="text-muted-foreground">
                    Fully licensed, bonded, and insured for your peace of mind. All work comes with our guarantee.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Expert Technicians</h3>
                  <p className="text-muted-foreground">
                    Our team consists of certified plumbers with extensive training and years of experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Quality Guarantee</h3>
                  <p className="text-muted-foreground">
                    We stand behind our work with comprehensive warranties and 100% satisfaction guarantee.
                  </p>
                </div>
              </div>
            </div>

            <Button className="btn-hero">
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={serviceVan} 
              alt="SmartPlum service van ready for professional plumbing service"
              className="rounded-2xl shadow-large w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-medium">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">5-Star Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-secondary/50 rounded-xl hover-scale">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;