import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, Phone, Clock, DollarSign, Wrench, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Services",
      icon: Wrench,
      faqs: [
        {
          question: "What plumbing services do you offer?",
          answer: "We provide comprehensive plumbing services including emergency repairs, leak detection, drain cleaning, water heater installation and repair, pipe repair and replacement, bathroom plumbing, kitchen plumbing, sewer line services, and preventive maintenance."
        },
        {
          question: "Do you offer 24/7 emergency service?",
          answer: "Yes! We provide 24/7 emergency plumbing services, 365 days a year. Our emergency response team is available for urgent issues like burst pipes, major leaks, sewer backups, and water heater failures."
        },
        {
          question: "Are you licensed and insured?",
          answer: "Absolutely. SmartPlum is fully licensed, bonded, and insured. All our technicians hold valid plumbing licenses and receive ongoing training to stay current with industry standards and local codes."
        },
        {
          question: "How quickly can you respond to service calls?",
          answer: "For emergency calls, we typically respond within 15-45 minutes. For scheduled appointments, we offer same-day and next-day service options. We'll always provide you with an accurate time window for our arrival."
        }
      ]
    },
    {
      title: "Pricing & Payment",
      icon: DollarSign,
      faqs: [
        {
          question: "How much do your services cost?",
          answer: "Our pricing varies depending on the specific service and complexity of the job. We provide free estimates for most services and always discuss costs upfront before beginning work. Emergency services may include after-hours fees."
        },
        {
          question: "Do you charge for estimates?",
          answer: "We provide free estimates for most plumbing services and repairs. For diagnostic work or complex assessments, there may be a small fee that is applied toward the cost of repairs if you proceed with our services."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, checks, and all major credit cards including Visa, MasterCard, American Express, and Discover. We also offer financing options for larger projects and installations."
        },
        {
          question: "Do you offer any warranties or guarantees?",
          answer: "Yes! We stand behind our work with comprehensive warranties. Parts are covered by manufacturer warranties, and our labor is guaranteed for up to 2 years depending on the type of service. Emergency repairs include a 90-day guarantee."
        }
      ]
    },
    {
      title: "Emergency Situations",
      icon: AlertTriangle,
      faqs: [
        {
          question: "What constitutes a plumbing emergency?",
          answer: "Plumbing emergencies include burst pipes, major leaks causing flooding, sewer backups, complete loss of water, gas leaks, overflowing toilets that won't stop, and water heater failures. If you're unsure, call us - we'll help you determine if it's an emergency."
        },
        {
          question: "What should I do while waiting for emergency service?",
          answer: "For burst pipes: turn off the main water supply and electricity if water is near outlets. For sewer backups: stop using all drains and toilets. For gas leaks: evacuate immediately and call the gas company. We'll walk you through emergency steps when you call."
        },
        {
          question: "Do you charge extra for emergency or after-hours service?",
          answer: "Emergency and after-hours services do include additional fees to cover our 24/7 availability and rapid response capability. However, we're transparent about all costs upfront and believe our emergency rates are competitive and fair."
        },
        {
          question: "How do I prevent plumbing emergencies?",
          answer: "Regular maintenance is key! Schedule annual inspections, avoid putting grease down drains, don't flush inappropriate items, know where your main water shutoff is located, and address small issues before they become big problems. We offer preventive maintenance plans."
        }
      ]
    }
  ];

  const quickTips = [
    {
      title: "Find Your Main Water Shutoff",
      description: "Usually located near the street or where the main water line enters your home. Know its location before you need it!"
    },
    {
      title: "Don't Use Chemical Drain Cleaners",
      description: "They can damage pipes and are rarely effective for serious clogs. Call professionals for persistent drain issues."
    },
    {
      title: "Watch Your Water Pressure",
      description: "Sudden changes in water pressure can indicate leaks or other issues that need professional attention."
    },
    {
      title: "Schedule Annual Maintenance",
      description: "Regular professional maintenance can prevent most emergency situations and extend the life of your plumbing system."
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
                <HelpCircle className="w-4 h-4 mr-2" />
                Frequently Asked Questions
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get Answers to Common Plumbing Questions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find quick answers to the most common questions about our plumbing services, pricing, and emergency procedures.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Still Have Questions? Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border rounded-lg px-4">
                        <AccordionTrigger className="text-left hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Quick Plumbing Tips</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickTips.map((tip, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{tip.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="bg-destructive/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Plumbing Emergency?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Don't wait! Emergency plumbing issues can cause extensive damage if not addressed immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="destructive">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: (555) 911-PLUMB
                </Button>
                <Button size="lg" variant="outline">
                  <Clock className="w-5 h-5 mr-2" />
                  Available 24/7/365
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Can't find the answer you're looking for? Our friendly customer service team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">
                    Learn More About Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;