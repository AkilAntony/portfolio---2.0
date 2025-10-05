import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const HeroSection = ({ y, opacity }: { opacity?: any; y?: any }) => {
  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "3+", label: "Happy Clients" },
    { number: "8+", label: "Technologies" },
  ];

  const router = useRouter();

  return (
    <motion.section
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center    justify-center px-4 sm:px-6 lg:px-8 pt-10"
    >
      <div className=" w-full max-w-7xl flex flex-wrap lg:flex-nowrap gap-10 md:gap-3 lg:justify-between justify-center items-center">
        <div className="text-center lg:text-left md:w-[60%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 mt-3"
          >
            {/* shadow-[inset_0_0_1.2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)] */}
            <span
              className="px-4 py-2 bg-white/5 text-white shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(31,38,135,0.37)]
   backdrop-blur-sm    rounded-full  text-sm font-medium"
            >
              👋 Hello, I'm Akil
            </span>
          </motion.div>

          <motion.h1
            //   initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white  mb-6 leading-tight"
          >
            Frontend Developer
            <span className="block bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
              & UI Designer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            I create exceptional digital experiences that combine beautiful
            design with powerful functionality. Specializing in React, Next.js,
            and modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("#projects")}
              className="px-8 py-4 bg-gradient-to-r from-indigo-400 to-sky-400 rounded-xl text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              View My Work
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="  px-8 py-4 text-white bg-white/5 shadow-[inset_0_0_1.2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)]  rounded-xl backdrop-blur-sm  "
              onClick={() => router.push("#contact")}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative md:w-[40%]  "
        >
          <div className="relative    mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r  from-indigo-400 to-sky-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative md:w-[470px] md:h-[470px] h-[300px] w-[300px]  rounded-full bg-gradient-to-r from-indigo-300 to-sky-300 p-1">
              <div className="md:w-[470px] md:h-[470px] h-[300px] w-[300px] rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/ak.jpg"
                  alt="Akil"
                  className="md:w-[470px] md:h-[470px] h-[300px] w-[300px]  object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
