import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kannan P",
      role: "Product Manager",
      company: "TechCorp Solutions",
      image: "/placeholder.svg?height=80&width=80&text=SJ",
      content:
        "John is an exceptional frontend developer who consistently delivers high-quality work. His attention to detail and ability to translate complex designs into pixel-perfect code is remarkable.",
      rating: 5,
    },
    {
      name: "Jai Keerthik",
      role: "CTO",
      company: "Digital Agency Pro",
      image: "/placeholder.svg?height=80&width=80&text=MC",
      content:
        "Working with John was a game-changer for our team. He not only delivered outstanding results but also mentored our junior developers and improved our overall code quality.",
      rating: 5,
    },
    {
      name: "Ajay Surayan",
      role: "Design Director",
      company: "Creative Studio",
      image: "/placeholder.svg?height=80&width=80&text=ER",
      content:
        "John has an incredible eye for design implementation. He brings our designs to life with smooth animations and perfect responsiveness across all devices.",
      rating: 5,
    },
    {
      name: "Lavanya Kumar",
      role: "Startup Founder",
      company: "InnovateLab",
      image: "/placeholder.svg?height=80&width=80&text=DK",
      content:
        "John helped us build our MVP from scratch. His expertise in modern web technologies and user experience made our product stand out in the market.",
      rating: 5,
    },
  ];

  return (
    <motion.section
      id="testimonials"
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
          What Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="backdrop-blur-sm shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)] bg-white/5   rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
                />
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              <blockquote className="text-gray-300 text-lg leading-relaxed my-6 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center my-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
