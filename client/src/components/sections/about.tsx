import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function AboutSection() {
  const handleDownloadCV = () => {
    // In a real implementation, this would trigger a download
    // You would replace this with actual CV file path
    window.open("#", "_blank");
  };

  const stats = [
    { label: "Location", value: "Karachi, Pakistan" },
    { label: "Education", value: "BS Computer Science" },
    { label: "Experience", value: "3+ Years" },
    { label: "Projects", value: "10+ Completed" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern developer workspace with code on multiple monitors"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Passionate Technology Problem Solver</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Computer Science graduate with hands-on experience in mobile and web application development, AI, machine learning, and software quality assurance. Skilled in problem-solving, agile collaboration, and end-to-end project execution. Passionate about leveraging technology to solve real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-primary mb-2">{stat.label}</h4>
                  <p className="text-muted-foreground">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={handleDownloadCV}
              className="bg-accent hover:bg-accent/90"
              data-testid="download-cv-button"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
