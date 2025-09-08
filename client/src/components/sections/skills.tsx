import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Code, Smartphone, Brain, Database, Wrench, Users } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: { name: string; level: number }[] | string[];
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "text-primary",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
      ],
    },
    {
      title: "Web & Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      color: "text-accent",
      skills: [
        { name: "React Native", level: 88 },
        { name: "HTML/CSS", level: 92 },
        { name: "React.js", level: 85 },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      color: "text-primary",
      skills: [
        { name: "Deep Learning", level: 85 },
        { name: "NLP", level: 82 },
        { name: "Computer Vision", level: 80 },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "text-accent",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 80 },
        { name: "SQLite", level: 85 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      color: "text-primary",
      skills: ["Git/GitHub", "VS Code", "Jupyter", "Power BI", "Eclipse", "Canva"],
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      color: "text-accent",
      skills: ["Problem-Solving", "Team Collaboration", "Time Management", "Communication"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-primary/6 to-accent/6 rounded-full opacity-40" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-accent/6 to-primary/6 rounded-full opacity-40" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-card via-card/95 to-card/90 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/20"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${category.color === "text-primary" ? "bg-gradient-to-r from-primary/20 to-primary/10" : "bg-gradient-to-r from-accent/20 to-accent/10"} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <div className={category.color}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={typeof skill === "string" ? skill : skill.name}>
                    {typeof skill === "string" ? (
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${category.color === "text-primary" ? "bg-primary" : "bg-accent"} mr-3`} />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ) : (
                      <div className="skill-item">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className={`text-sm ${category.color}`}>{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
