import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ExperienceSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Experience data
  const experiences = [
    {
      period: "Aug 2023 - Dec 2023",
      title: "UI Designer",
      company: "Crimsonquest",
      responsibilities: ["Design theheh", "hhhh", "popo"],
    },
    {
      period: "January 2024 - April 2024",
      title: "UI Designer",
      company: "EcoVariety",
      responsibilities: ["Design theheh", "hhhh", "popo"],
      additionalRoles: [
        {
          title: "UI Designer",
          company: "Machine learning",
          responsibilities: ["Design theheh", "hhhh", "popo"],
        },
        {
          title: "System Analyst & Project Manager",
          company: "Raffin Innovations, Inc.",
          responsibilities: ["Design theheh", "hhhh", "popo"],
        },
      ],
    },
    {
      period: "September 2024 - December 2024",
      title: "Frontend Developer",
      company: "Herchify",
      responsibilities: ["Design theheh", "hhhh", "popo"],
    },
    {
      period: "March 2025 - April 2025",
      title: "Frontend Developer",
      company: "Pokemon",
      responsibilities: ["Design theheh", "hhhh", "popo"],
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 px-4 md:px-20 bg-off">
      <motion.div
        className="max-w-6xl mx-auto"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-slate-800 mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-6 px-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary/10 rounded-lg p-6 shadow-sm border border-slate-100"
            >
              <h3 className="text-slate-500 text-sm font-medium mb-2">
                {exp.period}
              </h3>

              <h4 className="text-slate-800 text-lg font-bold">{exp.title}</h4>

              <p className="text-slate-600 mb-4">{exp.company}</p>

              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Additional roles in the same time period */}
              {exp.additionalRoles && (
                <div className="mt-6 space-y-6 pt-4 border-t border-slate-100">
                  {exp.additionalRoles.map((role, roleIdx) => (
                    <div key={roleIdx} className="mt-4">
                      <h4 className="text-slate-800 text-lg font-bold">
                        {role.title}
                      </h4>

                      <p className="text-slate-600 mb-4">{role.company}</p>

                      <ul className="list-disc pl-5 text-slate-700 space-y-1">
                        {role.responsibilities.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
