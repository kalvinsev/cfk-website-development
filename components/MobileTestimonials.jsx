import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
const data = [
  {
    title: "Title 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Title 2",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 3",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    title: "Title 3",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000); // Change the interval time as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Carousel
      itemsToShow={1}
      showArrows={false}
      enableAutoPlay
      autoPlaySpeed={5000}
    >
      {data.map((item, index) => {
        return (
          <div className="carousel-item" key={index}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        );
      })}
    </Carousel>
  );
}
