import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calendar, FileText, CreditCard, MessageSquare, Star, 
  Download, Phone, MapPin, Clock, CheckCircle2, 
  AlertCircle, Wrench, Camera, History 
} from 'lucide-react';

const serviceHistory = [
  {
    id: 1,
    date: '2024-03-15',
    service: 'Emergency Pipe Repair',
    technician: 'Mike Johnson',
    status: 'Completed',
    rating: 5,
    cost: 450,
    warranty: '1 Year',
    photos: ['before.jpg', 'after.jpg']
  },
  {
    id: 2,
    date: '2024-02-28',
    service: 'Water Heater Maintenance',
    technician: 'Sarah Davis',
    status: 'Completed',
    rating: 5,
    cost: 180,
    warranty: '6 Months',
    photos: ['maintenance.jpg']
  },
  {
    id: 3,
    date: '2024-01-12',
    service: 'Drain Cleaning',
    technician: 'Carlos Rodriguez',
    status: 'Completed',
    rating: 4,
    cost: 120,
    warranty: '3 Months',
    photos: []
  }
];

const upcomingAppointments = [
  {
    id: 1,
    date: '2024-03-25',
    time: '10:00 AM',
    service: 'Annual Plumbing Inspection',
    technician: 'Mike Johnson',
    status: 'Confirmed'
  },
  {
    id: 2,
    date: '2024-04-08',
    time: '2:00 PM',
    service: 'Water Heater Tune-up',
    technician: 'Sarah Davis',
    status: 'Pending'
  }
];

const documents = [
  { name: 'Warranty Certificate - Pipe Repair', date: '2024-03-15', type: 'PDF' },
  { name: 'Invoice #12345', date: '2024-03-15', type: 'PDF' },
  { name: 'Maintenance Schedule', date: '2024-02-28', type: 'PDF' },
  { name: 'Water Heater Manual', date: '2024-02-28', type: 'PDF' }
];

export const CustomerPortal = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Customer Portal</h1>
        <p className="text-muted-foreground">
          Manage your services, view history, and schedule appointments
        </p>
      </motion.div>

      {/* Customer Info */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/customer-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-muted-foreground">Premium Customer since 2022</p>
                <div className="flex items-center gap-4 mt-2">
                  <Badge variant="secondary" className="gap-1">
                    <Star className="w-3 h-3" />
                    5.0 Rating
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">$750</p>
                <p className="text-sm text-muted-foreground">Total Savings</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Portal Tabs */}
      <motion.div variants={itemVariants}>
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="history">Service History</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Next Appointment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>March 25, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>10:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-primary" />
                    <span>Annual Inspection</span>
                  </div>
                  <Button className="w-full" size="sm">Reschedule</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Service Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Services:</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>This Year:</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg Rating:</span>
                    <span className="font-semibold">4.8/5</span>
                  </div>
                  <Progress value={96} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start" variant="outline" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Call
                  </Button>
                  <Button className="w-full justify-start" variant="outline" size="sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Service
                  </Button>
                  <Button className="w-full justify-start" variant="outline" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Live Chat
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {serviceHistory.slice(0, 3).map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Wrench className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{service.service}</h4>
                          <p className="text-sm text-muted-foreground">{service.date}</p>
                        </div>
                      </div>
                      <Badge variant={service.status === 'Completed' ? 'default' : 'secondary'}>
                        {service.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Manage your scheduled services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <h4 className="font-medium">{appointment.service}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{appointment.date}</span>
                          <span>{appointment.time}</span>
                          <span>with {appointment.technician}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={appointment.status === 'Confirmed' ? 'default' : 'secondary'}>
                          {appointment.status}
                        </Badge>
                        <Button size="sm" variant="outline">Reschedule</Button>
                        <Button size="sm" variant="outline">Cancel</Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button className="w-full btn-hero">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule New Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Service History</CardTitle>
                <CardDescription>Complete record of all your services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {serviceHistory.map((service) => (
                    <div key={service.id} className="border rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{service.service}</h3>
                          <p className="text-muted-foreground">by {service.technician}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">${service.cost}</p>
                          <Badge variant="default">{service.status}</Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Date</p>
                          <p className="font-medium">{service.date}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Rating</p>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < service.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Warranty</p>
                          <p className="font-medium">{service.warranty}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Photos</p>
                          <p className="font-medium">{service.photos.length} available</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Invoice
                        </Button>
                        <Button size="sm" variant="outline">
                          <FileText className="w-4 h-4 mr-2" />
                          Warranty
                        </Button>
                        {service.photos.length > 0 && (
                          <Button size="sm" variant="outline">
                            <Camera className="w-4 h-4 mr-2" />
                            Photos
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Documents</CardTitle>
                <CardDescription>Access warranties, invoices, and manuals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-muted-foreground">{doc.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{doc.type}</Badge>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Communication with your service team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">Support Team</span>
                      <span className="text-sm text-muted-foreground">2 hours ago</span>
                    </div>
                    <p>Your annual inspection is scheduled for March 25th. Our technician Mike will arrive between 9:30-10:30 AM.</p>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>YO</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">You</span>
                      <span className="text-sm text-muted-foreground">3 hours ago</span>
                    </div>
                    <p>Perfect timing! I'll be working from home that day.</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full btn-hero">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Start New Conversation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
};