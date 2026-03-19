import React, { useState } from "react";
import "../../style.scss";
import ImageModal from "../ImageModal";
import namedatabase1 from "../../images/name-database-1.png";
import namedatabase2 from "../../images/name-database-2.png";
import namedatabase3 from "../../images/name-database-3.png";

function NameDatabase() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <h2 className="no-gap-after">Name Database</h2>
      <p className="experience-preview">
        Built an authenticated name-management tool for first/last name
        datasets with filtering and CRUD capabilities.
      </p>
      <div className="project-thumbnails">
        <ImageModal src={namedatabase1} alt="Name Database with editable fields">
          <img src={namedatabase1} alt="Name Database with editable fields" />
        </ImageModal>
        <ImageModal src={namedatabase3} alt="Name Database authentication">
          <img src={namedatabase3} alt="Name Database authentication" />
        </ImageModal>
        <ImageModal src={namedatabase2} alt="Name Database name filter">
          <img src={namedatabase2} alt="Name Database name filter" />
        </ImageModal>
      </div>
      <button className="collapsible-toggle" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {showDetails && (
        <div className="collapsible-content">
          <h3>
            Blackout Rugby Website <br /> Responsibilities:
          </h3>
          <div className="name-database-text">
            <ul className="left-align">
              <li>Built a React interface for managing first-name and last-name datasets used by the player database</li>
              <li>Integrated REST API reads with ethnicity-based filtering</li>
              <li>Implemented add, edit, and delete workflows for name records</li>
              <li>Added authentication so only approved users could access the tool</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
export default NameDatabase;
