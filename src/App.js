import React, { useEffect } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import MainMenu from './components/MainMenu';
import Home from './components/Home';
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
            <Route path="/Projects" element={<Home />} />
            <Route path="/Experience" element={<Home />} />
            <Route path="/Skills" element={<Home />} />
            <Route path="/Education" element={<Home />} />
            <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
