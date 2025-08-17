import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LeakPredictionEngine from '@/components/ai/LeakPredictionEngine';
import SaaSAnalyticsDashboard from '@/components/saas/SaaSAnalyticsDashboard';
import ContractorMarketplace from '@/components/marketplace/ContractorMarketplace';
import SubscriptionTiers from '@/components/revenue/SubscriptionTiers';
import InvestorPitchDeck from '@/components/investor/InvestorPitchDeck';
import { 
  Brain, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Rocket,
  Zap,
  Shield,
  Target
} from 'lucide-react';

const BusinessDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          {/* Hero Section */}
          <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-4xl text-blue-900 mb-2">
                    SmartPlum Business Intelligence
                  </CardTitle>
                  <CardDescription className="text-xl text-blue-700">
                    AI-Powered Home Services Ecosystem - Series A Ready
                  </CardDescription>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
                    $11.8M ARR
                  </Badge>
                  <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
                    VC Ready
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600">2,847</div>
                  <div className="text-sm text-gray-600">Customers</div>
                  <div className="text-xs text-green-600">+18% MoM</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">$980K</div>
                  <div className="text-sm text-gray-600">MRR</div>
                  <div className="text-xs text-blue-600">+23% MoM</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">12.8K</div>
                  <div className="text-sm text-gray-600">IoT Sensors</div>
                  <div className="text-xs text-purple-600">+67% MoM</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">8,947</div>
                  <div className="text-sm text-gray-600">Contractors</div>
                  <div className="text-xs text-orange-600">+31% MoM</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-red-600">91.2%</div>
                  <div className="text-sm text-gray-600">AI Accuracy</div>
                  <div className="text-xs text-red-600">Industry Best</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600">$260B</div>
                  <div className="text-sm text-gray-600">TAM</div>
                  <div className="text-xs text-green-600">Market Size</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="ai-engine" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                AI Engine
              </TabsTrigger>
              <TabsTrigger value="saas-metrics" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                SaaS Metrics
              </TabsTrigger>
              <TabsTrigger value="marketplace" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Marketplace
              </TabsTrigger>
              <TabsTrigger value="revenue" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Revenue
              </TabsTrigger>
              <TabsTrigger value="investor" className="flex items-center gap-2">
                <Rocket className="h-4 w-4" />
                Investor Deck
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white cursor-pointer hover:shadow-lg transition-shadow" 
                      onClick={() => setActiveTab('ai-engine')}>
                  <CardContent className="p-6 text-center">
                    <Brain className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                    <h3 className="text-xl font-bold mb-2">AI Prediction Engine</h3>
                    <p className="text-blue-100 text-sm">91% accuracy in leak prediction with real-time IoT monitoring</p>
                    <div className="mt-4 p-2 bg-blue-400 rounded-lg">
                      <div className="text-2xl font-bold">1,523</div>
                      <div className="text-blue-200 text-xs">Incidents Prevented</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setActiveTab('marketplace')}>
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 text-purple-200" />
                    <h3 className="text-xl font-bold mb-2">Contractor Network</h3>
                    <p className="text-purple-100 text-sm">8,947 verified professionals with AI-powered matching</p>
                    <div className="mt-4 p-2 bg-purple-400 rounded-lg">
                      <div className="text-2xl font-bold">4.8★</div>
                      <div className="text-purple-200 text-xs">Average Rating</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setActiveTab('revenue')}>
                  <CardContent className="p-6 text-center">
                    <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-200" />
                    <h3 className="text-xl font-bold mb-2">Multi-Revenue Streams</h3>
                    <p className="text-green-100 text-sm">5 revenue streams with 87.5% gross margin</p>
                    <div className="mt-4 p-2 bg-green-400 rounded-lg">
                      <div className="text-2xl font-bold">13.9:1</div>
                      <div className="text-green-200 text-xs">LTV:CAC Ratio</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setActiveTab('investor')}>
                  <CardContent className="p-6 text-center">
                    <Rocket className="h-12 w-12 mx-auto mb-4 text-orange-200" />
                    <h3 className="text-xl font-bold mb-2">Investment Ready</h3>
                    <p className="text-orange-100 text-sm">Series A: $15M to dominate $260B market</p>
                    <div className="mt-4 p-2 bg-orange-400 rounded-lg">
                      <div className="text-2xl font-bold">$250M</div>
                      <div className="text-orange-200 text-xs">Pre-Money Valuation</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-500" />
                      Technology Moats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Patent-pending AI algorithms</li>
                      <li>• Proprietary IoT sensor network</li>
                      <li>• Network effects & data moats</li>
                      <li>• First-mover advantage</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-500" />
                      Growth Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• 156% YoY revenue growth</li>
                      <li>• 2.3% monthly churn rate</li>
                      <li>• 8.3 month payback period</li>
                      <li>• 72 NPS score (world class)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-purple-500" />
                      Market Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• $12.4M in damage prevented</li>
                      <li>• 47 cities with coverage</li>
                      <li>• 2.4M daily data points</li>
                      <li>• 99.2% system uptime</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="ai-engine">
              <LeakPredictionEngine />
            </TabsContent>

            <TabsContent value="saas-metrics">
              <SaaSAnalyticsDashboard />
            </TabsContent>

            <TabsContent value="marketplace">
              <ContractorMarketplace />
            </TabsContent>

            <TabsContent value="revenue">
              <SubscriptionTiers />
            </TabsContent>

            <TabsContent value="investor">
              <InvestorPitchDeck />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessDashboard;