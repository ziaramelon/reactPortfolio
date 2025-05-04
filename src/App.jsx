// import Hero from "./pages/Hero";
// import Header from "./components/Header";
// import About from './pages/About';
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Portfolio from "./pages/Portfolio";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      /> */}
      <Routes>
        <Route path="/" element={<Portfolio />} />
        {/* <Route path='/' element={<Hero />} /> */}
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
