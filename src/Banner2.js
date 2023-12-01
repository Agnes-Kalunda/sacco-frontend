import React from "react";

function Banner2() {
  const containerStyle = {
    width: "85%",
    height: "270px",
    margin: "auto",
    border: "1px solid",
    padding: "40px",
    backgroundImage: "linear-gradient(to right, #009900, #00FF00)",
  };

  const colStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "5px",
    color: "black",
    paddingTop: "5%",
    borderLeft: "5px solid green", // Green border on the left side
    paddingLeft: "20px", // Adjusted padding to fit h3 and small texts
  };

  const linkStyle = {
    color: "black", // Set link color to black
    textDecoration: "none", // Remove underline
    transition: "color 0.3s", // Add transition for smooth color change
  };

  // Add blue hover effect
  linkStyle[':hover'] = {
    color: "blue", // Set color to blue on hover
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-sm" style={colStyle}>
          <h3>
            <strong>FAQS</strong>
          </h3>
          <small>
            <a href="#faq-link" style={linkStyle}>
              LEARN MORE
            </a>
          </small>
        </div>
        <div className="col-sm" style={colStyle}>
          <h3>
            <strong>DOWNLOADS</strong>
          </h3>
          <small>
            <a href="#downloads-link" style={linkStyle}>
              VIEW ALL
            </a>
          </small>
        </div>
        <div className="col-sm" style={colStyle}>
          <h3>
            <strong>OUR HERITAGE</strong>
          </h3>
          <small>
            <a href="#heritage-link" style={linkStyle}>
              LEARN MORE
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
