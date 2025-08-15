import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Search, Wrench, AlertTriangle, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeakDetection = () => {
  const detectionMethods = [
    {
      icon: Search,
      title: "Advanced Electronic Detection",
      description: "State-of-the-art electronic leak detection equipment to locate hidden leaks without damaging property.",
      features: ["Non-invasive", "Highly accurate", "Minimal disruption"]
    },
    {
      icon: Droplets,
      title: "Pressure Testing",
      description: "Comprehensive pressure tests to identify leaks in water lines and plumbing systems.",
      features: ["Complete system analysis", "Pinpoint accuracy", "Detailed reporting"]
    },
    {
      icon: AlertTriangle,
      title: "Thermal Imaging",
      description: "Infrared thermal imaging to detect temperature variations indicating hidden water leaks.",
      features: ["See through walls", "No demolition needed", "Visual documentation"]
    }
  ];

  const commonLeakSigns = [
    "Unexplained increase in water bills",
    "Sounds of running water when taps are off", 
    "Wet spots on walls, ceilings, or floors",
    "Musty odors or mold growth",
    "Reduced water pressure",
    "Foundation cracks or settling",
    "Lush grass patches in dry weather",
    "Water meter running when no water is used"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Assessment",
      description: "Visual inspection and interview about symptoms you've noticed."
    },
    {
      step: 2, 
      title: "Advanced Detection",
      description: "Use specialized equipment to locate the source of the leak."
    },
    {
      step: 3,
      title: "Damage Evaluation", 
      description: "Assess any existing damage and potential risks."
    },
    {
      step: 4,
      title: "Repair Solutions",
      description: "Provide detailed repair options and cost estimates."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">
                <Search className="w-4 h-4 mr-2" />
                Professional Leak Detection
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced Leak Detection Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Don't let hidden leaks damage your property. Our advanced detection technology finds leaks quickly and accurately without unnecessary demolition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Detection Service
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/emergency-plumbing">
                    Emergency Leak Repair
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Detection Methods</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {detectionMethods.map((method, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="p-3 bg-primary/10 rounded-lg w-fit">
                        <method.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {method.description}
                      </CardDescription>
                      <ul className="space-y-2">
                        {method.features.map((feature, featureIndex) => (
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

        {/* Signs of Leaks */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Signs You May Have a Hidden Leak</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {commonLeakSigns.map((sign, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{sign}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Experiencing any of these signs? Don't wait - early detection saves money and prevents damage.
                </p>
                <Button size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Professional Detection
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Leak Detection Process</h2>
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Professional Detection */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Why Choose Professional Leak Detection?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Save Money</h3>
                  <p className="opacity-90">
                    Early detection prevents extensive water damage, mold growth, and structural issues that cost thousands to repair.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Protect Your Property</h3>
                  <p className="opacity-90">
                    Hidden leaks can cause foundation damage, wood rot, and mold growth that threatens your family's health.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Accurate Results</h3>
                  <p className="opacity-90">
                    Our advanced equipment pinpoints leak locations without guesswork, minimizing damage to your property.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Peace of Mind</h3>
                  <p className="opacity-90">
                    Know exactly where the problem is and get a clear plan for repairs with transparent pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Suspect a Hidden Leak?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let a small leak become a big problem. Our professional detection service can locate and assess any leaks quickly and accurately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Leak Detection
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Get Free Estimate
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

export default LeakDetection;