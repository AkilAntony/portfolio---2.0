import React from 'react'
import { motion } from "framer-motion";
import { Coffee, MapPin } from 'lucide-react';


  const skills = [
    { name: "React/Next.js", level: 95, category: "Frontend" },
    { name: "JavaScript & TypeScript", level: 90, category: "Language" },
    { name: "Node.js & Express.js", level: 70, category: "Backend" },
      { name: "Angular", level: 75, category: "Frontend" },
  ]

  
const About = () => {
  return (
        <motion.section
        id="about"
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
            className="text-3xl sm:text-4xl font-bold text-white/80  my-16 text-center"
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 shadow-[inset_0_0_1.2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)]  rounded-3xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold text-white/80   mb-6">My Story</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
               With over 2+ years of hands-on experience in frontend development, I 
               specialize in building fast, user-friendly web apps using React, Next.js, 
               and modern UI systems. I've worked with startups and growing businesses, 
               turning ideas into responsive, production-ready interfaces.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm passionate about clean code, user-centered design, and staying up-to-date with the latest
                technologies.
              </p>
              <div className="flex  flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 text-gray-300">
                <div className='flex items-center gap-2'>
                     <MapPin className="w-5 h-5" />
                <span>Tamil Nadu, India</span>
                </div>
             <div className='flex items-center gap-2'>
 <Coffee className="w-5 h-5 md:ml-4" />
                <span>Available for freelance</span>
             </div>
               
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >

              {/*             className="inline-flex items-center px-4 py-2 bg-white/5 shadow-[inset_0_0_1.2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)]  rounded-md backdrop-blur-sm  "
 */}
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-sm bg-white/5 shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)]   rounded-2xl p-6"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                      <span className="text-gray-400 text-sm ml-2">({skill.category})</span>
                    </div>
                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-indigo-400 to-sky-400 h-3 rounded-full shadow-lg shadow-blue-500/25"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
  )
}

export default About