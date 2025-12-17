import React from "react";
import DangerousDag from "./experience/DangerousDag";
import ChatAlerts from "./experience/ChatAlerts";
import Other from "./experience/Other";
import NameDatabase from "./experience/NameDatabase";
import DailyDeals from "./experience/DailyDeals";
import PlayerWon from "./experience/PlayerWon";
import XsollaWebstore from "./experience/XsollaWebstore";
import PolymorphismTask from "./experience/PolymorphismTask";
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
              <button className="projects-submenu" onClick={() => scrollToProject('polymorphism-task')}>
                Polymorphism Task
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
          <div className="grid-item" id="playerwon">
              <PlayerWon />
            </div>
          <div className="grid-item" id="daily-deals">
              <DailyDeals />
          </div>
            <div className="grid-item" id="chat-alerts">
              <ChatAlerts />
            </div>
            <div className="grid-item" id="name-database">
              <NameDatabase />
            </div>
            <div className="grid-item" id="dangerous-dag">
              <DangerousDag />
            </div>
            <div className="grid-item" id="polymorphism-task">
              <PolymorphismTask />
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