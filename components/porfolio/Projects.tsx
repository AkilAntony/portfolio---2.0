import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with real-time inventory, payment integration, and comprehensive admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "Tailwind CSS"],
    image: "/placeholder.svg?height=400&width=600&text=E-Commerce+Platform",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard for SaaS companies with real-time data visualization and user management.",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: "/placeholder.svg?height=400&width=600&text=SaaS+Dashboard",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team collaboration features.",
    tech: ["Vue.js", "Socket.io", "Express", "MongoDB"],
    image: "/placeholder.svg?height=400&width=600&text=Task+Management",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts and interactive maps.",
    tech: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
    image: "/placeholder.svg?height=400&width=600&text=Weather+Dashboard",
    github: "#",
    live: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="backdrop-blur-sm bg-white/5 shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)] rounded-3xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-xs text-blue-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="backdrop-blur-sm bg-white/5 shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)] rounded-2xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-400">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
