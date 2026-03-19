import React from "react";
import "../style.scss";
import { motion } from "framer-motion";
import WorkProjects from "./projects/WorkProjects";
import ExperienceProjects from "./projects/ExperienceProjects";
import AdditionalWorkExperience from "./projects/AdditionalWorkExperience";
import Skills from "./Skills";
import Education from "./Education";
import HeroSection from "./HeroSection";
import { CONTACT_MAILTO } from "../contact";

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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

        <section id="contact-section" className="single-page-section">
          <div className="header-container fade-in">
            <h1 className="header-content gap-after">Work With Me</h1>
          </div>
          <div className="grid-container fade-in">
            <motion.div
              className="grid-item"
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <p className="work-with-me-lead">
                I help founders and teams ship reliable products, especially when
                the work spans <strong>mobile</strong>, <strong>backend</strong>,
                and <strong>cloud infrastructure</strong>. I bring clear
                communication, strong ownership, and production-focused
                implementation.
              </p>
              <p className="work-with-me-availability">
                Available for project-based work, ongoing collaboration, and
                well-scoped product builds. If you need a developer who can pick
                up a feature, system, or workflow and carry it through properly,
                I&apos;ll be direct about fit, scope, and timeline.
              </p>
              <ul className="work-with-me-list left-align">
                <li>Full-stack and backend features, APIs, and integrations</li>
                <li>Mobile apps (e.g. Flutter) and release workflows (App Store / Play)</li>
                <li>Cloud setup and ops on AWS for production workloads</li>
              </ul>
              <div className="work-with-me-cta-row">
                <a className="hero-cta-primary" href={CONTACT_MAILTO}>
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Education />
      </motion.div>
    </>
  );
}
export default Home;
