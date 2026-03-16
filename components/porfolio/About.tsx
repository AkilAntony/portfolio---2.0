import React from "react";
import { domAnimation, LazyMotion, motion } from "framer-motion";
import { Coffee, MapPin } from "lucide-react";

const skills = [
  { name: "React/Next.js", level: 95, category: "Frontend" },
  { name: "JavaScript & TypeScript", level: 90, category: "Language" },
  { name: "Node.js & Express.js", level: 70, category: "Backend" },
  { name: "React Query", level: 80, category: "Frontend" },
  { name: "Zustand", level: 95, category: "Frontend" },
  { name: "Redux Toolkit", level: 85, category: "Frontend" },
];

const About = () => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.section
        id="about"
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
            className="text-3xl sm:text-4xl font-bold mb-8  "
          >
            About Me
          </motion.h2>

          <div className="flex flex-col justify-between gap-8 md:gap-0   md:flex-row ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=" rounded-[20px] p-8 border md:w-[50%] border-gray-100 bg-white "
            >
              <h3 className="text-2xl font-bold mb-6">My Story</h3>
              <p className=" text-lg leading-relaxed mb-6">
                With over 2+ years of hands-on experience in frontend
                development, I specialize in building fast, user-friendly web
                apps using React, Next.js, and modern UI systems. I've worked
                with startups and growing businesses, turning ideas into
                responsive, production-ready interfaces.
              </p>
              <p className="  text-lg leading-relaxed mb-6">
                I'm passionate about clean code, user-centered design, and
                staying up-to-date with the latest technologies.
              </p>
              <div className="flex  flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4  ">
                <div className="flex items-center gap-2">
                  <MapPin className=" " />
                  <span>Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className=" md:ml-4" />
                  <span>Available for freelance</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 md:w-[40%] w-full"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=" "
                >
                  <div className="flex justify-between  items-center mb-3">
                    <div>
                      <span className=" font-medium text-lg">{skill.name}</span>
                      <span className=" text-sm ml-2">({skill.category})</span>
                    </div>
                    <span className=" font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-300 rounded-full ">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className=" bg-[#1a73e8]  h-3 
                     rounded-full  "
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </LazyMotion>
  );
};

export default About;
