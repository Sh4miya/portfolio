import React, { useState, useEffect, useCallback } from "react";
import "../style.scss";
import { useLocation, useNavigate } from "react-router-dom";

const MOBILE_NAV_MQ = "(max-width: 768px)";

function MainMenu() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    const headerOffset = 90;
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }, []);

  const handleMenuClick = useCallback(
    (sectionId) => {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(sectionId), 120);
        return;
      }
      scrollToSection(sectionId);
    },
    [location.pathname, navigate, scrollToSection]
  );

  const handleNavClick = (sectionId) => {
    handleMenuClick(sectionId);
    setMenuOpen(false);
  };

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    const closeIfDesktop = () => {
      if (!mq.matches) {
        setMenuOpen(false);
      }
    };
    mq.addEventListener("change", closeIfDesktop);
    window.addEventListener("resize", closeIfDesktop);
    return () => {
      mq.removeEventListener("change", closeIfDesktop);
      window.removeEventListener("resize", closeIfDesktop);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    if (menuOpen && mq.matches) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <div
        role="presentation"
        className={`main-menu-backdrop${menuOpen ? " is-visible" : ""}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />
      <nav className="main-menu-wrapper" aria-label="Primary">
        <button
          type="button"
          className={`main-menu-toggle${menuOpen ? " is-open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="main-menu-toggle-bar" aria-hidden />
          <span className="main-menu-toggle-bar" aria-hidden />
          <span className="main-menu-toggle-bar" aria-hidden />
          <span className="visually-hidden">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>
        </button>
        <ul
          id="primary-navigation"
          className={`main-menu${menuOpen ? " is-open" : ""}`}
        >
          <li className="main-menu">
            <button
              type="button"
              className="main-menu"
              onClick={() => handleNavClick("home-section")}
            >
              Home
            </button>
          </li>
          <li className="main-menu">
            <button
              type="button"
              className="main-menu"
              onClick={() => handleNavClick("work-section")}
            >
              Work Experience
            </button>
          </li>
          <li className="main-menu">
            <button
              type="button"
              className="main-menu"
              onClick={() => handleNavClick("projects-section")}
            >
              Projects
            </button>
          </li>
          <li className="main-menu">
            <button
              type="button"
              className="main-menu"
              onClick={() => handleNavClick("skills-section")}
            >
              Skills
            </button>
          </li>
          <li className="main-menu main-menu-cta-item">
            <button
              type="button"
              className="main-menu main-menu-cta"
              onClick={() => handleNavClick("contact-section")}
            >
              Work With Me
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default MainMenu;
