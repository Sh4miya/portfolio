import React from "react";
import '../style.scss';
import { Link, useLocation } from 'react-router-dom';


function MainMenu() {
    const location = useLocation();

    return (
      <>
      <nav className="main-menu-wrapper">
        <ul className="main-menu">       
          <li className="main-menu">
            <Link 
              className={`main-menu ${location.pathname === '/' || location.pathname === '' ? 'active' : ''}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="main-menu">
            <Link 
              className={`main-menu ${location.pathname === '/Projects' ? 'active' : ''}`}
              to="/Projects"
            >
              Projects
            </Link>
          </li>
          <li className="main-menu">
            <Link 
              className={`main-menu ${location.pathname === '/Skills' ? 'active' : ''}`}
              to="/Skills"
            >
              Skills
            </Link>
          </li>
        </ul>
      </nav>
      </>
    );

}
export default MainMenu;