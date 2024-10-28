import React, { useState, useEffect } from "react";

import MobileWrongfulDeath from "../../../components/practice-areas/MobileWrongfulDeath";
import DesktopWrongfulDeath from "../../../components/practice-areas/DesktopWrongfulDeath";
import Contact from "../../../components/Contact";
import Footer from "../../../components/Footer";
import MobileMotorVehicleAccidents from "../../../components/practice-areas/MobileMotorVehicleAccidents";
import DesktopMotorVehicleAccidents from "../../../components/practice-areas/DesktopMotorVehicleAccidents";
export default function MotorVehicleAccidents() {
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
        <MobileMotorVehicleAccidents />
      ) : (
        <DesktopMotorVehicleAccidents />
      )}
      <Contact />
      <Footer />
    </div>
  );
}
