import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectMern from "@/assets/project-mern.jpg";
import projectAi from "@/assets/project-ai.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectDesign from "@/assets/project-design.jpg";
import fig from '@/assets/fig.jpeg';
import rmp from '@/assets/rmp.jpeg';
import sds from '@/assets/sds.jpeg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Forex Trading & Brokerage Platform",
      description:
        "All in one plateform for forex and crypto trader, it offers realtime market anylsis, trading education and account management for both individual trader and introducing broker.",
      image: fig,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Word Press"],
      category: "Web Development",
      gradient: "from-primary to-primary-glow",
    },
    {
      title: "Jarvis-AI Powered Personal Assistant",
      description:
        "Jarvis, an advance AI Powerd personal assistant, inspired by Ironman's J.A.R.V.I.S. Desiged to listen, understand and respond to user voice/text commands.",
      image: rmp,
      technologies: ["Python", "OpenAI", "FastAPI", "React", "PostgreSQL"],
      category: "AI Development",
      gradient: "from-secondary to-secondary-glow",
    },
    {
      title: "SeenaDsaviour",
      description:
        "A powerful cross-platform mobile application for schools and colleges, designed to streamline LMS operations by tracking student performance, monitoring activities, and managing teacher feedback—all in one place.",
      image: sds,
      technologies: [
        "React Native",
        "Firebase",
        "Plaid API",
        "Redux",
        "TypeScript",
      ],
      category: "Mobile Development",
      gradient: "from-primary to-secondary",
    },
    {
      title: "SaaS Dashboard Design",
      description:
        "Modern UI/UX design system for enterprise analytics platform. Includes dark mode, responsive design, data visualizations, and accessibility features.",
      image: projectDesign,
      technologies: ["Figma", "Design System", "Prototyping", "User Testing"],
      category: "UI/UX Design",
      gradient: "from-secondary to-primary",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-glow rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            💼 Portfolio
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover some of my recent work that showcases expertise across
            different technologies and industries. Each project tells a story of
            innovation and technical excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-glow transition-all duration-500 overflow-hidden glass border-primary/10 fade-in-delay-${
                (index % 2) + 1
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-50 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Project Links Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <Button
                    size="icon"
                    variant="secondary"
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    <Github className="h-4 w-4" />
                  </Button> */}
                  <a href="https://www.upwork.com/freelancers/~015b2c8eb8b2b36ddc?companyReference=1281633502634418177&mp_source=share" target="_blank" rel="noopener noreferrer">
                     <Button
                    size="icon"
                    variant="secondary"
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  </a>
                 
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`bg-gradient-to-r ${project.gradient} text-white border-0`}
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs bg-muted/50 border-primary/20 hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button> */}
                  <a href="https://www.upwork.com/freelancers/~015b2c8eb8b2b36ddc?companyReference=1281633502634418177&mp_source=share" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="bg-gradient-primary hover:shadow-primary transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a href="https://www.roxtechhub.com/" target="_blank" rel="noopener noreferrer">
            <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-3"
          >
            View All Projects
          </Button>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
