import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";

// Main App Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-fav text-cyan-100 font-sans">
      <Navbar
        // activeSection={activeSection}
        // setActiveSection={setActiveSection}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
    </div>
  );
};





// Skills Section Component
const SkillsSection = () => {
  const skills = [
    { name: "Figma", icon: "🎨", category: "Design" },
    { name: "Adobe XD", icon: "🖌️", category: "Design" },
    { name: "HTML5", icon: "📝", category: "Development" },
    { name: "CSS3", icon: "🎭", category: "Development" },
    { name: "JavaScript", icon: "📊", category: "Development" },
    { name: "React", icon: "⚛️", category: "Development" },
    { name: "UX Research", icon: "🔍", category: "Research" },
    { name: "Wireframing", icon: "📐", category: "Design" },
    { name: "Prototyping", icon: "📱", category: "Design" },
    { name: "Responsive Design", icon: "📲", category: "Design" },
    { name: "User Testing", icon: "👥", category: "Research" },
    { name: "Sketch", icon: "✏️", category: "Design" },
  ];

  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-8 bg-emerald-800 bg-opacity-30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-cyan-200 mb-6">Skills</h2>
          <p className="text-xl max-w-2xl mx-auto">
            My technical toolkit and areas of expertise
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={category} className="mb-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-medium text-cyan-200 mb-6"
              >
                {category}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, staggerChildren: 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              >
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-emerald-700 bg-opacity-40 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
                    >
                      <span className="text-3xl mb-3">{skill.icon}</span>
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
