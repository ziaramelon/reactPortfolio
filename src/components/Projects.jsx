import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import app from "../assets/appThumb.png";
import appView from "../assets/appView.png";
import eco from "../assets/ecovariety.png";
import ccs from "../assets/ccs.png";
import hatch from "../assets/hatch.png";
import pokemon from "../assets/pokemon.png";
import portfo from "../assets/portfo.png";
import table from "../assets/table.png";
import todo from "../assets/todo.png";
import pokeThumb from "../assets/pokeThumb.png";
import hatchThumb from "../assets/hatchThumb.png";
import portThumb from "../assets/portThumb.png";
import ecoThumb from "../assets/ecoThumb.png";
import tableThumb from "../assets/tableThumb.png";


// ImageModal Component
const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-h-screen bg-white rounded-lg overflow-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors z-10"
          >
            <X size={24} className="text-zinc-800" />
          </button>

          <div className="w-full">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full object-contain max-h-max"
            />
          </div>

          <div className="p-4 bg-white">
            <h3 className="text-xl font-bold text-zinc-800">{imageAlt}</h3>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ProjectCard Component
const ProjectCard = ({ project, onImageClick }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div
        className="relative overflow-hidden cursor-pointer"
        onClick={() => onImageClick(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-zinc-800 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-emerald-600 font-medium mb-4">
          {project.role}
        </p>
        <div className="flex space-x-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs font-medium bg-zinc-100 text-zinc-800 rounded-full flex items-center gap-1 hover:bg-zinc-200 transition-colors"
            >
              <Github size={12} /> GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-600 rounded-full flex items-center gap-1 hover:bg-emerald-100 transition-colors"
            >
              <ExternalLink size={12} /> Live view
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Projects Component
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Mini Pokedex",
      role: "Frontend Developer / UI Designer",
      image: pokemon,
      thumb: pokeThumb,
      github: "https://github.com/ziaramelon/minipokedex.git",
      liveLink: null,
    },
    {
      id: 2,
      title: "Reactjs Todolist",
      role: "Frontend Developer / UI Designer",
      image: todo,
      thumb: todo,
      github: "https://github.com/ziaramelon/myReactTodolist.git",
      liveLink: "https://reacttodolistproj.netlify.app/",
    },
    {
      id: 3,
      title: "Hatchify",
      role: "Frontend Developer / UI Designer",
      image: hatch,
      thumb: hatchThumb,
      github: "https://github.com/ziaramelon/Hatchify.git",
      liveLink: null,
    },
    {
      id: 4,
      title: "CCS Advising System",
      role: "System Analyst & Project Manager",
      image: ccs,
      thumb: ccs,
      github: "https://github.com/ziaramelon/ccsadvisingSE.git",
      liveLink: null,
    },
    {
      id: 5,
      title: "Ecovariety",
      role: "UI/UX Designer",
      image: eco,
      thumb: ecoThumb,
      github: "https://github.com/larenzzx/Ecovariety.git",
      liveLink: null,
    },
    {
      id: 6,
      title: "Machine Learning",
      role: "UI/UX Design",
      image: table,
      thumb: tableThumb,
      github: "#",
      liveLink: null,
    },
    {
      id: 7,
      title: "CrimsonQuest",
      role: "UI/UX Design",
      image: app,
      thumb: appView,
      github: "https://github.com/larenzzx/CrimsonQuest.git",
      liveLink: null,
    },
    {
      id: 8,
      title: "Portfolio Website",
      role: "Individual Project",
      image: portfo,
      thumb: portThumb,
      github: "#",
      liveLink: null,
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
    <div id="projects" className="pt-24 pb-12 bg-zinc-50">
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
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} onImageClick={openModal} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        imageSrc={selectedProject?.thumb}
        imageAlt={selectedProject?.title}
      />
    </div>
  );
};
