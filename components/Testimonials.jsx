import React, { useState, useEffect } from "react";
import MobileTestimonials from "./MobileTestimonials";
import DesktopTestimonials from "./DeskopTestimonials";

export default function Testimonials() {
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
    <div className="header-container">
      {width < breakpoint ? <MobileTestimonials /> : <DesktopTestimonials />}
    </div>
  );
}
