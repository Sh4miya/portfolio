import React, { useState } from "react";
import "../../style.scss";
import ImageModal from "../ImageModal";
import xsollaWebstore1 from "../../images/xsolla-webstore-1.png";
import xsollaWebstore2 from "../../images/xsolla-webstore-2.png";

function XsollaWebstore() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <h2 className="no-gap-after">Implement XSolla Webstore</h2>
      <p className="experience-preview">
        Built and integrated end-to-end XSolla webstores, including catalog
        sync, transactions, and in-game purchase notifications.
      </p>
      <div className="project-thumbnails">
        <ImageModal src={xsollaWebstore1} alt="Xsolla Webstore">
          <img src={xsollaWebstore1} alt="Xsolla Webstore" />
        </ImageModal>
        <ImageModal src={xsollaWebstore2} alt="Xsolla Webstore">
          <img src={xsollaWebstore2} alt="Xsolla Webstore" />
        </ImageModal>
      </div>
      <button className="collapsible-toggle" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {showDetails && (
        <div className="collapsible-content">
          <h3>Blackout Games <br /> Responsibilities:</h3>
          <ul className="left-align">
            <li>Built the integration between game services and the XSolla storefront using APIs and webhooks</li>
            <li>Designed the storefront layout and connected catalog data from the game backend</li>
            <li>Implemented personalised catalog behavior and transaction handling</li>
            <li>Added in-game notifications for completed purchases</li>
            <li>Created backend helper functions to simplify store item retrieval and XSolla item creation for other developers</li>
            <li>Produced supporting store assets and rollout email templates</li>
          </ul>
          <div className="webstore-links">
            <a href="https://store.blackout.football" target="_blank" rel="noopener noreferrer">Blackout Football Webstore</a>
            <a href="https://store.blackout.rugby" target="_blank" rel="noopener noreferrer">Blackout Rugby Webstore</a>
          </div>
        </div>
      )}
    </>
  );
}
export default XsollaWebstore;
