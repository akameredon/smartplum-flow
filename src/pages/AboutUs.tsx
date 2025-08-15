import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, Calendar, MapPin, Shield, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Mike Rodriguez",
      role: "Master Plumber & Owner",
      experience: "15+ years",
      certifications: ["Master Plumber License", "Backflow Prevention", "Green Plumbing"],
      description: "Founded SmartPlum with a vision to provide honest, reliable plumbing services to our community."
    },
    {
      name: "Sarah Chen", 
      role: "Lead Technician",
      experience: "8+ years",
      certifications: ["Journeyman Plumber", "Pipe Welding", "Water Quality Specialist"],
      description: "Specializes in complex residential and commercial plumbing installations."
    },
    {
      name: "David Thompson",
      role: "Emergency Services Lead",
      experience: "12+ years", 
      certifications: ["Master Plumber", "Emergency Response", "Sewer Line Specialist"],
      description: "Leads our 24/7 emergency response team with expertise in urgent repairs."
    }
  ];

  const certifications = [
    { name: "Licensed & Bonded", icon: Shield },
    { name: "Better Business Bureau A+", icon: Star },
    { name: "Angie's List Super Service Award", icon: Award },
    { name: "EPA Certified", icon: Award },
    { name: "OSHA Safety Certified", icon: Shield },
    { name: "State Contractor License", icon: Award }
  ];

  const timeline = [
    { year: "2015", event: "SmartPlum founded by Mike Rodriguez" },
    { year: "2017", event: "Expanded to 24/7 emergency services" },
    { year: "2019", event: "Achieved Better Business Bureau A+ rating" },
    { year: "2021", event: "Added eco-friendly plumbing solutions" },
    { year: "2023", event: "Serving 10,000+ satisfied customers" }
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
                <Users className="w-4 h-4 mr-2" />
                About SmartPlum
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Trusted Local Plumbing Experts
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                For over 8 years, SmartPlum has been providing honest, reliable plumbing services to families and businesses throughout the metro area. We're not just plumbers - we're your neighbors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Free Estimate
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/service-areas">
                    <MapPin className="w-5 h-5 mr-2" />
                    View Service Areas
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-muted-foreground mb-6">
                    SmartPlum was founded in 2015 when master plumber Mike Rodriguez saw a need for honest, transparent plumbing services in our community. Too many homeowners were getting overcharged or receiving poor quality work from unreliable contractors.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    We built SmartPlum on three core principles: transparency in pricing, quality workmanship, and treating every customer like family. Today, we're proud to have served over 10,000 satisfied customers and maintain an A+ rating with the Better Business Bureau.
                  </p>
                  <p className="text-muted-foreground">
                    Our team of licensed, experienced plumbers continues that tradition of excellence with every service call, from simple repairs to complex installations.
                  </p>
                </div>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.year}</h3>
                        <p className="text-muted-foreground">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Meet Our Expert Team</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                      <Badge variant="secondary">{member.experience}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{member.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Certifications:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {member.certifications.map((cert, certIndex) => (
                            <li key={certIndex} className="flex items-center gap-2">
                              <Award className="w-3 h-3 text-primary" />
                              {cert}
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

        {/* Certifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Licensed, Certified & Trusted</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                    <cert.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold">{cert.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                  <p className="opacity-90">Honest pricing, transparent communication, and doing the right thing every time.</p>
                </div>
                <div>
                  <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="opacity-90">Quality workmanship backed by ongoing training and industry certifications.</p>
                </div>
                <div>
                  <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="opacity-90">Supporting our neighbors with reliable service and fair prices.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience the SmartPlum Difference</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust SmartPlum for all their plumbing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Your Free Estimate
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/emergency-plumbing">
                  Emergency Service Available
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

export default AboutUs;