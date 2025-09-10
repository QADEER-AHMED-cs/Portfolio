import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Import the new profile image
import profilePic from "@/assets/IMG-20250620-WA0049.jpg";

const roles = [
  "AI Developer",
  "Web Developer",
  "Mobile App Developer",
  "Data Analyst",
  "Software Engineer"
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 80;
    const currentText = roles[currentRole];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRole((currentRole + 1) % roles.length);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentRole, displayText, isDeleting]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-100/20 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-teal-200/20 to-teal-400/20 rounded-full opacity-20 animate-bounce" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-teal-400/20 to-teal-200/20 rounded-full opacity-15 animate-pulse" />
      <div className="absolute bottom-60 right-10 w-24 h-24 bg-gradient-to-r from-gray-200/15 to-teal-200/15 rounded-full opacity-10 animate-bounce" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Picture */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-teal-500 bg-gradient-to-r from-teal-500 via-purple-500 to-purple-700 p-1 shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src={profilePic}
                  alt="Qadeer Ahmed - Professional Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center shadow-md animate-pulse">
              <span className="text-white text-base md:text-lg">👋</span>
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-teal-500 bg-clip-text text-transparent font-poppins"
        >
          Qadeer Ahmed
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 mb-6 font-open-sans"
        >
          Computer Science Graduate | AI & Software Developer | Data Analyst
        </motion.p>

        {/* Animated Typing Effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-teal-600 mb-8 h-12 flex items-center justify-center font-poppins"
        >
          <span className="border-r-2 border-teal-600 animate-pulse">
            {displayText}
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            data-testid="view-work-button"
            className="bg-gradient-to-r from-purple-700 to-teal-500 hover:from-purple-800 hover:to-teal-600 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-lg hover:scale-105"
          >
            View My Work ✨
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            data-testid="get-in-touch-button"
            className="border-2 border-teal-500 text-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-700 hover:text-white transition-all duration-300 rounded-lg hover:scale-105 shadow-md"
          >
            Get In Touch 🚀
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
