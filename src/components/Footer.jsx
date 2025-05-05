import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white">
      {/* Top Wave Divider */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50">
        <svg
          className="w-full h-16 md:h-24"
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C320,96 640,96 960,48 C1280,0 1440,48 1440,48 L1440,96 L0,96 L0,0 Z"
            fill="#18181B"
          />
        </svg>
      </div>

      {/* Simplified Footer Content - Just Copyright */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="flex justify-center items-center text-zinc-400 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          &copy; {currentYear} Raiza Beligolo. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};
