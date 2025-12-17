import React from "react";
import '../../style.scss';
import ImageModal from '../ImageModal';
import xsollaWebstore1 from '../../images/xsolla-webstore-1.png';
import xsollaWebstore2 from '../../images/xsolla-webstore-2.png';

function XsollaWebstore(){
    return(
    <>
        <h2 className="no-gap-after">Implement XSolla Webstore</h2>
        <h3>Blackout Games <br/> Task Responsibilities:</h3>
        <ul className="left-align">
            <li>Manage communication between game and webstore via webhooks and API</li>
            <li>Create image assets specifically for the webstore</li>
            <li>Design store layout in XSolla website builder and integrate store items from game database via webhooks</li>
            <li>Personalise user store catalog using custom webhooks</li>
            <li>Integrate backend payment and transaction system functionality via webhooks and API</li>
            <li>Create new in-game notifications for completed transactions</li>
            <li>Write backend helper functions for developers to use single line code to retrieve in-game store items and create XSolla specific store items</li>
            <li>Create email templates to introduce new and existing users to the webstore</li>
        </ul>
        <div className="webstore-links">
            <a href="https://store.blackout.football" target="_blank" rel="noopener noreferrer">Blackout Football Webstore</a>
            <a href="https://store.blackout.rugby" target="_blank" rel="noopener noreferrer">Blackout Rugby Webstore</a>
        </div>
        <div className="project-thumbnails">
            <ImageModal src={xsollaWebstore1} alt="Xsolla Webstore">
                <img src={xsollaWebstore1} alt="Xsolla Webstore" />
            </ImageModal>
            <ImageModal src={xsollaWebstore2} alt="Xsolla Webstore">
                <img src={xsollaWebstore2} alt="Xsolla Webstore" />
            </ImageModal>
        </div>
    </>
    );
}
export default XsollaWebstore;
