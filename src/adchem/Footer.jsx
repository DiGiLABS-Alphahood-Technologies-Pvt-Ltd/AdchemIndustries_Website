import React from "react";
import { Link } from "react-router-dom";

// import footerImg from "./../assets/img/footer-img.png";
// import "./../styles/footer.css";

const Footer = () => {
  let logoUrl = (
    <img
      src="/assets/images/logo/adchem-industries-logo.png"
      alt="ADCHEM industries"
    />
  );

  return (
    <div className="footer">
      <div className="mb--20">
        <Link to="/adchem/home">{logoUrl}</Link>
      </div>
      <div className="footer-grid">
        <div>
          <div>
            <h3>Contact Persons : </h3>
            <p>
              Mr. Somya Dey (Marketing) - +91-9831655611
              <br />
              Mr. Samir De (CEO) - +91-9433034346
              <br />
              Mr. Asim Nandi (Administration) - +91-9477215930
            </p>
          </div>
          <br />
          <br />
          <div>
            <h3>Phone : </h3>
            <p>+91-33-22435999 / 26220195</p>
          </div>
          <br />
          <br />
          <div>
            <h3>Fax No. : </h3>
            <p>+91-33-26220195</p>
          </div>
          <br />
          <br />
        </div>
        <div>
          <div>
            <h3>Address : </h3>
            <p>
              Oswal Chambers, 2 Church Lane, 2nd Floor, Kolkata, West Bengal,
              India - 700001
            </p>
          </div>
          <br />
          <br />
          <div>
            <h3>Work Address : </h3>
            <p>
              225/O Ghosal Para Lane, Serampore - 712203
              <br />
              60/J, J.N. Lahiri Road, Serampore - 712201
            </p>
          </div>
          <br />
          <br />
          <div style={{ textAlign: "right" }}>
            {/* <img src={footerImg} alt="Member Export India" /> */}
          </div>
        </div>
      </div>
      <p>© Copyright 2012. Adchem Industries</p>
    </div>
  );
};

export default Footer;

// Address :
// Oswal Chambers, 2 Church Lane, 2nd Floor, Kolkata, West Bengal, India - 700001

// Work Address :
// 225/O Ghosal Para Lane, Serampore - 712203
// 60/J, J.N. Lahiri Road, Serampore - 712201
