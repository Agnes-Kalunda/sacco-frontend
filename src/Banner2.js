import React from "react";
import { Link } from "react-router-dom";

function Banner2() {
  const containerStyle = {
    width: "85%",
    height: "280px",
    margin: "auto",
    border: "1px solid",
    padding: "40px",
    marginBottom:"5%",
    backgroundColor: "#001f3f",
  };

  const colStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "5px",
    color: "white",
    paddingTop: "5%",
    borderLeft: "5px solid green",
    paddingLeft: "20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  // Add blue hover effect
  linkStyle[':hover'] = {
    color: "blue",
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-sm" style={colStyle}>
          <h3>
            <strong>FAQS</strong>
          </h3>
          <small>
            <Link to="/resources/faqs" style={linkStyle}>
              LEARN MORE
            </Link>
          </small>
        </div>
        <div className="col-sm" style={colStyle}>
          <h3>
            <strong>DOWNLOADS</strong>
          </h3>
          <small>
            <Link to="/resources/downloads" style={linkStyle}>
              VIEW ALL
            </Link>
          </small>
        </div>
        <div className="col-sm" style={colStyle}>
          <h3>
            <strong>OUR HERITAGE</strong>
          </h3>
          <small>
            <Link to="/about-us/our-heritage" style={linkStyle}>
              LEARN MORE
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
