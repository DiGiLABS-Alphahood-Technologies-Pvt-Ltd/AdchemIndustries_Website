import React from "react";
import Para from "./Para";
import BeliefComponent from "./BeliefComponent";
import CountryList from "./CountryList";

// import networkIcon from "/assets/images/belief-icons/network.svg";
// // import badgeIcon from "/assets/images/belief-icons/badge.svg";
// import researchIcon from "/assets/images/belief-icons/research.svg";
// import conceptIcon from "/assets/images/belief-icons/concept.svg";
// import technicalSupportIcon from "/assets/images/belief-icons/technical-support.svg";

const beliefsList = [
  {
    title: "People",
    img: (
      <img
        className="belief-img"
        src="/assets/images/belief-icons/network.svg"
        alt=""
      />
    ),
  },
  {
    title: "Quality",
    img: (
      <img
        className="belief-img"
        src="/assets/images/belief-icons/badge.svg"
        alt=""
      />
    ),
  },
  {
    title: "Innovation & Research",
    img: (
      <img
        className="belief-img"
        src="/assets/images/belief-icons/research.svg"
        alt=""
      />
    ),
  },
  {
    title: "Application & Research",
    img: (
      <img
        className="belief-img"
        src="/assets/images/belief-icons/concept.svg"
        alt=""
      />
    ),
  },
  {
    title: "Service & Price",
    img: (
      <img
        className="belief-img"
        src="/assets/images/belief-icons/technical-support.svg"
        alt=""
      />
    ),
  },
];

const beliefs = (
  <div className="">
    <div className="belief-container">
      {beliefsList.map((item) => {
        return <BeliefComponent img={item.img} title={item.title} />;
      })}
    </div>
  </div>
);

const AboutUsPage = (props) => {
  const bgImage = (
    <img src="/assets/images/about/about-us-bg.png" className="bg-img" alt="" />
  );

  return (
    <div className="about-us-page">
      <div className="bg">
        {bgImage}
        <h1 className="positioned heading" style={{ color: "white" }}>
          Building future
          <br />
          <div className="green-text">since 1983</div>
          <button className="rn-button-style--2 btn-solid">Contact Us</button>
        </h1>
      </div>
      <div className="mb--100">
        <Para
          align="center"
          title="About Us"
          description={
            <p>
              Adchem Industries was established in the year, 1983 by Mr. Samir
              Dey and is located in Kolkata, West Bengal. Now under the able
              guidance and proficient management skills of our honorable CEO,
              Mr. Samir Dey, we are scaling new heights of success in all
              business endeavors. De has a vast experience of approximately 35
              years that has enabled us to cover a huge market share across the
              globe.
            </p>
          }
        />
      </div>

      <div style={{ backgroundColor: "#f8f9fc" }}>
        <div className="container">
          <div className="row row--35 align-items-start pt--100 pb--100">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Infrastructure</h2>
                <p className="description">
                  {" "}
                  Our robust infrastructure is spread over an area of 1 Acre and
                  is equipped with technologically advanced machinery and
                  equipment. We have established the latest machinery at our
                  infrastructural base whose overall production capacity is 4
                  ton per day. Consequently, our infrastructural unit plays a
                  vital role in our growth and development.{" "}
                </p>
              </div>
              <div className="section-title text-left mtb--80">
                <h2 className="title">Quality Assurance</h2>
                <p className="description">
                  {" "}
                  Quality is the main concern of our company. All the products
                  that we manufacture are checked and tested in our well
                  equipped Modern Laboratory assuring superior products to the
                  clients. Also, we have separate R&D unit in which we develop
                  the best formulations for all our products. We ensure delivery
                  of flawless product to the clients end satisfying them utmost.{" "}
                </p>
              </div>
              <div className="form-wrapper"></div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src="/assets/images/about/bottle-testtube.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb--100">
        <Para
          title="Vision & Mission"
          align="right"
          description={
            <p>
              We shall offer world class adhesives products at competitive terms
              and strive for exceeding customer's expectations by delivering
              added advantages.
              <br />
              <br />
              The company aim to be a market leader through supplies of
              adhesives, coatings, and other packaging related materials at
              competitive price, high quality with innovative application
              support and timely service to our customers worldwide.
            </p>
          }
        />
      </div>

      <div className="pt--5" style={{ backgroundColor: "#f8f9fc" }}>
        <Para title="Beliefs" description={beliefs} />
      </div>
      <div className="mb--50">
        <Para title="Network" align="right" />
        <img
          style={{ width: "100%" }}
          src="/assets/images/about/map.png"
          alt="map"
        />
        <div className="container mt--50">
          <CountryList />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
