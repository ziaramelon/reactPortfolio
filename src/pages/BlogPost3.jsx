import { BlogNav } from "../components/BlogNav";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Calendar, ArrowUp } from "lucide-react";
import img1 from "../assets/day3/1.jpg";
import img2 from "../assets/day3/2.jpg";
import img3 from "../assets/day3/3.jpg";
import img4 from "../assets/day3/4.jpg";
import img5 from "../assets/day3/5.jpg";
import img6 from "../assets/day3/6.jpg";
import img7 from "../assets/day3/7.jpg";
import img8 from "../assets/day3/8.jpg";
import img9 from "../assets/day3/9.jpg";

export const BlogPost3 = ({ post }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const topRef = useRef(null);

  const demoPost = post || {
    id: "1",
    title: "The Exploration of Museums",
    date: "April 9, 2025",
    category: "Day 3",
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
    content: `<p>This day, the itinerary is about the cultural and educational journey as we visited the National Museum of Natural History. The museum was filled with fascinating exhibits—from lifelike dioramas of Philippine wildlife to displays about the country’s rich biodiversity and natural resources. Walking through the halls made us appreciate the beauty and uniqueness of our environment, and it sparked a sense of pride in our heritage.</p>

    <br>
    
    <p>In the afternoon, we went to the Quezon Memorial Shrine, a towering landmark dedicated to President Manuel L. Quezon. The site was peaceful and grand, with a museum inside showcasing his life and contributions to the country. It was a humbling experience to learn more about his legacy and reflect on how our history continues to shape our present.</p>`,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const importSwiper = async () => {
        try {
          const SwiperCore = await import("swiper");
          const { Navigation, Pagination, A11y, Autoplay } = await import(
            "swiper/modules"
          );

          SwiperCore.default.use([Navigation, Pagination, A11y, Autoplay]);

          await import("swiper/css");
          await import("swiper/css/navigation");
          await import("swiper/css/pagination");

          const { Swiper, SwiperSlide } = await import("swiper/react");

          setSwiper({ Swiper, SwiperSlide });
        } catch (error) {
          console.error("Failed to load Swiper:", error);
        }
      };

      importSwiper();
    }
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <BlogNav />
      <motion.div
        ref={topRef}
        className="max-w-4xl mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Blog Header */}
        <motion.div className="mb-8 mt-16 text-center">
          <motion.span
            className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {demoPost.category}
          </motion.span>

          <motion.h1
            className="text-3xl md:text-5xl font-bold text-zinc-800 mb-4 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {demoPost.title}
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center items-center text-zinc-500 text-sm md:space-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="flex items-center">
              <Calendar size={16} className="mr-2 text-emerald-500" />
              {demoPost.date}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-12 rounded-xl overflow-hidden shadow-lg relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {swiper ? (
            <swiper.Swiper
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={(swiperInstance) =>
                setCurrentSlide(swiperInstance.activeIndex)
              }
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="rounded-xl"
            >
              {demoPost.images.map((image, index) => (
                <swiper.SwiperSlide key={index}>
                  <div className="relative pt-[56.25%]">
                    {" "}
                    <img
                      src={image}
                      alt={`Blog image ${index + 1}`}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </swiper.SwiperSlide>
              ))}

              <div className="swiper-button-prev !hidden md:!flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center text-emerald-600 hover:bg-emerald-50 cursor-pointer transition-all hover:scale-110">
                <ChevronLeft size={24} strokeWidth={2.5} />
              </div>
              <div className="swiper-button-next !hidden md:!flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center text-emerald-600 hover:bg-emerald-50 cursor-pointer transition-all hover:scale-110">
                <ChevronRight size={24} strokeWidth={2.5} />
              </div>
            </swiper.Swiper>
          ) : (
            <div className="relative pt-[56.25%] bg-zinc-200 animate-pulse rounded-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-400 font-medium">
                  Loading gallery...
                </span>
              </div>
            </div>
          )}

          {/* Slide counter */}
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm font-medium z-10 backdrop-blur-sm">
            {currentSlide + 1} / {demoPost.images.length}
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div
          className="prose prose-emerald prose-lg max-w-none text-zinc-700 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          dangerouslySetInnerHTML={{ __html: demoPost.content }}
        />

        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-16 pt-8 border-t border-zinc-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link to="/day2" className="w-full sm:w-auto">
            <motion.div
              className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-white text-zinc-800 hover:bg-emerald-50 border border-zinc-200 shadow-sm transition-all w-full justify-center sm:justify-start"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
              <span className="font-medium">Day 2</span>
            </motion.div>
          </Link>

          <Link to="/day4" className="w-full sm:w-auto">
            <motion.div
              className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 shadow-md transition-all w-full justify-center sm:justify-start"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium">Day 4</span>
              <ChevronRight size={20} />
            </motion.div>
          </Link>
        </motion.div>

        {showScrollTop && (
          <motion.button
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-emerald-600 text-white shadow-lg flex items-center justify-center z-50 hover:bg-emerald-700"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </motion.div>
    </>
  );
};
