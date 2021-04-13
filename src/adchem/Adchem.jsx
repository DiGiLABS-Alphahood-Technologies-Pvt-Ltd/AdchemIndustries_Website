import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "./header/HeaderFive";
import HomePage from "./HomePage";
import Helmet from "./Helmet";
import Footer from "./Footer";
import AboutUsPage from "./AboutUsPage";
import Clients from "./Clients";
import Products from "./Products";
import ContactUs from "./ContactUs";
import LabellingAdh from "./LabellingAdh";
import MetalChem from "./MetalChem";
import WoodAdh from "./WoodAdh";

const Adchem = () => {
  return (
    <div>
      <Router>
        <Helmet pageTitle="Adchem Industries" />
        <Header
          headerPosition="header--static logoresize"
          logo="all-dark"
          color="color-black"
        />
        <Route exact path="/adchem/home" component={HomePage} />
        <Route exact path="/adchem/about-us" component={AboutUsPage} />
        <Route exact path="/adchem/clients" component={Clients} />
        <Route exact path="/adchem/products" component={Products} />
        <Route
          exact
          path="/adchem/products/labelling-adh"
          component={LabellingAdh}
        />
        <Route exact path="/adchem/products/wood-adh" component={WoodAdh} />
        <Route exact path="/adchem/products/metal-chem" component={MetalChem} />
        <Route exact path="/adchem/contact-us" component={ContactUs} />
        <Footer />
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
      </Router>
    </div>
  );
};

export default Adchem;
