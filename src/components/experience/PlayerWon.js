import React from "react";
import '../../style.scss';

function PlayerWon(){
    return(
    <>
        <h2 className="no-gap-after">Implement PlayerWON In-game Ads</h2>
        <h3>Blackout Games <br/> Task Responsibilities:</h3>
        <ul className="left-align">
            <li>Implement a system to display advertisements in-game when users optionally choose to watch them via broadcast building</li>
            <li>Create success notification for completed ad views</li>
            <li>Integrate with game reward systems</li>
        </ul>
        <div className="webstore-links">
            <a href="https://store.steampowered.com/app/2187050/Blackout_Football_Manager/" target="_blank" rel="noopener noreferrer">Blackout Football Manager</a>
            <a href="https://store.steampowered.com/app/1157960/Blackout_Rugby__World_Cup_Edition/" target="_blank" rel="noopener noreferrer">Blackout Rugby Manager</a>
        </div>
    </>
    );
}
export default PlayerWon;

