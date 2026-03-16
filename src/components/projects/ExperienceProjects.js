import React from "react";
import { motion } from "framer-motion";
import NameDatabase from "../experience/NameDatabase";
import DangerousDag from "../experience/DangerousDag";
import PolymorphismTask from "../experience/PolymorphismTask";
import InvitesOnly from "../experience/InvitesOnly";

function ExperienceProjects({ sectionReveal }) {
  return (
    <div className="projects-group" id="experience-projects">
      <h2 className="projects-group-title">Technical Projects</h2>
      <motion.div
        className="grid-item"
        id="invites-only"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <InvitesOnly />
      </motion.div>
      <br />
      <motion.div
        className="grid-item"
        id="name-database"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <NameDatabase />
      </motion.div>
      <br />
      <motion.div
        className="grid-item"
        id="dangerous-dag"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <DangerousDag />
      </motion.div>
      <br />
      <motion.div
        className="grid-item"
        id="polymorphism-task"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <PolymorphismTask />
      </motion.div>
    </div>
  );
}

export default ExperienceProjects;
