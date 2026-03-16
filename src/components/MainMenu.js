import React from "react";
import '../style.scss';
import { useLocation, useNavigate } from 'react-router-dom';


function MainMenu() {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (!section) {
        return;
      }

      const headerOffset = 90;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    };

    const handleMenuClick = (sectionId) => {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(sectionId), 120);
        return;
      }
      scrollToSection(sectionId);
    };

    return (
      <>
      <nav className="main-menu-wrapper">
        <ul className="main-menu">       
          <li className="main-menu">
            <button
              type="button"
              className="main-menu"
              onClick={() => handleMenuClick('home-section')}
            >
              Home
            </button>
          </li>
          <li className="main-menu">
            <button
              type="button"
              className="main-menu"
              onClick={() => handleMenuClick('work-section')}
            >
              Work Experience
            </button>
          </li>
          <li className="main-menu">
            <button
              type="button"
              className="main-menu"
              onClick={() => handleMenuClick('projects-section')}
            >
              Projects
            </button>
          </li>
          <li className="main-menu">
            <button
              type="button"
              className="main-menu"
              onClick={() => handleMenuClick('skills-section')}
            >
              Skills
            </button>
          </li>
          <li className="main-menu">
            <button
              type="button"
              className="main-menu"
              onClick={() => handleMenuClick('education-section')}
            >
              Education
            </button>
          </li>
        </ul>
      </nav>
      </>
    );

}
export default MainMenu;
