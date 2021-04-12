import React from 'react';

let countries = [
  "India",
  "Bangladesh",
  "Nepal",
  "Bhutan",
  "China",
  "Shri Lanka",
  "Western Asia",
  "Africa",
];

const CountryList = () => {
  return (
    <div className="country-list">
      {countries.map((item, index) => {
        if (index !== countries.length - 1) {
          return (
            <div className="country">
              <div className="country-container">
                <h3 className="heading">{item}</h3>
                <div className="vr"></div>
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="country">
        <h3 className="heading">{countries[countries.length - 1]}</h3>
      </div>
    </div>
  );
};

export default CountryList;
