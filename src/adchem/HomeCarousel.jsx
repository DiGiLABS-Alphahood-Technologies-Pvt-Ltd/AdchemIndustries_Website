import React from "react";
import {useCallback} from "react";
import Particles from "react-tsparticles";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import {slideSlick} from "./script";
import {loadFull} from "tsparticles";

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

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <>
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
                    <Particles className={"particles"}
                               id="tsparticles"
                               init={particlesInit}
                               loaded={particlesLoaded}
                               options={{
                                   "particles": {
                                       "number": {
                                           "value": 80,
                                           "density": {
                                               "enable": true,
                                               "value_area": 800
                                           }
                                       },
                                       "color": {
                                           "value": "#ffffff"
                                       },
                                       "shape": {
                                           "type": "circle",
                                           "stroke": {
                                               "width": 0,
                                               "color": "#000000"
                                           },
                                           "polygon": {
                                               "nb_sides": 5
                                           },
                                           "image": {
                                               "src": "img/github.svg",
                                               "width": 100,
                                               "height": 100
                                           }
                                       },
                                       "opacity": {
                                           "value": 0.5,
                                           "random": false,
                                           "anim": {
                                               "enable": false,
                                               "speed": 1,
                                               "opacity_min": 0.1,
                                               "sync": false
                                           }
                                       },
                                       "size": {
                                           "value": 3,
                                           "random": true,
                                           "anim": {
                                               "enable": false,
                                               "speed": 40,
                                               "size_min": 0.1,
                                               "sync": false
                                           }
                                       },
                                       "line_linked": {
                                           "enable": true,
                                           "distance": 150,
                                           "color": "#ffffff",
                                           "opacity": 0.4,
                                           "width": 1
                                       },
                                       "move": {
                                           "enable": true,
                                           "speed": 6,
                                           "direction": "none",
                                           "random": false,
                                           "straight": false,
                                           "out_mode": "out",
                                           "bounce": false,
                                           "attract": {
                                               "enable": false,
                                               "rotateX": 600,
                                               "rotateY": 1200
                                           }
                                       }
                                   },
                                   "interactivity": {
                                       "detect_on": "canvas",
                                       "events": {
                                           "onhover": {
                                               "enable": true,
                                               "mode": "repulse"
                                           },
                                           "onclick": {
                                               "enable": true,
                                               "mode": "push"
                                           },
                                           "resize": true
                                       },
                                       "modes": {
                                           "grab": {
                                               "distance": 400,
                                               "line_linked": {
                                                   "opacity": 1
                                               }
                                           },
                                           "bubble": {
                                               "distance": 400,
                                               "size": 40,
                                               "duration": 2,
                                               "opacity": 8,
                                               "speed": 3
                                           },
                                           "repulse": {
                                               "distance": 200,
                                               "duration": 0.4
                                           },
                                           "push": {
                                               "particles_nb": 4
                                           },
                                           "remove": {
                                               "particles_nb": 2
                                           }
                                       }
                                   },
                                   "retina_detect": true,
                               }}
                    />
                </div>
            </div>
        </>
    );
}

export default HomeCarousel;
