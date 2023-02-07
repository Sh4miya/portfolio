import React from "react";
import '../../style.scss';

function DangerousDag() {
  return (
    <>

        <h2 className="no-gap-after">Games Development Assignment Task</h2>
        <h3> Dangerous Dag and the Poisonous Swamp <br /> Assignment Task: </h3>
        <div className="flex-container-text">
        <ul>
          <li className="gap-after">
            Game Objective: Collect 3 pies and go to the end of the level
            or optionally return to the bakery and fight the hidden boss
          </li>
          <li>Design a two level game in GODOT using GDScript</li>
          <li>Create a living GDD and update as development progresses</li>
          <li>Include a moving platform</li>
          <li>Create enemy AI logic - Added a hidden boss for fun</li>
          <li>Create a transition between levels</li>
          <li>Include fully functioning basic UI</li>
          <li>Bug fixed a spawn issue on the second level</li>
          <li>Redesigned the main character myself because the "original" made by the tutor was unacceptable</li>
        </ul>
        <a href="https://github.com/Sh4miya/dangerous-dag">Assignment Code</a>
      </div>
    </>
  );
}
export default DangerousDag;
