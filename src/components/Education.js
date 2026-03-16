import React from "react";
import '../style.scss';
import { motion } from 'framer-motion';

const educationReveal = {
  hidden: { opacity: 0, y: 32, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

function Education(){
    return (
        <section id="education-section" className="single-page-section">
          <div className="header-container fade-in">
            <h1 className="header-content gap-after">Education</h1>
          </div>
          <div className="education-container">
            <motion.div
              className="education-card"
              variants={educationReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <h3 className="no-gap-after center">
                Waikato Institute of Technology (Te Pukenga)
              </h3>
              <h4 className="no-gap-after education-date">February 2020 - November 2022</h4>
              <ul className="center no-bullet">
                <li className="gap-after">
                  Bachelor of Applied Information Technology - Software Engineering
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="education-card"
              variants={educationReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <h3 className="no-gap-after center">Flaxmere College</h3>
              <h4 className="no-gap-after education-date">January 2000 - December 2004</h4>
              <ul className="center no-bullet">
                <li className="bold center no-bullet">STAR Programme: </li>
                <li className="gap-after">A pathway for high school students to gain tertiary education during Year 12</li>
                <li className="gap-after">Massey University Vice Chancellors Award 2002/2003</li>
                <li className="gap-after">NCEA Level Two</li>
              </ul>
            </motion.div>
          </div>
        </section>
    );

}
export default Education;
