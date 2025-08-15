import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Clock, Shield, Wrench, Droplets, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmergencyService = () => {
  const emergencyServices = [
    {
      icon: Droplets,
      title: "Burst Pipe Repair",
      description: "Immediate response to burst pipes causing flooding and water damage.",
      response: "15-30 minutes"
    },
    {
      icon: AlertTriangle,
      title: "Sewer Backup",
      description: "Emergency sewer line clearing and backup prevention.",
      response: "20-45 minutes"
    },
    {
      icon: Wrench,
      title: "Water Heater Failure",
      description: "Emergency water heater repair and replacement services.",
      response: "30-60 minutes"
    },
    {
      icon: Droplets,
      title: "Major Leaks",
      description: "Stop major leaks before they cause extensive property damage.",
      response: "15-30 minutes"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-destructive/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="destructive" className="mb-4">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Emergency Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                24/7 Emergency Plumbing Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                When plumbing disasters strike, we respond fast. Licensed emergency plumbers available around the clock.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (555) 123-PLUMB
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Clock className="w-5 h-5 mr-2" />
                  Available 24/7
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Emergency Services We Handle</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {emergencyServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-destructive/10 rounded-lg">
                          <service.icon className="w-6 h-6 text-destructive" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <Badge variant="secondary">Response: {service.response}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose SmartPlum for Emergencies?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
                  <p className="text-muted-foreground">Average response time under 30 minutes for emergency calls.</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                  <p className="text-muted-foreground">Fully licensed, bonded, and insured for your protection.</p>
                </div>
                <div className="text-center">
                  <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                  <p className="text-muted-foreground">Experienced professionals with advanced tools and training.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Tips */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Emergency Plumbing Tips</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-destructive" />
                      For Burst Pipes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Turn off the main water supply immediately</li>
                      <li>Turn off electricity if water is near electrical outlets</li>
                      <li>Move furniture and valuables away from water</li>
                      <li>Call SmartPlum emergency line</li>
                    </ol>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                      For Sewer Backups
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Stop using all drains and toilets immediately</li>
                      <li>Avoid contact with contaminated water</li>
                      <li>Turn off utilities if water is near electrical</li>
                      <li>Call professionals - don't attempt DIY fixes</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Emergency Plumbing Right Now?</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't wait - plumbing emergencies get worse with time. Call our emergency hotline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Emergency: (555) 911-PLUMB
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact" className="flex items-center">
                  Schedule Non-Emergency Service
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

export default EmergencyService;