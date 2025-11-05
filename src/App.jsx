// src/App.js (Final with all routes)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

// Project Category Pages
import Commercial from './pages/Projects/Commercial';
import Manufacturing from './pages/Projects/Manufacturing';
import Industrial from './pages/Projects/Industrial';
import Residential from './pages/Projects/Residential';
import SportsLeisure from './pages/Projects/SportsLeisure';
import Warehousing from './pages/Projects/Warehousing';

import Workshops from './pages/Projects/Workshops';
import AutoDealerships from './pages/Projects/AutoDealerships';
import FoodBeverage from './pages/Projects/FoodBeverage';
import LogisticAreas from './pages/Projects/LogisticAreas';
import Retail from './pages/Projects/Retail';
import Agriculture from './pages/Projects/Agriculture';
import Aviation from './pages/Projects/Aviation';
import Education from './pages/Projects/Education';
import HospitalityLeisure from './pages/Projects/HospitalityLeisure';
import Others from './pages/Projects/Others';
import VideoReel from './pages/VideoReel';
import ex from "./assets/ex.mp4"
// import './App.css';

function AnimatedRoutes() {
  const location = useLocation();
  const companyVideo = {
    src: ex,
    
  };
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Project Category Pages */}
        {/* <Route path="/video-reel" element={
          <VideoReel video={companyVideo} />
        } /> */}
        <Route path="/projects/commercial" element={<Commercial />} />
        <Route path="/projects/manufacturing" element={<Manufacturing />} />
        <Route path="/projects/industrial" element={<Industrial />} />
        <Route path="/projects/residential" element={<Residential />} />
        <Route path="/projects/sports-leisure" element={<SportsLeisure />} />
        <Route path="/projects/warehousing" element={<Warehousing />} />
        <Route path="/projects/workshops" element={<Workshops />} />
        <Route path="/projects/auto-dealerships" element={<AutoDealerships />} />
        <Route path="/projects/food-beverage" element={<FoodBeverage />} />
        <Route path="/projects/logistic-areas" element={<LogisticAreas />} />
        <Route path="/projects/retail" element={<Retail />} />
        <Route path="/projects/agriculture" element={<Agriculture />} />
        <Route path="/projects/aviation" element={<Aviation />} />
        <Route path="/projects/education" element={<Education />} />
        <Route path="*" element={<Navigate to={"/"}/>} />
        <Route path="/projects/hospitality-leisure" element={<HospitalityLeisure />} />
        <Route path="/projects/others" element={<Others />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;