import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export const Contact = () => {
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
      transition: { duration: 0.5 },
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
    <div
      id="contact"
      className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50"
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
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <Mail size={24} className="text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-zinc-800 mb-2 text-center">
              Email
            </h3>
            <p className="text-center">
              <a
                href="mailto:hello@janedoe.com"
                className="text-zinc-700 hover:text-emerald-600 transition-colors"
              >
                beligoloraiza@gmail.com
              </a>
            </p>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <Phone size={24} className="text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-zinc-800 mb-2 text-center">
              Phone
            </h3>
            <p className="text-center">
              <a
                href="tel:+11234567890"
                className="text-zinc-700 hover:text-emerald-600 transition-colors"
              >
                +639776702283
              </a>
            </p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <MapPin size={24} className="text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-zinc-800 mb-2 text-center">
              Location
            </h3>
            <p className="text-center text-zinc-700">
              Tugbungan, Zamboanga City
            </p>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-xl shadow-md p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-zinc-800 mb-6">
            Connect With Me
          </h3>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/ziaramelon"
              className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={22} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/raiza-beligolo-a357b1363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ziaramelon?igsh=bnk0Nm9kdjlyNWFr"
              className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={22} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
