import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Lenis from "lenis";

import App from "./App";

import "./styles/index.css";

/* =========================================
   SMOOTH SCROLL
========================================= */

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,

      smoothWheel: true,

      wheelMultiplier: 0.9,

      touchMultiplier: 1,

      syncTouch: true,

      infinite: false,

      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

/* =========================================
   APP START
========================================= */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <SmoothScroll />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);