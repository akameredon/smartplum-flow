import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calculator, DollarSign, Clock, CheckCircle2 } from 'lucide-react';

interface PricingResult {
  basePrice: number;
  urgencyFee: number;
  complexityFee: number;
  total: number;
  timeEstimate: string;
  description: string;
}

export const PricingCalculator = () => {
  const [serviceType, setServiceType] = useState('');
  const [urgency, setUrgency] = useState('standard');
  const [complexity, setComplexity] = useState('basic');
  const [location, setLocation] = useState('');
  const [result, setResult] = useState<PricingResult | null>(null);

  const serviceTypes = {
    'drain-cleaning': { name: 'Drain Cleaning', basePrice: 150 },
    'pipe-repair': { name: 'Pipe Repair', basePrice: 300 },
    'leak-detection': { name: 'Leak Detection', basePrice: 200 },
    'water-heater': { name: 'Water Heater Service', basePrice: 400 },
    'bathroom-plumbing': { name: 'Bathroom Plumbing', basePrice: 250 },
    'emergency': { name: 'Emergency Service', basePrice: 500 }
  };

  const urgencyMultipliers = {
    'standard': { name: 'Standard (Next Day)', multiplier: 1, time: '24-48 hours' },
    'priority': { name: 'Priority (Same Day)', multiplier: 1.5, time: '4-8 hours' },
    'emergency': { name: 'Emergency (ASAP)', multiplier: 2, time: '1-2 hours' }
  };

  const complexityMultipliers = {
    'basic': { name: 'Basic', multiplier: 1 },
    'moderate': { name: 'Moderate', multiplier: 1.3 },
    'complex': { name: 'Complex', multiplier: 1.7 }
  };

  const calculatePrice = () => {
    if (!serviceType) return;

    const service = serviceTypes[serviceType as keyof typeof serviceTypes];
    const urgencyData = urgencyMultipliers[urgency as keyof typeof urgencyMultipliers];
    const complexityData = complexityMultipliers[complexity as keyof typeof complexityMultipliers];

    const basePrice = service.basePrice;
    const urgencyFee = basePrice * (urgencyData.multiplier - 1);
    const complexityFee = basePrice * (complexityData.multiplier - 1);
    const total = basePrice + urgencyFee + complexityFee;

    setResult({
      basePrice,
      urgencyFee,
      complexityFee,
      total,
      timeEstimate: urgencyData.time,
      description: `${service.name} - ${complexityData.name} complexity, ${urgencyData.name}`
    });
  };

  return (
    <Card className="max-w-4xl mx-auto shadow-large">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
          <Calculator className="w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-2xl">Instant Pricing Calculator</CardTitle>
        <CardDescription>
          Get an accurate quote for your plumbing needs in seconds
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="service">Service Type</Label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(serviceTypes).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value.name} - Starting at ${value.basePrice}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="urgency">Urgency Level</Label>
              <Select value={urgency} onValueChange={setUrgency}>
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(urgencyMultipliers).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value.name} - {value.time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="complexity">Job Complexity</Label>
              <Select value={complexity} onValueChange={setComplexity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select complexity" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(complexityMultipliers).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="location">Your Location (Optional)</Label>
              <Input 
                id="location"
                placeholder="Enter your city or zip code"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <Button 
              onClick={calculatePrice} 
              className="w-full btn-hero"
              disabled={!serviceType}
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Price
            </Button>
          </div>

          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <DollarSign className="w-5 h-5 text-primary" />
                      Your Quote
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Base Service:</span>
                        <span>${result.basePrice}</span>
                      </div>
                      {result.urgencyFee > 0 && (
                        <div className="flex justify-between">
                          <span>Urgency Fee:</span>
                          <span>${result.urgencyFee.toFixed(0)}</span>
                        </div>
                      )}
                      {result.complexityFee > 0 && (
                        <div className="flex justify-between">
                          <span>Complexity Fee:</span>
                          <span>${result.complexityFee.toFixed(0)}</span>
                        </div>
                      )}
                      <hr className="border-border" />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total Estimate:</span>
                        <span className="text-primary">${result.total.toFixed(0)}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Estimated time: {result.timeEstimate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Includes warranty</span>
                      </div>
                    </div>

                    <div className="pt-4 space-y-2">
                      <Button className="w-full btn-hero">
                        Book This Service Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        Get Detailed Written Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-xs text-muted-foreground text-center space-y-1">
                  <p>* Prices are estimates based on typical jobs</p>
                  <p>* Final pricing confirmed after inspection</p>
                  <p>* All work includes 1-year warranty</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
};