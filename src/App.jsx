import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BrandGuide from "./pages/BrandGuide";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brand-guide" element={<BrandGuide />} />
    </Routes>
  );
}