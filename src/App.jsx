import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";


// ============================================
// LAZY LOADED PAGES
// ============================================

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const BrandGuide = lazy(() => import("./pages/BrandGuide"));


// ============================================
// PAGE LOADER
// ============================================

const PageLoader = () => {
  return (
    <div className="page-loader">
      <span>Loading...</span>
    </div>
  );
};


// ============================================
// APP
// ============================================

export default function App() {
  return (
    <>
      <Intro />

      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/brand-guide"
            element={<BrandGuide />}
          />

        </Routes>
      </Suspense>
    </>
  );
}