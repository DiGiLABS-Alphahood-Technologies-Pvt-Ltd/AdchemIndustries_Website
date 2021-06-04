import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

// import footerImg from "./../assets/img/footer-img.png";
// import "./../styles/footer.css";

const Footer = () => {
  let logoUrl = (
    <img
      src="/assets/images/logo/adchem-industries-logo2.png"
      alt="ADCHEM industries"
    />
  );

  return (
    <div>
      <div className="footer">
        <div className="mb--20">
          <Link to="/">{logoUrl}</Link>
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
      </div>
      <div className="digilabs">
        <h4 className="text-center pt--20">
          Made with <div className="heart">❤</div> by{" "}
          <a href="https://digilabsltd.com">DiGiLABS</a>.
        </h4>
      </div>
    </div>
  );
};

export default Footer;

// Address :
// Oswal Chambers, 2 Church Lane, 2nd Floor, Kolkata, West Bengal, India - 700001

// Work Address :
// 225/O Ghosal Para Lane, Serampore - 712203
// 60/J, J.N. Lahiri Road, Serampore - 712201
