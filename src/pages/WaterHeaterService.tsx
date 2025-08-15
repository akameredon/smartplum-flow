import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame, Droplets, Zap, Wrench, Phone, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WaterHeaterService = () => {
  const services = [
    {
      icon: Wrench,
      title: "Water Heater Repair",
      description: "Expert repair of gas, electric, and tankless water heaters.",
      features: ["No hot water", "Inconsistent temperature", "Strange noises", "Leaking units"]
    },
    {
      icon: Zap,
      title: "New Installations",
      description: "Professional installation of energy-efficient water heating systems.",
      features: ["Tank water heaters", "Tankless systems", "Hybrid models", "Energy-efficient options"]
    },
    {
      icon: Flame,
      title: "Maintenance Service",
      description: "Regular maintenance to extend life and improve efficiency.",
      features: ["Annual tune-ups", "Sediment flushing", "Anode rod replacement", "Safety inspections"]
    }
  ];

  const heaterTypes = [
    {
      type: "Traditional Tank",
      capacity: "30-80 gallons",
      lifespan: "8-12 years",
      pros: ["Lower upfront cost", "Simple operation", "Easy maintenance"],
      cons: ["Higher energy bills", "Limited hot water", "Takes up space"]
    },
    {
      type: "Tankless",
      capacity: "Unlimited*",
      lifespan: "15-20 years",
      pros: ["Energy efficient", "Endless hot water", "Space saving"],
      cons: ["Higher upfront cost", "Complex installation", "Flow rate limits"]
    },
    {
      type: "Hybrid Heat Pump",
      capacity: "50-80 gallons",
      lifespan: "10-15 years",
      pros: ["Very energy efficient", "Lower operating costs", "Eco-friendly"],
      cons: ["Highest upfront cost", "Requires ventilation", "Climate dependent"]
    }
  ];

  const warningSignsList = [
    "No hot water or lukewarm water only",
    "Water takes too long to heat up",
    "Rusty or discolored hot water",
    "Strange sounds (popping, rumbling, banging)",
    "Water leaking around the unit",
    "Pilot light keeps going out (gas units)",
    "Circuit breaker keeps tripping (electric units)",
    "Unit is over 8-10 years old"
  ];

  const maintenanceTips = [
    "Flush sediment from tank annually",
    "Test temperature relief valve yearly", 
    "Check anode rod every 3-5 years",
    "Insulate older units and pipes",
    "Set temperature to 120°F for efficiency",
    "Schedule professional inspections"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-orange-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">
                <Flame className="w-4 h-4 mr-2" />
                Water Heater Services
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Water Heater Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From emergency repairs to energy-efficient installations, we keep your hot water flowing reliably and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Service Today
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/emergency-plumbing">
                    Emergency Water Heater Repair
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
              <h2 className="text-3xl font-bold text-center mb-12">Our Water Heater Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="p-3 bg-orange-100 rounded-lg w-fit">
                        <service.icon className="w-8 h-8 text-orange-600" />
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

        {/* Water Heater Types */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Choose the Right Water Heater</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {heaterTypes.map((heater, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{heater.type}</CardTitle>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p><strong>Capacity:</strong> {heater.capacity}</p>
                        <p><strong>Lifespan:</strong> {heater.lifespan}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                          <ul className="space-y-1">
                            {heater.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-700 mb-2">Considerations:</h4>
                          <ul className="space-y-1">
                            {heater.cons.map((con, conIndex) => (
                              <li key={conIndex} className="flex items-center gap-2 text-sm">
                                <AlertTriangle className="w-3 h-3 text-orange-500" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button size="lg">
                  Get Personalized Recommendations
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Signs Your Water Heater Needs Service</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {warningSignsList.map((sign, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{sign}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Experiencing any of these issues? Don't wait for a complete failure.
                </p>
                <Button size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Inspection
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Tips */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Extend Your Water Heater's Life</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {maintenanceTips.map((tip, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 opacity-90" />
                    <span className="opacity-90">{tip}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-lg opacity-90 mb-4">
                  Regular maintenance can extend your water heater's life by 3-5 years!
                </p>
                <Button variant="secondary" size="lg">
                  Schedule Maintenance Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Section */}
        <section className="bg-destructive/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <Flame className="w-16 h-16 text-destructive mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Water Heater Emergency?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                No hot water? Gas leak? Water heater flooding? We provide 24/7 emergency water heater services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="destructive">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: (555) HOT-WATER
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

        {/* Energy Efficiency */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Save Money with Energy-Efficient Models</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Lower Bills</h3>
                  <p className="text-muted-foreground">Energy-efficient models can reduce your water heating costs by 20-50%.</p>
                </div>
                <div>
                  <Droplets className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Better Performance</h3>
                  <p className="text-muted-foreground">Faster recovery times and more consistent hot water supply.</p>
                </div>
                <div>
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Rebates Available</h3>
                  <p className="text-muted-foreground">Many utility companies offer rebates for energy-efficient water heaters.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Water Heater?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need emergency repair or want to upgrade to a more efficient model, our experts are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Request Quote
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

export default WaterHeaterService;