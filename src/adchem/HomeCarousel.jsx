import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { slideSlick } from "./script";

const SlideList = [
  {
    textPosition: "text-left",
    bgImage: "bg_image--33",
    category: "",
    title: "Trust.",
    description: "Our clients trust us because we provide the best.",
    buttonText: "Contact Us",
    buttonLink: "/contact-us",
  },
  {
    textPosition: "text-left",
    bgImage: "bg_image--34",
    category: "",
    title: "Quality.",
    description: "Giving the best quality to you.",
    buttonText: "Contact Us",
    buttonLink: "/contact-us",
  },
];

const HomeCarousel = (props) => {
  return (
    <>
      <div className="slider-wrapper">
        <div className="slider-activation">
          <Slider className="rn-slick-dot dot-light" {...slideSlick}>
            {SlideList.map((value, index) => (
              <div
                className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ""}
                        {value.title ? (
                          <h1 className="title">{value.title}</h1>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <p className="description">{value.description}</p>
                        ) : (
                          ""
                        )}
                        {value.buttonText ? (
                          <div className="slide-btn">
                            <Link
                              to={value.buttonLink}
                              className="rn-button-style--2 btn-solid"
                            >
                              {value.buttonText}
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeCarousel;
