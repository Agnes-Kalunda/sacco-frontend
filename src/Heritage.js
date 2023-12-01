import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import handshake from "./assets/handshake.jpg";
import "./App.css";
import image3 from "./assets/image3.jpeg";
import Banner3 from "./Banner3";
const squareButtonStyle = {
  width: "50%",
  height: "50px",
  borderRadius: "0",
  background: "black", // Set the initial background color to black
};

const squareButtonHoverStyle = {
  background: "black", // Set the hover background color to black
};

const containerStyle = {
  paddingTop: "20px",
};

function Heritage() {
  return (
    <Container style={containerStyle}>
      <Row>
        <Col md={4}>
          {/* Content for the first column with the provided text */}
          <h2 className="service" style={{ marginBottom: "10px" }}>
            <strong>Our Heritage</strong>
          </h2>
          <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
            <li
              style={{
                marginBottom: "10px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "10px",
              }}
            >
              Community Mobilization: Engaging individuals, companies, and
              communities.
            </li>
            <li
              style={{
                marginBottom: "10px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "10px",
              }}
            >
              Resilience Building: Lifting members from crises, fostering
              collective resource utilization.
            </li>
            <li
              style={{
                marginBottom: "10px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "10px",
              }}
            >
              Financial Inclusivity: Providing affordable, sustainable credit
              and financial literacy training.
            </li>
            <li
              style={{
                marginBottom: "10px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "10px",
              }}
            >
              Efficient Services: Ensuring satisfaction through disaster
              risk-free and effective services.
            </li>
          </ul>
        </Col>

        <Col md={4}>
          {/* Content for the third column with an image at the top */}
          <h2
            className="service"
            style={{ marginBottom: "10px", marginTop: "50px" }}
          >
            <strong></strong>
          </h2>
          <img
            src={image3}
            alt="Image Alt Text"
            className="img-fluid"
            style={{ marginTop: "7%", marginBottom: "7%" }}
          />
          <p>
            Our objectives encompass promoting financial inclusion by engaging
            diverse members and communities. We focus on community mobilization,
            resilience building, and providing financial literacy training. Our
            commitment extends to ensuring efficient and disaster risk-free
            services. Unity SACCO strives for diversity in membership,
            streamlining the registration process, and offering innovative
            savings and tailored loan products. Our short-term loan solutions
            address recurrent financing needs, allowing members to concentrate
            on their activities without disruption.
          </p>
        </Col>

        <Col md={4}>
          {/* Content for the second column with 5 small rows as styled buttons */}
          <h3></h3>
          <Row
            className="mb-3"
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            <Col>
              <Link to="/section1">
                <Button
                  variant="primary"
                  size="lg"
                  style={squareButtonStyle}
                  className="btn-hover"
                >
                  Education Loan
                </Button>
              </Link>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Link to="/section2">
                <Button
                  variant="primary"
                  size="lg"
                  style={squareButtonStyle}
                  className="btn-hover"
                >
                  Utu Bora Lending
                </Button>
              </Link>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Link to="/section3">
                <Button
                  variant="primary"
                  size="lg"
                  style={squareButtonStyle}
                  className="btn-hover"
                >
                  Mobile Loan
                </Button>
              </Link>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Link to="/section4">
                <Button
                  variant="primary"
                  size="lg"
                  style={squareButtonStyle}
                  className="btn-hover"
                >
                  Karibu Loan
                </Button>
              </Link>
            </Col>
          </Row>
          <h2>Our Location</h2>
          <h4 style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
            <small>
              Do not hesitate to reach out if you have inquiries regarding our
              loan services.
            </small>
          </h4>
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#f8f9fa",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h4 style={{ marginBottom: "10px" }}>Visit Us</h4>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Unity SACCO Building, 123 Street, Cityville, Country
            </p>
            <h4 style={{ marginBottom: "10px", marginTop: "20px" }}>
              Contact Information
            </h4>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Phone: +123 456 7890
              <br />
              Email: info@unitysacco.com
            </p>
          </div>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Heritage;
