import React from "react";
import DangerousDag from "./experience/DangerousDag";
import ChatAlerts from "./experience/ChatAlerts";
import Other from "./experience/Other";
import NameDatabase from "./experience/NameDatabase";
import ImageModal from "./ImageModal";
import DailyDeals from "./experience/DailyDeals";
import PlayerWon from "./experience/PlayerWon";
import XsollaWebstore from "./experience/XsollaWebstore";
import '../style.scss';
import { motion } from 'framer-motion';

const scrollToProject = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = 70; // Main menu height
    const submenuHeight = 60; // Approximate submenu height with padding
    const offset = headerHeight + submenuHeight + 20; // Extra spacing
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
//---images
import dag from '../images/dag-1.jpg';
import dag2 from '../images/dag-2.png';
import dagtitle from '../images/dangerous-dag-title.jpg';
import chatalerts1 from '../images/message-website.png';
import chatalerts2 from '../images/message-ingame.png';
import chatalerts3 from '../images/chat-alert-messages.png';
import namedatabase1 from '../images/name-database-1.png';
import namedatabase2 from '../images/name-database-2.png';
import namedatabase3 from '../images/name-database-3.png';
import dailyDeals1 from '../images/daily-deals1.png';
import groundsShop from '../images/grounds-shop-new-alert.png';
import playerWonAds from '../images/player-won-ads.png';
import playerWonAdsSuccess from '../images/player-won-ads-success.png';
import xsollaWebstore1 from '../images/xsolla-webstore-1.png';
import xsollaWebstore2 from '../images/xsolla-webstore-2.png';



function Experience(){
    return (
      <>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        style={{ overflow: 'visible', position: 'relative' }}>
        <div className="header-container fade-in">
          <h1 className="header-content gap-after">Projects</h1>
        </div>
        <nav className="projects-submenu-wrapper">
          <ul className="projects-submenu">
            <li className="projects-submenu">
              <button className="projects-submenu" onClick={() => scrollToProject('xsolla-webstore')}>
                XSolla Webstore
              </button>
            </li>
            <li className="projects-submenu">
              <button className="projects-submenu" onClick={() => scrollToProject('playerwon')}>
                PlayerWON Ads
              </button>
            </li>
            <li className="projects-submenu">
              <button className="projects-submenu" onClick={() => scrollToProject('daily-deals')}>
                Daily Deals
              </button>
            </li>
            <li className="projects-submenu">
              <button className="projects-submenu" onClick={() => scrollToProject('chat-alerts')}>
                Chat Alerts
              </button>
            </li>
            <li className="projects-submenu">
              <button className="projects-submenu" onClick={() => scrollToProject('name-database')}>
                Name Database
              </button>
            </li>
            <li className="projects-submenu">
              <button className="projects-submenu" onClick={() => scrollToProject('dangerous-dag')}>
                Dangerous Dag
              </button>
            </li>
            <li className="projects-submenu">
              <button className="projects-submenu" onClick={() => scrollToProject('additional-experience')}>
                Additional Experience
              </button>
            </li>
          </ul>
        </nav>
          <div className="grid-container fade-in">
          <div className="grid-item" id="xsolla-webstore">
              <XsollaWebstore />
            </div>
            <div className="grid-item">
              <div className="dd-images">
                <ImageModal src={xsollaWebstore1} alt="Xsolla Webstore">
                  <img src={xsollaWebstore1} alt="Xsolla Webstore" />
                </ImageModal>
              </div>
              <div className="dd-images">
                <ImageModal src={xsollaWebstore2} alt="Xsolla Webstore">
                  <img src={xsollaWebstore2} alt="Xsolla Webstore" />
                </ImageModal>
              </div>
            </div>
          <div className="grid-item" id="playerwon">
              <PlayerWon />
            </div>
            <div className="grid-item">
              <div className="dd-images">
                <ImageModal src={playerWonAds} alt="Player won ads notification">
                  <img src={playerWonAds} alt="Player won ads notification" />
                </ImageModal>
              </div>
              <div className="dd-images">
                <ImageModal src={playerWonAdsSuccess} alt="Player won ads success">
                  <img src={playerWonAdsSuccess} alt="Player won ads success" />
                </ImageModal>
              </div>
            </div>
          <div className="grid-item" id="daily-deals">
              <DailyDeals />
          </div>
          <div className="grid-item">
          <div className="dd-images">
                <ImageModal src={groundsShop} alt="Grounds shop with new alert">
                  <img src={groundsShop} alt="Grounds shop with new alert" />
                </ImageModal>
              </div>
              <div className="dd-images">
                <ImageModal src={dailyDeals1} alt="Daily Deals system">
                  <img src={dailyDeals1} alt="Daily Deals system" />
                </ImageModal>
              </div>
          </div>
            <div className="grid-item" id="chat-alerts">
              <ChatAlerts />
            </div>
            <div className="grid-item">
              <div className="ca-images">
                <ImageModal src={chatalerts1} alt="Chat alerts web interface">
                  <img src={chatalerts1} alt="Chat alerts web interface" />
                </ImageModal>
              </div>
              <div className="ca-images">
                <ImageModal src={chatalerts2} alt="Chat alerts in-game screenshot">
                  <img src={chatalerts2} alt="Chat alerts in-game screenshot" />
                </ImageModal>
              </div>
              <div className="ca-images">
                <ImageModal src={chatalerts3} alt="Chat alerts retrieve sent messages">
                  <img src={chatalerts3} alt="Chat alerts retrieve sent messages" />
                </ImageModal>
              </div>
            </div>
            <div className="grid-item" id="name-database">
              <NameDatabase />
            </div>
            <div className="grid-item">
              <div className="nd-images">
                <ImageModal src={namedatabase1} alt="Name Database with editable fields">
                  <img src={namedatabase1} alt="Name Database with editable fields" />
                </ImageModal>
              </div>
              <div className="nd-images">
                <ImageModal src={namedatabase3} alt="Name Database authentication">
                  <img src={namedatabase3} alt="Name Database authentication" />
                </ImageModal>
              </div>
              <div className="nd-images">
                <ImageModal src={namedatabase2} alt="Name Database name filter">
                  <img src={namedatabase2} alt="Name Database name filter" />
                </ImageModal>
              </div>
            </div>
            <div className="grid-item" id="dangerous-dag">
              <DangerousDag />
            </div>
            <div className="grid-item">
              <div className="dd-images">
                <ImageModal src={dagtitle} alt="Dangerous Dag game title">
                  <img src={dagtitle} alt="Dangerous Dag game title" />
                </ImageModal>
              </div>
              <div className="dd-images">
                <ImageModal src={dag} alt="Dangerous Dag game screenshot">
                  <img src={dag} alt="Dangerous Dag game screenshot" />
                </ImageModal>
              </div>
              <div className="dd-images">
                <ImageModal src={dag2} alt="Dangerous Dag game screenshot">
                  <img src={dag2} alt="Dangerous Dag game screenshot" />
                </ImageModal>
              </div>
            </div>
            <div className="grid-item" id="additional-experience">
              <Other />
            </div>
          </div>
          <div className="return-to-top-container">
            <button className="return-to-top" onClick={scrollToTop}>
              Return to Top
            </button>
          </div>
        </motion.div>
      </>
    );

}
export default Experience;