import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Principles of Effective UI Design in 2025",
      excerpt:
        "Exploring the latest trends and timeless principles that create intuitive user interfaces that delight users.",
      category: "UI Design",
      date: "April 28, 2025",
      readTime: "5 min read",
      image: "/blog-post-1.jpg", // In a real app, replace with actual image paths
      link: '/day1'
    },
    {
      id: 2,
      title: "Research Methods That Truly Understand User Needs",
      excerpt:
        "A deep dive into the most effective research methodologies that uncover meaningful insights about your users.",
      category: "UX Research",
      date: "April 15, 2025",
      readTime: "7 min read",
      image: "/blog-post-2.jpg",
      link: '/day2'
    },
    {
      id: 3,
      title: "Creating Cohesive Design Systems at Scale",
      excerpt:
        "How to build and maintain design systems that ensure consistency while allowing for growth and adaptation.",
      category: "Design Systems",
      date: "March 30, 2025",
      readTime: "6 min read",
      image: "/blog-post-3.jpg",
      link: '/day3'
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
          <motion.p
            className="text-emerald-600 font-semibold mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Latest Insights
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            From My Blog
          </motion.h2>

          <motion.p
            className="text-zinc-600 max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Thoughts, insights, and perspectives on design, creativity, and user
            experience.
          </motion.p>
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
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 z-10" />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-medium py-1 px-2 rounded-full z-20">
                  {post.category}
                </div>
                {/* In production, replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-emerald-700 font-medium">
                  Blog Post Image
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center text-xs text-zinc-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-zinc-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <motion.a
                  href='/day1'
                  className="inline-flex items-center text-emerald-600 font-medium group"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </motion.a>
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
          <motion.a
            href="/blog"
            className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Blogs
            <ArrowRight size={16} className="ml-2" />
          </motion.a>
        </motion.div> */}
      </div>
    </div>
  );
};
