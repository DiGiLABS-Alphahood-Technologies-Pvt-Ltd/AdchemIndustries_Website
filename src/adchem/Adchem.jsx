import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header/HeaderFive";
import HomePage from "./HomePage";
import Helmet from "./Helmet";
import Footer from "./Footer";
import AboutUsPage from "./AboutUsPage";

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
        <Footer />
      </Router>
    </div>
  );
};

export default Adchem;
