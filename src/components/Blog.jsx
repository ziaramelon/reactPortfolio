import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blog1 from "../assets/day1/3.jpg";
import blog2 from "../assets/day2/3.jpg";
import blog3 from "../assets/day3/4.jpg";
import blog4 from "../assets/day4/2.jpg";
import blog5 from "../assets/day5/1.jpg";
import blog6 from "../assets/day6/2.jpg";
import blog7 from "../assets/day7/3.jpg";
import blog8 from "../assets/day8/4.jpg";

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Where the Adventure Begins",
      excerpt:
        "The journey began as we arrived at Zamboanga International Airport, and as the plane flew toward Manila, excitement filled the air. This was the day we had all been looking forward to—no parents, just us exploring a new place on our own.",
      category: "Day 1",
      date: "April 7, 2025",
      image: blog1,
      link: "/day1",
    },
    {
      id: 2,
      title: "Exploring Subic's Beauty",
      excerpt:
        "The day began early at 5:30 AM as we headed to Subic, with a three-hour travel ahead. Along the way, our tour guide shared fun facts and highlights about each city we passed—like the scenic view of Mt. Arayat in Pampanga and Clark International Airport in Mabalacat. The long trip was made lighter with stories and laughter, building our excitement for what was to come.",
      category: "Day 2",
      date: "April 8, 2025",
      image: blog2,
      link: "/day2",
    },
    {
      id: 3,
      title: "The Exploration of Museums",
      excerpt:
        "This day, the itinerary is about the cultural and educational journey as we visited the National Museum of Natural History. The museum was filled with fascinating exhibits—from lifelike dioramas of Philippine wildlife to displays about the country’s rich biodiversity and natural resources. Walking through the halls made us appreciate the beauty and uniqueness of our environment, and it sparked a sense of pride in our heritage.",
      category: "Day 3",
      date: "April 9, 2025",
      image: blog3,
      link: "/day3",
    },
    {
      id: 4,
      title: "A Glimpse of Economy and Technology",
      excerpt:
        "Our morning started with a visit to the Bangko Sentral ng Pilipinas (BSP), where we were introduced to the country's central banking system. We learned about their roles in maintaining economic stability, managing currency production, and safeguarding financial institutions. It was enlightening to see how such a major institution operates behind the scenes to keep the Philippine economy running smoothly.",
      category: "Day 4",
      date: "April 10, 2025",
      image: blog4,
      link: "/day4",
    },
    {
      id: 5,
      title: "From Roads to Rails",
      excerpt:
        "We began our day with a visit to the MMDA (Metropolitan Manila Development Authority), where we learned about how traffic management, disaster response, and urban planning are handled in the metro. It was eye-opening to see the operations center and understand how real-time data and coordination help manage the daily flow of such a busy city.",
      category: "Day 5",
      date: "April 11, 2025",
      image: blog5,
      link: "/day5",
    },
    {
      id: 6,
      title: "Baguio Escapade",
      excerpt:
        "We set off for Baguio at 1 am, excited to experience the cool climate and scenic beauty of the Summer Capital of the Philippines. The winding roads and mountain views made the trip feel like a journey into a new world, adding a sense of adventure to our day.",
      category: "Day 6",
      date: "April 12, 2025",
      image: blog6,
      link: "/day6",
    },
    {
      id: 7,
      title: "The Cherished Moments",
      excerpt:
        "On our last day in Baguio, our teachers gave us the freedom to explore the city. Some of us took leisurely walks and enjoyed activities around Burnham Park, while others seized the opportunity for last-minute souvenir shopping, hunting for the perfect pasalubong to take home. Our day’s highlight was a satisfying meal at the popular Good Taste Restaurant, where we indulged in hearty dishes that filled us with warmth and contentment.",
      category: "Day 7",
      date: "April 13, 2025",
      image: blog7,
      link: "/day7",
    },
    {
      id: 8,
      title: "Grateful Beyond Words",
      excerpt:
        "After spending seven incredible days with my friends, I realized there’s always a reason to stay happy, no matter the circumstances. From late-night walks to 7/11 to saying our goodbyes—not because we wouldn't see each other again, but because we could never be together in the same way again—every moment was special.",
      category: "Day 8",
      date: "April 14, 2025",
      image: blog8,
      link: "/day8",
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-white to-emerald-50" id="blog">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Educational Tour Blog
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Blog Image */}
              <div className="relative h-48 bg-emerald-100 overflow-hidden">
                <div className="absolute inset-0 z-10" />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-medium py-1 px-2 rounded-full z-20">
                  {post.category}
                </div>
                <img src={post.image} alt="" />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center text-xs text-zinc-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-zinc-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link to={post.link}>
                  <motion.div
                    className="inline-flex items-center text-emerald-600 font-medium group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/blog">
            <motion.div
              className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors inline-flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Blogs
              <ArrowRight size={16} className="ml-2" />
            </motion.div>
          </Link>
        </motion.div> */}
      </div>
    </div>
  );
};
