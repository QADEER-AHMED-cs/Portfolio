import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export function FooterSection() {
  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/qadeer-ahmed-24310627b",
      color: "bg-primary/10 hover:bg-primary hover:text-primary-foreground",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/QADEER-AHMED-cs",
      color: "bg-accent/10 hover:bg-accent hover:text-accent-foreground",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:qadeerhussain385@gmail.com",
      color: "bg-primary/10 hover:bg-primary hover:text-primary-foreground",
    },
  ];

  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Qadeer Ahmed
            </h3>
            <p className="text-muted-foreground">AI & Software Developer | Data Analyst</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-testid={`footer-social-${index}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground text-sm">
              © 2024 Qadeer Ahmed. All rights reserved. Built with React.js & TailwindCSS.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
