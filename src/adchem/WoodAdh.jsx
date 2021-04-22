import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import FlexList from "./FlexList";
import Products from "./Products";

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
      s
      <div className="container mt--50 mb--50 text-center">
        <h2>Advantages</h2>
        <FlexList list={list} />
      </div>
      <div className="center">
        <Products title="More Products" list={productList} />
      </div>
    </>
  );
};

export default WoodAdh;
