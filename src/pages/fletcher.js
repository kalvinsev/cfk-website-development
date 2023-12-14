import React, { useState, useEffect } from "react";
import MobileAboutPage from "../../components/MobileAboutPage";
import DesktopAboutPage from "../../components/DesktopAboutPage";
export default function Fletcher() {
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
      {/* {width < breakpoint ? <MobileAboutPage /> : <DesktopAboutPage />} */}
    </div>
  );
}
