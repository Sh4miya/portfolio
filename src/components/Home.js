import React from "react";
import "../style.scss";
import profile from "../images/profile.jpg";
import github from "../images/github-mark.png";
import linkedin from "../images/In-Blue-40.png";
import cv from "../images/cv.png";
import email from "../images/email.png";
import Education from './Education';
import { motion } from 'framer-motion';

function Home() {


  return (
    <>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
      <div className="header-container" />
        <img className="profile-picture slide-up" src={profile} alt="Profile Picture" />
        <div className="home-flex-container-text slide-up">
          <h1>Lizzie Corbett</h1>
          <h2 className="center">Junior Full Stack Developer</h2>
          <ul className="center no-bullet">
            <li>Ngati Porou</li>
            <li>Hamilton, New Zealand</li>
            <li>
              <a className="email" href="mailto:lizzie.corbett04@gmail.com">
              <img className="logo" src={email} alt="E-Mail Logo"></img>
              </a>
              <a href="https://github.com/Sh4miya">
                <img className="logo" src={github} alt="Github Logo"></img>
              </a>
              <a href="https://www.linkedin.com/in/lizzie-corbett/">
              <img className="logo" src={linkedin} alt="LinkedIn Logo"></img>
              </a>
              <a href="https://www.canva.com/design/DAEsqSxePVI/DWuzTp-ZO_Qcz2gubBt1hA/view">
                <img className="logo" src={cv} alt="CV Logo"></img>
              </a>
            </li>
          </ul>
          <p className="gap-after">
            I enjoy getting my hands dirty learning code, tackling any big or small challenges, 
            and at the end of the day, giving my best to get the job done. <br />
            In my free time I enjoy binge watching TV shows, cooking, going to the gym, 
            gaming and watching sports such as rugby, NBA, NFL, softball and baseball. <br />
            <br />
            I also enjoy streaming on Twitch and have participated in Twitch ANZ events such as Grassroots and Te Marama o Maori.
          </p>
          </div>
      </motion.div>
      <div className="footer-container">
        <p></p>
      </div>
    </>
  );
}
export default Home;
