import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (index) => setHoveredProject(index);
  const handleMouseLeave = () => setHoveredProject(null);

  return (
    <div id="projects" className="border-b border-neutral-900 py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-semibold text-white mb-16"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="group relative flex flex-col items-center bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full mb-6">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover effect */}
              {hoveredProject === index && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-bold text-lg mb-4">
                    Want to view this project?
                  </p>
                  <div className="flex space-x-4">
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                      >
                        View Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-200"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="w-full text-center">
              <h6 className="text-xl font-semibold text-neutral-800 mb-2">
                {project.title}
              </h6>
              <p className="text-neutral-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center space-x-2 space-y-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm font-medium text-orange-900 bg-neutral-300 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
