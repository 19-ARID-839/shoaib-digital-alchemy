import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  Clock,
  CheckCircle,
  Instagram,
} from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description:
        "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "shoaib@roxtechhub.com",
      href: "mailto:shoiab@roxtechhub.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+92 348 5275523",
      href: "https://wa.me/923485275523",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Downtown, Giga, Islamabad, PK",
      href: "#",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Response Time",
      value: "Within 6 hours",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/19-ARID-839",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/-malikshoaib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      color: "hover:text-blue-400",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      href: "https://x.com/shoaibmalik839?s=11",
      color: "hover:text-blue-400",
    },
    // {
    //   icon: <Instagram className="h-5 w-5" />,
    //   label: "Instagram",
    //   href: "https://www.instagram.com/malikshoaib_/",
    //   color: "hover:text-pink-400",   
    // }
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-section-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-glow rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <a
            href=" https://wa.me/923485275523"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
            >
              🚀 Let's Connect
            </Badge>
          </a>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">Let's Build Something Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to turn your ideas into reality? I'm here to help you create
            exceptional digital experiences that drive results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass border-primary/10 fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 hero-text">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                      className="bg-muted/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="bg-muted/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-muted/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    required
                    className="bg-muted/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    required
                    className="min-h-32 bg-muted/50 border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300 py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="fade-in-delay-1">
            <h3 className="text-2xl font-bold mb-6 hero-text">Get in Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities and collaborate on
              innovative projects. Whether you have a specific idea or just want
              to explore possibilities, let's start a conversation.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="glass border-primary/10 hover:shadow-glow transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <a
                      href={info.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <div className="text-white">{info.icon}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-lg bg-muted/50 border border-primary/20 flex items-center justify-center transition-all duration-300 hover:shadow-glow ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Why Work With Me */}
            <Card className="mt-8 glass border-primary/10">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4 hero-text">Why Work With Me?</h4>
                <div className="space-y-3">
                  {[
                    "5+ years of proven expertise",
                    "100% client satisfaction rate",
                    "6-hour response guarantee",
                    "End-to-end project delivery",
                  ].map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
