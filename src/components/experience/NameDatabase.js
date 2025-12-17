import React from "react";
import '../../style.scss';
import ImageModal from '../ImageModal';
import namedatabase1 from '../../images/name-database-1.png';
import namedatabase2 from '../../images/name-database-2.png';
import namedatabase3 from '../../images/name-database-3.png';

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
        <div className="project-thumbnails">
            <ImageModal src={namedatabase1} alt="Name Database with editable fields">
                <img src={namedatabase1} alt="Name Database with editable fields" />
            </ImageModal>
            <ImageModal src={namedatabase3} alt="Name Database authentication">
                <img src={namedatabase3} alt="Name Database authentication" />
            </ImageModal>
            <ImageModal src={namedatabase2} alt="Name Database name filter">
                <img src={namedatabase2} alt="Name Database name filter" />
            </ImageModal>
        </div>
      </>
    );

}
export default NameDatabase;