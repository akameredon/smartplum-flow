import { Star, Quote } from 'lucide-react';
import happyCustomers from '@/assets/happy-customers.jpg';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Downtown District",
    rating: 5,
    text: "SmartPlum saved the day when our water heater failed on a Sunday morning. They were here within an hour and had it fixed professionally. Excellent service!",
    service: "Emergency Water Heater Repair"
  },
  {
    name: "Mike Chen",
    location: "Westside",
    rating: 5,
    text: "Outstanding work on our bathroom renovation. The team was professional, clean, and completed everything on time. The quality exceeded our expectations.",
    service: "Bathroom Remodeling"
  },
  {
    name: "Linda Rodriguez",
    location: "Eastside",
    rating: 5,
    text: "Called for a leak detection service and they found the issue quickly with their advanced equipment. Fair pricing and honest recommendations. Highly recommend!",
    service: "Leak Detection"
  },
  {
    name: "David Thompson",
    location: "Northside",
    rating: 5,
    text: "Professional drain cleaning service that solved our recurring clog problem. The technician explained everything clearly and provided helpful maintenance tips.",
    service: "Drain Cleaning"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say 
            about their SmartPlum experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth">
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Photo Section */}
        <div className="bg-white rounded-2xl p-8 shadow-medium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Join Thousands of Satisfied Customers
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                SmartPlum has been serving the community for over 15 years, building 
                lasting relationships through quality work and exceptional service.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Five-Star Reviews</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Customer Retention</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="w-10 h-10 bg-primary/20 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  Join our community of happy customers
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={happyCustomers} 
                alt="Happy SmartPlum customers in their beautiful home"
                className="rounded-xl shadow-medium w-full"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-accent fill-current" />
                  <span className="font-semibold text-foreground">4.9/5</span>
                </div>
                <div className="text-xs text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;