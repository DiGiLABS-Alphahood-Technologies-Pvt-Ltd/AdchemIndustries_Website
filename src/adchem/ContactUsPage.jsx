import React from "react";
import ContactUs from "./ContactUs";

const ContactUsPage = () => {
  return (
    <>
      <div className="container">
        <div className="address mt--40 mb--40">
          <div className="address-item">
            Contact Persons :
            <br />
            Mr. Somya Dey (Marketing) - +91-9831655611
            <br />
            Mr. Samir De (CEO) - +91-9433034346
            <br />
            Mr. Asim Nandi (Administration) - +91-9477215930
            <br />
            <br />
            Phone : +91-33-22435999 / 26220195
            <br />
            <br />
            Fax No. : +91-33-26220195
          </div>
          <div className="address-item">
            Address : Oswal Chambers, 2 Church Lane, 2nd Floor, Kolkata, West
            Bengal, India - 700001
            <br />
            <br />
            Work Address : 225/O Ghosal Para Lane, Serampore - 712203
            <br />
            <br />
            60/J, J.N. Lahiri Road, Serampore - 712201
          </div>
        </div>
      </div>

      <ContactUs />
    </>
  );
};

export default ContactUsPage;
