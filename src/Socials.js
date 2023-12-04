import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  const iconStyle = { color: "black", marginRight: "12px" }; // Adjust the marginRight as needed

  return (
    <div
      className="socials"
      style={{
        backgroundColor: "white",
        color: "white",
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "50px",
      }}
    >

      

      <div class="container">
  <div class="d-flex">
    <div class="p-2">
    <h6 style={{ color: "black" }}>
        <small>
          <i className="fas fa-envelope mr-3"></i> unitysacco@gmail.com
        </small>
      </h6>
    </div>
    <div class="p-2">

    <h6 style={{ color: "black" }}>
        <small>
          <i className="fas fa-phone mr-3"></i> 07000000000
        </small>
      </h6>

    </div>
   
  </div>
</div>
     

      <div className="socialLinks">
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} size="sm" style={iconStyle} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} size="sm" style={iconStyle} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faWhatsapp} size="sm" style={iconStyle} />
        </a>
        {/* <a href="#">
          <FontAwesomeIcon icon={faLinkedin} size="sm" style={iconStyle} />
        </a> */}
      </div>
    </div>
  );
};

export default Socials;
