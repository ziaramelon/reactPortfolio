
import Portfolio from "./pages/Portfolio";
import { BlogPost1 } from "./pages/BlogPost1";
import { BlogPost2 } from "./pages/BlogPost2";
import { BlogPost3 } from "./pages/BlogPost3";
import { BlogPost4 } from "./pages/BlogPost4";
import { BlogPost5 } from "./pages/BlogPost5";
import { BlogPost6 } from "./pages/BlogPost6";
import { BlogPost7 } from "./pages/BlogPost7";
import { BlogPost8 } from "./pages/BlogPost8";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Portfolio />} /> 
        <Route path='/day1' element={<BlogPost1 />} />
        <Route path='/day2' element={<BlogPost2 />} />
        <Route path='/day3' element={<BlogPost3 />} />
        <Route path='/day4' element={<BlogPost4 />} />
        <Route path='/day5' element={<BlogPost5 />} />
        <Route path='/day6' element={<BlogPost6 />} />
        <Route path='/day7' element={<BlogPost7 />} />
        <Route path='/day8' element={<BlogPost8 />} />
      </Routes>
    </div>
  );
}

export default App;
