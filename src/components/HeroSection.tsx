import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileHero from '@/assets/profile-hero.jpg';
// hero
const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
{/*           <div className="fade-in">
            <div className="flex items-center gap-3 mb-6">
              
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                <a href="https://www.upwork.com/freelancers/~015b2c8eb8b2b36ddc?companyReference=1281633502634418177&mp_source=share" target="_blank" rel="noopener noreferrer"
                  className="inline-block w-full h-full">
                 🚀 Available for Projects
                </a>
              </Badge>
            </div> */}
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Hi, I'm </span>
              <br />
              <span className="hero-text animate-glow">Muhammad</span>
              <br />
              <span className="hero-text animate-glow">Shoaib</span>
            </h1>
            
            <div className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
              <span className="hero-text">Full Stack & AI Expert</span>
              <br />
              <span>Building the future, one line of code at a time.</span>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Specialized in MERN Stack, AI Development, Mobile Apps, UI/UX Design, and Digital Marketing. 
              I create innovative solutions that drive business growth and user engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#projects')}
                className="bg-gradient-primary hover:shadow-primary transition-all duration-300 text-lg px-8 py-3"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground font-medium">Connect:</span>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="fade-in-delay-1 flex justify-center">
            <div className="relative hero-glow">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow animate-float">
                <img 
                  src={profileHero} 
                  alt="Muhammad Shoaib - Lead Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-delay-3">
          <button 
            onClick={() => scrollToSection('#services')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce group-hover:text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
