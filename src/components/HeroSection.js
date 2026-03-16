import React from "react";
import { motion } from "framer-motion";
import profile from "../images/profile_picture_2.jpg";
import github from "../images/github-mark-white.png";
import linkedin from "../images/In-Blue-40.png";
import cv from "../images/cv.png";
import email from "../images/email.png";

const introReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

function HeroSection() {
  return (
    <>
      <div className="header-container" id="home-section" />
      <motion.img
        className="profile-picture"
        src={profile}
        alt=""
        variants={introReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.55 }}
      />
      <motion.div
        className="home-flex-container-text"
        variants={introReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1>Lizzie Corbett</h1>
        <h2 className="center">Full Stack Developer</h2>
        <ul className="center no-bullet home-info">
          <li className="home-info-item">Ngati Porou</li>
          <li className="home-info-item">Hamilton, New Zealand</li>
          <li className="social-links">
            <a className="email" href="mailto:lizzie.corbett04@gmail.com" aria-label="Email">
              <img className="logo" src={email} alt="E-Mail Logo"></img>
            </a>
            <a href="https://github.com/Sh4miya" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <img className="logo" src={github} alt="Github Logo"></img>
            </a>
            <a href="https://www.linkedin.com/in/lizzie-corbett/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img className="logo" src={linkedin} alt="LinkedIn Logo"></img>
            </a>
            <a href="https://www.canva.com/design/DAEsqSxePVI/DWuzTp-ZO_Qcz2gubBt1hA/view" aria-label="CV" target="_blank" rel="noopener noreferrer">
              <img className="logo cv-logo" src={cv} alt="CV Logo"></img>
            </a>
          </li>
        </ul>
        <p className="gap-after" style={{ textAlign: "center" }}>
          Full-stack developer with 3 years' experience building and shipping production game and backend systems.
          I enjoy getting my hands dirty learning code, tackling any big or small challenges,
          and at the end of the day, giving my best to get the job done.
        </p>
      </motion.div>
    </>
  );
}

export default HeroSection;
