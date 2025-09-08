import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectModal } from "@/components/project-modal";
import { ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  details: {
    fullDescription: string;
    features: string[];
    challenges?: string[];
    results?: string[];
    githubUrl?: string;
    liveUrl?: string;
    demoUrl?: string;
  };
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "project1",
      title: "Multimodal Suicide Risk Detection",
      description: "Advanced AI system using NLP and Computer Vision to detect suicide risk through text and image analysis.",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "AI/ML",
      technologies: ["Deep Learning", "Python", "NLP", "Computer Vision", "TensorFlow"],
      details: {
        fullDescription: "Developed an innovative AI-based system that combines Natural Language Processing and Computer Vision techniques to detect suicide risk indicators from multiple data modalities.",
        features: [
          "Multimodal data analysis (text and images)",
          "Deep learning model for risk classification",
          "Real-time processing capabilities",
          "High accuracy suicide risk detection"
        ]
      }
    },
    {
      id: "project2",
      title: "University Event App",
      description: "React Native mobile application for university event management with real-time updates and user interaction.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Mobile",
      technologies: ["React Native", "Expo", "JavaScript", "REST API", "AsyncStorage"],
      details: {
        fullDescription: "A comprehensive mobile application designed for university event management, featuring user registration, event discovery, and real-time updates with both light and dark mode support.",
        features: [
          "Event registration and management",
          "Advanced search and filtering",
          "Dark mode toggle",
          "Real-time API integration",
          "Push notifications",
          "User profile management"
        ]
      }
    },
    {
      id: "project3",
      title: "Brain Tumor Detection & Segmentation",
      description: "Advanced computer vision system using YOLOv11 and SAM2 for accurate brain tumor detection in MRI scans.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Computer Vision",
      technologies: ["YOLOv11", "SAM2", "Computer Vision", "Python", "OpenCV"],
      details: {
        fullDescription: "Advanced computer vision project utilizing state-of-the-art YOLOv11 for detection and SAM2 for segmentation to accurately identify and outline brain tumors in MRI scans.",
        features: [
          "High-accuracy tumor detection",
          "Precise tumor segmentation",
          "Real-time MRI scan analysis",
          "Medical imaging preprocessing",
          "Visualization of results",
          "Batch processing capabilities"
        ]
      }
    }
  ];

  return (
    <>
      <section id="projects" className="py-20 px-6 bg-muted/20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-primary/6 to-accent/6 rounded-full opacity-30" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-r from-accent/6 to-primary/6 rounded-full opacity-30" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in AI, web development, and mobile applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="cursor-pointer transition-all hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-card via-card/95 to-card/90 border border-primary/10 hover:border-primary/20"
                  onClick={() => setSelectedProject(project)}
                  data-testid={`project-card-${project.id}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge variant={project.category === "AI/ML" ? "default" : project.category === "Mobile" ? "secondary" : "outline"}>
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-primary hover:text-primary/80">
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
