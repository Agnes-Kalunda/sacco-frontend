import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bosa from "./assets/bosa.jpeg";
import chama from "./assets/chama.jpeg";
import { Outlet } from "react-router-dom";
import Banner2 from './Banner2';
import background from './assets/background.jpeg'

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
          <h2 className="service" style={{ marginBottom: "10px" , paddingTop: "7%", color:"orange"}}>
            <strong>Our Mission</strong>
          </h2>
          <p>
            "At <strong>Unity Sacco, </strong>We aim to boost savings, resilience, and financial inclusivity,
            particularly among underserved communities. Our mission is to
            empower individuals impacted by crises, helping them utilize
            resources collectively for improved living standards."
          </p>
        </Col>
        <Col md={6}>
          <img src={bosa} alt="Image Alt Text" className="img-fluid" style={{ marginBottom: "10px" , paddingTop: "7%", boxShadow: "0px 4px 8px rgba(0, 255, 0, 0.6)"}}/>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <img src={chama} alt="Image Alt Text" className="img-fluid" style={{ marginBottom: "10px" , paddingTop: "7%",  boxShadow: "0px 4px 8px rgba(0, 255, 0, 0.6)"}}/>
        </Col>
        <Col md={6} style={{ paddingTop: "20px" }}>
          <h2 className="service" style={{ marginBottom: "10px", paddingTop:"7%" , color:"orange"}}>
            <strong>Our Vision</strong>
          </h2>
          <p>
            "We envision accessible, sustainable credit and financial
            empowerment. Through education and training, we equip members with
            essential skills. Our commitment is to provide efficient,
            disaster-resistant services, ensuring member satisfaction."
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <h2 className="service" style={{ marginBottom: "10px", paddingTop:"7%", color:"orange"}}>
            <strong>Our Focus</strong>
          </h2>
          <p>
            "At <strong>Unity Sacco, </strong>our focus is on promoting financial inclusivity, 
            resilience, and empowerment. We strive to uplift individuals affected 
            by crises, fostering collective resource utilization for improved living 
            standards. Our commitment includes providing affordable credit, offering 
            comprehensive financial literacy training, and ensuring efficient, disaster-resistant 
            services for member satisfaction."
          </p>
        </Col>
        <Col md={6}>
          <img src={background} alt="Image Alt Text" className="img-fluid" style={{ marginBottom: "10px" , paddingTop: "7%",boxShadow: "0px 4px 8px rgba(0, 255, 0, 0.6)"}}/>
        </Col>
      </Row>

      <Banner2/>
    </Container>
  );
}

export default AboutUs;
