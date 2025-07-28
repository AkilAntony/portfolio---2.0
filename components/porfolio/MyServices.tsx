import React from 'react'
import { motion } from "framer-motion";
import { Code, Palette, Server, Smartphone, Zap } from 'lucide-react';


  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building responsive, performant web applications using modern frameworks like React, Angular, and Next.js.",
      features: [
        "React.js Development",
        "Next.js Applications",
        "TypeScript Integration",
        "Performance Optimization",
      ],
    },
 
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, SEO, and user experience using modern tools and techniques.",
      features: ["Core Web Vitals", "SEO Optimization",  "Caching Strategies"],
    },

    {
  icon: Server, // or any relevant icon from your icon set
  title: "Fullstack Development",
  description:
    "Crafting end-to-end web applications with clean APIs, robust backends, and seamless frontend integration using modern stacks like Node.js, Express, and Next.js.",
  features: [
    "RESTful API Development",
    "Database Integration (MongoDB)",
    "Authentication & Authorization (JWT/NextAuth)",
  ],
}

  ]



const MyServices = () => {
  return (
        <motion.section
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
            className="text-3xl sm:text-4xl font-bold text-white mb-16 text-center"
          >
            What I Do
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)]  "
              >
                <div className='flex items-center  gap-3 '>
                   <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                </div>
               
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
  )
}

export default MyServices