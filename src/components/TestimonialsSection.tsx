import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content: "Muhammad delivered exceptional results on our e-commerce platform. His technical expertise in the MERN stack and attention to detail exceeded our expectations. The project was completed on time and within budget.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "David Chen",
      role: "Product Manager",
      company: "FinanceFlow",
      content: "Working with Muhammad on our AI-powered analytics dashboard was a game-changer. His deep understanding of machine learning and user experience design helped us create a product that our customers love.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder",
      company: "MobileFirst",
      content: "The mobile app Muhammad built for us has been instrumental in our growth. His expertise in React Native and UI/UX design resulted in an app that's both beautiful and highly functional. Highly recommended!",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "Michael Thompson",
      role: "Marketing Director",
      company: "GrowthCorp",
      content: "Muhammad's digital marketing strategies transformed our online presence. His data-driven approach and technical background gave us insights we never had before. Our conversion rates increased by 150%.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Lisa Park",
      role: "CTO",
      company: "InnovateAI",
      content: "Muhammad's AI development skills are outstanding. He built a custom NLP solution that automated 80% of our content moderation. His code quality and documentation are top-notch.",
      rating: 5,
      avatar: "LP"
    },
    {
      name: "James Wilson",
      role: "Business Owner",
      company: "LocalBiz",
      content: "From design to development to marketing, Muhammad provided a complete solution for our business. His full-stack expertise and understanding of business needs make him a valuable partner.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-section-bg relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="flex items-center justify-center h-full">
          <Quote className="w-96 h-96 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            💬 Testimonials
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">What Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what some of my amazing clients 
            have to say about working together on their projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-glow transition-all duration-500 glass border-primary/10 fade-in-delay-${index % 3 + 1}`}
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="fade-in-delay-1">
              <div className="text-3xl font-bold hero-text mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="fade-in-delay-2">
              <div className="text-3xl font-bold hero-text mb-2">5.0★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="fade-in-delay-3">
              <div className="text-3xl font-bold hero-text mb-2">100%</div>
              <div className="text-muted-foreground">Project Success</div>
            </div>
            <div className="fade-in-delay-1">
              <div className="text-3xl font-bold hero-text mb-2">24h</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;