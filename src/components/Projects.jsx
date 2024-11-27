import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleMouseEnter = (index) => setHoveredProject(index);
  const handleMouseLeave = () => setHoveredProject(null);

  const filteredProjects =
    selectedCategory === "All"
      ? [...PROJECTS].sort((a, b) => a.title.localeCompare(b.title))
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className=" py-10 md:py-20 flex flex-col items-center bg-gray-900 border-b border-neutral-700"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl md:text-5xl font-bold text-cyan-500"
      >
        My Projects Gallery
      </motion.h2>

      {/* Category Buttons */}
      <div className="my-8 w-full flex justify-center px-4">
        <ul className="flex flex-wrap justify-center gap-4">
          {["All", "Development", "Graphic Design"].map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-cyan-500 text-white"
                    : "outline outline-2 outline-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:outline-none hover:text-white"
                } rounded-md px-4 py-2 text-sm md:text-md`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Grid */}
      <div
        className={`grid gap-6 px-4 sm:px-6 md:px-12 lg:px-16 ${
          selectedCategory === "Graphic Design"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {filteredProjects.map((project, index) =>
          project.category === "Graphic Design" ? (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="relative bg-transparent rounded-sm p-0 overflow-hidden group hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-full h-full flex items-center justify-center bg-transparent">
                <img
                  src={project.image}
                  alt={project.title || "Graphic Design"}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="relative bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative w-full h-48 overflow-hidden rounded-md mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <p className="font-semibold text-lg mb-3">
                      Explore this project!
                    </p>
                    <div className="flex space-x-3">
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-700 transition"
                        >
                          View Live
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-800 transition"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm md:text-md text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs md:text-sm font-medium bg-cyan-600 text-gray-200 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
