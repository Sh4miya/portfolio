import React from "react";
import '../style.scss';

function Education(){
    return (
      <>
        <h2 className="main-title">Education</h2>
        <h3 className="no-gap-after skills-text">
          Waikato Institute of Technology (Te Pukenga)
        </h3>
        <h4 className="no-gap-after">February 2020 - November 2022</h4>
        <ul className="skills-text">
          <li>
            Bachelor of Applied Information Technology - Software Engineering
          </li>
        </ul>
        <h3 className="no-gap-after skills-text">Flaxmere College</h3>
        <h4 className="no-gap-after">January 2000 - December 2004</h4>
        <ul className="skills-text">
          <li>
            STAR Programme: A pathway for high school students to gain tertiary education during Year 12
          </li>
          <li>Massey University Vice Chancellors Award 2002/2003</li>
          <li className="gap-after">NCEA Level Two</li>
        </ul>
      </>
    );

}
export default Education;