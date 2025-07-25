import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Brain, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Database,
  Globe,
  Zap
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "MERN Stack Development",
      description: "Full-stack web applications using MongoDB, Express.js, React, and Node.js with modern best practices.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Development",
      description: "Intelligent solutions using machine learning, natural language processing, and computer vision.",
      technologies: ["Python", "TensorFlow", "OpenAI", "LangChain", "PyTorch"],
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android with native performance.",
      technologies: ["React Native", "Flutter", "Expo", "Firebase", "Redux"],
      gradient: "from-primary to-secondary"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces and experiences that convert visitors into customers.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
      gradient: "from-secondary to-primary"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your brand and reach your target audience.",
      technologies: ["SEO", "Google Ads", "Analytics", "Social Media", "Content Strategy"],
      gradient: "from-primary-glow to-secondary-glow"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Architecture",
      description: "Scalable server-side solutions with microservices, APIs, and cloud infrastructure.",
      technologies: ["AWS", "Docker", "GraphQL", "PostgreSQL", "Redis"],
      gradient: "from-secondary-glow to-primary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-section-bg relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="bg-primary rounded-full w-2 h-2"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            🛠️ What I Do
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">Services & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, I provide end-to-end solutions that help businesses 
            thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-glow transition-all duration-500 cursor-pointer glass border-primary/10 fade-in-delay-${index % 3 + 1}`}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs bg-muted/50 border-primary/20 hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Globe className="h-6 w-6" />, number: "50+", label: "Projects Completed" },
            { icon: <Zap className="h-6 w-6" />, number: "5+", label: "Years Experience" },
            { icon: <Code2 className="h-6 w-6" />, number: "20+", label: "Technologies" },
            { icon: <TrendingUp className="h-6 w-6" />, number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center fade-in-delay-2">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold hero-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;