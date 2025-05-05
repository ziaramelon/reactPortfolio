import { motion } from "framer-motion";
import { Code, PenTool } from "lucide-react";
import ad from "../assets/adobe-xd.svg";
import canva from "../assets/canva.svg";
import css from "../assets/css.svg";
import html from "../assets/html5.svg";
import light from "../assets/lightroom.svg";
import photo from "../assets/photoshop.svg";
import react from "../assets/react_light.svg";
import tailwind from "../assets/tailwindcss.svg";
import illus from "../assets/illustrator.svg";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Design Tools",
      icon: <PenTool className="text-emerald-500" size={24} />,
      skills: [
        {
          name: "Photoshop",
          logo: photo,
        },
        {
          name: "Adobe Illustrator",
          logo: ad,
        },
        {
          name: "XD",
          logo: illus,
        },
        {
          name: "Canva",
          logo: canva,
        },
        {
            name: "lr",
            logo: light,
          },
      ],
    },
    {
      category: "Frontend Development",
      icon: <Code className="text-emerald-500" size={24} />,
      skills: [
        {
          name: "HTML5",
          logo: html,
        },
        {
          name: "CSS3",
          logo: css,
        },
        {
          name: "react",
          logo: react,
        },
        {
          name: "Tailwind CSS",
          logo: tailwind,
        },
      ],
    },
  ];

  return (
    <div
      className="py-24 bg-gradient-to-tl from-emerald-50 to-teal-50"
      id="skills"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <motion.p
            className="text-zinc-600 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Here are my key areas of expertise, organized by category.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * catIndex }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-emerald-100 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-zinc-800">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center p-6 aspect-square"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.03 }}
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-4 rounded-full text-emerald-600 font-bold text-xl">
                      <img src={skill.logo} alt="" />
                      
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
