import React from "react";
import '../../style.scss';

function DailyDeals(){
    return(
    <>
    <h2 className="no-gap-after">Implement Daily Deals</h2>
    <h3>Blackout Games<br/> Task Responsibilities:</h3>
    <ul className="left-align">
          <li>Create a daily deal based on a range of items from the in-game store</li>
          <li>Write code that will generate a random amount of daily deals to offer to the user</li>
          <li>Write engine code that will automatically generate daily deals for the user every 3 days and store them on Redis</li>
          <li>Perform checks to ensure the user is offered appropriate deals (Premium vs. Standard)</li>
          <li>Allow for deals to be swapped out if certain criteria is not met</li>
          <li>Add frontend handling in Unity based on daily deal data provided via API</li>
          <li>Add indicator to show when the user has a daily deal available</li>
        </ul>
        <div className="webstore-links">
            <a href="https://store.steampowered.com/app/2187050/Blackout_Football_Manager/" target="_blank" rel="noopener noreferrer">Blackout Football Manager</a>
            <a href="https://store.steampowered.com/app/1157960/Blackout_Rugby__World_Cup_Edition/" target="_blank" rel="noopener noreferrer">Blackout Rugby Manager</a>
        </div>
    </>
    );
}
export default DailyDeals;