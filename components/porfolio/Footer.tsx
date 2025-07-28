import React from "react";
import { motion} from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Akil A L
            </div>
            <p className="text-gray-400">Software Enginer</p>
          </div>
          <div className="flex space-x-6">
            <motion.a
              href="tel:+917094425793"
              whileHover={{ scale: 1.1 }}
              className="p-3 backdrop-blur-sm bg-white/5 shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)]  rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-gray-400 "/>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/akil-al/"
              whileHover={{ scale: 1.1 }}
              className="p-3 backdrop-blur-sm bg-white/5 shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)]  rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:akilantonyonline@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="p-3 backdrop-blur-sm bg-white/5 shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)]  rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2025 Akil A L. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
