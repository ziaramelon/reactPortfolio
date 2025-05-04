import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, User, Tag } from "lucide-react";
import myImg from "../assets/ziara.jpg";

export const BlogPost1 = ({ post, prevPost, nextPost, onNavigate }) => {
  // State to track current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);

  // Mock data for demonstration - you would replace this with your actual data
  const demoPost = post || {
    id: "1",
    title: "My Trip to the Mountains: A Journey Into Nature",
    date: "May 3, 2025",
    author: "Raiza Beligolo",
    category: "Travel",
    images: [
      myImg,
      myImg,
      myImg,
      myImg,
    ],
    content: `<p>The mountains called, and I had to go. There's something about the crisp mountain air that rejuvenates the soul and clears the mind. Today's adventure took me to heights I hadn't experienced before, both literally and metaphorically.</p>
    
    <p>As I ascended the trail, the world below became smaller, and my perspective widened. Each step was a meditation, each breath a reminder of the magnificent beauty that surrounds us when we take the time to look.</p>
    
    <h3>The Summit Experience</h3>
    
    <p>Reaching the summit was nothing short of magical. Clouds danced around the neighboring peaks, and the valley stretched out beneath me like a living map. I sat there for nearly an hour, simply taking in the panoramic views and reflecting on the journey.</p>
    
    <p>The descent offered its own unique challenges and rewards. The changing light as the afternoon progressed cast new shadows and highlighted different features of the landscape that I hadn't noticed on the way up.</p>
    
    <h3>Lessons from the Mountain</h3>
    
    <p>Mountains have a way of teaching us about ourselves. They remind us of our smallness in the grand scheme of things while simultaneously showing us our own strength and resilience. Today's hike reinforced the importance of patience, persistence, and taking time to appreciate the journey rather than fixating solely on the destination.</p>
    
    <p>As I made my way back to the trailhead, I felt a profound sense of gratitude for the experience—for the challenge, the beauty, and the quiet moments of reflection that nature so generously provides.</p>`,
  };

  // Import Swiper on client-side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const importSwiper = async () => {
        try {
          // Dynamically import Swiper
          const SwiperCore = await import("swiper");
          const { Navigation, Pagination, A11y } = await import(
            "swiper/modules"
          );

          // Register Swiper modules
          SwiperCore.default.use([Navigation, Pagination, A11y]);

          // Load Swiper CSS
          await import("swiper/css");
          await import("swiper/css/navigation");
          await import("swiper/css/pagination");

          // Now import the React components
          const { Swiper, SwiperSlide } = await import("swiper/react");

          // Set up Swiper component
          setSwiper({ Swiper, SwiperSlide });
        } catch (error) {
          console.error("Failed to load Swiper:", error);
        }
      };

      importSwiper();
    }
  }, []);

  const handlePrevPost = () => {
    if (prevPost && onNavigate) {
      onNavigate(prevPost.id);
    }
  };

  const handleNextPost = () => {
    if (nextPost && onNavigate) {
      onNavigate(nextPost.id);
    }
  };

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
    <motion.div
      className="max-w-4xl mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Blog Header */}
      <motion.div className="mb-8 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {demoPost.title}
        </motion.h1>

        <motion.div
          className="flex justify-center items-center text-zinc-500 text-sm space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="flex items-center">
            <Calendar size={16} className="mr-1 text-emerald-500" />
            {demoPost.date}
          </span>
          <span className="flex items-center">
            <User size={16} className="mr-1 text-emerald-500" />
            {demoPost.author}
          </span>
          <span className="flex items-center">
            <Tag size={16} className="mr-1 text-emerald-500" />
            {demoPost.category}
          </span>
        </motion.div>
      </motion.div>

      {/* Image Slider */}
      <motion.div
        className="mb-8 rounded-xl overflow-hidden shadow-lg"
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
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            className="rounded-xl"
          >
            {demoPost.images.map((image, index) => (
              <swiper.SwiperSlide key={index}>
                <div className="relative pt-[56.25%]">
                  {" "}
                  {/* 16:9 aspect ratio */}
                  <img
                    src={image}
                    alt={`Blog image ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </swiper.SwiperSlide>
            ))}

            {/* Custom navigation buttons */}
            <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white bg-opacity-70 rounded-full flex items-center justify-center text-emerald-600 hover:bg-opacity-100 cursor-pointer shadow-md transition-all">
              <ChevronLeft size={24} />
            </div>
            <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white bg-opacity-70 rounded-full flex items-center justify-center text-emerald-600 hover:bg-opacity-100 cursor-pointer shadow-md transition-all">
              <ChevronRight size={24} />
            </div>
          </swiper.Swiper>
        ) : (
          // Fallback while Swiper is loading
          <div className="relative pt-[56.25%] bg-zinc-200 animate-pulse rounded-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-zinc-400">Loading gallery...</span>
            </div>
          </div>
        )}

        {/* Slide counter */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm z-10">
          {currentSlide + 1} / {demoPost.images.length}
        </div>
      </motion.div>

      {/* Blog Content */}
      <motion.div
        className="prose prose-emerald max-w-none text-black mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        dangerouslySetInnerHTML={{ __html: demoPost.content }}
      />

      {/* Navigation Buttons */}
      <motion.div
        className="flex justify-between mt-16 pt-8 border-t border-zinc-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <motion.button
          onClick={handlePrevPost}
          className="flex items-center space-x-2 px-5 py-3 rounded-lg bg-white text-zinc-800 hover:bg-emerald-50 border border-zinc-200"
        >
          <ChevronLeft size={16} />
          <span>Previous Post</span>
        </motion.button>

        <motion.button
          onClick={handleNextPost}
          className="flex items-center space-x-2 px-5 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
        >
          <span>Next Post</span>
          <ChevronRight size={16} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
