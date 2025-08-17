import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  Users, 
  Zap, 
  Globe, 
  Shield,
  Award,
  Lightbulb,
  Rocket,
  BarChart3,
  PieChart,
  Brain,
  Network,
  Building,
  Calendar
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

const InvestorPitchDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const marketData = [
    { year: '2023', market: 124, addressable: 47, serviceable: 12 },
    { year: '2024', market: 138, addressable: 56, serviceable: 18 },
    { year: '2025', market: 156, addressable: 67, serviceable: 24 },
    { year: '2026', market: 175, addressable: 78, serviceable: 32 },
    { year: '2027', market: 198, addressable: 89, serviceable: 41 }
  ];

  const revenueProjection = [
    { year: 'Y1', revenue: 11.8, customers: 2847, arpu: 344 },
    { year: 'Y2', revenue: 25.2, customers: 6234, arpu: 337 },
    { year: 'Y3', revenue: 56.4, customers: 13456, arpu: 349 },
    { year: 'Y4', revenue: 98.7, customers: 23478, arpu: 351 },
    { year: 'Y5', revenue: 156.3, customers: 36789, arpu: 354 }
  ];

  const competitivePositioning = [
    { name: 'SmartPlum', x: 95, y: 92, size: 450, color: '#3B82F6' },
    { name: 'HomeAdvisor', x: 75, y: 45, size: 1200, color: '#EF4444' },
    { name: 'Angie\'s List', x: 65, y: 38, size: 800, color: '#F59E0B' },
    { name: 'Thumbtack', x: 70, y: 52, size: 600, color: '#10B981' },
    { name: 'Traditional', x: 25, y: 25, size: 2000, color: '#6B7280' }
  ];

  const slides = [
    {
      id: 'problem',
      title: 'The $260B Problem',
      icon: <Target className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800">Current Market Pain Points</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    $37B
                  </div>
                  <div>
                    <div className="font-semibold">Annual Water Damage</div>
                    <div className="text-sm text-gray-600">US property damage costs</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    89%
                  </div>
                  <div>
                    <div className="font-semibold">Reactive Services</div>
                    <div className="text-sm text-gray-600">Emergency repairs vs prevention</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    48hrs
                  </div>
                  <div>
                    <div className="font-semibold">Response Time</div>
                    <div className="text-sm text-gray-600">Average emergency response</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800">SmartPlum Solution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                  <div>
                    <div className="font-semibold">Predictive Prevention</div>
                    <div className="text-sm text-gray-600">91% accuracy in leak prediction</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    IoT
                  </div>
                  <div>
                    <div className="font-semibold">Real-time Monitoring</div>
                    <div className="text-sm text-gray-600">12,847 active sensors deployed</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    12min
                  </div>
                  <div>
                    <div className="font-semibold">Instant Response</div>
                    <div className="text-sm text-gray-600">AI-matched contractor dispatch</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'solution',
      title: 'AI-Powered Home Services Ecosystem',
      icon: <Brain className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-bold mb-2">AI Prediction Engine</h3>
                <p className="text-blue-100">Machine learning algorithms prevent 91% of potential water damage incidents</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <Network className="h-12 w-12 mx-auto mb-4 text-purple-200" />
                <h3 className="text-xl font-bold mb-2">Contractor Marketplace</h3>
                <p className="text-purple-100">8,947 verified professionals with AI-powered matching and 4.8★ average rating</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-green-200" />
                <h3 className="text-xl font-bold mb-2">IoT Sensor Network</h3>
                <p className="text-green-100">Real-time monitoring across 47 cities with 2.4M daily data points</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'market',
      title: 'Massive Market Opportunity',
      icon: <Globe className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Addressable Market</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={marketData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}B`, '']} />
                    <Area
                      type="monotone"
                      dataKey="market"
                      stackId="1"
                      stroke="#EF4444"
                      fill="#EF4444"
                      name="Total Market"
                      opacity={0.3}
                    />
                    <Area
                      type="monotone"
                      dataKey="addressable"
                      stackId="2"
                      stroke="#F59E0B"
                      fill="#F59E0B"
                      name="Addressable"
                      opacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="serviceable"
                      stackId="3"
                      stroke="#10B981"
                      fill="#10B981"
                      name="Serviceable"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Global Plumbing Services</span>
                    <span className="font-bold text-red-600">$124B</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span>Smart Home IoT</span>
                    <span className="font-bold text-orange-600">$89B</span>
                  </div>
                  <Progress value={43} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span>Property Maintenance SaaS</span>
                    <span className="font-bold text-yellow-600">$47B</span>
                  </div>
                  <Progress value={23} className="h-2" />
                  
                  <div className="border-t pt-3 mt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total TAM (2024)</span>
                      <span className="text-green-600">$260B</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Growing at 12.5% CAGR
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'traction',
      title: 'Explosive Growth & Traction',
      icon: <TrendingUp className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold">$11.8M</div>
                <div className="text-green-200">ARR</div>
                <div className="text-sm text-green-300">+156% YoY</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold">2,847</div>
                <div className="text-blue-200">Customers</div>
                <div className="text-sm text-blue-300">+18% MoM</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold">2.3%</div>
                <div className="text-purple-200">Churn Rate</div>
                <div className="text-sm text-purple-300">Industry: 5-7%</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold">13.9:1</div>
                <div className="text-orange-200">LTV:CAC</div>
                <div className="text-sm text-orange-300">World Class</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Growth Trajectory</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => {
                    if (name === 'revenue') return [`$${value}M`, 'ARR'];
                    if (name === 'customers') return [value.toLocaleString(), 'Customers'];
                    return [`$${value}`, 'ARPU'];
                  }} />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10B981"
                    strokeWidth={4}
                    name="revenue"
                  />
                  <Line
                    type="monotone"
                    dataKey="customers"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    name="customers"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 'business-model',
      title: 'Multi-Stream Revenue Model',
      icon: <DollarSign className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-xl font-bold">$485K</div>
                <div className="text-blue-200 text-sm">SaaS Subscriptions</div>
                <div className="text-blue-300 text-xs">+23% MoM</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-xl font-bold">$258K</div>
                <div className="text-green-200 text-sm">Marketplace Fees</div>
                <div className="text-green-300 text-xs">+31% MoM</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-xl font-bold">$148K</div>
                <div className="text-purple-200 text-sm">IoT Hardware</div>
                <div className="text-purple-300 text-xs">+68% MoM</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-xl font-bold">$89K</div>
                <div className="text-orange-200 text-sm">Consulting</div>
                <div className="text-orange-300 text-xs">+46% MoM</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-xl font-bold">$67K</div>
                <div className="text-red-200 text-sm">Insurance</div>
                <div className="text-red-300 text-xs">+89% MoM</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Unit Economics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Customer Acquisition Cost (CAC)</span>
                  <span className="font-bold">$890</span>
                </div>
                <div className="flex justify-between">
                  <span>Customer Lifetime Value (LTV)</span>
                  <span className="font-bold text-green-600">$12,400</span>
                </div>
                <div className="flex justify-between">
                  <span>LTV:CAC Ratio</span>
                  <span className="font-bold text-blue-600">13.9:1</span>
                </div>
                <div className="flex justify-between">
                  <span>Gross Margin</span>
                  <span className="font-bold text-purple-600">87.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Payback Period</span>
                  <span className="font-bold">8.3 months</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subscription Tiers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Smart Home ($29/mo)</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">1,847 customers</span>
                    <Badge className="bg-blue-500">61%</Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Smart Business ($99/mo)</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">789 customers</span>
                    <Badge className="bg-purple-500">28%</Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Smart Enterprise ($299/mo)</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">134 customers</span>
                    <Badge className="bg-orange-500">11%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'competitive',
      title: 'Competitive Advantage',
      icon: <Award className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Market Positioning</CardTitle>
              <CardDescription>Technology Innovation vs Market Share</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-80 bg-gray-50 rounded-lg p-4">
                {/* Axis labels */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm font-medium">
                  Technology Innovation →
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -rotate-90 text-sm font-medium">
                  Market Share ↑
                </div>
                
                {/* Competitors */}
                {competitivePositioning.map((competitor, index) => (
                  <div
                    key={index}
                    className="absolute rounded-full flex items-center justify-center text-white font-bold text-xs"
                    style={{
                      left: `${competitor.x}%`,
                      bottom: `${competitor.y}%`,
                      width: `${Math.sqrt(competitor.size) / 10}px`,
                      height: `${Math.sqrt(competitor.size) / 10}px`,
                      backgroundColor: competitor.color,
                      transform: 'translate(-50%, 50%)'
                    }}
                  >
                    {competitor.name === 'SmartPlum' && (
                      <div className="text-center">
                        <div className="font-bold">SP</div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Legend */}
                <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-sm font-medium mb-2">Companies</div>
                  {competitivePositioning.map((competitor, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: competitor.color }}
                      />
                      <span>{competitor.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 91.2% leak prediction accuracy</li>
                  <li>• Patent-pending ML algorithms</li>
                  <li>• Real-time data processing</li>
                  <li>• Continuous learning system</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <Network className="h-5 w-5" />
                  Network Effects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 8,947 verified contractors</li>
                  <li>• Two-sided marketplace</li>
                  <li>• Data network effects</li>
                  <li>• Switching costs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Market Position
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• First-mover advantage</li>
                  <li>• Premium brand positioning</li>
                  <li>• Enterprise relationships</li>
                  <li>• IP protection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'team',
      title: 'World-Class Team',
      icon: <Users className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  AK
                </div>
                <h3 className="text-lg font-bold">Akameredon (CEO)</h3>
                <p className="text-gray-600 text-sm">Visionary Leader</p>
                <p className="text-xs mt-2">Former Silicon Valley executive with 15+ years in AI and IoT</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  AI
                </div>
                <h3 className="text-lg font-bold">AI Engineering Team</h3>
                <p className="text-gray-600 text-sm">Machine Learning Experts</p>
                <p className="text-xs mt-2">PhD-level AI researchers from top universities</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  OPS
                </div>
                <h3 className="text-lg font-bold">Operations Team</h3>
                <p className="text-gray-600 text-sm">Industry Veterans</p>
                <p className="text-xs mt-2">Former executives from Uber, Airbnb, ServiceTitan</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Advisory Board & Investors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-bold">A16Z Partner</div>
                  <div className="text-sm text-gray-600">Strategic Advisor</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-bold">YC Alumni</div>
                  <div className="text-sm text-gray-600">Technical Advisor</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-bold">Industry Expert</div>
                  <div className="text-sm text-gray-600">Market Advisor</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-bold">Enterprise CTO</div>
                  <div className="text-sm text-gray-600">Product Advisor</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 'investment',
      title: 'Investment Opportunity',
      icon: <Rocket className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="text-3xl text-green-900">Series A: $15M</CardTitle>
              <CardDescription className="text-green-700 text-lg">
                Fuel explosive growth and market domination
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600">$15M</div>
                  <div className="text-gray-600">Raising</div>
                  <div className="text-sm text-green-600 mt-1">Series A</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600">18</div>
                  <div className="text-gray-600">Months</div>
                  <div className="text-sm text-blue-600 mt-1">Runway Extension</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-purple-600">$250M</div>
                  <div className="text-gray-600">Valuation</div>
                  <div className="text-sm text-purple-600 mt-1">Pre-money</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Use of Funds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Product & AI Development</span>
                  <div className="flex items-center gap-2">
                    <Progress value={40} className="w-24 h-2" />
                    <span className="font-bold">40%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sales & Marketing</span>
                  <div className="flex items-center gap-2">
                    <Progress value={30} className="w-24 h-2" />
                    <span className="font-bold">30%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Team Expansion</span>
                  <div className="flex items-center gap-2">
                    <Progress value={20} className="w-24 h-2" />
                    <span className="font-bold">20%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Working Capital</span>
                  <div className="flex items-center gap-2">
                    <Progress value={10} className="w-24 h-2" />
                    <span className="font-bold">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>18-Month Milestones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">$50M ARR milestone</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-green-500" />
                  <span className="text-sm">25,000+ customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">Expand to 10 new markets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-orange-500" />
                  <span className="text-sm">100+ enterprise customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-red-500" />
                  <span className="text-sm">Series B ready ($1B+ valuation)</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Join the Smart Home Revolution</h3>
              <p className="text-lg mb-6">
                Partner with us to transform a $260B industry and create the future of preventive home maintenance
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Schedule Meeting
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Download Deck
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">SmartPlum Investor Pitch Deck</h1>
            <div className="flex gap-2">
              {slides.map((slide, index) => (
                <Button
                  key={slide.id}
                  variant={currentSlide === index ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentSlide(index)}
                >
                  {slide.icon}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Slide */}
      <Card className="min-h-[600px]">
        <CardHeader>
          <div className="flex items-center gap-2">
            {slides[currentSlide].icon}
            <CardTitle className="text-2xl">{slides[currentSlide].title}</CardTitle>
            <Badge className="ml-auto">
              {currentSlide + 1} / {slides.length}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {slides[currentSlide].content}
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
            >
              Previous
            </Button>
            <div className="flex gap-1">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
              disabled={currentSlide === slides.length - 1}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestorPitchDeck;