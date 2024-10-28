import React, { useState, useEffect } from "react";
import Contact from "../../../components/Contact";
import Footer from "../../../components/Footer";
import MobileWhiteCollarCriminalDefense from "../../../components/practice-areas/MobileWhiteCollarCriminalDefense";
import DesktopWhiteCollarCriminalDefense from "../../../components/practice-areas/DesktopWhiteCollarCriminalDefense";
export default function WhiteCollarCriminalDefense() {
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
        <MobileWhiteCollarCriminalDefense />
      ) : (
        <DesktopWhiteCollarCriminalDefense />
      )}
      <Contact />
      <Footer />
    </div>
  );
}
