import React, { useState, useEffect } from "react";
import MobileTMF from "./MobileTMF";
import DesktopTMF from "./DesktopTMF";
export default function TMF() {
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
    <div className="tmf-container">
      {width < breakpoint ? <MobileTMF /> : <DesktopTMF />}
    </div>
  );
}
