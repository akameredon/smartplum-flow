import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: "Winter Plumbing Preparation: Protect Your Pipes from Freezing",
      excerpt: "Learn essential steps to prevent frozen pipes and costly winter plumbing emergencies.",
      author: "Mike Rodriguez",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Seasonal Tips",
      featured: true
    },
    {
      title: "Signs Your Water Heater Needs Replacement",
      excerpt: "Discover the warning signs that indicate it's time to replace your water heater before it fails.",
      author: "Sarah Chen",
      date: "December 10, 2024", 
      readTime: "4 min read",
      category: "Water Heaters"
    },
    {
      title: "DIY vs Professional: When to Call a Plumber",
      excerpt: "A comprehensive guide to help you decide which plumbing issues you can tackle yourself.",
      author: "David Thompson",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Home Maintenance"
    },
    {
      title: "The Hidden Costs of Ignoring Small Leaks",
      excerpt: "Why addressing minor leaks quickly can save you thousands in water damage repairs.",
      author: "Mike Rodriguez",
      date: "November 28, 2024",
      readTime: "3 min read",
      category: "Leak Prevention"
    },
    {
      title: "Eco-Friendly Plumbing Upgrades That Save Money",
      excerpt: "Discover water-saving fixtures and upgrades that reduce bills and environmental impact.",
      author: "Sarah Chen",
      date: "November 20, 2024",
      readTime: "5 min read",
      category: "Green Plumbing"
    },
    {
      title: "Emergency Plumbing Kit: What Every Homeowner Should Have",
      excerpt: "Essential tools and supplies to handle minor plumbing emergencies until help arrives.",
      author: "David Thompson",
      date: "November 15, 2024",
      readTime: "4 min read",
      category: "Emergency Prep"
    }
  ];

  const categories = [
    "All Posts",
    "Seasonal Tips",
    "Water Heaters", 
    "Home Maintenance",
    "Leak Prevention",
    "Green Plumbing",
    "Emergency Prep"
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
                <BookOpen className="w-4 h-4 mr-2" />
                Plumbing Knowledge Center
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Plumbing Tips & Advice
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stay informed with the latest plumbing tips, maintenance advice, and industry insights from our expert team.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  Have a Plumbing Question? Ask Our Experts
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className="mb-2"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
              {blogPosts
                .filter(post => post.featured)
                .map((post, index) => (
                  <Card key={index} className="mb-12 hover:shadow-lg transition-shadow">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge>{post.category}</Badge>
                            <Badge variant="secondary">Featured</Badge>
                          </div>
                          <CardTitle className="text-2xl lg:text-3xl">{post.title}</CardTitle>
                          <CardDescription className="text-base">
                            {post.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                          </div>
                          <Button>
                            Read Full Article
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </CardContent>
                      </div>
                      <div className="lg:col-span-1">
                        <div className="h-64 lg:h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-primary/50" />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter(post => !post.featured)
                  .map((post, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-primary/50" />
                      </div>
                      <CardHeader>
                        <Badge className="w-fit">{post.category}</Badge>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <CardDescription>
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <Button variant="outline" className="w-full">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get the latest plumbing tips, seasonal advice, and maintenance reminders delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No spam, unsubscribe anytime. Monthly tips and seasonal reminders only.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">Popular Topics</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Seasonal Maintenance</h3>
                  <ul className="space-y-2 opacity-90 text-sm">
                    <li>• Winter pipe protection</li>
                    <li>• Spring plumbing checkups</li>
                    <li>• Summer water conservation</li>
                    <li>• Fall preparation tips</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">DIY Guides</h3>
                  <ul className="space-y-2 opacity-90 text-sm">
                    <li>• Basic drain cleaning</li>
                    <li>• Toilet troubleshooting</li>
                    <li>• Faucet maintenance</li>
                    <li>• When to call pros</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Money-Saving Tips</h3>
                  <ul className="space-y-2 opacity-90 text-sm">
                    <li>• Water-efficient upgrades</li>
                    <li>• Preventing costly repairs</li>
                    <li>• Energy-saving water heaters</li>
                    <li>• Rebates and incentives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Professional Help?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              While our blog provides helpful tips, some plumbing issues require professional expertise. Don't hesitate to call us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Schedule Service
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/emergency-plumbing">
                  Emergency Service
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;