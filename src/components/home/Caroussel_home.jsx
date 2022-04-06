import React from "react";
import { NavLink } from "react-router-dom";
import { Slide } from "react-slideshow-image";
// import tst from "../../assets/test.png";

const slideImages = [
  {
    url: "https://i.ibb.co/6PMcHWK/test.png",
  },
  {
    url: "https://i.ibb.co/6PMcHWK/test.png",
  },
  {
    url: "https://i.ibb.co/3rD7r7G/test-1.png",
  },
];

function Caroussel_home() {
  return (
    <div className="slide-container">
      <div className="light">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <NavLink exact="true" to="/project">
              <div className="each-slide" key={index}>
                <div
                  className="slide_container_img"
                  style={{ backgroundImage: `url(${slideImage.url})` }}
                >
                  {/* <span>{slideImage.caption}</span> */}
                </div>
              </div>
            </NavLink>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Caroussel_home;
