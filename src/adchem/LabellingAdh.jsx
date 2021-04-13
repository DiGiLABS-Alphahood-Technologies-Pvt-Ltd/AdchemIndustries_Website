import React from "react";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import FlexList from "./FlexList";
import Products from "./Products";

const metalImg = (
  <img
    style={{ width: "200px" }}
    src="/assets/images/products/labelling-adh.svg"
    alt="labelling adhesive"
  />
);

const attributesListOne = [
  "Able to withstand extreme climatic conditions",
  "High sticking strength",
  "Suitable for all types of labelling machines",
  "Humidity resistant",
  "Superb labelling finish",
];

const attributesListTwo = [
  "Slip resistant",
  "Provide high coverage",
  "Colorless coating material",
  "No air bubbles or wrinkles",
  "Excellent shelf life",
];

const endUsersListOne = [
  "Distilleries",
  "Country Spirit Bottlers",
  "Breweries",
  "Pharmaceuticals",
  "Unani Products",
  "Ayurvedic Products",
  "Food Products",
  "Fruit Products",
  "Beverages [Soft Drink ]",
  "Biscuit Manufacturers",
];

const endUsersListTwo = [
  "Oil Manufacturers",
  "Cosmetics",
  "Tea Industries",
  "Carton Makers",
  "Tube Manufacturers",
  "Laminators",
  "Paper Bags [Sacks]",
  "Cone Manufacturers",
  "Vanaspati Manufacturers",
];

const list = ["Glass", "Pet", "HDPE", "LDPE", "PP", "Tin"];

const productList = [
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

const LabellingAdh = (props) => {
  return (
    <>
      <h2 className="title text-center mt--40 mb--20">Labelling Adhesives</h2>
      <div style={{ backgroundColor: "#f8f9fc" }}>
        <div className="container">
          <div className="row row--35 align-items-center pt--100 pb--100">
            <div className="col-lg-6 order-1 order-lg-1">
              <div
                style={{ border: "2px solid #20CE88", borderRadius: "5px" }}
                className="text-center pt--150 pb--150"
              >
                {metalImg}
              </div>
            </div>

            <div className="col-lg-6 order-2 order-lg-2">
              <p className="mt--50">
                We are engaged in offering superior quality Labelling Adhesive
                to the clients. The Labelling Adhesives provided by us are
                widely used as an identity maker for various applications.
                <br />
                <br />
                We also offer Labelling Adhesives in various colors and sizes
                suitable for various requirements of the clients. Also one can
                use these Labelling Adhesives for laminating, tube winding and
                flap pasting, etc.
                <br />
                <br />
                Further, we provide Labelling Adhesive at the most reasonable
                prices.
              </p>
              <div className="text-center mt--50">
                <Link>
                  <button className="rn-button-style--2 btn-solid">
                    Get Best Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="mt--50">
          <h2>Attributes</h2>
          <div className="row align-items-start center">
            <div className="col-lg-6 order-1 order-lg-1">
              <ul className="list-style--1">
                {attributesListOne.map((name, index) => {
                  return (
                    <li key={index}>
                      <FiCheck /> {name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-6 order-2 order-lg-2">
              <ul className="list-style--1">
                {attributesListTwo.map((name, index) => {
                  return (
                    <li key={index}>
                      <FiCheck /> {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt--50 pt--40 pb--40"
        style={{ backgroundColor: "#f8f9fc" }}
      >
        <div className="container">
          <h2>End Users</h2>
          <div className="row align-items-start center">
            <div className="col-lg-6 order-1 order-lg-1">
              <ul className="list-style--1">
                {endUsersListOne.map((name, index) => {
                  return (
                    <li key={index}>
                      <FiCheck /> {name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-6 order-2 order-lg-2">
              <ul className="list-style--1">
                {endUsersListTwo.map((name, index) => {
                  return (
                    <li key={index}>
                      <FiCheck /> {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt--50 mb--50 text-center">
        <h2>Ideal For Pasting</h2>
        <FlexList list={list} />
      </div>
      <div className="center">
        <Products list={productList} />
      </div>
    </>
  );
};

export default LabellingAdh;
