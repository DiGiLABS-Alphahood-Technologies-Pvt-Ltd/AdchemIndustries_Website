import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import { FiCheck } from "react-icons/fi";
import FlexList from "./FlexList";
import Products from "./Products";

const metalImg = (
  <img
    style={{ width: "200px" }}
    src="/assets/images/products/metal-chem.svg"
    alt="labelling adhesive"
  />
);

const attributesListOne = [
  "Soluble in water",
  "Suitable for degreasing various elements",
  "Can be operated at room temperature",
  "Can withstand higher temperatures",
  "Improves corrosion resistant properties",
];

const attributesListTwo = [
  "Fume less",
  "Environment friendly",
  "Acts as an accelerator",
  "Chrome free",
];

const endUsersListOne = [
  "Powder Coating Industries",
  "Liquid Paints / Stoving Paints Industries",
  "Furniture Industries [MS & ALUMINIUM]",
  "Wire Industries",
  "Nutt & Bolt Industries",
];

const endUsersListTwo = [
  "Powder Coating Industries",
  "Liquid Paints / Stoving Paints Industries",
  "Furniture Industries [MS & ALUMINIUM]",
  "Wire Industries",
  "Nutt & Bolt Industries",
];

const list = ["Oil", "Grease", "Dirt", "Rust"];

const productList = [
  {
    image: "image-2",
    title: "Labelling Adhesives",
    url: "/products/labelling-adh",
  },
  {
    image: "image-3",
    title: "Wood Adhesives",
    url: "/products/wood-adhesives",
  },
];

const slideList = [
  {
    title: "APDEG-50o",
    description:
      "An easy water soluble Degreasing Chemical, suitable for degreasing aluminium surfaces.",
  },
  {
    title: "APDEG-60o",
    description:
      "An easy water soluble heavy duty Degreasing Chemical, suitable for degreasing mild steel and iron surfaces. It can be operated at room temperature and elevated temperature, but the efficiency of removing oil, grease, dirt etc will be most effective at higher temperature.",
  },
  {
    title: "APRUST-P",
    description:
      "Phosphoric Acid and Synthetic Detergent based Derusting Chemical.",
  },
  {
    title: "APRUST",
    description:
      "Mineral Acid and Synthetic Detergent based heavy duty Derusting Chemical which is less corrosive, fume-less and environment friendly.",
  },
  {
    title: "APRUST-H",
    description:
      "Mineral Acid and Synthetic Detergent based heavy duty Derusting Chemical which produces corrosive fumes.",
  },
  {
    title: "ACTIVATOR-504",
    description:
      "Surface activating / grain refining Chemical for uniform, smooth, compact Phosphate Coating on iron and mild steel surfaces.",
  },
  {
    title: "APHOX-ZC",
    description:
      "An accelerated room temperature Zinc Phosphating Chemical on iron and mild steel surface.",
  },
  {
    title: "APHOX-ZH",
    description:
      "An accelerated hot Zinc-Calcium Phosphating Chemical on iron and mild steel surface.",
  },
  {
    title: "APHOX-ZW",
    description:
      "An accelerated hot Zinc-Nickel Phosphating Chemical for wire drawing.",
  },
  {
    title: "APHOX-M",
    description:
      "Heavy Manganese Phosphating Chemical (hot process), suitable for piston rods, gun and shell articles.",
  },
  {
    title: "PASSEAL-1 (L)",
    description:
      "Chrome based Passivation Chemical used after Phosphating operation. It improves corrosion resistance property and paint adhesion.",
  },
  {
    title: "PASSEAL-87",
    description:
      "Eco-friendly Chrome Free Passivation Chemical used after Phosphating operation. It also improves corrosion resistance property and paint adhesion.",
  },
  {
    title: "NEUTRALISER-1 (L)",
    description:
      "Acidic Chemical suitable for removing oil, dirt etc from aluminium surface.",
  },
  {
    title: "ALOCHROME 1 (L)",
    description:
      "Chromating Chemical which produces a light to deep golden yellow Coating on aluminium and its alloys.",
  },
  {
    title: "APHOX-C 3S",
    description:
      "An Iron Phosphating Chemical, specially formulated to remove oil, grease, rust and simultaneously to produce a thin Iron Phosphate Coating on mild steel surface.",
  },
  {
    title: "APHOX-31",
    description:
      "Specially formulated Iron Phosphating Chemical, specially formulated to remove oil, grease, rust and simultaneously to produce a thin Iron Phosphate Coating on mild steel surface.",
  },
];

const MetalChem = (props) => {
  return (
    <>
      <h2 className="title text-center mt--40 mb--20">
        Metal Pre-Treatment Chemicals
      </h2>
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
                We are counted amongst the prominent Metal Pretreatment
                Chemicals Manufacturers, Exporters and Suppliers in the
                international market.
                <br />
                <br />
                Our Metal Pretreatment Chemicals are also recognized as Metal
                Finishing Chemicals suitable for accomplishing various purposes
                in the Chemical industry.
                <br />
                <br />
                Additionally, we offer Metal Pretreatment Chemicals at the
                industry leading prices.
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
        <h2>Used For Removing</h2>
        <FlexList list={list} />
      </div>

      <div className="slider-wrapper pt--40">
        <div className="slider-activation">
          <Slider className="rn-slick-dot" {...slideSlick}>
            {slideList.map((item, index) => (
              <div
                className={`slide slide-style-3 slider-box-content d-flex align-items-center justify-content-center`}
                key={index}
              >
                <div className="container" style={{height: "150px"}}>
                  <div className="text-center">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="center">
        <Products list={productList} />
      </div>
    </>
  );
};

export default MetalChem;
