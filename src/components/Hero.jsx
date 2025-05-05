import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen pt-24 flex items-center bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Text Content */}
          <motion.p
            className="text-emerald-600 font-semibold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Raiza
          </motion.h1>

          <motion.div
            className="overflow-hidden h-12 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{
                y: [-40, -80, -120, 0],
                transition: {
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }}
            >
              <div className="h-10 flex items-center justify-center text-2xl md:text-3xl font-medium text-emerald-600">
                UI Designer
              </div>
              <div className="h-10 flex items-center justify-center text-2xl md:text-3xl font-medium text-emerald-600">
                Layout Artist
              </div>
              <div className="h-10 flex items-center justify-center text-2xl md:text-3xl font-medium text-emerald-600">
                UI Designer
              </div>
              <div className="h-10 flex items-center justify-center text-2xl md:text-3xl font-medium text-emerald-600">
                Layout Artist
              </div>
              {/* <div className="h-10 flex items-center justify-center text-2xl md:text-3xl font-medium text-emerald-600">
                Visual Artist
              </div>
              <div className="h-10 flex items-center justify-center text-2xl md:text-3xl font-medium text-emerald-600">
                Creative Thinker
              </div> */}
            </motion.div>
          </motion.div>

          <motion.p
            className="text-zinc-600 mb-12 max-w-xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Designing user-friendly interfaces for web and mobile platforms.
          </motion.p>

          {/* Animated underline separator */}
          <motion.div
            className=""
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 1.2, duration: 1 }}
          />

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
           

            <motion.a
              href="#projects"
              className="px-6 py-2 border-2 border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
          </motion.div>

          {/* Animated scroll indicator */}
          {/* <motion.div
            className="mt-16 flex items-center gap-2 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <span className="text-zinc-500">Scroll for more</span>
            <motion.div
              animate={{
                y: [0, 5, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                },
              }}
            >
              <ChevronDown size={20} className="text-emerald-600" />
            </motion.div>
          </motion.div> */}

          {/* Decorative floating elements */}
          <motion.div
            className="absolute top-20 left-16 w-12 h-12 rounded-full bg-emerald-200 opacity-50"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute bottom-32 right-24 w-16 h-16 rounded-full bg-teal-200 opacity-50"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute top-40 right-40 w-8 h-8 rounded-full bg-green-200 opacity-50"
            animate={{
              y: [0, -10, 0],
              x: [0, -10, 0],
              transition: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};
