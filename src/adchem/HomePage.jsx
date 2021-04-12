import React from "react";
import { Link } from "react-router-dom";
import HomeIconList from "./HomeIconList";
import ContactUs from "./ContactUs";
import Clients from "./Clients";
import Para from "./Para";
import Products from "./Products";
import HomeCarousel from "./HomeCarousel";

const HomePage = (props) => {
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

      <ContactUs />
    </>
  );
};

export default HomePage;
