import React from "react";
import '../../style.scss';

function NameDatabase(){
    return (
      <>

        <h2 className="no-gap-after">Name Database</h2>
        <h3>
          Blackout Rugby Website <br /> Task Responsibilities:
        </h3>
        <div className="name-database-text">
        <ul className="left-align">
          <li>Retrieves first/last name filtered by ethnicity using REST API</li>
          <li>Create a web interface to display first and last names of the player databases</li>
          <li>Allows the developer to add, edit and delete first or last names in the database</li>
          <li>Create a name filter</li>
          <li>Added authentication - user must be logged in to use this feature</li>
          <li>Interface created using React</li>
        </ul>
        </div>
      </>
    );

}
export default NameDatabase;