import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Smartphone, 
  Building, 
  Crown,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  BarChart3
} from 'lucide-react';

interface SubscriptionTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  color: string;
  gradient: string;
  icon: React.ReactNode;
  features: string[];
  limits: {
    sensors: number;
    alerts: number;
    users: number;
    support: string;
  };
  popular?: boolean;
  enterprise?: boolean;
}

interface RevenueStream {
  name: string;
  monthly_revenue: number;
  growth_rate: number;
  market_size: string;
  penetration: number;
}

const SubscriptionTiers: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const subscriptionTiers: SubscriptionTier[] = [
    {
      id: 'basic',
      name: 'Smart Home',
      description: 'Perfect for homeowners',
      monthlyPrice: 29,
      yearlyPrice: 290,
      color: 'text-blue-600',
      gradient: 'from-blue-500 to-blue-600',
      icon: <Smartphone className="h-6 w-6" />,
      features: [
        'AI leak detection',
        'Real-time monitoring',
        'Mobile alerts',
        'Basic analytics',
        'Emergency contacts',
        '24/7 monitoring'
      ],
      limits: {
        sensors: 5,
        alerts: 100,
        users: 2,
        support: 'Email'
      }
    },
    {
      id: 'pro',
      name: 'Smart Business',
      description: 'For small businesses',
      monthlyPrice: 99,
      yearlyPrice: 990,
      color: 'text-purple-600',
      gradient: 'from-purple-500 to-purple-600',
      icon: <Building className="h-6 w-6" />,
      popular: true,
      features: [
        'Everything in Smart Home',
        'Predictive analytics',
        'Contractor marketplace access',
        'Advanced reporting',
        'API integrations',
        'Priority support',
        'Custom alerts',
        'Multi-location support'
      ],
      limits: {
        sensors: 25,
        alerts: 500,
        users: 10,
        support: 'Phone & Email'
      }
    },
    {
      id: 'enterprise',
      name: 'Smart Enterprise',
      description: 'For large organizations',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      color: 'text-gold-600',
      gradient: 'from-yellow-500 to-orange-500',
      icon: <Crown className="h-6 w-6" />,
      enterprise: true,
      features: [
        'Everything in Smart Business',
        'White-label solution',
        'Custom AI models',
        'Dedicated account manager',
        'SLA guarantees',
        'On-premise deployment',
        'Advanced security',
        'Custom integrations',
        'Training & onboarding'
      ],
      limits: {
        sensors: 1000,
        alerts: 99999,
        users: 100,
        support: 'Dedicated Success Manager'
      }
    }
  ];

  const revenueStreams: RevenueStream[] = [
    {
      name: 'SaaS Subscriptions',
      monthly_revenue: 485000,
      growth_rate: 23.5,
      market_size: '$47B',
      penetration: 2.1
    },
    {
      name: 'Marketplace Commissions',
      monthly_revenue: 258000,
      growth_rate: 31.2,
      market_size: '$124B',
      penetration: 0.8
    },
    {
      name: 'IoT Hardware Sales',
      monthly_revenue: 148000,
      growth_rate: 67.8,
      market_size: '$89B',
      penetration: 0.3
    },
    {
      name: 'Enterprise Consulting',
      monthly_revenue: 89000,
      growth_rate: 45.6,
      market_size: '$23B',
      penetration: 1.2
    },
    {
      name: 'Insurance Partnerships',
      monthly_revenue: 67000,
      growth_rate: 89.3,
      market_size: '$156B',
      penetration: 0.1
    }
  ];

  const tierMetrics = {
    basic: { customers: 1847, churn: 3.2, ltv: 8400 },
    pro: { customers: 789, churn: 1.8, ltv: 18700 },
    enterprise: { customers: 134, churn: 0.9, ltv: 45600 }
  };

  const getPrice = (tier: SubscriptionTier) => {
    return isYearly ? tier.yearlyPrice : tier.monthlyPrice;
  };

  const getSavings = (tier: SubscriptionTier) => {
    const monthlyCost = tier.monthlyPrice * 12;
    const yearlyCost = tier.yearlyPrice;
    return monthlyCost - yearlyCost;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="h-8 w-8 text-green-600" />
              <div>
                <CardTitle className="text-3xl text-green-900">Revenue Model & Subscription Tiers</CardTitle>
                <CardDescription className="text-green-700">
                  Scalable pricing strategy with multiple revenue streams
                </CardDescription>
              </div>
            </div>
            <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
              $980K MRR
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-xl font-bold text-green-600">
                  ${(stream.monthly_revenue / 1000).toFixed(0)}K
                </div>
                <div className="text-sm text-gray-600 mb-1">{stream.name}</div>
                <div className="text-xs text-green-600">+{stream.growth_rate}% MoM</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pricing Toggle */}
      <div className="flex items-center justify-center gap-4">
        <span className={`font-medium ${!isYearly ? 'text-blue-600' : 'text-gray-500'}`}>
          Monthly
        </span>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
          className="data-[state=checked]:bg-green-500"
        />
        <span className={`font-medium ${isYearly ? 'text-green-600' : 'text-gray-500'}`}>
          Yearly
        </span>
        {isYearly && (
          <Badge className="bg-green-500 text-white">
            Save up to 25%
          </Badge>
        )}
      </div>

      {/* Subscription Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subscriptionTiers.map((tier) => (
          <Card
            key={tier.id}
            className={`relative transition-all duration-300 hover:shadow-lg ${
              tier.popular 
                ? 'border-2 border-purple-500 shadow-lg scale-105' 
                : selectedTier === tier.id 
                  ? 'border-2 border-blue-500' 
                  : 'border hover:border-gray-300'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white px-4 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-2">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${tier.gradient} text-white mb-4`}>
                {tier.icon}
              </div>
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription className="text-gray-600">
                {tier.description}
              </CardDescription>
              
              <div className="mt-4">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold">${getPrice(tier)}</span>
                  <span className="text-gray-500">/{isYearly ? 'year' : 'month'}</span>
                </div>
                {isYearly && getSavings(tier) > 0 && (
                  <div className="text-green-600 text-sm mt-1">
                    Save ${getSavings(tier)} per year
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Features */}
              <div className="space-y-2">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Limits */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sensors:</span>
                  <span className="font-medium">
                    {tier.limits.sensors === 99999 ? 'Unlimited' : tier.limits.sensors}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Users:</span>
                  <span className="font-medium">
                    {tier.limits.users === 99999 ? 'Unlimited' : tier.limits.users}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Support:</span>
                  <span className="font-medium">{tier.limits.support}</span>
                </div>
              </div>

              {/* Tier Metrics */}
              <div className="border-t pt-4 space-y-2">
                <div className="text-xs text-gray-500 mb-2">Current Metrics:</div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Customers:</span>
                  <span className="font-medium text-blue-600">
                    {tierMetrics[tier.id as keyof typeof tierMetrics].customers.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Churn Rate:</span>
                  <span className="font-medium text-green-600">
                    {tierMetrics[tier.id as keyof typeof tierMetrics].churn}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">LTV:</span>
                  <span className="font-medium text-purple-600">
                    ${tierMetrics[tier.id as keyof typeof tierMetrics].ltv.toLocaleString()}
                  </span>
                </div>
              </div>

              <Button
                className={`w-full ${tier.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                onClick={() => setSelectedTier(tier.id)}
              >
                {tier.enterprise ? 'Contact Sales' : 'Start Free Trial'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue Stream Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Revenue Stream Analysis
          </CardTitle>
          <CardDescription>
            Diversified revenue model with high-growth potential across multiple streams
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{stream.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold">
                      ${(stream.monthly_revenue / 1000).toFixed(0)}K/mo
                    </span>
                    <Badge className="bg-green-500 text-white">
                      +{stream.growth_rate}%
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Market Size:</span>
                    <span className="font-medium">{stream.market_size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Penetration:</span>
                    <span className="font-medium">{stream.penetration}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Run Rate:</span>
                    <span className="font-medium">
                      ${((stream.monthly_revenue * 12) / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>
                
                <Progress 
                  value={(stream.monthly_revenue / 485000) * 100} 
                  className="h-2" 
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Growth Projections */}
      <Card className="border-2 border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <TrendingUp className="h-5 w-5" />
            Growth Projections & Unit Economics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-800">Year 1 (Current)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>MRR:</span>
                  <span className="font-bold">$980K</span>
                </div>
                <div className="flex justify-between">
                  <span>ARR:</span>
                  <span className="font-bold">$11.8M</span>
                </div>
                <div className="flex justify-between">
                  <span>Customers:</span>
                  <span className="font-bold">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span>ARPU:</span>
                  <span className="font-bold">$344</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-blue-800">Year 2 Projection</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>MRR:</span>
                  <span className="font-bold text-green-600">$2.1M</span>
                </div>
                <div className="flex justify-between">
                  <span>ARR:</span>
                  <span className="font-bold text-green-600">$25.2M</span>
                </div>
                <div className="flex justify-between">
                  <span>Customers:</span>
                  <span className="font-bold text-green-600">6,234</span>
                </div>
                <div className="flex justify-between">
                  <span>ARPU:</span>
                  <span className="font-bold text-green-600">$337</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-blue-800">Year 3 Projection</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>MRR:</span>
                  <span className="font-bold text-purple-600">$4.7M</span>
                </div>
                <div className="flex justify-between">
                  <span>ARR:</span>
                  <span className="font-bold text-purple-600">$56.4M</span>
                </div>
                <div className="flex justify-between">
                  <span>Customers:</span>
                  <span className="font-bold text-purple-600">13,456</span>
                </div>
                <div className="flex justify-between">
                  <span>ARPU:</span>
                  <span className="font-bold text-purple-600">$349</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg">
            <h4 className="font-semibold mb-2">Key Unit Economics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="font-bold text-green-600">$890</div>
                <div className="text-gray-600">Customer CAC</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-blue-600">$12,400</div>
                <div className="text-gray-600">Customer LTV</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-purple-600">13.9:1</div>
                <div className="text-gray-600">LTV:CAC Ratio</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-orange-600">87.5%</div>
                <div className="text-gray-600">Gross Margin</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionTiers;