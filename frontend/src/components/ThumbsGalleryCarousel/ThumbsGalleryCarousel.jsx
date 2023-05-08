import React, { useState } from "react";
import "./ThumbsGalleryCarousel.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={image.image} alt={`Slide ${index}`} />
            </div>
          ))
        ) : (
          <div className="carousel-slide active">
            <img src="https://cdn.houseviet.vn/images/no-image.jpg" alt="" />
          </div>
        )}
      </div>
      {images.length > 0 ? (
        <div className="carousel-nav">
          <button className="prev-button" onClick={prevSlide}>
            &lang;
          </button>
          <button className="next-button" onClick={nextSlide}>
            &rang;
          </button>
        </div>
      ) : null}

      <div className="carousel-thumbnails">
        {images.length > 0
          ? images.map((image, index) => (
              <div
                key={index}
                className={`carousel-thumbnail ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={image.image} alt={`Thumbnail ${index}`} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Carousel;
