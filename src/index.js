// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

// Common Layout
// import Layout from "./component/common/App";

// Home layout
// import Demo from './page-demo/Demo';
// import MainDemo from './home/MainDemo';
// import Startup from './home/Startup';
// import Paralax from './home/Paralax';
// import HomePortfolio from './home/HomePortfolio';
// import DigitalAgency from './home/DigitalAgency';
// import CreativeAgency from './home/CreativeAgency';
// import PersonalPortfolio from './home/PersonalPortfolio';
// import Business from './home/Business';
// import StudioAgency from './home/StudioAgency';
// import PortfolioLanding from './home/PortfolioLanding';
// import CreativeLanding from './home/CreativeLanding';
// import HomeParticles from './home/HomeParticles';
// import CreativePortfolio from './home/CreativePortfolio';
// import DesignerPortfolio from './home/DesignerPortfolio';
// import InteriorLanding from './home/Interior';
// import CorporateBusiness from './home/CorporateBusiness';

// // Dark Home Layout
// import DarkMainDemo from './dark/MainDemo';
// import DarkPortfolioLanding from './dark/PortfolioLanding';

// // Element Layout
// import Service from "./elements/Service";
// import ServiceDetails from "./elements/ServiceDetails";
// import About from "./elements/About";
// import Contact from "./elements/Contact";
// import PortfolioDetails from "./elements/PortfolioDetails";
// import Blog from "./elements/Blog";
// import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";

// // Blocks Layout

// import Team from "./blocks/Team";
// import Counters from "./blocks/Counters";
// import Testimonial from "./blocks/Testimonial";
// import Portfolio from "./blocks/Portfolio";
// import VideoPopup from "./blocks/VideoPopup";
// import Gallery from "./blocks/Gallery";
// import Brand from "./blocks/Brand";
// import ProgressBar from "./blocks/ProgressBar";
// import ContactForm from "./blocks/ContactForm";
// import GoogleMap from "./blocks/GoogleMap";
// import Columns from "./blocks/Columns";
// import PricingTable from "./blocks/PricingTable";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import * as serviceWorker from "./serviceWorker";
import HomePage from "./adchem/HomePage";
import HeaderFive from "./adchem/header/HeaderFive";
import Footer from "./adchem/Footer";
import AboutUsPage from "./adchem/AboutUsPage";
import Clients from "./adchem/Clients";
import Products from "./adchem/Products";
import LabellingAdh from "./adchem/LabellingAdh";
import WoodAdh from "./adchem/WoodAdh";
import MetalChem from "./adchem/MetalChem";
import ContactUs from "./adchem/ContactUs";
import ScrollUp from "./adchem/ScrollUp";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <ScrollUp>
          <HeaderFive
            headerPosition="header--static logoresize"
            logo="all-dark"
            color="color-black"
          />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about-us" component={AboutUsPage} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/products" component={Products} />
            <Route
              exact
              path="/products/labelling-adh"
              component={LabellingAdh}
            />
            <Route exact path="/products/wood-adh" component={WoodAdh} />
            <Route exact path="/products/metal-chem" component={MetalChem} />
            <Route exact path="/contact-us" component={ContactUs} />
            {/* <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} /> */}
            <Route component={error404} />
          </Switch>
          <div className="backto-top">
            <ScrollToTop showUnder={160}>
              <FiChevronUp />
            </ScrollToTop>
          </div>
          <Footer />
        </ScrollUp>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
