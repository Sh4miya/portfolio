import React from "react";
import '../../style.scss';

function ChatAlerts(){
    return (
      <>
      <h2 className="no-gap-after">Chat Alerts System</h2>
      <h3>Blackout Rugby Website <br/> Task Responsibilities:</h3>
      <div className="flex-container-text">
        <ul>
          <li>Create a REST API endpoint for chat alerts</li>
          <li>Create an in-game message from the developer to the user</li>
          <li>Store messages on AWS (DynamoDB)</li>
          <li>Create a command to enable developers to message the user in-game from the developer API endpoint </li>
          <li>Create a web interface to the chat alert API endpoint that enabled developers to: </li>
          <li>Create an autocomplete search for managers based on manager name</li>
          <li>Message users in-game by Manager Name</li>
          <li>Be able to view all messages sent to the manager</li>
          <li>Added authentication - user must be logged in and a developer to use this feature</li>
          <li className="gap-after">Interface created using React</li>
        </ul>
        </div>
      </>
    );

}
export default ChatAlerts;