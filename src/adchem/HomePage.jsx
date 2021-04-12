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
import Para from "./Para";
import Products from "./Products";
import HomeCarousel from "./HomeCarousel";

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
      <HomeCarousel />

      <Para
        align="center"
        title="Welcome to ADCHEM industries"
        description={
          <p className="description">
            Adchem Industries has emerged as an ideal destination for getting
            Industrial Adhesives and Phosphating Chemicals. Clients can avail
            Wood Adhesive, Labelling Adhesive and Metal Pretreatment Chemicals
            from us. With the superior grade Adhesives and Metal Pretreatment
            Chemicals, we have made a remarkable presence in the global market.
            We lay utmost stress on the quality of all our products. Adopting
            ethical business practices, we have garnered a huge list of clients
            in both national and international markets. Furthermore, owing to
            vast experience of more than 30 years, we have carved a niche as a
            pre-eminent Labelling Adhesive, Wood Adhesive Manufacturer, Exporter
            and Supplier located in India. Adhering to strict quality norms and
            international standards, we provide world class Labelling Adhesives
            to the clients. Besides, we believe that customer satisfaction is
            the appreciation of our firm.
          </p>
        }
      />
      <HomeIconList column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
      <div style={{ textAlign: "center", marginBottom: "5rem" }}>
        <Link className="rn-btn" to="/adchem/about-us">
          <span>Learn More</span>
        </Link>
      </div>

      <Products />

      <Clients />

      <ContactOne />
    </>
  );
};

export default HomePage;
