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
    canvas: {
      canvasFillSpace: true,
      width: 800,
      height: 800,
      useBouncyWalls: true
    },
    particle: {
      particleCount: 50,
      color: '#2a2a2b',
      minSize: 2,
      maxSize: 5
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 0,
      maxSpeed: 2
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.25,
      opacityTransitionTime: 5000
    }
  }

  return (
    <div className="App">
      <MainMenu />
      <div className="background">
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
