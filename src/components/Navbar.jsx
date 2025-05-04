import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.getElementById("mobile-menu");
      if (
        menuOpen &&
        nav &&
        !nav.contains(event.target) &&
        !event.target.closest("button")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const navItems = [
    { name: "Home", id: "" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Blogs", id: "blogs" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-transparent px-4 lg:px-16 py-4">
      <nav className="rounded-lg bg-fav/45 backdrop-blur-md max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="" className="text-3xl font-bold font-poppins text-white">
            ziara
          </a>
        </motion.div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-300 hover:text-white focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.div animate={menuOpen ? "open" : "closed"} initial={false}>
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="hidden md:flex space-x-8"
        >
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`#${item.id}`}
                className={`text-lg font-inter ${
                  activeSection === item.id
                    ? "text-white font-medium"
                    : "text-white hover:text-cyan-300"
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-fav/75 backdrop-blur-md rounded-b-lg mx-4 lg:mx-16 overflow-hidden"
          >
            <motion.ul
              className="py-4 px-6"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { stiffness: 1000, velocity: -100 },
                      },
                    },
                    closed: {
                      y: 20,
                      opacity: 0,
                      transition: {
                        y: { stiffness: 1000 },
                      },
                    },
                  }}
                  className="border-b border-cyan-800/30 last:border-b-0"
                >
                  <a
                    href={`#${item.id}`}
                    className={`block py-3 px-2 transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-white font-medium translate-x-2"
                        : "text-cyan-200 hover:text-white hover:translate-x-2"
                    }`}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMenuOpen(false);
                    }}
                  >
                    <span className="text-cyan-400 mr-2">0{index + 1}.</span>{" "}
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
