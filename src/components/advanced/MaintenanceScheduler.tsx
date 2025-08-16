import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Calendar as CalendarIcon, Clock, AlertTriangle, CheckCircle2, 
  Wrench, Droplets, Thermometer, Zap, Home, Bell 
} from 'lucide-react';

const maintenanceTypes = [
  {
    id: 'water-heater',
    name: 'Water Heater Service',
    icon: Thermometer,
    frequency: 'Annual',
    duration: '2 hours',
    price: 180,
    description: 'Complete inspection, flushing, and tune-up',
    benefits: ['Extend lifespan', 'Improve efficiency', 'Prevent breakdowns']
  },
  {
    id: 'drain-cleaning',
    name: 'Drain Cleaning',
    icon: Droplets,
    frequency: 'Bi-Annual',
    duration: '1.5 hours',
    price: 120,
    description: 'Professional drain cleaning and inspection',
    benefits: ['Prevent clogs', 'Eliminate odors', 'Improve flow']
  },
  {
    id: 'plumbing-inspection',
    name: 'Plumbing Inspection',
    icon: Wrench,
    frequency: 'Annual',
    duration: '1 hour',
    price: 150,
    description: 'Comprehensive system check and assessment',
    benefits: ['Early problem detection', 'System optimization', 'Peace of mind']
  },
  {
    id: 'sump-pump',
    name: 'Sump Pump Service',
    icon: Zap,
    frequency: 'Annual',
    duration: '1 hour',
    price: 140,
    description: 'Inspection, testing, and maintenance',
    benefits: ['Basement protection', 'Reliable operation', 'Prevent flooding']
  }
];

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
];

export const MaintenanceScheduler = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    reminders: true
  });

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const totalCost = selectedServices.reduce((total, serviceId) => {
    const service = maintenanceTypes.find(s => s.id === serviceId);
    return total + (service?.price || 0);
  }, 0);

  const totalDuration = selectedServices.reduce((total, serviceId) => {
    const service = maintenanceTypes.find(s => s.id === serviceId);
    const hours = parseFloat(service?.duration.split(' ')[0] || '0');
    return total + hours;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Smart Maintenance Scheduler</h1>
        <p className="text-muted-foreground">
          Prevent problems before they happen with proactive maintenance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Service Selection */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                Select Maintenance Services
              </CardTitle>
              <CardDescription>
                Choose the services you need for your home
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {maintenanceTypes.map((service) => {
                const Icon = service.icon;
                const isSelected = selectedServices.includes(service.id);
                
                return (
                  <motion.div
                    key={service.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      isSelected ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => handleServiceToggle(service.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-4">
                      <Checkbox 
                        checked={isSelected} 
                        onChange={() => handleServiceToggle(service.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                          <h3 className="font-semibold">{service.name}</h3>
                          <Badge variant="outline">${service.price}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {service.benefits.map((benefit, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>Recommended: {service.frequency}</span>
                          <span>Duration: {service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </CardContent>
          </Card>

          {/* Date & Time Selection */}
          {selectedServices.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  Schedule Your Service
                </CardTitle>
                <CardDescription>
                  Choose your preferred date and time
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-base font-medium mb-3 block">Select Date</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">Time Slot</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-medium">Contact Information</Label>
                      <Input
                        placeholder="Full Name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                      />
                      <Input
                        placeholder="Email Address"
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                      />
                      <Input
                        placeholder="Phone Number"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                      />
                      <Input
                        placeholder="Service Address"
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                      />
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="reminders" 
                          checked={customerInfo.reminders}
                          onCheckedChange={(checked) => 
                            setCustomerInfo(prev => ({ ...prev, reminders: !!checked }))
                          }
                        />
                        <Label htmlFor="reminders" className="text-sm">
                          Send me maintenance reminders
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Booking Summary */}
        <div className="space-y-6">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedServices.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Select services to see summary
                </p>
              ) : (
                <>
                  <div className="space-y-3">
                    {selectedServices.map((serviceId) => {
                      const service = maintenanceTypes.find(s => s.id === serviceId);
                      if (!service) return null;
                      
                      return (
                        <div key={serviceId} className="flex justify-between items-center">
                          <span className="text-sm">{service.name}</span>
                          <span className="font-medium">${service.price}</span>
                        </div>
                      );
                    })}
                  </div>

                  <hr className="border-border" />

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total Cost:</span>
                      <span className="text-lg font-bold text-primary">${totalCost}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Estimated Duration:</span>
                      <span>{totalDuration} hours</span>
                    </div>
                  </div>

                  {selectedDate && selectedTime && (
                    <>
                      <hr className="border-border" />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4 text-primary" />
                          <span className="text-sm">{selectedDate.toDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm">{selectedTime}</span>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="space-y-2 pt-4">
                    <Button 
                      className="w-full btn-hero"
                      disabled={!selectedDate || !selectedTime || !customerInfo.name || !customerInfo.phone}
                    >
                      Book Maintenance
                    </Button>
                    <Button variant="outline" className="w-full">
                      Save for Later
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>✓ 100% satisfaction guarantee</p>
                    <p>✓ Licensed & insured technicians</p>
                    <p>✓ 1-year warranty on all work</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Benefits Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why Schedule Maintenance?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">Save Money</p>
                  <p className="text-sm text-muted-foreground">Prevent costly emergency repairs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">Extend Equipment Life</p>
                  <p className="text-sm text-muted-foreground">Regular care keeps systems running longer</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">Peace of Mind</p>
                  <p className="text-sm text-muted-foreground">Sleep better knowing everything works</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};