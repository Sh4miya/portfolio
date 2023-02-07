import {React} from "react";
import '../style.scss';


function MainMenu() {

    return (
      <>
      <ul className="main-menu">
        <li className="main-menu"><a className="main-menu main-menu-active" href="/portfolio/#/home">Home</a></li>
        <li className="main-menu"><a className="main-menu main-menu-active" href="/portfolio/#/projects">Projects</a></li>
        <li className="main-menu"><a className="main-menu main-menu-active" href="/portfolio/#/skills">Skills</a></li>
      </ul>
        {/* <div className="flex-container-main-menu links">
              <a className="main-menu" href='/home'>Home</a>
              <a className="main-menu" href='/portfolio'>Portfolio</a>
              <a className="main-menu" href='/skills'>Skills</a>
        </div> */}
      </>
    );

}
export default MainMenu;