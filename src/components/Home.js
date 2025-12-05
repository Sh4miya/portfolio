import React from "react";
import "../style.scss";
import profile from "../images/profile_picture_2.jpg";
import github from "../images/github-mark.png";
import linkedin from "../images/In-Blue-40.png";
import cv from "../images/cv.png";
import email from "../images/email.png";
import { motion } from 'framer-motion';

function Home() {


  return (
    <>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
      <div className="header-container" />
        <img className="profile-picture" src={profile} alt="" />
        <div className="home-flex-container-text">
          <h1>Lizzie Corbett</h1>
          <h2 className="center">Intermediate Full Stack Developer</h2>
          <ul className="center no-bullet home-info">
            <li className="home-info-item">Ngati Porou</li>
            <li className="home-info-item">Hamilton, New Zealand</li>
            <li className="social-links">
              <a className="email" href="mailto:lizzie.corbett04@gmail.com" aria-label="Email">
              <img className="logo" src={email} alt="E-Mail Logo"></img>
              </a>
              <a href="https://github.com/Sh4miya" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={github} alt="Github Logo"></img>
              </a>
              <a href="https://www.linkedin.com/in/lizzie-corbett/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img className="logo" src={linkedin} alt="LinkedIn Logo"></img>
              </a>
              <a href="https://www.canva.com/design/DAEsqSxePVI/DWuzTp-ZO_Qcz2gubBt1hA/view" aria-label="CV" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={cv} alt="CV Logo"></img>
              </a>
            </li>
          </ul>
          <p className="gap-after" style={{textAlign: 'center'}}>
            I enjoy getting my hands dirty learning code, tackling any big or small challenges, 
            and at the end of the day, giving my best to get the job done. <br />
            <br />
            In my free time I enjoy binge watching TV shows, cooking, going to the gym, 
            gaming and watching sports such as rugby, NBA, NFL, softball and sumo wrestling! <br />
          </p>
          </div>
      </motion.div>
    </>
  );
}
export default Home;
