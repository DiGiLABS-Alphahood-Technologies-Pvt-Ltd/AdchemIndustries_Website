import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "./script";

const clientsList = [
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
    image: "client-4",
    title: " Original Choice Whiskey",
  },
  {
    image: "client-5",
    title: "Navratna Oil",
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
];

class Clients extends Component {
  render() {
    return (
      <React.Fragment>
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
                      <h4>
                        <a>{value.title}</a>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Clients;
