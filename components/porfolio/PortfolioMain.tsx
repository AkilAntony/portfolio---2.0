"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import Footer from "./Footer";
import Experience from "./Experience";
import MyServices from "./MyServices";
import Contact from "./Contact";
import Projects from "./Projects";
import Testimonials from "./Testimonials";

const PortfolioMain = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  return (
     
      <div
        ref={containerRef}
        className="h-[100vh] overflow-y-auto  overflow-x-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0e0f11]  backdrop-blur-sm "
      >
        {/* Navigation */}
        <div className="sticky z-[50] backdrop-blur-xl top-0 ">
          <Navbar />
        </div>

        {/* Hero Section */}
        <HeroSection y={y} opacity={opacity} />

        {/* About Section */}
        <div className="mt-5 md:mt-0">
          <About />
        </div>



        {/* Experience Section */}
        <Experience />

        {/* Services Section */}
        <MyServices/>

        {/* Projects Section */}
        <Projects />


        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
   
  );
};

export default PortfolioMain;
