import React from "react";


const FlexList = (props) => {

  return (
    <div className="country-list">
      {props.list.map((item, index) => {
        if (index !== props.list.length - 1) {
          return (
            <div key={index} className="country">
              <div className="country-container">
                <h4 className="heading">{item}</h4>
                <div className="vr"></div>
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="country">
        <h4 className="heading">{props.list[props.list.length - 1]}</h4>
      </div>
    </div>
  );
};

export default FlexList;
