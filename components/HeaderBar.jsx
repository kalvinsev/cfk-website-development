import React, { useState, useEffect } from "react";
import DesktopHomeBody from "../components/DesktopHomeBody";
import MobileHomeBody from "./MobileHomeBody";
import MobileHeaderBar from "./MobileHeaderBar";
import DesktopHeaderBar from "./DesktopHeaderBar";
export default function HeaderBar() {
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
      {width < breakpoint ? <MobileHeaderBar /> : <DesktopHeaderBar />}
    </div>
  );
}
