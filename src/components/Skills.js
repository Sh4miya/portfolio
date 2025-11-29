import React from "react";
import '../style.scss';
import { motion } from 'framer-motion';


function Skills() {
  return (
    <>
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      style={{ overflow: 'visible', position: 'relative' }}
      >
      <div className="header-container fade-in">
        <h1 className="header-content gap-after">Skills</h1>
      </div>
      <div className="grid-container skills-grid-container fade-in">
        <div className="grid-item">
          <h2 className="no-gap-after">Personal Skills</h2>
          <ul className="skills-list">
            <li>Excellent verbal and written communication</li>
            <li>Technical writing to GMP stardards</li>
            <li>Team player</li>
            <li>Hardworking</li>
            <li>Focused</li>
          </ul>
        </div>
        <div className="grid-item">
          <h2 className="no-gap-after">Programming</h2>
          <ul className="skills-list">
            <li>Node.js</li>
            <li>C#</li>
            <li>NoSQL</li>
            <li>GDScript</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="grid-item">
          <h2 className="no-gap-after">Web Design</h2>
          <ul className="skills-list">
            <li>Javascript</li>
            <li>CSS / SCSS</li>
            <li>HTML</li>
            <li>React</li>
          </ul>
        </div>
        <div className="grid-item">
          <h2 className="no-gap-after">Workflow</h2>
          <ul className="skills-list">
            <li>Agile</li>
            <li>Kanban</li>
            <li>Scrum</li>
          </ul>
        </div>
      </div>
    </motion.div>
    </>
  );
}
export default Skills;
