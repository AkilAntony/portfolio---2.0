                                      import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Frontend Web Developer",
    company: "Club Travalet",
    period: "Oct 2024 - Present",
    location: "Kochi, Kerala, India",
    link :'https://www.clubtravalet.com/',
    companyLogo: "/clubTravalet.avif",
    description:
      "Helping Club Travalet build their vision into a functional model.",
    achievements: [
      "Developed CRM and flight booking modules using TBO (Travel Boutique Online) API",
    ],
  },

  {
    title: "Associate Graduate",
    company: "NTT Data",
    period: "Aug 2022 - Jul 2023",
    companyLogo: "/NTT.svg",
    link : 'https://www.global.ntt/',
    location: "Remote, India",
    description:
      "Worked on frontend development and manual testing for client-facing web applications. Responsible for UI implementation, cross-browser testing, and logging bugs during development sprints.",
    achievements: [
      "Collaborated with the QA team to design and execute manual test cases",
      "Logged and tracked bugs using Jira.",
    ],
  },
  {
  title: "Frontend Developer Intern",
  company: "Trinity Technologies",
  period: "Feb 2022 - Aug 2022",
  location: "Trivandrum, Kerala, India",
  link : 'https://trinitytechnology.in/',
  companyLogo: "/Trinity.png", // use any logo or placeholde r
  description:
    "Worked on Angular-based client projects during a 7-month internship. Supported the development of UI components and contributed to debugging and styling of responsive layouts.",
  achievements: [
    "Built reusable components using Angular and TypeScript",
     
    "Gained practical experience with Git, REST APIs, and debugging tools"
  ]
}

];

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

const Experience = () => {
  return (
    <motion.section
      id="experience"
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
          Work Experience
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-sm bg-white/5   rounded-2xl p-6  shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)]  "
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 h-16 w-16 flex flex-col justify-center items-center  bg-white from-blue-500 to-purple-500 rounded-xl">
                    <Image
                      src={exp.companyLogo}
                      width={56}
                      height={56}
                      unoptimized
                      alt="logo"
                      className="rounded-md object-contain"
                    />
                    {/* <Briefcase className="w-6 h-6 text-white" /> */}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-2">
                      <Link href={exp.link}>{exp.company}</Link>
                      
                    </p>
                  
                  </div>
                </div>
                     <div className="flex flex-col md:flex-row mt-4 space-y-1 md:space-y-0   md:items-center md:space-x-4 text-gray-400 text-sm mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </span>
                    </div>
                       <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start   text-gray-300 text-sm"
                        >
                          <div className="  h-full self-stretch">
                            <div className="w-1.5 h-1.5 mt-2 bg-blue-400 rounded-full mr-3"></div>
                          </div>
                          
                          <div className="flex items-start  ">
                          {achievement}
                          </div>
                          
                        </div>
                      ))}
                    </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-sm bg-white/5   rounded-2xl p-6  shadow-[inset_0_0_2px_1.2px_rgba(255,255,255,0.3),0_8px_32px_rgba(31,38,135,.20)] p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-purple-400 font-semibold mb-2">
                      {edu.school}
                    </p>
                    <div className="flex items-center flex-wrap  gap-3 text-gray-400 text-sm mb-2">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </span>
                      <span className="flex items-start">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{edu.gpa}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
