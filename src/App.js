import React, { useEffect } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import MainMenu from './components/MainMenu';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <MainMenu />
      <div className="background-animation"></div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
