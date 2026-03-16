import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircleMore,
} from "lucide-react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className=" ">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold   mb-6"
          >
            Let's Build Something Amazing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="  text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I'm always excited to work on new projects and collaborate with
            amazing people. Let's discuss how we can bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className=" grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-8"
          >
            <motion.a
              href="mailto:akhilal778@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center md:py-3 py-2 space-x-3  max-h-max rounded-full bg-white border-2 
                text-[#1a73e8]  border-blue-600 hover:border-transparent hover:bg-transparent transition-all duration-300 ease-linear"
            >
              <Mail />
              <span className="font-medium">Gmail</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/akil-al/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center md:py-3 py-2 space-x-3   max-h-max rounded-full bg-white border-2 
                text-[#1a73e8]  border-blue-600 hover:border-transparent hover:bg-transparent transition-all duration-300 ease-linear"
            >
              <Linkedin />
              <span className="font-medium">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/AkilAntony"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 justify-center md:py-3 py-2 max-h-max rounded-full bg-white border-2 
                text-[#1a73e8]  border-blue-600 hover:border-transparent hover:bg-transparent transition-all duration-300 ease-linear"
            >
              <Github />
              <span className="font-medium">GitHub</span>
            </motion.a>

            <motion.a
              href="https://wa.me/7094425793"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 justify-center md:py-3 py-2 rounded-full bg-white border-2 
                text-[#1a73e8]  border-blue-600 max-h-max hover:border-transparent hover:bg-transparent transition-all duration-300 ease-linear"
            >
              <MessageCircleMore />
              <span className="font-medium">Whats App </span>
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
  );
};

export default Contact;
