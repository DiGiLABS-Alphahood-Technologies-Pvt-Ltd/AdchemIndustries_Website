import React, { useState } from "react";

const ContactOne = () => {
  const [input, setInput] = useState({});

  const inputChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="contact-form--1" style={{ backgroundColor: "#f8f9fc" }}>
      <div className="container">
        <div className="row row--35 align-items-start pt--100 pb--100">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--20">
              <h2 className="title">Contact Us.</h2>
              <p className="description">
                {" "}
                We are catering to the requirements of various Distilleries,
                Pharmaceutical companies, Breweries, Cosmetic and Ayurveda
                companies like ABD India Ltd., Radico Khaitan Ltd., Emami Ltd.,
                Dabur India Ltd., Bhutan Fruit Products, Deyâs Medicals Ltd. and
                many more prestigious organizations.{" "}
              </p>
            </div>
            <div className="mt--40">
              <a href="mailto:adchemindustries@gmail.com">
                <button className="rn-button-style--2 btn-solid">
                  Send Us E-Mail
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail mb_md--30 mb_sm--30">
              <img src="/assets/images/about/form-side.png" alt="form" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactOne;
