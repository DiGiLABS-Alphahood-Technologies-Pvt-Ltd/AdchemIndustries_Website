import React from "react";
import Slider from "react-slick";
import Backdrop from "@material-ui/core/Backdrop";
import FlexList from "./FlexList";
import Products from "./Products";
import { slideSlick } from "./script";
import { FiCheck } from "react-icons/fi";

const metalImg = (
  <img
    style={{ width: "200px" }}
    src="/assets/images/products/wood-adh.svg"
    alt="labelling adhesive"
  />
);

const list = [
  "Excellent Coverage",
  "Minimum Bonding Time",
  "Permanent Bonding",
];

const productList = [
  {
    image: "labelling-adh",
    title: "Labelling Adhesives",
    url: "/products/labelling-adh",
  },
  {
    image: "metal-chem",
    title: "Metal Pre-Treatment Chemicals",
    url: "/products/metal-chem",
  },
];

const slideList = [
  {
    title: "ADBOND MARINE D3",
    detail:
      "IT’S A PREMIUM GRADE PURE PVA BASED ADHESIVE WITH WATERPROFFING PROPERTIES.MARINE D3 HAS LOW VISCOCITY WHICH HELPS FOR ROLLER AND SPRAYABLE APPLICATION.",
  },
  {
    title: "ADBOND MARINE BOND",
    detail:
      "IT’S A PREMIUM GRADE PURE PVA BASED ADHESIVE WITH WATERPROFFING PROPERTIES. IT HAS SLIGHTLY HIGH VISCOSITY FOR MANUAL APPLICATION.",
  },
  {
    title: "ADBOND GOLD",
    detail:
      "D2 CATEGORY PURE PVA BASED ADHESIVE WITH HIGH SOLID. SLIGHTLY HIGHER VISCOUS THAN FEVICOL SH. IT COMES IN PREMIUM CATEGORY.",
  },
  {
    title: "ADBOND SH",
    detail:
      "D2 CATEGORY PURE PVA BASED ADHESIVE WITH HIGH SOLID. SAME VISCOSITY AS FEVICOL SH. IT COMES IN PREMIUM CATEGORY.",
  },
  {
    title: "ADBOND PHI",
    detail:
      "D2 CATEGORY PVA BASED ADHESIVE, SOLID CONTAIN LITTLE BIT LESS THAN SH. QUALITY AND PRICE ARE BALANCED HERE WHICH HELPS THE CARPENTER TO WORK WITH PROFIT.",
  },
  {
    title: "ADBOND EXTRA PVA",
    detail:
      "D2 CATEGORY PVA BASED ADHESIVE, SOLID CONTAIN LITTLE BIT LESS THAN SH. QUALITY AND PRICE ARE BALANCED HERE WHICH HELPS THE CARPENTER TO WORK WITH PROFIT. IT’S CHEAPER THAN PHI.",
  },
  {
    title: "AD-DOUBLE BOND CAC",
    detail:
      "ECONOMIC GRADE STRATCH BASE WOOD WORKING ADHESIVE 26% SOLID CONTAIN.",
  },
];

const WoodAdh = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <h2 className="title text-center mt--40 mb--20">Wood Adhesives</h2>
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
                ADCHEM INDUSTRIES is a trusted name in the industry, commended
                for its optimum quality Wood Adhesive.
                <br />
                <br />
                We are widely acknowledged as dependable Wood Adhesive
                Manufacturer, Exporter and Supplier.
                <br />
                <br />
                Our Wood Adhesive is preferred for its impressive adhesion and
                ease of spreading. We offer premium quality Wood Adhesive at
                very reasonable price.
              </p>
              <div className="text-center mt--50">
                <button
                  onClick={handleToggle}
                  className="rn-button-style--2 btn-solid"
                >
                  Get Best Quote
                </button>
                <Backdrop
                  style={{ zIndex: 20 }}
                  open={open}
                  onClick={handleClose}
                >
                  <a href="mailto:indrajitbanerje2810@gmail.com">
                    <button className="rn-button-style--2 btn-solid">
                      Send Us E-Mail
                    </button>
                  </a>
                </Backdrop>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt--50 mb--50 text-center">
        <h2>Advantages</h2>
        <FlexList list={list} />
      </div>

      <div
        className="slider-wrapper pt--40"
        style={{ backgroundColor: "#f8f9fc" }}
      >
        <h1 className="text-center mb--50">Products</h1>
        <div className="slider-activation">
          <Slider className="rn-slick-dot" {...slideSlick}>
            {slideList.map((item, index) => (
              <div
                className={`slide slide-style-3 slider-box-content d-flex align-items-center justify-content-center`}
                key={index}
              >
                <div className="container">
                  <div className="text-center">
                    <h4>{item.title}</h4>
                  </div>
                  <p style={{textAlign: "center"}}>{item.detail}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="center">
        <Products title="More Products" list={productList} />
      </div>
    </>
  );
};

export default WoodAdh;
