import React, { useState } from "react";
import "../../style.scss";
import ImageModal from "../ImageModal";
import playerWonAds from "../../images/player-won-ads.png";
import playerWonAdsSuccess from "../../images/player-won-ads-success.png";

function PlayerWon() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <h2 className="no-gap-after">Implement PlayerWON In-game Ads</h2>
      <p className="experience-preview">
        Implemented rewarded in-game ads with completion feedback and reward
        system integration.
      </p>
      <div className="project-thumbnails">
        <ImageModal src={playerWonAds} alt="Player won ads notification">
          <img src={playerWonAds} alt="Player won ads notification" />
        </ImageModal>
        <ImageModal src={playerWonAdsSuccess} alt="Player won ads success">
          <img src={playerWonAdsSuccess} alt="Player won ads success" />
        </ImageModal>
      </div>
      <button className="collapsible-toggle" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {showDetails && (
        <div className="collapsible-content">
          <h3>Blackout Games <br /> Responsibilities:</h3>
          <ul className="left-align">
            <li>Implemented an opt-in rewarded ad flow within the game&apos;s existing player experience</li>
            <li>Added success feedback for completed ad views</li>
            <li>Connected ad completion to the reward system so players received the correct in-game outcome</li>
          </ul>
          <div className="webstore-links">
            <a href="https://store.steampowered.com/app/2187050/Blackout_Football_Manager/" target="_blank" rel="noopener noreferrer">Blackout Football Manager</a>
            <a href="https://store.steampowered.com/app/1157960/Blackout_Rugby__World_Cup_Edition/" target="_blank" rel="noopener noreferrer">Blackout Rugby Manager</a>
          </div>
        </div>
      )}
    </>
  );
}
export default PlayerWon;
