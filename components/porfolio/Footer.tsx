import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
 
const Footer = () => {
  return (
    <footer className="relative py-12 px-4 bg-white sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div
              className="text-2xl font-bold 
              mb-2"
            >
              Akil A L
            </div>
            <p className="">Software Enginer</p>
          </div>
          <div className="flex space-x-6">
            <motion.a
              href="tel:+917094425793"
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full hover:border-transparent  transition-all duration-300 ease-linear text-[#1a73e8] border-2 border-blue-600"
            >
              <Phone className="w-5 h-5  " />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/akil-al/"
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full hover:border-transparent  transition-all duration-300 ease-linear text-[#1a73e8] border-2 border-blue-600"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:akilantonyonline@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full hover:border-transparent  transition-all duration-300 ease-linear text-[#1a73e8] border-2 border-blue-600"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t  text-center">
          <p className="">© 2026 Akil A L. Built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
