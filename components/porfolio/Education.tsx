import React from "react";
import { domAnimation, LazyMotion, motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Web Development Bootcamp",
      school: "Udemy",
      period: "2024",
      location: "Online",
      gpa: "Certificate of Excellence",
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "Rohini College of Engineering and Technology",
      period: "2017 - 2021",
      location: "Kanyakumari, Tamil Nadu, India",
      gpa: "7.25/10",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12   px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl sm:text-4xl font-bold">Education</h3>
      <div className="grid md:grid-cols-3 gap-6 py-8">
        <LazyMotion features={domAnimation}>
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[20px]"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                  <p className="text-[#1a73e8] font-semibold mb-2">
                    {edu.school}
                  </p>
                  <div className="flex items-center flex-wrap text-gray-700 gap-3   text-sm mb-2">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </span>
                    <span className="flex items-start">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </LazyMotion>
      </div>
    </div>
  );
};

export default Education;
