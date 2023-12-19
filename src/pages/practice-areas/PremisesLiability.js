import React, { useState, useEffect } from "react";

import Contact from "../../../components/Contact";
import Footer from "../../../components/Footer";
import MobileMotorVehicleAccidents from "../../../components/practice-areas/MobileMotorVehicleAccidents";
import DesktopMotorVehicleAccidents from "../../../components/practice-areas/DesktopMotorVehicleAccidents";
import MobilePremisesLiability from "../../../components/practice-areas/MobilePremisesLiability";
import DesktopPremisesLiability from "../../../components/practice-areas/DesktopPremisesLiability";
export default function PresmisesLiability() {
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
        <MobilePremisesLiability />
      ) : (
        <DesktopPremisesLiability />
      )}
      <Contact />
      <Footer />
    </div>
  );
}
