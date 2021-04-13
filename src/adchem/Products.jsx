import React from "react";
import Para from "./Para";
import { Link } from "react-router-dom";

const Products = (props) => {
  let list = [];
  if (!props.list) {
    list = [
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
      {
        image: "wood-adh",
        title: "Wood Adhesives",
        url: "/products/wood-adh",
      },
    ];
  } else {
    list = props.list;
  }

  return (
    <>
      <div className="pt--5 pb--80" style={{ backgroundColor: "#f8f9fc" }}>
        <Para
          title="Product"
          description={
            <p className="description">
              The products offered by us include various Wood Adhesive,
              Labelling Adhesives and Metal Pretreatment Chemicals.
            </p>
          }
        />
        <div className="container mt--40">
          <div className="flex wrap center">
            {list.map((value, index) => (
              <div
                className=""
                key={index}
              >
                {/* <div className="portfolio">
                  <div className="thumbnail-inner">
                    <div className={`thumbnail ${value.image}`}></div>
                    <div className={`bg-blr-image ${value.image}`}></div>
                  </div>
                  <div className="content">
                    <div className="inner">
                      <p className="description">{value.category}</p>
                      <h4>
                        <a href="/portfolio-details">{value.title}</a>
                      </h4>
                      <div className="portfolio-button">
                        <Link className="rn-btn" to={value.url}>
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="product text-center">
                  <div className={`thumbnail ${value.image}`}>
                  </div>
                    {/* <div className="content"> */}
                      <h3>{value.title}</h3>
                      <Link to={value.url}>
                        <button className="rn-btn">View More</button>
                      </Link>
                    {/* </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
