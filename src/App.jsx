import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Documentation from "./pages/Documentation/Documentation.jsx";
import Tools from "./pages/Tools/Tools.jsx";
import "./index.scss";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
