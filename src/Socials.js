import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  const iconStyle = { color: "white", marginRight: "12px" }; // Adjust the marginRight as needed

  return (
    <div
      className="socials"
      style={{
        backgroundColor: "#212529",
        color: "white",
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "50px",
      }}
    >
      <h6>
        <small>
          <i className="fas fa-envelope mr-3"></i> unitysacco@gmail.com
        </small>
      </h6>
      <h6></h6>

      <div className="socialLinks">
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} size="sm" style={iconStyle} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} size="sm" style={iconStyle} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} size="sm" style={iconStyle} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} size="sm" style={iconStyle} />
        </a>
      </div>
    </div>
  );
};

export default Socials;
