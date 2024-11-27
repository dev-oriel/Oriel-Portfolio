import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gray-900 py-20 border-b border-neutral-700 flex justify-center items-center flex-col"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-pink-500 mb-10 sm:mb-14"
      >
        Education
      </motion.h2>
      <div className="space-y-10 sm:space-y-14 w-full px-4 sm:px-0">
        {EDUCATION.map((education, index) => (
          <div
            key={index}
            className="flex flex-wrap lg:flex-nowrap max-w-5xl mx-auto items-start gap-2 sm:gap-8"
          >
            {/* Year Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="w-full sm:w-auto lg:w-1/4 flex-shrink-0 text-left lg:text-left"
            >
              <p className="text-xl sm:text-xl text-cyan-400 font-semibold">
                {education.year}
              </p>
            </motion.div>

            {/* Role and Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/4"
            >
              <h6 className="text-lg sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
                {education.role}
              </h6>
              <p className="text-base sm:text-xl text-cyan-400 mb-3">
                {education.institution}
              </p>
              <p className="text-sm sm:text-lg text-gray-300">
                {education.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
