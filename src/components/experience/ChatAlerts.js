import React from "react";
import '../../style.scss';

function ChatAlerts(){
    return (
      <>
      <h2 className="no-gap-after">Implement Chat Alerts</h2>
      <h3>Blackout Rugby Website <br/> Task Responsibilities:</h3>
        <ul className="left-align">
          <li>Create a REST API endpoint for chat alerts</li>
          <li>Create an in-game message from the developer to the user</li>
          <li>Store messages on AWS (DynamoDB)</li>
          <li>Create a command to enable developers to message the user in-game from the developer API endpoint </li>
          <li>Create a web interface to the chat alert API endpoint that enabled developers to: </li>
          <li className="chat-alerts">Create an autocomplete search for managers based on manager name</li>
          <li className="chat-alerts">Message users in-game by Manager Name</li>
          <li className="chat-alerts">Be able to view all messages sent to the manager</li>
          <li className="chat-alerts">Added authentication - user must be logged in and a developer to use this feature</li>
          <li className="chat-alerts gap-after">Interface created using React</li>
        </ul>
      </>
    );

}
export default ChatAlerts;