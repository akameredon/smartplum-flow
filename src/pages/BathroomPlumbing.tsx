import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bath, Droplets, Wrench, Zap, Phone, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const BathroomPlumbing = () => {
  const services = [
    {
      icon: Bath,
      title: "Complete Bathroom Remodels",
      description: "Full bathroom plumbing for renovation and remodeling projects.",
      features: ["New fixture installation", "Pipe relocation", "Updated layouts", "Code compliance"]
    },
    {
      icon: Droplets,
      title: "Fixture Installation & Repair",
      description: "Professional installation and repair of all bathroom fixtures.",
      features: ["Toilets", "Sinks & faucets", "Tubs & showers", "Bidets & accessories"]
    },
    {
      icon: Wrench,
      title: "Bathroom Repairs",
      description: "Expert repair of common bathroom plumbing issues.",
      features: ["Leaky faucets", "Running toilets", "Clogged drains", "Low water pressure"]
    }
  ];

  const commonIssues = [
    {
      issue: "Running Toilet",
      symptoms: ["Constantly running water", "Phantom flushing", "Weak flush"],
      causes: ["Worn flapper", "Chain issues", "Fill valve problems"],
      urgency: "Moderate - wastes water and money"
    },
    {
      issue: "Leaky Faucet",
      symptoms: ["Dripping from spout", "Water under sink", "Reduced pressure"],
      causes: ["Worn O-rings", "Corroded seats", "Damaged cartridge"],
      urgency: "Moderate - causes water damage over time"
    },
    {
      issue: "Clogged Shower Drain",
      symptoms: ["Slow drainage", "Standing water", "Gurgling sounds"],
      causes: ["Hair buildup", "Soap scum", "Mineral deposits"],
      urgency: "Moderate - can lead to backups"
    },
    {
      issue: "Low Water Pressure",
      symptoms: ["Weak shower flow", "Slow-filling toilet", "Poor sink pressure"],
      causes: ["Mineral buildup", "Partially closed valves", "Pipe restrictions"],
      urgency: "Low - affects daily comfort"
    }
  ];

  const renoServices = [
    {
      service: "Fixture Upgrades",
      description: "Replace old fixtures with modern, efficient models",
      benefits: ["Better performance", "Water savings", "Improved aesthetics"],
      timeframe: "1-2 days"
    },
    {
      service: "Layout Changes",
      description: "Relocate plumbing for new bathroom layouts",
      benefits: ["Better space utilization", "Improved functionality", "Modern design"],
      timeframe: "3-5 days"
    },
    {
      service: "Pipe Upgrades",
      description: "Replace old galvanized pipes with modern materials",
      benefits: ["Better water pressure", "Improved water quality", "Longer lifespan"],
      timeframe: "2-4 days"
    },
    {
      service: "Accessibility Modifications",
      description: "ADA-compliant plumbing modifications",
      benefits: ["Safety improvements", "Independence", "Universal design"],
      timeframe: "2-3 days"
    }
  ];

  const fixtures = [
    { name: "High-Efficiency Toilets", features: ["Water-saving", "Powerful flush", "Comfort height"], price: "$200-$800" },
    { name: "Rainfall Showerheads", features: ["Luxurious feel", "Water-efficient options", "Multiple settings"], price: "$100-$500" },
    { name: "Vessel Sinks", features: ["Modern design", "Easy installation", "Variety of materials"], price: "$150-$1,200" },
    { name: "Freestanding Tubs", features: ["Spa-like experience", "Statement piece", "Deep soaking"], price: "$800-$3,000" }
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
                <Bath className="w-4 h-4 mr-2" />
                Bathroom Plumbing Specialists
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Complete Bathroom Plumbing Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From simple repairs to complete bathroom remodels, we handle all your bathroom plumbing needs with precision and style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Bathroom Service
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Plan Your Bathroom Remodel
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
              <h2 className="text-3xl font-bold text-center mb-12">Our Bathroom Plumbing Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="p-3 bg-blue-100 rounded-lg w-fit">
                        <service.icon className="w-8 h-8 text-blue-600" />
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

        {/* Common Issues */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Common Bathroom Plumbing Issues</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {commonIssues.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{item.issue}</CardTitle>
                      <p className="text-sm text-muted-foreground">{item.urgency}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Symptoms:</h4>
                          <ul className="space-y-1">
                            {item.symptoms.map((symptom, symptomIndex) => (
                              <li key={symptomIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Droplets className="w-3 h-3 text-blue-500" />
                                {symptom}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Common Causes:</h4>
                          <ul className="space-y-1">
                            {item.causes.map((cause, causeIndex) => (
                              <li key={causeIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Wrench className="w-3 h-3 text-orange-500" />
                                {cause}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Renovation Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Bathroom Renovation Plumbing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {renoServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{service.service}</CardTitle>
                      <Badge variant="outline">Timeline: {service.timeframe}</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {service.description}
                      </CardDescription>
                      <div>
                        <h4 className="font-semibold mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                              <Star className="w-3 h-3 text-yellow-500" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Fixtures */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Popular Bathroom Fixtures</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {fixtures.map((fixture, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{fixture.name}</CardTitle>
                      <Badge variant="secondary">{fixture.price}</Badge>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {fixture.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  *Prices include fixture only. Installation and additional materials extra.
                </p>
                <Button size="lg">
                  Get Fixture Installation Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Water Efficiency */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Save Water, Save Money</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <Droplets className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-semibold mb-2">High-Efficiency Toilets</h3>
                  <p className="opacity-90">Use up to 20% less water than standard toilets while maintaining superior performance.</p>
                </div>
                <div>
                  <Bath className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-semibold mb-2">Low-Flow Fixtures</h3>
                  <p className="opacity-90">Modern faucets and showerheads that reduce water usage without sacrificing comfort.</p>
                </div>
                <div>
                  <Zap className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-semibold mb-2">Smart Controls</h3>
                  <p className="opacity-90">Automatic shutoffs and temperature controls for maximum efficiency and convenience.</p>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="secondary" size="lg">
                  Learn About Water-Saving Options
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Tips */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Bathroom Maintenance Tips</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-primary" />
                      Weekly Tasks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Clean sink and tub drains of hair and debris</li>
                      <li>• Check for leaks around fixtures</li>
                      <li>• Test toilet flush mechanism</li>
                      <li>• Clean faucet aerators if flow is reduced</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-primary" />
                      Monthly Tasks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Test toilet handle and chain adjustment</li>
                      <li>• Check caulking around tub and shower</li>
                      <li>• Inspect under-sink plumbing for leaks</li>
                      <li>• Clean showerhead of mineral buildup</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Bathroom?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need a simple repair or a complete bathroom remodel, our expert plumbers deliver quality results you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Get Project Estimate
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

export default BathroomPlumbing;