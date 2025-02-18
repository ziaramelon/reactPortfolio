import Hero from "./pages/Hero";
import Header from "./components/Header";
import About from './pages/About';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
