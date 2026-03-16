import React from "react";
import { motion } from "framer-motion";
import XsollaWebstore from "../experience/XsollaWebstore";
import PlayerWon from "../experience/PlayerWon";
import DailyDeals from "../experience/DailyDeals";
import ChatAlerts from "../experience/ChatAlerts";

function WorkProjects({ sectionReveal }) {
  return (
    <div className="projects-group" id="work-projects">
      <h2 className="projects-group-title">Blackout Games <br />Full Stack Developer <br />(2022 - 2025)</h2>
      <motion.div
        className="grid-item"
        id="xsolla-webstore"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <XsollaWebstore />
      </motion.div>
      <br />
      <motion.div
        className="grid-item"
        id="playerwon"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <PlayerWon />
      </motion.div>
      <br />
      <motion.div
        className="grid-item"
        id="daily-deals"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <DailyDeals />
      </motion.div>
      <br />
      <motion.div
        className="grid-item"
        id="chat-alerts"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ChatAlerts />
      </motion.div>
    </div>
  );
}

export default WorkProjects;
