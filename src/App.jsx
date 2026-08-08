import { Routes, Route } from "react-router-dom";

import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import BrandGuide from "./pages/BrandGuide";

export default function App() {
  return (
    <>
      <Intro />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand-guide" element={<BrandGuide />} />
      </Routes>
    </>
  );
}