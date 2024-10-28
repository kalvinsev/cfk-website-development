import React, { useState, useEffect } from "react";

import DesktopPoliceBrutality from "../../../components/practice-areas/DesktopPoliceBrutality";
import MobilePoliceBrutality from "../../../components/practice-areas/MobilePoliceBrutality";
import Contact from "../../../components/Contact";
import Footer from "../../../components/Footer";
export default function PoliceBrutality() {
  const breakpoint = 700;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="body-section">
      {width < breakpoint ? (
        <MobilePoliceBrutality />
      ) : (
        <DesktopPoliceBrutality />
      )}

      <Contact />
      <Footer />
    </div>
  );
}
