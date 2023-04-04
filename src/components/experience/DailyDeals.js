import React from "react";
import '../../style.scss';

function DailyDeals(){
    return(
    <>
    <h2 className="no-gap-after">Daily Deals (In progress)</h2>
    <h3>Blackout Games<br/> Task Responsibilities:</h3>
    <ul className="left-align">
          <li>Create a daily deal option of all in-game store items</li>
          <li>Write code that will generate a random amount of daily deals to offer to the user</li>
          <li>Create an engine that will automatically generate daily deals for the user and store them on Redis</li>
          <li>Perform checks to ensure the user is offered appropriate deals (Premium vs. Standard)</li>
          <li>Allow for deals to be swapped out if certain criteria is not met</li>
          <li>Add frontend handling</li>
          <br />
          <li>Voluntary Work</li>

        </ul>

    </>
    );
}
export default DailyDeals;