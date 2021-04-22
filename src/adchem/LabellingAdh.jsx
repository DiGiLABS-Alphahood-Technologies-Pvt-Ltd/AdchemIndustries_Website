import React from "react";
import { FiCheck } from "react-icons/fi";
import Slider from "react-slick";
import Backdrop from "@material-ui/core/Backdrop";
import FlexList from "./FlexList";
import Products from "./Products";
import { slideSlick } from "./script";

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
    image: "metal-chem",
    title: "Metal Pre-Treatment Chemicals",
    url: "/products/metal-chem",
  },
  {
    image: "wood-adh",
    title: "Wood Adhesives",
    url: "/products/wood-adh",
  },
];

const slideList = [
  {
    title: "AR SERIES TRANSPARENT",
    detail: (
      <p>
        <strong>TRANSPARENT</strong> Labelling Adhesives{" "}
        <strong>AR SERIES</strong> based on modified natural polymer for{" "}
        <strong>Glass & PET bottle</strong> labelling in Distilleries, Wineries,
        Food and Pharmaceutical Industries.
      </p>
    ),
    properties: [
      "Suitable for all types of labelling machines.",
      "High coverage and colourless coating.",
      "No air bubbles or wrinkle formation after labelling.",
      "Spotless Adhesive, hence no spot can be seen on the bottles and lables.",
      "Humidity Resistant.",
      "Good Tack, hence good label finish.",
      "Excellent Shelf life.",
    ],
  },
  {
    title: "IWR SERIES",
    detail: (
      <p>
        Modified Adhesive for labelling and foiling of 
        <strong> Beer Bottle </strong> on high speed machine like, Krones, SS,
        ENGG, etc. Ice Water Resistant upto 3 to 7 days after 48 hours of curing
        on metalized label.
      </p>
    ),
    properties: [
      "Good Flowability.",
      "Faster drying characteristics.",
      "Immediate skid free on application.",
      "Good for foiling.",
      "Label and Foils are removed easily in bottle washer at the time of recycling of bottles.",
    ],
  },
  {
    title: "CL & VF SERIES",
    detail: (
      <p>
        Off white coloured Labelling Adhesives <strong> CL SERIES </strong> based
        on modified natural polymer for <strong> Glass & PET bottle </strong> 
        labelling in Distilleries, Wineries, Food and Pharmaceutical Industries.
      </p>
    ),
    properties: [
      "Suitable for Automatic labelling machines (both PUMP type and POT type), semi-automatic/gumming labelling machines.",
      "High coverage and colourless coating.",
      "No air bubbles or wrikle formation after labelling.",
      "Skid free in nature.",
      "Humidity Resistant.",
      "Good Tack, hence good label finish.",
      "Excellent Shelf life.",
    ],
  },
];

const LabellingAdh = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
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

      <div className="slider-wrapper pt--40" style={{backgroundColor: "#f8f9fc"}}>
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
                  {item.detail}
                  <ul className="list-style--1">
                    {item.properties.map((property) => (
                      <li>
                        <FiCheck />
                        {property}
                      </li>
                    ))}
                  </ul>
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

export default LabellingAdh;
