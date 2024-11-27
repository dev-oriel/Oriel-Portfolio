import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="bg-gray-900 border-b border-neutral-700 py-16 sm:py-20 flex justify-center items-center flex-col">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-pink-500 mb-10 sm:mb-14"
      >
        Experience
      </motion.h2>

      {/* Experiences */}
      <div className="space-y-10 sm:space-y-14 px-4 sm:px-0 w-full">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="flex flex-wrap lg:flex-nowrap max-w-5xl mx-auto items-start gap-2 sm:gap-8"
          >
            {/* Year Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="w-full sm:w-auto lg:w-1/4 flex-shrink-0"
            >
              <p className="text-xl sm:text-xl text-cyan-400 font-semibold text-left lg:text-left">
                {experience.year}
              </p>
            </motion.div>

            {/* Role and Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/4"
            >
              <div className="mb-2 sm:mb-3">
                <h6 className="text-lg sm:text-2xl font-semibold text-white">
                  {experience.role}
                </h6>
                <p className="text-base sm:text-xl text-cyan-400">
                  {experience.company}
                </p>
              </div>
              <p className="text-sm sm:text-lg text-gray-300">
                {experience.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
