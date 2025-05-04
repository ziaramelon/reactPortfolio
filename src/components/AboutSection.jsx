import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AboutSection = () => {
  // Create refs for different elements to animate
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 px-4 md:px-20 bg-off">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary font-poppins">
                About
                <br />
                <div className="flex gap-2">
                  Me{" "}
                  <div className="mb-3 border-b-2 border-primary w-24"></div>
                </div>
              </h2>
            </motion.div>

            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-lg text-slate-700"
            >
              <p>
                Hi, my name is{" "}
                <span className="font-bold text-slate-800">
                  Raiza S. Beligolo
                </span>
                . I am a passionate designer specializing in user interface or{" "}
                <span className="font-bold text-slate-800">UI design</span> for
                web and mobile applications, with also experience in layout
                designing.
              </p>
              <p>
                While my background is rooted in UI design, I am currently
                exploring UX principles and front-end development to further
                enhance my skills, as well as improve the usability and
                performance of my work.
              </p>
              <p>
                I'm eager to continue expanding my knowledge in the
                ever-evolving field of design and{" "}
                <span className="font-bold text-slate-800">
                  aspire to become a well-rounded, impactful designer
                </span>{" "}
                capable of creating intuitive and effective design solutions.
              </p>
            </motion.div>
          </div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              imageInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8 }}
            className="bg-primary/10 rounded-xl h-96 p-6 flex items-center justify-center"
          >
            <div className="text-center"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
