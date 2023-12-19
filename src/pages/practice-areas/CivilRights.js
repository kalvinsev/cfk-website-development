import React, { useState, useEffect } from "react";

import MobileCivilRights from "../../../components/practice-areas/MobileCivilRights";
import DesktopCivilRights from "../../../components/practice-areas/DesktopCivilRIghts";
import Header from "../../../components/Header";
import Testimonials from "../../../components/Testimonials";
import Contact from "../../../components/Contact";
import Footer from "../../../components/Footer";
export default function CivilRights() {
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
      {width < breakpoint ? <MobileCivilRights /> : <DesktopCivilRights />}
      <Contact />
      <Footer />
    </div>
  );
}
