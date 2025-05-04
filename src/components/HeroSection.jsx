import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import bg from "../assets/bg.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex items-center justify-center px-4 py-24 font-inter relative"
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-slate-900/50"></div>
      <div className="text-center max-w-3xl mx-auto pt-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-bold text-white mb-4"
        >
          Hi! I'm Rai.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl mb-2 text-gray-300"
        >
          UI Designer | Layout Designer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl mb-8 text-gray-400"
        >
          I design user-friendly web application interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button link={"#projects"} btn={"Explore"} />
        </motion.div>
      </div>
    </section>
  );
};
