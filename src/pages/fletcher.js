import React, { useState, useEffect } from "react";
import MobileAboutPage from "../../components/MobileAboutPage";
import DesktopAboutPage from "../../components/DesktopAboutPage";
import MobileLoystBioPage from "../../components/bio-pages/MobileLoystBioPage";
import DesktopLoystBioPage from "../../components/bio-pages/DesktopLoystBioPage";
import HeaderBar from "../../components/HeaderBar";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
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
      <HeaderBar />
      {width < breakpoint ? <MobileLoystBioPage /> : <DesktopLoystBioPage />}
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
