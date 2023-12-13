import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { testimonialData } from "./testimonialsData";

const CarouselItem = ({ title, content }) => (
  <div className="carousel-item">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

export default function MobileTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, 3000); // Change the interval time as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
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
        autoPlaySpeed={4000}
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
                style={{ color: "#C39D63", padding: "1rem", fontSize: "18px" }}
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
  );
}
