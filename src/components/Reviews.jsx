import { REVIEWS } from "../constants";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="py-10 md:py-20 bg-gray-900 text-white border-b border-neutral-700"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl sm:text-5xl font-bold text-cyan-500 mb-10"
      >
        What People Say
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-20">
        {REVIEWS.map((review, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-400">{review.title}</p>
            </div>
            <p className="text-gray-300">&quot;{review.review}&quot;</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
