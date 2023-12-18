import Link from "next/link";
import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { testimonialData } from "./testimonialsData";
import { bodylogosrcTopRow, bodylogosrcBottomRow } from "./bodylogosource";

const CarouselItem = ({ title, content }) => (
  <div className="carousel-item">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

export default function DesktopTestimonials({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, 3000); // Change the interval time as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ backgroundColor: "#e2e2e2" }}>
      <div
        style={{
          padding: "0 0 2rem 10rem",
          backgroundColor: "#e2e2e2",
        }}
      >
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
                    : "individual-testimonial-logo-container"
                }
                key={index}
                style={{ padding: "0 3.7rem 0 3.7rem" }}
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
                  "individual-testimonial-logo-container-sup-lawyer-bottom-desktop"
                    ? "individual-testimonial-logo-container-sup-lawyer-bottom-desktop"
                    : "individual-testimonial-logo-container"
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
          autoPlaySpeed={5000}
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
          {testimonialData.map((item, index) => {
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
  );
}
