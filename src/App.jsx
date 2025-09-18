import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Gradient from "./pages/Tools/components/GradientGenerator/GradientGenerator.jsx";
import Flex from "./pages/Tools/components/Flex/Flex.jsx";
import ScssFunc from "./pages/Tools/components/ScssFunctions/ScssFunctions.jsx";
import ScssMixin from "./pages/Tools/components/ScssMixins/ScssMixins.jsx";
function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />

          <Route path="/borderRadius" element={<BorderRadius />} />
          <Route path="/pxToRem" element={<PxToRem />} />
          <Route path="/animationCss" element={<Animation />} />
          <Route path="/cubicBezie" element={<CubicBezie />} />
          <Route path="/shadowGenerator" element={<ShadowGeneratorCss />} />
          <Route path="/gradientGenerator" element={<Gradient />} />
          <Route path="/flexGenerator" element={<Flex />} />
          <Route path="/funcScss" element={<ScssFunc />} />
          <Route path="/mixinsScss" element={<ScssMixin />} />
        </Routes>
      </HashRouter>
    </>
  );
}
export default App;
