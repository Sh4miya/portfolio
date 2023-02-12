import React from "react";
import "../style.scss";
import profile from "../images/profile.jpg";
import Education from './Education';
import { motion } from 'framer-motion';

function Home() {

  return (
    <>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
        <img className="profile-picture" src={profile} alt="Profile Picture" />
        <div className="home-flex-container-text">
          <h1>Lizzie Corbett</h1>
          <h2 className="center">Junior Full Stack Developer</h2>
          <ul className="center no-bullet">
            <li>Ngati Porou</li>
            <li>Hamilton, New Zealand</li>
            <li>
              <a className="email" href="mailto:lizzie.corbett04@gmail.com">E-mail</a>
              <a href="https://github.com/Sh4miya">Github</a>
            </li>
          </ul>
          <p className="gap-after">
            I am currently a Junior Full Stack Developer at Blackout Games after
            completing a successful internship through Waikato Institute of
            Technology (Te Pukenga). <br /> As an aspiring software developer I enjoy getting my hands dirty learning code,
            tackling any big or small challenges, and at the end of the day, giving my best to get the job done. <br /> <br />
            In my free time I enjoy binge watching TV shows, cooking, going to the gym, 
            gaming and watching sports such as rugby, NBA, NFL, softball and baseball. <br />
            <br />
            I also enjoy streaming on Twitch and have participated in Twitch ANZ events such as Grassroots and Te Marama o Maori.
          </p>
          </div>
        <Education />
      </motion.div>
      <div className="footer-container">
        <p></p>
      </div>
    </>
  );
}
export default Home;
