import React from "react";
import '../style.scss';
import { motion } from 'framer-motion';

function Education(){
    return (
      <>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
        >
          <div className="header-container fade-in">
            <h1 className="header-content gap-after">Education</h1>
          </div>
          <div className="education-container">
            <div className="education-card">
              <h3 className="no-gap-after center">
                Waikato Institute of Technology (Te Pukenga)
              </h3>
              <h4 className="no-gap-after education-date">February 2020 - November 2022</h4>
              <ul className="center no-bullet">
                <li className="gap-after">
                  Bachelor of Applied Information Technology - Software Engineering
                </li>
              </ul>
            </div>
            <div className="education-card">
              <h3 className="no-gap-after center">Flaxmere College</h3>
              <h4 className="no-gap-after education-date">January 2000 - December 2004</h4>
              <ul className="center no-bullet">
                <li className="bold center no-bullet">STAR Programme: </li>
                <li className="gap-after">A pathway for high school students to gain tertiary education during Year 12</li>
                <li className="gap-after">Massey University Vice Chancellors Award 2002/2003</li>
                <li className="gap-after">NCEA Level Two</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </>
    );

}
export default Education;