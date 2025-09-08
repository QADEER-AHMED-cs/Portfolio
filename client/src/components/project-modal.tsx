import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, FileText, X } from "lucide-react";

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

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const handleExternalLink = (url?: string) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex justify-between items-start">
                <DialogTitle className="text-2xl font-bold pr-8">
                  {project.title}
                </DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  data-testid="close-modal"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              {/* Project Image */}
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge>{project.category}</Badge>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.details.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {project.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className={project.category === "AI/ML" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  onClick={() => handleExternalLink(project.details.githubUrl)}
                  data-testid="github-button"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                
                {project.details.liveUrl && (
                  <Button 
                    variant="outline"
                    onClick={() => handleExternalLink(project.details.liveUrl)}
                    data-testid="live-demo-button"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                )}
                
                {project.details.demoUrl && (
                  <Button 
                    variant="outline"
                    onClick={() => handleExternalLink(project.details.demoUrl)}
                    data-testid="demo-button"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Research Paper
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
