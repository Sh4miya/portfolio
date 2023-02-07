import React from "react";
import "react-step-progress-bar/styles.css";
import {ProgressBar} from "react-step-progress-bar";
import '../style.scss';


function Skills() {
  return (
    <>
    <h1 className="skills-title no-gap-after">Skills</h1>
    <div className="bar-title-container">
      <h3 className="no-gap-after">Web Design</h3>      
        <div className="progress-bar-container"> 
          <ProgressBar percent={70} />
        </div>
    </div>
      <ul className="skills-text">
        <li>CSS / SCSS</li>
        <li>HTML</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>
      <div className="bar-title-container">
        <h3 className="no-gap-after">Programming</h3>
        <div className="progress-bar-container"> 
          <ProgressBar percent={60} />
        </div>
      </div>
      <ul className="skills-text">
        <li>C#</li>
        <li>GDScript</li>
        <li>Node.js</li>
        <li>NoSQL</li>
        <li className="gap-after">SQL</li>
      </ul>
      <div className="bar-title-container">
      <h3 className="no-gap-after">Workflow</h3>
      <div className="progress-bar-container"> 
          <ProgressBar percent={80} />
        </div>
      </div>
      <ul className="skills-text">
        <li>Agile</li>
        <li>Kanban</li>
        <li>Scrum</li>
      </ul>
      <div className="bar-title-container">
      <h3 className="no-gap-after">Personal Skills</h3>
      <div className="progress-bar-container"> 
          <ProgressBar percent={90} />
        </div>
      </div>
      <ul className="skills-text">
        <li>Excellent verbal and written communication</li>
        <li>Technical writing to GMP stardards</li>
        <li>Team player</li>
        <li>Hardworking</li>
        <li>Focused</li>
      </ul>

    </>
  );
}
export default Skills;
