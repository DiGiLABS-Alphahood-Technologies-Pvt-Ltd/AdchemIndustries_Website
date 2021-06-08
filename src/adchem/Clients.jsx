import React from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "./script";

const clientsList = [
  {
    image: "client-18",
    title: "Carlsberg Group",
  },
  {
    image: "client-1",
    title: "Officers Choice Whiskey",
  },
  {
    image: "client-2",
    title: "Radico Whiskey",
  },
  {
    image: "client-3",
    title: "Emami Menthoplus",
  },
  {
    image: "client-6",
    title: "Dabur",
  },
  {
    image: "client-8",
    title: "AC Black",
  },
  {
    image: "client-9",
    title: "Druk Pickles",
  },
  {
    image: "client-10",
    title: "SOM",
  },
  {
    image: "client-11",
    title: "Simba",
  },
  {
    image: "client-12",
    title: "Bhutan Breweries",
  },
  {
    image: "client-13",
    title: "Allied Blenders & Distillers",
  },
  {
    image: "client-14",
    title: "Associated Alcohols & Breweries",
  },
  {
    image: "client-15",
    title: "GAPL",
  },
  {
    image: "client-16",
    title: "IFB",
  },
  {
    image: "client-17",
    title: "IGL",
  },
];

const Clients = () => {
  return (
    <React.Fragment>
      <div className="clients section-title text-center service-style--3 mb--150 mb_sm--0 mt--100">
        <h2 className="title">Clients</h2>
        <p className="description">
          We are catering to the requirements of various Distilleries,
          Pharmaceutical companies, Breweries, Cosmetic and Ayurveda companies
          like ABD India Ltd., Carlsberg Group, Radico Khaitan Ltd., Emami Ltd., Dabur India
          Ltd., Bhutan Fruit Products, Deyâs Medicals Ltd. and many more
          prestigious organizations.
        </p>
        <div className="portfolio-wrapper">
          <div className="portfolio-slick-activation mt--70 mt_sm--40">
            <Slider {...portfolioSlick2}>
              {clientsList.map((value, index) => (
                <div className="portfolio" key={index}>
                  <div className="thumbnail-inner">
                    <div className={`thumbnail ${value.image}`}></div>
                    <div className={`bg-blr-image ${value.image}`}></div>
                  </div>
                  <div className="content">
                    <div className="inner">
                      <p>{value.category}</p>
                      <h4 className="text-white">{value.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Clients;
