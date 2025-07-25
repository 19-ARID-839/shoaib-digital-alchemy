import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Download, Award, BookOpen, Coffee } from 'lucide-react';
import profileHero from '@/assets/profile-hero.jpg';

const AboutSection = () => {
  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "Node.js & Express", level: 90 },
    { name: "MongoDB & PostgreSQL", level: 85 },
    { name: "Python & AI/ML", level: 88 },
    { name: "React Native", level: 82 },
    { name: "UI/UX Design", level: 87 },
    { name: "Digital Marketing", level: 80 },
    { name: "Cloud & DevOps", level: 78 }
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Solutions Architect",
      description: "AWS Certified with expertise in cloud infrastructure"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Tech Mentor",
      description: "Mentored 50+ developers in modern web technologies"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Coffee Enthusiast",
      description: "Fueled by great coffee and challenging problems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-glow rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            👨‍💻 About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">Get to Know Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate developer with a mission to create impactful digital solutions 
            that make a difference in people's lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Achievements */}
          <div className="fade-in">
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={profileHero} 
                  alt="Muhammad Shoaib" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-primary text-white px-6 py-2 text-sm font-medium border-0">
                  5+ Years Experience
                </Badge>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="glass border-primary/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <div className="text-white">
                          {achievement.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Story and Skills */}
          <div className="fade-in-delay-1">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 hero-text">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi there! I'm Muhammad Shoaib, a passionate Lead Developer with over 5 years of experience 
                  in creating innovative digital solutions. My journey began with a curiosity about how 
                  technology can solve real-world problems.
                </p>
                <p>
                  I specialize in the MERN stack, AI development, and mobile applications. What sets me apart 
                  is my ability to bridge the gap between technical excellence and business objectives, ensuring 
                  that every project delivers measurable value.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest AI technologies, mentoring aspiring 
                  developers, or planning the next big project that will make a positive impact.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 hero-text">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-primary transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:bg-primary/10"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;