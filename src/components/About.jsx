import { motion } from "framer-motion";
import { User, Briefcase, Code, PenTool, MessageCircle } from "lucide-react";
import img from "../assets/ziara.jpg";

export const About = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Feature items for the "My Approach" section
  const approachItems = [
    {
      icon: <User className="text-emerald-600" size={24} />,
      title: "User-Centered",
      description:
        "I prioritize user needs and preferences in every design decision, creating experiences that feel intuitive and enjoyable.",
    },
    {
      icon: <Briefcase className="text-emerald-600" size={24} />,
      title: "Business-Focused",
      description:
        "I align design solutions with business goals, ensuring that beautiful interfaces also drive meaningful results.",
    },
    {
      icon: <Code className="text-emerald-600" size={24} />,
      title: "Technical Awareness",
      description:
        "I create designs with implementation in mind, collaborating effectively with development teams.",
    },
    {
      icon: <PenTool className="text-emerald-600" size={24} />,
      title: "Aesthetic Excellence",
      description:
        "I craft visually cohesive designs that communicate brand values while delighting users.",
    },
    {
      icon: <MessageCircle className="text-emerald-600" size={24} />,
      title: "Collaborative Process",
      description:
        "I believe great design emerges from diverse perspectives and open communication with stakeholders.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left side: Bio */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-emerald-700"></h3>

            <div className="space-y-6 text-zinc-700 text-lg">
              <p>
                Hi, my name is <span className="font-bold text-emerald-700">Raiza S. Beligolo</span>. I am a passionate designer
                specializing in user interface or UI design for web and mobile
                applications, with also experience in layout designing. While my
                background is rooted in UI design, I am currently exploring UX
                principles and front-end development to further enhance my
                skills, as well as improve the usability and performance of my
                work.
              </p>

              <p>
                I'm eager to continue expanding my knowledge in the
                ever-evolving field of design and aspire to become a
                well-rounded, impactful designer capable of creating intuitive
                and effective design solutions.
              </p>
            </div>

            {/* <motion.div className="mt-8" whileHover={{ scale: 1.02 }}>
              <a
                href="#contact"
                className="inline-flex items-center font-medium text-emerald-600 hover:text-emerald-700"
              >
                Let's work together
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div> */}
          </motion.div>

          {/* Right side: My Approach */}
          <motion.div
            className="grid place-items-center max-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={img} className="rounded-xl sm:max-w-sm" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
