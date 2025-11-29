import React from "react";
import '../../style.scss';

function DailyDeals(){
    return(
    <>
    <h2 className="no-gap-after">Implement Daily Deals</h2>
    <h3>Blackout Games<br/> Task Responsibilities:</h3>
    <ul className="left-align">
          <li>Create a daily deal option of all in-game store items</li>
          <li>Write code that will generate a random amount of daily deals to offer to the user</li>
          <li>Write engine code that will automatically generate daily deals for the user every 3 days and store them on Redis</li>
          <li>Perform checks to ensure the user is offered appropriate deals (Premium vs. Standard)</li>
          <li>Allow for deals to be swapped out if certain criteria is not met</li>
          <li>Add frontend handling</li>
          <li>Add indicator to show if the user has a daily deal available</li>
          <br />

        </ul>
    </>
    );
}
export default DailyDeals;