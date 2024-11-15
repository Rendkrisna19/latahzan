import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Team from "./pages/Team";
import Media from "./pages/Media";
import Shop from "./pages/Shop";
import MavsTV from "./pages/MavsTV";
import MavsInsider from "./pages/MavsInsider";
import Partner from "./components/Partner";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Halaman utama yang memuat Hero, Partner, dan Blog */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Partner />
              
            </>
          }
        />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/team" element={<Team />} />
        <Route path="/media" element={<Media />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mavstv" element={<MavsTV />} />
        <Route path="/mavsinsider" element={<MavsInsider />} />
      </Routes>
    </Router>
  );
};

export default App;
