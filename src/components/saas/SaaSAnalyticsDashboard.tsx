import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Building, 
  Zap, 
  Target, 
  Globe, 
  PieChart,
  BarChart3,
  Smartphone,
  Wifi,
  Shield
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Cell
} from 'recharts';

interface SaaSMetrics {
  mrr: number;
  arr: number;
  customers: number;
  churn_rate: number;
  ltv: number;
  cac: number;
  gross_margin: number;
  nps_score: number;
  active_sensors: number;
  prevented_incidents: number;
}

interface RevenueData {
  month: string;
  subscription: number;
  marketplace: number;
  sensors: number;
  total: number;
}

interface CustomerSegment {
  name: string;
  value: number;
  growth: number;
  color: string;
}

const SaaSAnalyticsDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<SaaSMetrics>({
    mrr: 485000,
    arr: 5820000,
    customers: 2847,
    churn_rate: 2.3,
    ltv: 12400,
    cac: 890,
    gross_margin: 87.5,
    nps_score: 72,
    active_sensors: 12847,
    prevented_incidents: 1523
  });

  const [revenueData] = useState<RevenueData[]>([
    { month: 'Jan', subscription: 285000, marketplace: 145000, sensors: 85000, total: 515000 },
    { month: 'Feb', subscription: 295000, marketplace: 152000, sensors: 89000, total: 536000 },
    { month: 'Mar', subscription: 318000, marketplace: 168000, sensors: 95000, total: 581000 },
    { month: 'Apr', subscription: 342000, marketplace: 185000, sensors: 102000, total: 629000 },
    { month: 'May', subscription: 358000, marketplace: 195000, sensors: 108000, total: 661000 },
    { month: 'Jun', subscription: 385000, marketplace: 218000, sensors: 125000, total: 728000 },
    { month: 'Jul', subscription: 412000, marketplace: 235000, sensors: 135000, total: 782000 },
    { month: 'Aug', subscription: 445000, marketplace: 258000, sensors: 148000, total: 851000 }
  ]);

  const [customerSegments] = useState<CustomerSegment[]>([
    { name: 'Enterprise', value: 35, growth: 23.5, color: '#8884d8' },
    { name: 'SMB', value: 45, growth: 18.2, color: '#82ca9d' },
    { name: 'Residential', value: 20, growth: 31.7, color: '#ffc658' }
  ]);

  const growthMetrics = [
    { month: 'Jan', customers: 1845, sensors: 8234, incidents: 892 },
    { month: 'Feb', customers: 1923, sensors: 8756, incidents: 934 },
    { month: 'Mar', customers: 2087, sensors: 9458, incidents: 1023 },
    { month: 'Apr', customers: 2234, sensors: 10234, incidents: 1145 },
    { month: 'May', customers: 2456, sensors: 11023, incidents: 1289 },
    { month: 'Jun', customers: 2634, sensors: 11876, incidents: 1398 },
    { month: 'Jul', customers: 2789, sensors: 12456, incidents: 1456 },
    { month: 'Aug', customers: 2847, sensors: 12847, incidents: 1523 }
  ];

  const getGrowthPercentage = (current: number, previous: number) => {
    return Math.round(((current - previous) / previous) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <div>
                <CardTitle className="text-3xl text-purple-900">SmartPlum SaaS Analytics</CardTitle>
                <CardDescription className="text-purple-700">
                  Real-time business intelligence and growth metrics for investors
                </CardDescription>
              </div>
            </div>
            <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
              Series A Ready
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Key Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Monthly Recurring Revenue</p>
                <p className="text-2xl font-bold">${(metrics.mrr / 1000).toFixed(0)}K</p>
                <p className="text-green-200 text-xs">+23% MoM</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Annual Recurring Revenue</p>
                <p className="text-2xl font-bold">${(metrics.arr / 1000000).toFixed(1)}M</p>
                <p className="text-blue-200 text-xs">+156% YoY</p>
              </div>
              <Target className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Total Customers</p>
                <p className="text-2xl font-bold">{metrics.customers.toLocaleString()}</p>
                <p className="text-purple-200 text-xs">+18% MoM</p>
              </div>
              <Users className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Active IoT Sensors</p>
                <p className="text-2xl font-bold">{(metrics.active_sensors / 1000).toFixed(1)}K</p>
                <p className="text-orange-200 text-xs">+67% MoM</p>
              </div>
              <Wifi className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SaaS Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{metrics.churn_rate}%</div>
              <div className="text-sm text-gray-600">Monthly Churn</div>
              <div className="text-xs text-green-600">Industry: 5-7%</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">${(metrics.ltv / 1000).toFixed(1)}K</div>
              <div className="text-sm text-gray-600">Customer LTV</div>
              <div className="text-xs text-blue-600">LTV:CAC = {Math.round(metrics.ltv / metrics.cac)}:1</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{metrics.gross_margin}%</div>
              <div className="text-sm text-gray-600">Gross Margin</div>
              <div className="text-xs text-purple-600">SaaS Benchmark: 70-80%</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{metrics.nps_score}</div>
              <div className="text-sm text-gray-600">NPS Score</div>
              <div className="text-xs text-green-600">World Class: 70+</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="revenue" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="revenue">Revenue Growth</TabsTrigger>
          <TabsTrigger value="customers">Customer Analytics</TabsTrigger>
          <TabsTrigger value="iot">IoT Network</TabsTrigger>
          <TabsTrigger value="market">Market Opportunity</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Multi-Stream Revenue Growth</CardTitle>
              <CardDescription>Diversified revenue streams showing consistent growth</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, '']} />
                  <Area
                    type="monotone"
                    dataKey="subscription"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                    name="SaaS Subscriptions"
                  />
                  <Area
                    type="monotone"
                    dataKey="marketplace"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    name="Marketplace Fees"
                  />
                  <Area
                    type="monotone"
                    dataKey="sensors"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                    name="IoT Hardware"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Customer Segment Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={customerSegments}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {customerSegments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={growthMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="customers"
                      stroke="#8884d8"
                      strokeWidth={3}
                      name="Customers"
                    />
                    <Line
                      type="monotone"
                      dataKey="sensors"
                      stroke="#82ca9d"
                      strokeWidth={3}
                      name="Sensors"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="iot" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Active Sensors</p>
                    <p className="text-3xl font-bold">{metrics.active_sensors.toLocaleString()}</p>
                    <p className="text-blue-200 text-sm">Across 47 cities</p>
                  </div>
                  <Smartphone className="h-12 w-12 text-blue-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">Prevented Incidents</p>
                    <p className="text-3xl font-bold">{metrics.prevented_incidents.toLocaleString()}</p>
                    <p className="text-green-200 text-sm">$12.4M saved</p>
                  </div>
                  <Shield className="h-12 w-12 text-green-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">Data Points/Day</p>
                    <p className="text-3xl font-bold">2.4M</p>
                    <p className="text-purple-200 text-sm">AI Training Dataset</p>
                  </div>
                  <Zap className="h-12 w-12 text-purple-200" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="market" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Total Addressable Market
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Global Plumbing Services</span>
                    <span className="font-bold">$124B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Smart Home IoT</span>
                    <span className="font-bold">$89B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Property Maintenance SaaS</span>
                    <span className="font-bold">$47B</span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total TAM</span>
                    <span className="text-green-600">$260B</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth Projections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Year 1 (Current)</span>
                      <span>$5.8M ARR</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Year 2</span>
                      <span>$18M ARR</span>
                    </div>
                    <Progress value={18} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Year 3</span>
                      <span>$45M ARR</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Year 5</span>
                      <span>$120M ARR</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Action Items */}
      <Card className="border-2 border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-800">Investment Opportunity</CardTitle>
          <CardDescription className="text-green-600">
            Series A funding to accelerate growth and market expansion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-green-600">$15M</div>
              <div className="text-sm text-gray-600">Seeking Investment</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-blue-600">18 Months</div>
              <div className="text-sm text-gray-600">Runway Extension</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-purple-600">5x</div>
              <div className="text-sm text-gray-600">Expected Valuation Growth</div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              Download Investor Deck
            </Button>
            <Button variant="outline" className="flex-1">
              Schedule Demo Call
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaaSAnalyticsDashboard;