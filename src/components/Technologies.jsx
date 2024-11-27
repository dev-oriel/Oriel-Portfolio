import { RiReactjsLine } from "react-icons/ri";
import { SiLaravel, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="py-16 sm:py-24 flex flex-col items-center bg-gray-900 border-b border-neutral-700 text-white"
    >
      {/* Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl sm:text-5xl font-extrabold text-cyan-500 mb-8 sm:mb-12"
      >
        Technologies
      </motion.h2>

      {/* Icons */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center"
      >
        {/* React Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-2 rounded-2xl border-4 border-cyan-400 p-4 sm:p-6 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <RiReactjsLine className="text-5xl sm:text-7xl text-cyan-400" />
          <span className="text-sm sm:text-lg font-medium">React</span>
        </motion.div>

        {/* Laravel Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-2 rounded-2xl border-4 border-red-600 p-4 sm:p-6 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <SiLaravel className="text-5xl sm:text-7xl text-red-600" />
          <span className="text-sm sm:text-lg font-medium">Laravel</span>
        </motion.div>

        {/* MongoDB Icon */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-2 rounded-2xl border-4 border-green-500 p-4 sm:p-6 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <SiMongodb className="text-5xl sm:text-7xl text-green-500" />
          <span className="text-sm sm:text-lg font-medium">MongoDB</span>
        </motion.div>

        {/* Node.js Icon */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-2 rounded-2xl border-4 border-green-500 p-4 sm:p-6 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <FaNodeJs className="text-5xl sm:text-7xl text-green-500" />
          <span className="text-sm sm:text-lg font-medium">Node.js</span>
        </motion.div>

        {/* PostgreSQL Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-2 rounded-2xl border-4 border-sky-700 p-4 sm:p-6 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <BiLogoPostgresql className="text-5xl sm:text-7xl text-sky-700" />
          <span className="text-sm sm:text-lg font-medium">PostgreSQL</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technologies;
