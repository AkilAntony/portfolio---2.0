import React from 'react'
import { motion} from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-sm bg-white/5  shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)] rounded-3xl p-6 md:p-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              Let's Build Something Amazing
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              I'm always excited to work on new projects and collaborate with amazing people. Let's discuss how we can
              bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className=" grid md:grid-cols-3  gap-6 mb-8"
            >
              <motion.a
                href="mailto:akhilal778@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 px-8 py-4 md:w-full backdrop-blur-sm bg-white/5 shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)] rounded-2xl text-white  hover:bg-white/10 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                <span className="font-medium">akhilal778@gmail.com</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/akil-al/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 px-8 py-4 backdrop-blur-sm bg-white/5 shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)] rounded-2xl text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                <span className="font-medium">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/AkilAntony"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 px-8 py-4 backdrop-blur-sm bg-white/5 shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)] rounded-2xl text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                <span className="font-medium">GitHub</span>
              </motion.a>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </motion.button>
            </motion.div> */}
          </div>
        </div>
      </motion.section>
  )
}

export default Contact