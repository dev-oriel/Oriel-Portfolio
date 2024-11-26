import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="bg-gray-900 py-20 border-b border-neutral-700 flex justify-center items-center flex-col">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-pink-500 mb-14"
      >
        Education
      </motion.h2>
      <div className="space-y-14">
        {EDUCATION.map((education, index) => (
          <div
            key={index}
            className="flex flex-row max-w-6xl flex-wrap align-top items-start lg:items-start gap-y-6 lg:gap-y-0"
          >
            {/* Year Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/5"
            >
              <p className="text-2xl text-cyan-400 font-semibold">
                {education.year}
              </p>
            </motion.div>

            {/* Role and Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/5"
            >
              <h6 className="text-2xl font-semibold text-white mb-3">
                {education.role} -{" "}
                <span className="text-xl text-cyan-400">
                  {education.institution}
                </span>
              </h6>
              <p className="text-lg text-gray-300">{education.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
