import React from "react";
import { domAnimation, LazyMotion, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "QR Code Generator",
    description:
      "A web app that lets users generate QR codes for any URL and download the image easily. Simple, fast, and user-friendly.",
    tech: ["React.js", , "Express.js"],
    image: "/qrCode.png",
    github: "https://github.com/AkilAntony/QR-code-generator",
    live: "https://qr-code-generator-beta-brown.vercel.app/",
    featured: true,
  },
  {
    title: "BMI Calculator",
    description:
      "Simple web-based BMI calculator that allows users to input height and weight to determine their Body Mass Index with instant results and health category indication.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/bmi2.png",
    github: "https://github.com/AkilAntony/BMI-Calculator",
    live: "https://akilantony.github.io/BMI-Calculator/",
    featured: false,
  },

  {
    title: "Image Cropper",
    description:
      "A web app that lets users upload, crop, and download images with a simple and responsive interface.",
    tech: ["React", "JavaScript"],
    image: "/imageCropper.png",
    github: "https://github.com/AkilAntony/image-cropper",
    live: "https://image-cropper-two.vercel.app/",
    featured: true,
  },
];

const Projects = () => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold "
          >
            Featured Projects
          </motion.h2>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-6 py-9">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className=" rounded-[20px] border border-gray-200 overflow-hidden group bg-white 
                transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    width={100}
                    height={64}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    priority
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold  mb-4">{project.title}</h3>
                  <p className="  mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border rounded-full text-xs bg-[#F5F6F6] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3    border-2 border-blue-600 rounded-full text-[#1a73e8] hover:border-transparent transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      target="_blank"
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3    border-2 border-blue-600 rounded-full text-[#1a73e8] hover:border-transparent transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </LazyMotion>
  );
};

export default Projects;
