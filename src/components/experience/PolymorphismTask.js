import React, { useState } from "react";
import '../../style.scss';
import ImageModal from '../ImageModal';
import polymorphismSS from '../../images/polymorphism-ss.jpg';

function PolymorphismTask(){
    const [showDetails, setShowDetails] = useState(false);

    return (
      <>
        <h2 className="no-gap-after">Application Development Assignment Task</h2>
        <p className="experience-preview">
          Built a C# assignment app applying inheritance and polymorphism with database reads and profit calculations.
        </p>
        <div className="project-thumbnails">
          <ImageModal src={polymorphismSS} alt="Polymorphism Task">
            <img src={polymorphismSS} alt="Polymorphism Task" />
          </ImageModal>
        </div>
        <button className="collapsible-toggle" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide details" : "Show details"}
        </button>
        {showDetails && (
          <div className="collapsible-content">
            <h3>Wintec Assignment Task <br /> Task Responsibilities:</h3>
            <ul className="left-align">
              <li>Apply Polymorphism / Inheritance</li>
              <li>Read from a database and insert data into their respective classes</li>
              <li>Calculate the total profit based on user input</li>
              <li>Error handling</li>
              <li>Created in C#</li>
            </ul>
            <div className="webstore-links">
              <a href="https://github.com/Sh4miya/Inheritance-polymorphism-task" target="_blank" rel="noopener noreferrer">Assignment Code</a>
            </div>
          </div>
        )}
      </>
    );

}
export default PolymorphismTask;
