import React from "react";
import "./Images_slide.css";
function Images_slide({ images }) {
  return (
    <section className="container">
      {images?.map((image, index) => (
        <span className="image">
          <img
            className="Img_slide"
            src={image.url}
            key={index}
            loading="lazy"
          />
        </span>
      ))}
    </section>
  );
}

export default Images_slide;
