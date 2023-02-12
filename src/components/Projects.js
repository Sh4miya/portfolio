import React from "react";
import DangerousDag from "./experience/DangerousDag";
import ChatAlerts from "./experience/ChatAlerts";
import PolymorphismTask from "./experience/PolymorphismTask";
import Other from "./experience/Other";
import NameDatabase from "./experience/NameDatabase";
import ModalImage from "react-modal-image";
import '../style.scss';
import { motion } from 'framer-motion';
//---images
import dag from '../images/dag-1.jpg';
import dag2 from '../images/dag-2.png';
import dagtitle from '../images/dangerous-dag-title.jpg';
import chatalerts1 from '../images/message-website.png';
import chatalerts2 from '../images/message-ingame.png';
import chatalerts3 from '../images/chat-alert-messages.png';
import polytask from '../images/polymorphism-ss.jpg';
import namedatabase1 from '../images/name-database-1.png';
import namedatabase2 from '../images/name-database-2.png';
import namedatabase3 from '../images/name-database-3.png';



function Experience(){
    return (
      <>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
      <div className="header-container">
        <h2 className="header-content"></h2>
      </div>
        <h1 className="header-content">Projects</h1>
          <div className="grid-container">
            <div className="grid-item">
              <ChatAlerts />
            </div>
            <div className="grid-item">
              <div className="ca-images">
                <ModalImage
                  small={chatalerts1}
                  large={chatalerts1}
                  alt="Chat alerts web interface"
                  hideDownload="true"
                  hideZoom="true"
                />
              </div>
              <div className="ca-images">
                <ModalImage
                  small={chatalerts2}
                  large={chatalerts2}
                  alt="Chat alerts in-game screenshot"
                  hideDownload="true"
                  hideZoom="true"
                />
              </div>
              <div className="ca-images">
                <ModalImage
                  small={chatalerts3}
                  large={chatalerts3}
                  alt="Chat alerts retrieve sent messages"
                  hideDownload="true"
                  hideZoom="true"
                />
              </div>
            </div>
            <div className="grid-item">
              <NameDatabase />
            </div>
            <div className="grid-item">
              <div className="nd-images">
                <ModalImage
                  small={namedatabase1}
                  large={namedatabase1}
                  alt="Name Database with editable fields"
                  hideDownload="true"
                  hideZoom="true"
                />
              </div>
              <div className="nd-images">
                <ModalImage
                  small={namedatabase3}
                  large={namedatabase3}
                  alt="Name Database authentication"
                  hideDownload="true"
                  hideZoom="true"
                />
              </div>
              <div className="nd-images">
                <ModalImage
                  small={namedatabase2}
                  large={namedatabase2}
                  alt="Name Database name filter"
                  hideDownload="true"
                  hideZoom="true"
                />
              </div>
            </div>
            <div className="grid-item">
              <DangerousDag />
            </div>
            <div className="grid-item">
              <div className="dd-images">
                <ModalImage
                  small={dagtitle}
                  large={dagtitle}
                  alt="Dangerous Dag game title"
                  hideDownload="true"
                  hideZoom="true"
                />
              </div>
              <div className="dd-images">
                <ModalImage
                  small={dag}
                  large={dag}
                  alt="Dangerous Dag game screenshot"
                  hideDownload="true"
                  hideZoom="true"
                />
              </div>
              <div className="dd-images">
                <ModalImage
                  small={dag2}
                  large={dag2}
                  alt="Dangerous Dag game screenshot"
                  hideDownload="true"
                  hideZoom="true"
                />
              </div>
            </div>
            <div className="grid-item">
              <PolymorphismTask />
            </div>
            <div className="grid-item">
              <div className="poly-image">
                <ModalImage
                  small={polytask}
                  large={polytask}
                  alt="Demonstrating final app"
                  hideDownload="true"
                  hideZoom="true"
                />
              </div>
            </div>
            <div className="grid-item">
              <Other />
            </div>
          </div>
        <div className="footer-container">
          <h2 className="footer-content"></h2>
        </div>
        </motion.div>
      </>
    );

}
export default Experience;