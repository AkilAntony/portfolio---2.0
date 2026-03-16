"use client";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("./Projects"));
const Contact = dynamic(() => import("./Contact"));
const MyServices = dynamic(() => import("./MyServices"));
const Experience = dynamic(() => import("./Experience"));
const Education = dynamic(() => import("./Education"));
const Footer = dynamic(() => import("./Footer"));
const About = dynamic(() => import("./About"));

const PortfolioMain = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  return (
    //  #F5F6F6
    <div
      ref={containerRef}
      className="h-[100vh] overflow-y-auto  overflow-x-hidden
         bg-[#F5F6F6] #F5F6F6   backdrop-blur-sm "
      style={{
        fontFamily: "sans-serif",
      }}
    >
      {/* Navigation */}
      <div className="sticky z-10 backdrop-blur-lg top-0 ">
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

      <Education />

      {/* Services Section */}
      <MyServices />

      {/* Projects Section */}
      <Projects />

      <hr />
      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortfolioMain;
