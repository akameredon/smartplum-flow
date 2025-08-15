import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Zap, Shield, AlertTriangle, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PipeRepair = () => {
  const repairMethods = [
    {
      icon: Wrench,
      title: "Traditional Pipe Replacement",
      description: "Complete pipe replacement for severely damaged or old piping systems.",
      features: ["Long-lasting solution", "Modern materials", "Code compliant", "Full warranty"]
    },
    {
      icon: Zap,
      title: "Trenchless Pipe Repair",
      description: "Minimal excavation pipe repair using advanced trenchless technology.",
      features: ["No landscaping damage", "Faster completion", "Cost-effective", "Less disruption"]
    },
    {
      icon: Shield,
      title: "Pipe Lining & Coating",
      description: "Internal pipe coating to restore old pipes without full replacement.",
      features: ["Extends pipe life", "Improves flow", "Prevents corrosion", "Minimally invasive"]
    }
  ];

  const commonProblems = [
    {
      problem: "Burst Pipes",
      causes: ["Freezing temperatures", "Old age", "High water pressure", "Tree root damage"],
      urgency: "Emergency",
      solution: "Immediate repair and replacement of damaged sections"
    },
    {
      problem: "Leaking Joints",
      causes: ["Worn seals", "Loose connections", "Corrosion", "Settlement"],
      urgency: "Urgent",
      solution: "Joint repair or replacement with modern fittings"
    },
    {
      problem: "Corroded Pipes",
      causes: ["Age", "Water chemistry", "Galvanic corrosion", "Poor installation"],
      urgency: "Moderate",
      solution: "Pipe replacement with corrosion-resistant materials"
    },
    {
      problem: "Low Water Pressure",
      causes: ["Mineral buildup", "Partially blocked pipes", "Undersized pipes", "Multiple leaks"],
      urgency: "Moderate",
      solution: "Pipe cleaning, repair, or upsizing as needed"
    }
  ];

  const pipeMaterials = [
    {
      material: "Copper",
      lifespan: "50-70 years",
      pros: ["Durable", "Antimicrobial", "Recyclable"],
      uses: "Water supply lines"
    },
    {
      material: "PEX",
      lifespan: "25-40 years", 
      pros: ["Flexible", "Freeze-resistant", "Easy installation"],
      uses: "Residential water lines"
    },
    {
      material: "PVC",
      lifespan: "25-40 years",
      pros: ["Corrosion-resistant", "Lightweight", "Cost-effective"],
      uses: "Drain and vent lines"
    },
    {
      material: "Cast Iron",
      lifespan: "75-100 years",
      pros: ["Very durable", "Sound dampening", "Fire-resistant"],
      uses: "Sewer and drain lines"
    }
  ];

  const urgencyLevels = {
    "Emergency": "bg-destructive/10 text-destructive border-destructive/20",
    "Urgent": "bg-orange-100 text-orange-700 border-orange-200",
    "Moderate": "bg-yellow-100 text-yellow-700 border-yellow-200"
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">
                <Wrench className="w-4 h-4 mr-2" />
                Professional Pipe Repair
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Pipe Repair & Replacement
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From emergency burst pipe repairs to complete repiping projects, we restore your plumbing system with lasting solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Pipe Inspection
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/emergency-plumbing">
                    Emergency Pipe Repair
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Repair Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Pipe Repair Methods</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {repairMethods.map((method, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="p-3 bg-blue-100 rounded-lg w-fit">
                        <method.icon className="w-8 h-8 text-blue-600" />
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

        {/* Common Problems */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Common Pipe Problems We Fix</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {commonProblems.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{item.problem}</CardTitle>
                        <Badge className={urgencyLevels[item.urgency as keyof typeof urgencyLevels]}>
                          {item.urgency}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Common Causes:</h4>
                          <ul className="space-y-1">
                            {item.causes.map((cause, causeIndex) => (
                              <li key={causeIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <AlertTriangle className="w-3 h-3 text-orange-500" />
                                {cause}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Our Solution:</h4>
                          <p className="text-sm text-muted-foreground">{item.solution}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pipe Materials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Modern Pipe Materials We Use</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pipeMaterials.map((pipe, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{pipe.material}</CardTitle>
                      <Badge variant="secondary">Lasts {pipe.lifespan}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Best For:</h4>
                          <p className="text-sm text-muted-foreground">{pipe.uses}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Benefits:</h4>
                          <ul className="space-y-1">
                            {pipe.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="flex items-center gap-2 text-xs">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                {pro}
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

        {/* When to Call Professional */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">When to Call a Professional</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Immediate Emergency</h3>
                  <ul className="space-y-2 text-left opacity-90">
                    <li>• Burst pipes causing flooding</li>
                    <li>• Gas leaks (evacuate immediately)</li>
                    <li>• Sewer line backups</li>
                    <li>• No water supply to entire house</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Schedule Soon</h3>
                  <ul className="space-y-2 text-left opacity-90">
                    <li>• Persistent low water pressure</li>
                    <li>• Discolored water</li>
                    <li>• Strange sounds from pipes</li>
                    <li>• Visible pipe corrosion</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="secondary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Professional Assessment
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
              <h2 className="text-3xl font-bold mb-4">Pipe Emergency?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Burst pipes and major leaks can cause thousands in damage. Our emergency team responds fast to minimize damage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="destructive">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: (555) 911-PIPES
                </Button>
                <Button size="lg" variant="outline">
                  <Link to="/emergency-plumbing">
                    Emergency Services Info
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Preventive Tips */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Prevent Pipe Problems</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Protect from Freezing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Insulate exposed pipes</li>
                      <li>• Keep cabinet doors open during cold snaps</li>
                      <li>• Let faucets drip during freeze warnings</li>
                      <li>• Maintain consistent indoor temperature</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-primary" />
                      Regular Maintenance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Schedule annual plumbing inspections</li>
                      <li>• Monitor water pressure regularly</li>
                      <li>• Address small leaks immediately</li>
                      <li>• Know where your main shutoff valve is</li>
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
            <h2 className="text-3xl font-bold mb-4">Need Pipe Repair or Replacement?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let pipe problems escalate. Our expert technicians provide lasting solutions with quality materials and professional installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Pipe Service
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

export default PipeRepair;