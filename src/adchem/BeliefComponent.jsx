import React from 'react';

const BeliefComponent = (props) => {
  return (
    <div className="belief">
      {props.img}
      {/* <img className="belief-img" src={props.src} alt={props.title} /> */}
      <h3 className="belief-heading">{props.title}</h3>
    </div>
  );
};

export default BeliefComponent;
