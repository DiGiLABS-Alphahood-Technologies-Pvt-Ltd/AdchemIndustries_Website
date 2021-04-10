import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./header/HeaderFive"
import HomePage from "./HomePage";

const Adchem = () => {
    return (
        <div >
            <Router>
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
                <Route path="/adchem/home" component={HomePage} />
            </Router>
        </div>

    )
}

export default Adchem;