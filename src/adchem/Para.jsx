import React from 'react';

const Para = (props) => {
  return (
    <>
      <div className="container" style={{ marginTop: "5rem" }}>
        <div className="row">
          <div className="col-lg-12">
            <div className={`section-title text-${props.align}  mb--30 mb_sm--0`}>
              <h2 className="title">{props.title}</h2>
            </div>
                {props.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default Para;