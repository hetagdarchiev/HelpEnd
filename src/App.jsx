import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import "./index.scss";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Documentation from "./pages/Documentation/Documentation.jsx";
import Tools from "./pages/Tools/Tools.jsx";

import Animation from "./pages/Tools/components/AnimationCss/AnimationCss";
import PxToRem from "./pages/Tools/components/PxToRem/PxToRem.jsx";
import BorderRadius from "./pages/Tools/components/BorderRadiusCss/BorderRadiusCss";
import CubicBezie from "./pages/Tools/components/CubicBezie/CubicBezie.jsx";
import ShadowGeneratorCss from "./pages/Tools/components/ShadowGeneratorCss/ShadowGeneratorCss.jsx";

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

          <Route path="/borderRadius" element={<BorderRadius />} />
          <Route path="/pxToRem" element={<PxToRem />} />
          <Route path="/animationCss" element={<Animation />} />
          <Route path="/cubicBezie" element={<CubicBezie />} />
          <Route path="/shadowGenerator" element={<ShadowGeneratorCss />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
