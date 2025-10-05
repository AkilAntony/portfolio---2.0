import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="     backdrop-blur-[.5px] border-b   border-white/10 shadow-[md] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-sky-400 drop-shadow-sm

 bg-clip-text text-transparent"
          >
            Akil A L
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-white transition-colors duration-300"
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
            className="inline-flex items-center px-4 py-2 bg-white/5 shadow-[inset_0_0_1.2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)]  rounded-md backdrop-blur-sm  "
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
