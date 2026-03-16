import React, { useState } from "react";
import { motion } from "framer-motion";

function AdditionalWorkExperience({ sectionReveal }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="projects-group" id="additional-work-experience">
      <h2 className="projects-group-title">Operations & Platform Work</h2>
      <motion.div
        className="grid-item"
        id="additional-work"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Operations & Platform Work</h2>
        <p className="experience-preview">
          Supported live operations for Blackout Rugby and Football, including content updates, issue resolution, and production support.
        </p>
        <button className="collapsible-toggle" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide details" : "Show details"}
        </button>
        {showDetails && (
          <div className="collapsible-content">
            <h3>Blackout Games:</h3>
            <ul className="left-align">
              <li>Maintained live game content and supported ongoing feature updates</li>
              <li>Diagnosed and fixed production issues affecting gameplay and player experience</li>
              <li>Supported monetisation changes, live content rollout, and community-reported bug fixes</li>
              <li>Built analytics to monitor premium currency spend and reward flow</li>
            </ul>

            <h3 className="no-gap-after">Game Platform Exposure:</h3>
            <ul className="left-align">
              <li>Worked with S3, DynamoDB, and CloudWatch Logs in support of live game systems</li>
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default AdditionalWorkExperience;
