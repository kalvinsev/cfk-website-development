import React, { useState, useEffect } from "react";
import Contact from "../../../components/Contact";
import Footer from "../../../components/Footer";
import MobileCriminalLaw from "../../../components/practice-areas/MobileCriminalLaw";
import DesktopWhiteCollarCriminalDefense from "../../../components/practice-areas/DesktopWhiteCollarCriminalDefense";
export default function CriminalDefense() {
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
        <MobileCriminalLaw />
      ) : (
        <DesktopWhiteCollarCriminalDefense />
      )}
      <Contact />
      <Footer />
    </div>
  );
}
