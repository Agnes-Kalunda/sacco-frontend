import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bosa from "./assets/bosa.jpeg";
import chama from "./assets/chama.jpeg";
import { Outlet } from "react-router-dom";
import Banner2 from './Banner2';
import background from './assets/background.jpeg'
import { Link } from "react-router-dom";

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

  const squareButtonStyle = {
    width: "50%",
    height: "50px",
    marginTop: "1%",
    borderRadius: "0",
    background: "blue",
    transition: "transform 0.3s ease",
    };  

  return (

    <div>
<Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
      <Row>
        <Col md={6}>
          <h2 className="service" style={{ marginBottom: "10px" , paddingTop: "7%", color:"orange"}}>
            <strong>Our Mission</strong>
          </h2>
          <p>
"To collectively build sustainable futures through provision of
affordable, innovative and inclusive financial solutions that will

create and sustain economic growth, resilience, and social well-
being of the Members, and society at large."
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
          "A financially-inclusive community where adults, youth, and families are able to
effectively manage their money, save, borrow and improve their livelihoods."
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <h2 className="service" style={{ marginBottom: "10px" , paddingTop: "7%", color:"orange"}}>
            <strong>Our Strategic Objective</strong>
          </h2>
          <p>
"To provide tailor-made financial services and inculcate a savings
culture among our members as well as support members to
develop and improve their economic and social status."
          </p>
        </Col>
        <Col md={6}>
          <img src={bosa} alt="Image Alt Text" className="img-fluid" style={{ marginBottom: "10px" , paddingTop: "7%", boxShadow: "0px 4px 8px rgba(0, 255, 0, 0.6)"}}/>
        </Col>
      </Row>

      

      

    
    </Container>

    <div>
    <h2 className="service" style={{ marginBottom: "10px", paddingTop:"7%", color:"orange"}}>
            <strong>Our Core Values</strong>
          </h2>
          <p>Customer Focus</p> <p>Intergrity</p> <p>Reliability</p> <p>Innovation</p> <p>Listening and caring</p> <p>Proffesionalism</p>
    </div>

   


<Banner2/>

    </div>
  

        
    
    
  
  );
}

export default AboutUs;
