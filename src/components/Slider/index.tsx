import React from "react";

import ArrowRight from "../../components/icons/ArrowRight";
import ArrowLeft from "../../components/icons/ArrowLeft";
import "./style.scss";
import image from "../../assets/images/sneaker.png";
const photos = [image, image, image, image, image, image];

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-grid">
        <div className="photos">
          {photos.map((photo) => (
            <div className="photo">
              <img src={photo} />
            </div>
          ))}
        </div>
        <div className="selected-photo">
          <img src={image} />
        </div>
      </div>
      <div className="control">
        <div className="left">
          <ArrowLeft />
        </div>
        <div className="right">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
