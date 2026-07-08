"use client";

import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Project from "./Projects/Project";
import Experience from "./Experience/Experience";
import ClientReview from "./ClientReview/ClientReview";
import Contact from "./Contact/Contact";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease", // default easing for AOS animations
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAos();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <ClientReview />
      <Contact />
    </div>
  );
};

export default Home;
