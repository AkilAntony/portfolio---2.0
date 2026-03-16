import React from "react";
import { domAnimation, LazyMotion, motion } from "framer-motion";
import { Download } from "lucide-react";

const Navbar = () => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.nav
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className=" border-b border-blue-600/40 bg-white/10  "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gray-700 bg-clip-text"
            >
              Akil A L
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-600 hover:text-black text-[14px]"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Akil_FrontendDeveloper.pdf"
              download
              className="inline-flex items-center px-4 py-1
               rounded-full hover:bg-[#f1f3f4]  bg-white border-2 text-[#1a73e8]
               hover:border-transparent text-[14px] border-blue-600   "
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </motion.a>
          </div>
        </div>
      </motion.nav>
    </LazyMotion>
  );
};

export default Navbar;
