import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Zap, Camera, AlertTriangle, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DrainCleaning = () => {
  const services = [
    {
      icon: Wrench,
      title: "Hydro Jetting",
      description: "High-pressure water jetting to completely clear tough clogs and buildup.",
      features: ["Removes all debris", "Cleans pipe walls", "Eco-friendly", "Long-lasting results"]
    },
    {
      icon: Zap,
      title: "Electric Snake/Auger",
      description: "Professional-grade drain snakes for mechanical clog removal.",
      features: ["Breaks through blockages", "Works on various pipes", "Immediate results", "Safe for pipes"]
    },
    {
      icon: Camera,
      title: "Video Inspection",
      description: "Camera inspection to identify the exact cause and location of drain issues.",
      features: ["Visual diagnosis", "Precise location", "Record of condition", "Prevent future issues"]
    }
  ];

  const commonClogs = [
    { problem: "Hair & Soap Buildup", location: "Bathroom drains", solution: "Hydro jetting or snaking" },
    { problem: "Grease & Food Waste", location: "Kitchen sinks", solution: "Enzyme treatment & jetting" },
    { problem: "Tree Roots", location: "Main sewer lines", solution: "Root cutting & hydro jetting" },
    { problem: "Mineral Deposits", location: "All drain types", solution: "Chemical treatment & jetting" },
    { problem: "Foreign Objects", location: "Toilets & drains", solution: "Professional removal" },
    { problem: "Pipe Scale Buildup", location: "Older plumbing", solution: "Hydro jetting & pipe inspection" }
  ];

  const preventionTips = [
    "Use drain strainers to catch hair and debris",
    "Never pour grease down kitchen drains",
    "Run hot water after each use",
    "Use enzyme drain cleaners monthly",
    "Avoid flushing non-biodegradable items",
    "Schedule professional cleaning annually"
  ];

  const pricingGuide = [
    { service: "Basic Drain Cleaning", price: "$95-$150", description: "Standard clog removal for single drain" },
    { service: "Hydro Jetting", price: "$250-$400", description: "High-pressure cleaning for tough clogs" },
    { service: "Video Inspection", price: "$150-$300", description: "Camera diagnosis of drain condition" },
    { service: "Main Line Cleaning", price: "$200-$500", description: "Sewer line cleaning and clearing" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">
                <Wrench className="w-4 h-4 mr-2" />
                Professional Drain Cleaning
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Complete Drain Cleaning Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From simple clogs to major blockages, we have the tools and expertise to get your drains flowing freely again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Drain Service
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/emergency-plumbing">
                    Emergency Drain Backup
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Drain Cleaning Methods</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="p-3 bg-primary/10 rounded-lg w-fit">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {service.description}
                      </CardDescription>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Common Clogs */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Common Drain Problems We Solve</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commonClogs.map((clog, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{clog.problem}</CardTitle>
                      <Badge variant="secondary">{clog.location}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        <strong>Solution:</strong> {clog.solution}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Guide */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Transparent Pricing</h2>
              <div className="space-y-4">
                {pricingGuide.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div>
                      <h3 className="font-semibold">{item.service}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-primary">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  *Prices may vary based on complexity and accessibility. Free estimates provided.
                </p>
                <Button size="lg">
                  Get Your Free Estimate
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Prevent Future Drain Problems</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {preventionTips.map((tip, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 opacity-90" />
                    <span className="opacity-90">{tip}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-lg opacity-90 mb-4">
                  Regular maintenance prevents expensive emergency calls!
                </p>
                <Button variant="secondary" size="lg">
                  Schedule Preventive Maintenance
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Section */}
        <section className="bg-destructive/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Drain Emergency?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Sewage backups and overflowing drains can't wait. We provide 24/7 emergency drain cleaning services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="destructive">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: (555) 911-DRAIN
                </Button>
                <Button size="lg" variant="outline">
                  <Link to="/emergency-plumbing">
                    Learn About Emergency Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Clear Your Drains?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let slow or clogged drains disrupt your daily routine. Our professional cleaning services restore proper flow quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Drain Cleaning
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Why Choose SmartPlum?
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DrainCleaning;