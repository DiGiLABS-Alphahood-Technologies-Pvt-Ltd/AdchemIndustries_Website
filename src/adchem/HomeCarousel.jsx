import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { slideSlick } from "./script";
import Particles from "react-particles-js";

const SlideList = [
  {
    textPosition: "text-left",
    bgImage: "bg_image--1",
    category: "",
    title: "Trust.",
    description: "Our Clients trust us for the Best quality and service.",
    buttonText: "Contact Us",
    buttonLink: "/contact-us",
  },
  {
    textPosition: "text-left",
    bgImage: "bg_image--2",
    category: "",
    title: "Quality.",
    description: "Providing the Best Quality is our responsibility.",
    buttonText: "Contact Us",
    buttonLink: "/contact-us",
  },
  {
    textPosition: "text-left",
    bgImage: "bg_image--3",
    category: "",
    title: "Assurance.",
    description: "We assure you the best service",
    buttonText: "Contact Us",
    buttonLink: "/contact-us",
  },
  {
    textPosition: "text-left",
    bgImage: "bg_image--4",
    category: "",
    title: "People.",
    description: "Made in India, Made for the World.",
    buttonText: "Contact Us",
    buttonLink: "/contact-us",
  },
  {
    textPosition: "text-left",
    bgImage: "bg_image--5",
    category: "",
    title: "RESEARCH.",
    description: "Knowledge. Identified & delivered.",
    buttonText: "Contact Us",
    buttonLink: "/contact-us",
  },
];

const HomeCarousel = (props) => {
  return (
    // <>
    <div className="slider-activation slider-creative-agency with-particles">
      <div className="frame-layout__particles">
        <Particles
          params={{
            particles: {
              number: {
                value: 75,
              },
              size: {
                value: 4,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
      <div className="slider-wrapper">
        <div className="slider-activation">
          <Slider className="rn-slick-dot" {...slideSlick}>
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
                        {/* {value.buttonText ? (
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
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    // </>
  );
};

export default HomeCarousel;
