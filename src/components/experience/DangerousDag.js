import React from "react";
import '../../style.scss';

function DangerousDag() {
  return (
    <>

        <h2 className="no-gap-after">Games Development Assignment Task</h2>
        <h3> Dangerous Dag and the Poisonous Swamp</h3>
        <ul className="left-align">
          <li className="no-bullet bold">Game Objective:</li>
          <li className="no-bullet gap-after">Collect 3 pies and go to the end of the level or optionally return to the bakery and fight the hidden boss</li>
          <h3 className="no-gap-after">Assignment Task:</h3>
          <li>Design a two level game in GODOT using GDScript</li>
          <li>Create a living game design document and update as development progresses</li>
          <li>Include a moving platform</li>
          <li>Create enemy AI logic - Added a hidden boss for fun</li>
          <li>Create a transition between levels</li>
          <li>Include fully functioning basic UI</li>
          <li>Bug fixed a spawn issue on the second level</li>
          <li>Redesigned the main character myself because the "original" made by the tutor was unacceptable</li>
        </ul>
        <div className="webstore-links">
            <a href="https://github.com/Sh4miya/dangerous-dag">Assignment Code</a>
        </div>
    </>
  );
}
export default DangerousDag;
