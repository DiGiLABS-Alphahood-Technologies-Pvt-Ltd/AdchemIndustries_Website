import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import "./style.css";

class HeaderFive extends Component {
  constructor(props) {
    super(props);
    this.state = { pathUrl: window.location.pathname };
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  render() {
    const { color, headerPosition } = this.props;
    let logoUrl = (
      <img
        src="/assets/images/logo/adchem-industries-logo2.png"
        alt="ADCHEM industries"
      />
    );
    return (
      <header
        className={`header-area formobile-menu ${headerPosition} ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-6">
                <div className="header-left">
                  <div className="logo">
                    <Link to="/">{logoUrl}</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-6">
                <div className="header-right justify-content-end">
                  <nav className="mainmenunav d-lg-block">
                    <ul
                      onClick={() => {
                        this.setState({ pathUrl: window.location.pathname });
                        this.CLoseMenuTrigger();
                      }}
                      ref={this.navRef}
                      className="mainmenu"
                    >
                      <li
                        className={this.state.pathUrl === "/" ? "active" : ""}
                      >
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className={
                          this.state.pathUrl === "/about-us" ? "active" : ""
                        }
                      >
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li
                        className={
                          this.state.pathUrl ===
                          ("/products" ||
                            "/products/labelling-adh" ||
                            "/products/wood-adh" ||
                            "/products/metal-chem")
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/products">Products</Link>
                      </li>

                      <li
                        className={
                          this.state.pathUrl === "/clients" ? "active" : ""
                        }
                      >
                        <Link to="/clients">Clients</Link>
                      </li>
                      {/* <li
                        className={
                          this.state.pathUrl === "/contact-us" ? "active" : ""
                        }
                      >
                        <Link to="/contact-us">Contact Us</Link>
                      </li> */}
                      <li className="contact-link">
                        <div
                          style={{ width: "150px", textAlign: "center" }}
                          className="header-btn"
                        >
                          <a className="rn-btn" href="/contact-us">
                            <span style={{ fontSize: "14px" }}>Contact Us</span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </nav>

                  <div className="header-btn">
                    <a className="rn-btn" href="/contact-us">
                      <span>Contact Us</span>
                    </a>
                  </div>

                  {/* Start Humberger Menu  */}
                  <div className="humberger-menu d-block d-lg-none pl--20">
                    <span
                      onClick={this.menuTrigger}
                      className="menutrigger text-white"
                    >
                      <FiMenu />
                    </span>
                  </div>
                  {/* End Humberger Menu  */}
                  <div className="close-menu d-block d-lg-none">
                    <span
                      onClick={this.CLoseMenuTrigger}
                      className="closeTrigger"
                    >
                      <FiX />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HeaderFive;
