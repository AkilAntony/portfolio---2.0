import React, { useEffect, useState } from "react";
import { domAnimation, LazyMotion, motion } from "framer-motion";
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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <motion.section
        style={{ y, opacity }}
        className="relative  bg-white  flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className=" w-full max-w-7xl flex flex-wrap lg:flex-nowrap gap-10 md:gap-3 lg:justify-between justify-center items-center">
          <div className="text-center lg:text-left md:w-[60%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 mt-3"
            >
              <span className="px-4 py-2 bg-[#f1f3f4] rounded-full  text-sm font-medium">
                👋 Hello, I'm Akil
              </span>
            </motion.div>

            <motion.h1
              //   initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold  mb-6 leading-tight"
            >
              Frontend Developer
              <span className="block bg-gradient-to-r from-[#1a73e8] to-black bg-clip-text text-transparent">
                & UI Designer
              </span>
            </motion.h1>

            {mounted ? (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl  mb-8 max-w-2xl  mx-auto lg:mx-0 leading-relaxed"
              >
                I create exceptional digital experiences that combine beautiful
                design with powerful functionality. Specializing in React,
                Next.js, and modern web technologies.
              </motion.p>
            ) : (
              <p className="text-xl  mb-8 max-w-2xl  mx-auto lg:mx-0 leading-relaxed">
                I create exceptional digital experiences that combine beautiful
                design with powerful functionality. Specializing in React,
                Next.js, and modern web technologies.
              </p>
            )}
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
                className=" 
               rounded-full   max-h-max px-4 py-3 bg-[#1a73e8] border-2 text-white
               hover:border-transparent text-[14px] border-blue-600 "
              >
                View My Work
                <ArrowRight className=" inline ml-2" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=" 
               rounded-full hover:bg-[#f1f3f4] max-h-max px-4 py-3 bg-white border-2 text-[#1a73e8]
               hover:border-transparent text-[14px] border-blue-600 "
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
                  <div className="text-2xl sm:text-3xl font-bold   mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
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
    </LazyMotion>
  );
};

export default HeroSection;
