import {React} from 'react';
import { HashRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import MainMenu from './components/MainMenu';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import ParticleBackground from 'react-particle-backgrounds';
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation();

  const settings = {
    particle: {
      particleCount: 150,
      color: '#fff',
      maxSize: 3
    },
    velocity: {
      directionAngle: 180,
      directionAngleVariance: 60,
      minSpeed: 0.1,
      maxSpeed: 0.3
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.4,
      opacityTransitionTime: 10000
    }
  }

  return (
    <div className="App">
      <MainMenu />
      <div className="background-animation">
        <ParticleBackground settings={settings} />
      </div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Projects" element={<Projects />} />
            <Route exact path="/Education" element={<Education />} />
            <Route exact path="/Skills" element={<Skills />} />
            <Route exact path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
