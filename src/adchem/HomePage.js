import React, { Component, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import BlogContent from "../elements/blog/BlogContent";
import Header from "../component/header/HeaderFive";
import FooterTwo from "../component/footer/FooterTwo";
import CallAction from "../elements/callaction/CallAction";
import Team from "../blocks/team/TeamTwo";
import Accordion01 from "../elements/Accordion";
import Helmet from "../component/common/Helmet";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiChevronUp,
  FiCheck,
} from "react-icons/fi";
import CounterOne from "../elements/counters/CounterOne";
import BrandOne from "../elements/Brand";
import HomeIconList from "./HomeIconList";
import ContactOne from "./ContactOne";
import Clients from "./Clients";

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

const productList = [
  {
    image: "image-1",
    title: "Labelling Adhesives",
    url: "/products/labelling-adhesibes",
  },
  {
    image: "image-2",
    title: "Metal Pre-Treatment Chemicals",
    url: "/products/metal-chemicals",
  },
  {
    image: "image-3",
    title: "Wood Adhesives",
    url: "/products/wood-adhesives",
  },
];

const HomePage = (props) => {
  const [input, setInput] = useState({});

  const inputChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(input);
  };

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
                            <a
                              className="rn-button-style--2 btn-solid"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a>
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
      <div style={{ marginTop: "7rem" }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
              <h2 className="title">Welcome to ADCHEM industries</h2>
              <p className="description">
                Adchem Industries has emerged as an ideal destination for
                getting Industrial Adhesives and Phosphating Chemicals. Clients
                can avail Wood Adhesive, Labelling Adhesive and Metal
                Pretreatment Chemicals from us. With the superior grade
                Adhesives and Metal Pretreatment Chemicals, we have made a
                remarkable presence in the global market. We lay utmost stress
                on the quality of all our products.
                <br />
                Adopting ethical business practices, we have garnered a huge
                list of clients in both national and international markets.
                Furthermore, owing to vast experience of more than 30 years, we
                have carved a niche as a pre-eminent Labelling Adhesive, Wood
                Adhesive Manufacturer, Exporter and Supplier located in India.
                Adhering to strict quality norms and international standards, we
                provide world class Labelling Adhesives to the clients. Besides,
                we believe that customer satisfaction is the appreciation of our
                firm.
              </p>
            </div>
          </div>
        </div>
      </div>
      <HomeIconList column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
      <div style={{ textAlign: "center", marginBottom: "5rem" }}>
        <Link className="rn-btn" to="/adchem/about-us">
          <span>Learn More</span>
        </Link>
      </div>
      <div className="pt--40 pb--80" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
          <h2 className="title">Product</h2>
          <p className="description">
            The products offered by us include various Wood Adhesive, Labelling
            Adhesives and Metal Pretreatment Chemicals.
          </p>
        </div>

        <div className="row ml--50 mr--50">
          {productList.map((value, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 mt--40"
              key={index}
            >
              <div className="portfolio">
                <div className="thumbnail-inner">
                  <div className={`thumbnail ${value.image}`}></div>
                  <div className={`bg-blr-image ${value.image}`}></div>
                </div>
                <div className="content">
                  <div className="inner">
                    <p className="description">{value.category}</p>
                    <h4>
                      <a href="/portfolio-details">{value.title}</a>
                    </h4>
                    <div className="portfolio-button">
                      <Link className="rn-btn" to={value.url}>
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="clients section-title text-center service-style--3 mb--150 mb_sm--0 mt--100">
        <h2 className="title">Clients</h2>
        <p className="description">
          We are catering to the requirements of various Distilleries,
          Pharmaceutical companies, Breweries, Cosmetic and Ayurveda companies
          like ABD India Ltd., Radico Khaitan Ltd., Emami Ltd., Dabur India
          Ltd., Bhutan Fruit Products, Deyâs Medicals Ltd. and many more
          prestigious organizations.
        </p>
        <Clients />
      </div>
      <ContactOne />
    </>
  );
};

export default HomePage;
