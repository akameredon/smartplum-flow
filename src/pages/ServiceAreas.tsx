import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceAreas = () => {
  const primaryAreas = [
    {
      city: "Downtown Metro",
      neighborhoods: ["Financial District", "Arts Quarter", "Historic Center", "Riverfront"],
      responseTime: "15-25 minutes",
      rating: 4.9,
      reviews: 245
    },
    {
      city: "Westside",
      neighborhoods: ["Beverly Hills", "West End", "Garden District", "University Area"],
      responseTime: "20-30 minutes", 
      rating: 4.8,
      reviews: 189
    },
    {
      city: "Northside",
      neighborhoods: ["Oak Hill", "Pine Valley", "Maple Heights", "Cedar Park"],
      responseTime: "25-35 minutes",
      rating: 4.9,
      reviews: 156
    },
    {
      city: "Eastside",
      neighborhoods: ["Sunrise", "Mountain View", "Lakewood", "Highland"],
      responseTime: "20-30 minutes",
      rating: 4.7,
      reviews: 178
    }
  ];

  const serviceTypes = [
    { service: "Emergency Plumbing", availability: "24/7 All Areas", priority: "High" },
    { service: "Routine Repairs", availability: "Same Day", priority: "Standard" },
    { service: "Installations", availability: "Scheduled", priority: "Standard" },
    { service: "Maintenance", availability: "Scheduled", priority: "Low" }
  ];

  const coverage = [
    "Residential homes and apartments",
    "Commercial buildings and offices", 
    "Retail establishments",
    "Medical and dental facilities",
    "Educational institutions",
    "Government buildings"
  ];

  const benefits = [
    {
      title: "Local Expertise",
      description: "Our technicians know the unique plumbing challenges in each area",
      icon: MapPin
    },
    {
      title: "Fast Response",
      description: "Strategically located to reach you quickly in any emergency",
      icon: Clock
    },
    {
      title: "Community Trust",
      description: "Hundreds of satisfied customers in your neighborhood",
      icon: Star
    }
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
                <MapPin className="w-4 h-4 mr-2" />
                Service Area Coverage
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Serving the Greater Metro Area
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional plumbing services throughout the metro area with fast response times and local expertise in every neighborhood.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Service in Your Area
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/emergency-plumbing">
                    Emergency Service Available
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Map Placeholder */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Service Coverage</h2>
              <p className="text-muted-foreground">
                We proudly serve residents and businesses throughout the metro area
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              {/* Interactive Map Placeholder */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 text-center mb-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Service Area Map</h3>
                <p className="text-muted-foreground">
                  Call us to confirm service availability in your specific location
                </p>
                <Button className="mt-4">
                  <Phone className="w-4 h-4 mr-2" />
                  Verify Service in My Area
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Service Areas */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Primary Service Areas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {primaryAreas.map((area, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{area.city}</CardTitle>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-semibold">{area.rating}</span>
                          <span className="text-muted-foreground text-sm">({area.reviews})</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline">
                          <Clock className="w-3 h-3 mr-1" />
                          {area.responseTime}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="font-semibold mb-2">Neighborhoods Served:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {area.neighborhoods.map((neighborhood, nIndex) => (
                            <div key={nIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {neighborhood}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Types by Area */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Service Availability</h2>
              <div className="space-y-4">
                {serviceTypes.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div>
                      <h3 className="font-semibold">{service.service}</h3>
                      <p className="text-muted-foreground text-sm">Available: {service.availability}</p>
                    </div>
                    <Badge variant={service.priority === "High" ? "destructive" : "secondary"}>
                      {service.priority} Priority
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">We Service All Property Types</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coverage.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 opacity-90" />
                    <span className="opacity-90">{type}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="secondary" size="lg">
                  Get Quote for Commercial Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Local SmartPlum Service?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                        <benefit.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Outside Service Area */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Outside Our Service Area?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're always expanding! Contact us to see if we can accommodate special service requests or find a trusted partner in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Check Availability
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Request Service Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Service */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Schedule Service?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fast, reliable plumbing service throughout the metro area. Call now or schedule online for service in your neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call: (555) 123-PLUMB
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Schedule Online
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

export default ServiceAreas;