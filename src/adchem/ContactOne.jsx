import React, { Component, useState } from "react";

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
            <div className="form-wrapper">
              <form
                onSubmit={(e) => {
                  formSubmitHandler(e);
                }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={input.name}
                  required
                  onChange={(e) => {
                    inputChangeHandler(e);
                  }}
                />
                <input
                  type="text"
                  placeholder="E-Mail"
                  name="email"
                  value={input.name}
                  required
                  onChange={(e) => {
                    inputChangeHandler(e);
                  }}
                />
                <input
                  type="text"
                  placeholder="Contact"
                  name="contact"
                  value={input.name}
                  required
                  onChange={(e) => {
                    inputChangeHandler(e);
                  }}
                />
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={input.name}
                  required
                  onChange={(e) => {
                    inputChangeHandler(e);
                  }}
                />
                <textarea
                  placeholder="Write a message..."
                  rows="0"
                  type="text"
                  name="message"
                  value={input.name}
                  required
                />
              </form>
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
