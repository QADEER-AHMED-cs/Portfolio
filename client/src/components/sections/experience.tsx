import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  details?: string;
}

export function ExperienceSection() {
  const education: TimelineItem[] = [
    {
      title: "BS Computer Science",
      organization: "IQRA University, Karachi",
      period: "2021 - 2025",
      description: "CGPA: 3.2",
      details: "Comprehensive study in computer science fundamentals, software engineering, artificial intelligence, and data structures."
    },
    {
      title: "Intermediate (Pre-Engineering)",
      organization: "BISE Sukkur",
      period: "2020",
      description: "Percentage: 78%",
      details: "Pre-engineering studies with focus on mathematics, physics, and chemistry."
    },
    {
      title: "Matric (Science)",
      organization: "BISE Sukkur",
      period: "2018",
      description: "Percentage: 77%",
      details: "Secondary school certificate with science subjects."
    }
  ];

  const projects: TimelineItem[] = [
    {
      title: "Multimodal Suicide Risk Detection",
      organization: "AI Research Project",
      period: "2024",
      description: "AI system using deep learning, NLP, and computer vision",
      details: "Developed advanced AI system using deep learning, NLP, and computer vision for suicide risk classification with high accuracy."
    },
    {
      title: "University Event App",
      organization: "Mobile Development",
      period: "2023",
      description: "React Native app for event management",
      details: "Built comprehensive React Native app for university event management with features like registration, search, and dark mode."
    },
    {
      title: "Brain Tumor Detection",
      organization: "Computer Vision Project",
      period: "2023",
      description: "YOLOv11 & SAM2 for medical imaging",
      details: "Implemented YOLOv11 and SAM2 for accurate brain tumor detection and segmentation in MRI scans."
    }
  ];

  const TimelineSection = ({ 
    items, 
    title, 
    icon, 
    colorClass 
  }: { 
    items: TimelineItem[], 
    title: string, 
    icon: React.ReactNode, 
    colorClass: string 
  }) => (
    <div>
      <h3 className="text-2xl font-bold mb-8 flex items-center">
        <div className={colorClass}>
          {icon}
        </div>
        {title}
      </h3>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={`${title}-${index}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className={`absolute left-2 top-2 w-4 h-4 rounded-full border-3 border-background ${colorClass.includes('primary') ? 'bg-primary' : 'bg-accent'}`} />
              
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <span className={`font-semibold text-sm ${colorClass.includes('primary') ? 'text-primary' : 'text-accent'}`}>
                      {item.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">{item.organization}</p>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  {item.details && (
                    <p className="text-muted-foreground text-sm">{item.details}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <TimelineSection
            items={education}
            title="Education"
            icon={<GraduationCap className="w-6 h-6 mr-3" />}
            colorClass="text-primary"
          />
          
          <TimelineSection
            items={projects}
            title="Key Projects"
            icon={<Briefcase className="w-6 h-6 mr-3" />}
            colorClass="text-accent"
          />
        </div>
      </div>
    </section>
  );
}
