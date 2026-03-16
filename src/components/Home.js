import React from "react";
import "../style.scss";
import { motion } from 'framer-motion';
import WorkProjects from "./projects/WorkProjects";
import ExperienceProjects from "./projects/ExperienceProjects";
import AdditionalWorkExperience from "./projects/AdditionalWorkExperience";
import Skills from "./Skills";
import Education from "./Education";
import HeroSection from "./HeroSection";

const sectionReveal = {
  hidden: { opacity: 0, y: 36, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

function Home() {


  return (
    <>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
        <HeroSection />

        <section id="work-section" className="single-page-section">
          <div className="header-container fade-in">
            <h1 className="header-content gap-after">Work Experience</h1>
          </div>
          <div className="grid-container fade-in">
            <WorkProjects sectionReveal={sectionReveal} />
            <AdditionalWorkExperience sectionReveal={sectionReveal} />
          </div>
        </section>

        <section id="projects-section" className="single-page-section">
          <div className="header-container fade-in">
            <h1 className="header-content gap-after">Selected Projects</h1>
          </div>
          <div className="grid-container fade-in">
            <ExperienceProjects sectionReveal={sectionReveal} />
          </div>
        </section>

        <Skills />
        <Education />
      </motion.div>
    </>
  );
}
export default Home;
