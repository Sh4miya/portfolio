import React from "react";
import '../style.scss';
import { motion } from 'framer-motion';

const skillReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

function Skills() {
  return (
    <section id="skills-section" className="single-page-section">
      <div className="header-container fade-in">
        <h1 className="header-content gap-after">Skills</h1>
      </div>
      <div className="grid-container skills-grid-container fade-in">
        <motion.div
          className="grid-item"
          variants={skillReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="no-gap-after">Core Strengths</h2>
          <p className="skills-meta">Daily collaboration and delivery skills used in production teams.</p>
          <ul className="skills-list">
            <li>Clear verbal and written communication</li>
            <li>Technical writing to GMP standards</li>
            <li>Team-first collaboration</li>
            <li>Ownership and follow-through</li>
            <li>Focused problem solving</li>
          </ul>
        </motion.div>
        <motion.div
          className="grid-item"
          variants={skillReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="no-gap-after">Backend & Data</h2>
          <p className="skills-meta">Used in shipped game features and backend services.</p>
          <ul className="skills-list">
            <li><strong>Strong:</strong> Node.js, C#, SQL</li>
            <li><strong>Working:</strong> NoSQL (DynamoDB / document data patterns)</li>
            <li><strong>Project-based:</strong> GDScript</li>
          </ul>
        </motion.div>
        <motion.div
          className="grid-item"
          variants={skillReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="no-gap-after">Frontend</h2>
          <p className="skills-meta">Built authenticated tools, admin interfaces, and portfolio UI.</p>
          <ul className="skills-list">
            <li><strong>Strong:</strong> JavaScript, React</li>
            <li><strong>Strong:</strong> HTML, CSS / SCSS</li>
            <li><strong>Applied in:</strong> chat tooling, data management interfaces, portfolio UX</li>
          </ul>
        </motion.div>
        <motion.div
          className="grid-item"
          variants={skillReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="no-gap-after">Ways of Working</h2>
          <p className="skills-meta">Delivery practices used across team and solo projects.</p>
          <ul className="skills-list">
            <li>Agile delivery</li>
            <li>Kanban task flow</li>
            <li>Scrum collaboration</li>
            <li>Iterative release mindset</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
export default Skills;
