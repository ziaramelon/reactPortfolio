import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Pokemon Battle & Todolist: IT 142 Weekly Project",
      period: "April 2025",
      description:
        "Build a Pokemon game and Todolist using Reactjs and tailwind css.",
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Capstone Project: Hatchify (Best in Capstone)",
      period: "Sep - Dec 2024",
      description:
        "Built user-friendly and mobile-responsive dashboards for real-time monitoring of egg incubation status and environmental data.  Focused on clarity and usability by applying frontend practices and ensuring smooth interaction in mobile devices. Integrated clean, intuitive charts and UI components to display temperature, humidity, and notifications effectively.",
    },
    {
      id: 3,
      role: "System Analyst & Project Manager",
      company: "Software Engineering Project",
      period: "2024",
      description:
        "Led the analysis of academic advising workflows to identify system requirements and streamline processes for CCS students and advisers. Oversaw the development timeline, coordinated team tasks, and ensured milestones were met from design to deployment.",
    },
    {
      id: 4,
      role: "UI Designer",
      company: "E-commerce Website",
      period: "Jan - April 2024",
      description:
        "Designed a calming and green-themed UI that reflects Ecovariety’s identity as a plant sanctuary store. Ensured smooth performance and accessibility across web and mobile devices, with interactive features for plant lovers.",
    },
    {
      id: 5,
      role: "UI Designer",
      company: "Machine Learning Project",
      period: "2024",
      description:
        "Designed a customized periodic table of elements with hover effects that display each element's properties, enhancing educational engagement and user interaction.",
    },
    {
      id: 6,
      role: "UI Designer",
      company: "Application Development Project",
      period: "August 2023 - 2024",
      description:
        "Designed an interface that allows users to navigate the WMSU campus map easily, starting from Campus A and B gates. Created a custom, sketch-type map that reflects the actual structural layout of WMSU for better spatial understanding.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50"
      id="experience"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mb-6"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Experience Navigation */}
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-md p-6">
              {/* <h3 className="text-xl font-semibold text-zinc-800 mb-6">
                Career Path
              </h3> */}

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`mb-4 cursor-pointer p-4 rounded-lg transition-colors ${
                    activeExperience === index
                      ? "bg-emerald-100 border-l-4 border-emerald-500"
                      : "hover:bg-emerald-50"
                  }`}
                  onClick={() => setActiveExperience(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-zinc-800">{exp.role}</p>
                      <p className="text-sm text-zinc-500">{exp.company}</p>
                    </div>
                    {activeExperience === index && (
                      <ChevronRight size={20} className="text-emerald-500" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Details */}
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <motion.div
                key={activeExperience}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-800">
                      {experiences[activeExperience].role}
                    </h3>
                    <p className="text-emerald-600 font-medium">
                      {experiences[activeExperience].company}
                    </p>
                  </div>
                  <div className="flex items-center bg-emerald-100 px-4 py-2 rounded-full">
                    <Calendar size={16} className="text-emerald-600 mr-2" />
                    <span className="text-sm text-emerald-700">
                      {experiences[activeExperience].period}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-600 mb-8">
                  {experiences[activeExperience].description}
                </p>

                {/* <div>
                  <h4 className="flex items-center text-lg font-semibold text-zinc-800 mb-4">
                    <Briefcase size={18} className="text-emerald-500 mr-2" />
                    Key Achievements
                  </h4>

                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-3"
                  >
                    {experiences[activeExperience].achievements.map(
                      (achievement, i) => (
                        <motion.li
                          key={i}
                          variants={itemVariants}
                          className="flex items-start"
                        >
                          <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-emerald-400"></div>
                          <p className="text-zinc-600">{achievement}</p>
                        </motion.li>
                      )
                    )}
                  </motion.ul>
                </div> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
