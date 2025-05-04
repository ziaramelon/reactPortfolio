import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import poke from "../assets/poke.png";
import todo from "../assets/todo.png";
import ecom from "../assets/ecom.jpg";
import crimson from "../assets/crimson.jpg";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "IT145: Pokemon Battle",
      category: ["ui", "ux"],
      image: poke,
      tags: ["ReactJS", "TailwindCSS"],
      link: "https://github.com/ziaramelon/minipokedex.git",
    },
    {
      id: 2,
      title: "IT145: Todolist",
      image: todo,
      description:
        "Comprehensive user research and testing for a wellness application targeting busy professionals.",
      tags: ["ReactJS", "TailwindCSS"],
      link: "https://reacttodolistproj.netlify.app/",
    },
    {
      id: 3,
      title: "E-commerce Website Redesign",
      image: todo,
      tags: ["ReactJS", "TailwindCSS"],
      link: "https://reacttodolistproj.netlify.app/",
    },
    {
      id: 4,
      title: "",
      category: ["visual"],
      image: "/api/placeholder/600/400",
      tags: ["", "", ""],
      link: "#project-link",
    },
    {
      id: 5,
      title: "",
      category: ["ui", "ux"],
      image: "/api/placeholder/600/400",
      tags: ["", "", ""],
      link: "#project-link",
    },
    {
      id: 6,
      title: "",
      category: ["ui", "visual"],
      image: "/api/placeholder/600/400",
      tags: ["", "", ""],
      link: "#project-link",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-zinc-600 max-w-lg mx-auto">
            A collection of my finest work, showcasing my expertise in UI/UX
            design and visual creativity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-2">
                      <motion.a
                        href={project.link}
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-emerald-600 hover:bg-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-800 mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
