import MobileAboutPage from "../../components/MobileAboutPage";
import DesktopAboutPage from "../../components/DesktopAboutPage";
import MobileKingBioPage from "../../components/bio-pages/MobileKingBioPage";
import DesktopKingBioPage from "../../components/bio-pages/DesktopKingBioPage";
import HeaderBar from "../../components/HeaderBar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import {
  bodylogosrcBottomRow,
  bodylogosrcTopRow,
} from "../../components/bodylogosource";

import MobileLoystBioPage from "../../components/bio-pages/MobileLoystBioPage";
import DesktopLoystBioPage from "../../components/bio-pages/DesktopLoystBioPage";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

export default function King() {
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

  const loystTestimonialData = [
    {
      snippet: "Privilege to know...",
      content:
        "To the best lawyer I have ever had the privilege to know and have in my corner that encouraged me to not quit, give up, nor forget. Thank you very much, for settling my case and keeping in touch with me.",
      name: "Hanna Ko",
    },
    {
      snippet: "Do not be on opposite sides...",
      content:
        "I met Loyst several years ago when his client and mine were on opposite sides of a very difficult, emotion-driven employment lawsuit. Loyst and I have remained close colleagues ever since. Never, ever do I want to be on opposite sides of a case against him.",
      name: "William Becker",
    },
    {
      snippet: "6 figure settlement...",
      content:
        "My former employer asked me to do something that I knew was illegal. I’m a single mother and was scared but I quit my job because I believed it was wrong. Loyst obtained a six figure settlement for me after a mediation that lasted until midnight. I’ve never seen someone so aggressive.",
      name: "Former Human Resources Director",
    },
    {
      snippet: "Immediately vindicated...",
      content:
        "During the deposition of the harasser in my case, Loyst was so aggressive the guy actually started sweating and breathing so hard his counsel asked to take a break. I actually felt vindicated right then and there",
      name: "Former Hotel Reservationist",
    },
    {
      snippet: "Very impressed...",
      content:
        "I was very impressed with attorney Fletcher’s cross-examination skills. The defendant presented an expert to testify, but by the time attorney Fletcher finished cross-examining him, their expert was our expert. They settled just days later.",
      name: "Carl Rozatti",
    },
  ];

  return (
    <div className="body-section">
      <HeaderBar />

      {width < breakpoint ? <MobileLoystBioPage /> : <DesktopLoystBioPage />}

      <div>
        <div style={{ padding: "0 0 2rem 0", backgroundColor: "#e2e2e2" }}>
          <div
            style={{
              backgroundColor: "#e2e2e2",
              display: "flex",
              justifyContent: "center",
              border: "none",
            }}
          >
            {bodylogosrcTopRow.map((item, index) => {
              return (
                <div
                  className={
                    item.cName ===
                    "individual-testimonial-logo-container-sup-lawyer"
                      ? "individual-testimonial-logo-container-sup-lawyer"
                      : "individual-testimonial-logo-container-mobile"
                  }
                  key={index}
                >
                  <Link href={item.path}>
                    <img src={item.imgURL} />
                  </Link>
                </div>
              );
            })}
          </div>
          <div
            style={{
              backgroundColor: "#e2e2e2",
              display: "flex",
              justifyContent: "center",
              margin: "1rem;",
              border: "none",
            }}
          >
            {bodylogosrcBottomRow.map((item, index) => {
              return (
                <div
                  className={
                    item.cName ===
                    "individual-testimonial-logo-container-sup-lawyer-bottom"
                      ? "individual-testimonial-logo-container-sup-lawyer-bottom"
                      : "individual-testimonial-logo-container-mobile"
                  }
                  key={index}
                >
                  <Link href={item.path}>
                    <img src={item.imgURL} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="carousel-container" id="testimonials">
          <img
            src="https://defectattorney.com/wp-content/uploads/2022/12/testimonial-stars2.png?lm=63A0CCCF"
            style={{ width: "180px", height: "35px" }}
          />
          <p
            style={{
              fontSize: "28px",
              fontWeight: "800",
              color: "white",
              padding: "1rem",
            }}
          >
            TESTIMONIALS
          </p>

          <Carousel
            itemsToShow={1}
            showArrows={false}
            enableAutoPlay
            autoPlaySpeed={10000}
            renderPagination={({ pages, activePage, onClick }) => {
              return (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {pages.map((page) => {
                    const isActivePage = activePage === page;
                    return (
                      <div
                        key={page}
                        onClick={() => onClick(page)}
                        active={isActivePage}
                        style={
                          isActivePage
                            ? {
                                width: "12px",
                                height: "12px",
                                backgroundColor: "white",
                                borderRadius: "100%",
                                margin: "10px",
                              }
                            : {
                                width: "12px",
                                height: "12px",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "100%",
                                margin: "10px",
                              }
                        }
                      ></div>
                    );
                  })}
                </div>
              );
            }}
          >
            {loystTestimonialData.map((item, index) => {
              return (
                <div className="carousel-item" key={index}>
                  <p
                    style={{
                      color: "#C39D63",
                      padding: "1rem",
                      fontSize: "18px",
                    }}
                  >
                    <strong>{item.snippet}</strong>
                  </p>
                  <p>{item.content}</p>
                  <p style={{ padding: "2rem 0" }}>
                    <strong>{item.name}</strong>
                  </p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
