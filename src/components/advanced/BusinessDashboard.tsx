import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { 
  TrendingUp, DollarSign, Users, Calendar, Phone, MapPin, 
  Clock, Star, AlertTriangle, CheckCircle2 
} from 'lucide-react';

const monthlyRevenue = [
  { month: 'Jan', revenue: 12500, calls: 45 },
  { month: 'Feb', revenue: 15200, calls: 52 },
  { month: 'Mar', revenue: 18900, calls: 68 },
  { month: 'Apr', revenue: 22100, calls: 71 },
  { month: 'May', revenue: 26800, calls: 89 },
  { month: 'Jun', revenue: 31200, calls: 102 }
];

const serviceBreakdown = [
  { name: 'Emergency Repairs', value: 35, color: '#FF6B6B' },
  { name: 'Drain Cleaning', value: 25, color: '#4ECDC4' },
  { name: 'Water Heaters', value: 20, color: '#45B7D1' },
  { name: 'Pipe Repairs', value: 15, color: '#96CEB4' },
  { name: 'Bathroom Plumbing', value: 5, color: '#FECA57' }
];

const leadSources = [
  { source: 'Google Search', leads: 125, conversion: 68, cost: 2.50 },
  { source: 'Facebook Ads', leads: 89, conversion: 45, cost: 3.20 },
  { source: 'Referrals', leads: 156, conversion: 89, cost: 0 },
  { source: 'Website Direct', leads: 78, conversion: 34, cost: 0 },
  { source: 'Yellow Pages', leads: 23, conversion: 12, cost: 15.00 }
];

export const BusinessDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">SmartPlum Business Intelligence</h1>
        <p className="text-muted-foreground">
          Real-time insights to grow your plumbing business
        </p>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">$31,200</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+16.2%</span> from last month
            </p>
            <Progress value={78} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+3</span> new this week
            </p>
            <Progress value={68} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">4.9</div>
            <p className="text-xs text-muted-foreground">
              Based on 127 reviews
            </p>
            <Progress value={98} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">12m</div>
            <p className="text-xs text-muted-foreground">
              Average call response
            </p>
            <Progress value={92} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="revenue" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="leads">Lead Sources</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trends</CardTitle>
              <CardDescription>Monthly revenue and call volume</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyRevenue}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Service Distribution</CardTitle>
                <CardDescription>Revenue by service type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={serviceBreakdown}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {serviceBreakdown.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Services</CardTitle>
                <CardDescription>Most requested services this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {serviceBreakdown.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: service.color }}
                      />
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{service.value}%</span>
                      <Badge variant="secondary">${(service.value * 312).toFixed(0)}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="leads" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lead Source Performance</CardTitle>
              <CardDescription>Track your best performing marketing channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leadSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium">{source.source}</h4>
                      <p className="text-sm text-muted-foreground">
                        {source.leads} leads • {source.conversion}% conversion
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="font-bold">${source.cost > 0 ? source.cost.toFixed(2) : 'Free'}</div>
                      <div className="text-sm text-muted-foreground">Cost per lead</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Key business indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Customer Satisfaction</span>
                    <span className="font-bold">98%</span>
                  </div>
                  <Progress value={98} />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>On-Time Completion</span>
                    <span className="font-bold">94%</span>
                  </div>
                  <Progress value={94} />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>First-Call Resolution</span>
                    <span className="font-bold">87%</span>
                  </div>
                  <Progress value={87} />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Repeat Customers</span>
                    <span className="font-bold">76%</span>
                  </div>
                  <Progress value={76} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>Important notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">Goal Achieved!</p>
                    <p className="text-sm text-green-600">Monthly revenue target exceeded by 12%</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-800">Schedule Alert</p>
                    <p className="text-sm text-yellow-600">3 emergency calls scheduled for today</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-800">Trending Up</p>
                    <p className="text-sm text-blue-600">Water heater services increased 25% this week</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <Button className="btn-hero">
          Schedule Consultation
        </Button>
        <Button variant="outline">
          Download Report
        </Button>
      </div>
    </div>
  );
};