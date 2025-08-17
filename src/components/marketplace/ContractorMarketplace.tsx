import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp,
  CheckCircle,
  Award,
  Smartphone,
  Calendar,
  MessageSquare,
  Filter
} from 'lucide-react';

interface Contractor {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
  specialty: string[];
  location: string;
  distance: number;
  hourly_rate: number;
  availability: 'immediate' | 'today' | 'this_week' | 'next_week';
  verified: boolean;
  response_time: string;
  completion_rate: number;
  ai_match_score: number;
  recent_jobs: number;
  earnings_ytd: number;
  certifications: string[];
  bio: string;
}

interface JobRequest {
  id: string;
  title: string;
  description: string;
  urgency: 'emergency' | 'urgent' | 'scheduled';
  budget: number;
  location: string;
  posted: string;
  bids: number;
  ai_recommended_contractors: string[];
}

const ContractorMarketplace: React.FC = () => {
  const [contractors, setContractors] = useState<Contractor[]>([]);
  const [jobRequests, setJobRequests] = useState<JobRequest[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [marketplaceStats, setMarketplaceStats] = useState({
    total_contractors: 8947,
    active_jobs: 1234,
    completed_jobs: 45678,
    avg_response_time: '12 min',
    customer_satisfaction: 4.8,
    total_revenue: 12400000
  });

  // Generate sample contractor data
  const generateContractors = (): Contractor[] => {
    const specialties = ['Emergency Plumbing', 'Leak Detection', 'Pipe Repair', 'Water Heater', 'Drain Cleaning', 'Bathroom Remodel'];
    const locations = ['Downtown', 'Midtown', 'Uptown', 'Suburbs', 'North Side', 'South Side'];
    const availabilities: Array<'immediate' | 'today' | 'this_week' | 'next_week'> = ['immediate', 'today', 'this_week', 'next_week'];
    
    return Array.from({ length: 12 }, (_, i) => ({
      id: `contractor-${i + 1}`,
      name: `${['Mike', 'Sarah', 'John', 'Lisa', 'David', 'Emma', 'Ryan', 'Jennifer', 'Chris', 'Amanda', 'Kevin', 'Nicole'][i]} ${['Johnson', 'Smith', 'Williams', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson'][i]}`,
      avatar: `https://api.dicebear.com/7.x/personas/svg?seed=${i}`,
      rating: Math.round((4.2 + Math.random() * 0.8) * 10) / 10,
      reviews: Math.floor(50 + Math.random() * 500),
      specialty: [specialties[i % specialties.length], specialties[(i + 1) % specialties.length]],
      location: locations[i % locations.length],
      distance: Math.round((0.5 + Math.random() * 15) * 10) / 10,
      hourly_rate: Math.round(65 + Math.random() * 85),
      availability: availabilities[i % availabilities.length],
      verified: Math.random() > 0.2,
      response_time: `${Math.floor(5 + Math.random() * 30)} min`,
      completion_rate: Math.round((85 + Math.random() * 15)),
      ai_match_score: Math.round((70 + Math.random() * 30)),
      recent_jobs: Math.floor(Math.random() * 50),
      earnings_ytd: Math.floor(25000 + Math.random() * 75000),
      certifications: ['Licensed Plumber', 'Emergency Services', 'Smart Home Tech'][i % 3] ? [['Licensed Plumber', 'Emergency Services', 'Smart Home Tech'][i % 3]] : ['Licensed Plumber'],
      bio: "Experienced professional with expertise in modern plumbing solutions and emergency services."
    }));
  };

  const generateJobRequests = (): JobRequest[] => {
    const urgencies: Array<'emergency' | 'urgent' | 'scheduled'> = ['emergency', 'urgent', 'scheduled'];
    const titles = [
      'Water heater replacement needed ASAP',
      'Kitchen sink leak repair',
      'Bathroom renovation - plumbing work',
      'Emergency pipe burst in basement',
      'Drain cleaning service required',
      'Install new fixtures in master bath'
    ];

    return Array.from({ length: 6 }, (_, i) => ({
      id: `job-${i + 1}`,
      title: titles[i],
      description: "Professional plumbing service required. Property owner seeking qualified contractor.",
      urgency: urgencies[i % urgencies.length],
      budget: Math.floor(200 + Math.random() * 2000),
      location: `${Math.round(Math.random() * 20)} miles away`,
      posted: `${Math.floor(Math.random() * 24)} hours ago`,
      bids: Math.floor(Math.random() * 15),
      ai_recommended_contractors: [
        `contractor-${Math.floor(Math.random() * 12) + 1}`,
        `contractor-${Math.floor(Math.random() * 12) + 1}`
      ]
    }));
  };

  useEffect(() => {
    setContractors(generateContractors());
    setJobRequests(generateJobRequests());
  }, []);

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'immediate': return 'bg-red-500';
      case 'today': return 'bg-orange-500';
      case 'this_week': return 'bg-yellow-500';
      case 'next_week': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-red-500';
      case 'urgent': return 'bg-orange-500';
      case 'scheduled': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredContractors = contractors.filter(contractor => {
    const matchesSearch = contractor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contractor.specialty.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'immediate') return matchesSearch && contractor.availability === 'immediate';
    if (selectedFilter === 'verified') return matchesSearch && contractor.verified;
    if (selectedFilter === 'top_rated') return matchesSearch && contractor.rating >= 4.8;
    
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-8 w-8 text-orange-600" />
              <div>
                <CardTitle className="text-3xl text-orange-900">Contractor Marketplace</CardTitle>
                <CardDescription className="text-orange-700">
                  AI-powered matching platform connecting customers with verified professionals
                </CardDescription>
              </div>
            </div>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
              Live Network
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">{marketplaceStats.total_contractors.toLocaleString()}</div>
              <div className="text-xs text-gray-600">Active Contractors</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">{marketplaceStats.active_jobs.toLocaleString()}</div>
              <div className="text-xs text-gray-600">Active Jobs</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">{marketplaceStats.avg_response_time}</div>
              <div className="text-xs text-gray-600">Avg Response</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-yellow-600">{marketplaceStats.customer_satisfaction}</div>
              <div className="text-xs text-gray-600">Satisfaction</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-red-600">{marketplaceStats.completed_jobs.toLocaleString()}</div>
              <div className="text-xs text-gray-600">Jobs Completed</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">${(marketplaceStats.total_revenue / 1000000).toFixed(1)}M</div>
              <div className="text-xs text-gray-600">Platform Revenue</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="contractors" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="contractors">Find Contractors</TabsTrigger>
          <TabsTrigger value="jobs">Active Jobs</TabsTrigger>
          <TabsTrigger value="analytics">Marketplace Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="contractors" className="space-y-4">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  placeholder="Search contractors by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <div className="flex gap-2">
                  <Button
                    variant={selectedFilter === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedFilter('all')}
                  >
                    All
                  </Button>
                  <Button
                    variant={selectedFilter === 'immediate' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedFilter('immediate')}
                  >
                    <Zap className="h-4 w-4 mr-1" />
                    Immediate
                  </Button>
                  <Button
                    variant={selectedFilter === 'verified' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedFilter('verified')}
                  >
                    <Shield className="h-4 w-4 mr-1" />
                    Verified
                  </Button>
                  <Button
                    variant={selectedFilter === 'top_rated' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedFilter('top_rated')}
                  >
                    <Star className="h-4 w-4 mr-1" />
                    Top Rated
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contractor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredContractors.map((contractor) => (
              <Card key={contractor.id} className={`relative ${contractor.ai_match_score > 85 ? 'border-2 border-blue-500' : ''}`}>
                {contractor.ai_match_score > 85 && (
                  <Badge className="absolute -top-2 -right-2 bg-blue-500 text-white">
                    <Zap className="h-3 w-3 mr-1" />
                    AI Match
                  </Badge>
                )}
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={contractor.avatar} />
                        <AvatarFallback>{contractor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">{contractor.name}</CardTitle>
                          {contractor.verified && (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{contractor.rating}</span>
                          <span>({contractor.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={getAvailabilityColor(contractor.availability)}>
                      {contractor.availability.replace('_', ' ')}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {contractor.specialty.map((spec, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{contractor.distance} mi away</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <span>${contractor.hourly_rate}/hr</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{contractor.response_time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-gray-400" />
                      <span>{contractor.completion_rate}% completion</span>
                    </div>
                  </div>

                  {contractor.ai_match_score > 70 && (
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-700 font-medium">AI Match Score</span>
                        <span className="text-blue-600 font-bold">{contractor.ai_match_score}%</span>
                      </div>
                      <Progress value={contractor.ai_match_score} className="mt-1 h-2" />
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Message
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobRequests.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <Badge className={getUrgencyColor(job.urgency)}>
                      {job.urgency.toUpperCase()}
                    </Badge>
                  </div>
                  <CardDescription>{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <span>Budget: ${job.budget.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>Posted {job.posted}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>{job.bids} bids</span>
                    </div>
                  </div>

                  <Alert className="mb-4">
                    <Zap className="h-4 w-4" />
                    <AlertDescription>
                      AI has identified {job.ai_recommended_contractors.length} highly compatible contractors for this job
                    </AlertDescription>
                  </Alert>

                  <Button className="w-full">
                    View Job Details & Apply
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">Network Effect Score</p>
                    <p className="text-3xl font-bold">94/100</p>
                    <p className="text-green-200 text-sm">Growing exponentially</p>
                  </div>
                  <TrendingUp className="h-12 w-12 text-green-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Market Penetration</p>
                    <p className="text-3xl font-bold">23%</p>
                    <p className="text-blue-200 text-sm">In target markets</p>
                  </div>
                  <Award className="h-12 w-12 text-blue-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">AI Matching Accuracy</p>
                    <p className="text-3xl font-bold">91.2%</p>
                    <p className="text-purple-200 text-sm">Customer satisfaction</p>
                  </div>
                  <Smartphone className="h-12 w-12 text-purple-200" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Marketplace Growth Metrics</CardTitle>
              <CardDescription>Key performance indicators showing exponential growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Supply Side (Contractors)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Active Contractors</span>
                      <span className="font-bold">{marketplaceStats.total_contractors.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Growth</span>
                      <span className="font-bold text-green-600">+18.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Verified Rate</span>
                      <span className="font-bold">89.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg Rating</span>
                      <span className="font-bold">4.7/5.0</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Demand Side (Customers)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monthly Active Users</span>
                      <span className="font-bold">45,678</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Job Posting Growth</span>
                      <span className="font-bold text-green-600">+24.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Repeat Customers</span>
                      <span className="font-bold">67.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg Job Value</span>
                      <span className="font-bold">$1,247</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContractorMarketplace;