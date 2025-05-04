
import Portfolio from "./pages/Portfolio";
import { BlogPost1 } from "./pages/BlogPost1";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Portfolio />} /> 
        <Route path='/day1' element={<BlogPost1 />} />
        {/* <Route path='/' element={<Hero />} /> */}
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
