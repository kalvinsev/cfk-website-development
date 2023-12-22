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

  const kingTestimonialData = [
    {
      snippet: "Stephen is the G.O.A.T...",
      content:
        "Coming in as a first time offender, I was nervous and naive. But Stephen took the time to listen, not to reply. He listens to understand. He gave me very detailed explanations of my entire situation and worked with me every step of the way. Highly recommend his services!",
      name: "Jamal Stewart",
    },
    {
      snippet: "Stephen is the G.O.A.T...",
      content:
        "Coming in as a first time offender, I was nervous and naive. But Stephen took the time to listen, not to reply. He listens to understand. He gave me very detailed explanations of my entire situation and worked with me every step of the way. Highly recommend his services!",
      name: "Doma Morris",
    },
    {
      snippet: "Attention to detail...",
      content:
        "Stephen A. King is committed to providing his clients with the best legal representation available, while also providing the level of attention to detail that we as clients expect and deserve.",

      name: "Michelle Egberts",
    },
    {
      snippet: "Highly recommended...",
      content:
        "Outstanding attorney, will go above and beyond for you and your loved ones. Kings Justice Law, I highly recommend.",
      name: "Greg Allen",
    },
  ];

  return (
    <div className="body-section">
      <HeaderBar />
      {width < breakpoint ? <MobileKingBioPage /> : <DesktopKingBioPage />}
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
              margin: "1rem",
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
                  style={{}}
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
            {kingTestimonialData.map((item, index) => {
              if(item.name === "Jamal Stewart"){
                return(
                 <div className="carousel-item" key={index}>
                   <video src="/static/images/Testimonial_01.mp4"  height="320" width="240" controls>Video not supported</video>
                  <p style={{ padding: "2rem 0" }}>
                    <strong>{item.name}</strong>
                  </p>
                 </div>
                );
              } else {
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
              );}
            })}
          </Carousel>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
