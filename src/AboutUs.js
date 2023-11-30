import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bosa from "./assets/bosa.jpeg";
import chama from "./assets/chama.jpeg";

function AboutUs() {
  // Function to scroll to the "Office Location" section when the button is clicked
  const scrollToOfficeLocation = () => {
    const officeLocationSection = document.getElementById(
      "officeLocationSection",
    );
    if (officeLocationSection) {
      officeLocationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
      <Row>
        <Col md={6}>
          <h2 className="service" style={{ marginBottom: "10px" }}>
            <strong>Our Mission</strong>
          </h2>
          <p>
            We aim to boost savings, resilience, and financial inclusivity,
            particularly among underserved communities. Our mission is to
            empower individuals impacted by crises, helping them utilize
            resources collectively for improved living standards.
          </p>
        </Col>
        <Col md={6}>
          <img src={bosa} alt="Image Alt Text" className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <img src={chama} alt="Image Alt Text" className="img-fluid" />
        </Col>
        <Col md={6} style={{ paddingTop: "20px" }}>
          <h2 className="service" style={{ marginBottom: "10px" }}>
            <strong>Our Vision</strong>
          </h2>
          <p>
            We envision accessible, sustainable credit and financial
            empowerment. Through education and training, we equip members with
            essential skills. Our commitment is to provide efficient,
            disaster-resistant services, ensuring member satisfaction.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2 className="service" style={{ marginBottom: "10px" }}>
            <strong>Our Focus</strong>
          </h2>
          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
            <li>
              &#8226; Mobilizing savings, resilience-building, and financial
              inclusivity among people and communities, particularly those at
              the bottom of the pyramid.
            </li>
            <li>
              &#8226; Lifting people from the effects of multiple crises that
              have disrupted their livelihoods, mobilizing them to collectively
              utilize their resources, thus improving the living standards of
              the members.
            </li>
            <li>
              &#8226; Provision of demonstrably affordable and sustainable
              credit and giving.
            </li>
            <li>
              &#8226; Training and education to our members on financial
              literacy.
            </li>
            <li>
              &#8226; Providing members with efficient, disaster risk-free, and
              effective services to assure satisfaction.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
