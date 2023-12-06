import React, { useState } from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import Banner3 from './Banner2';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner2 from "./Banner2";
import mpesa from './assets/mpesa.jpeg';



const squareButtonStyle = {
  width: "50%",
  height: "50px",
  marginTop: "1%",
  borderRadius: "0",
  background: "blue",
  transition: "transform 0.3s ease",
  };  




const CustomAccordionItem = ({ collapseId, headerTitle, children, isOpen, onToggle }) => {
  const toggleAccordion = () => {
    onToggle(collapseId);
  };




  return (
    <div className={`blue-box ${isOpen ? "open" : ""}`} style={{ marginBottom: "10px" }}>
      <div
        className="d-flex justify-content-between align-items-center p-3"
        style={{
          borderBottom: "1px solid #ddd",
          cursor: "pointer",
          color: "white",  // text color
          background: "#0096FF",  // background color
        }}
        onClick={toggleAccordion}
      >
        <span>{headerTitle}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      <div className={`collapse ${isOpen ? "show" : ""}`} id={`collapse-${collapseId}`}>
        <div className="p-3">
          {children}
        </div>
      </div>
    </div>
  );
};

function PaymentModes() {
  const [openAccordionId, setOpenAccordionId] = useState(1);

  const handleAccordionToggle = (collapseId) => {
    setOpenAccordionId((prevId) => {
      // If closing the last item, open the first one
      return prevId === collapseId ? 1 : collapseId;
    });
  };

  return (
    <div>
     

<div className="d-md-flex"> 



     

      <div className="   col-md-8 order-md-1 order-2">
      <h2 className="service" style={{ marginTop: "4%", color: "orange" }}>
        <strong>Payment Modes</strong>
      </h2>

      <MDBContainer
        className="mt-5"
        style={{ maxWidth: "600px", marginBottom: "10%" }} // Adjust the width here
      >
        <MDBAccordion alwaysOpen initialActive={openAccordionId}>
         <div>
          <div>
             <CustomAccordionItem
            collapseId={1}
            headerTitle={<strong>M-PESA</strong>}
            isOpen={openAccordionId === 1}
            onToggle={handleAccordionToggle}
          >

<img
            src={mpesa}
            alt="Image Alt Text"
            className="img-fluid"
            style={{ marginTop: "7%", marginBottom: "7%" , width:"100%", height:"300px"}}
          />
            <ul>
                <li>Go to the <strong>Mpesa Menu</strong></li>
                <li>Select <strong>Lipa na M-PESA</strong></li>
                <li>Select <strong>Pay Bill</strong></li>
                <li>Enter Business Number  <strong>: 400222</strong></li>
                <li>Enter Account Number <strong>: 8484#</strong></li>
              </ul>
            
          </CustomAccordionItem>
          </div>

         </div>
         
         



        </MDBAccordion>

      </MDBContainer>
      



      </div>
     
      <Col md={4} style={{ marginLeft:"20px"}} className="order-md-2 order-1 ">
          {/* Content for the second column with 5 small rows as styled buttons */}
          <h3></h3>
          <Row className="mb-3" style={{ textDecoration: "underline", fontWeight: "bold" }}>
            <Col>
              <Link to="/join/bosa-products">
              <Button
  variant="primary"
  size="lg"
  style={{
    ...squareButtonStyle,
    backgroundColor: "#0096FF",
    color: "white",
    transition: "background-color 0.3s ease, color 0.3s ease", // Add a smooth transition for hover effect
  }}
  className="btn-hover"
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#0096FF";
    e.target.style.color = "white";
  }}
>
  Loan Products
</Button>

              </Link>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Link to="/join/bosa-products">
              <Button
  variant="primary"
  size="lg"
  style={{
    ...squareButtonStyle,
    backgroundColor: "#0096FF",
    color: "white",
    transition: "background-color 0.3s ease, color 0.3s ease", // Add a smooth transition for hover effect
  }}
  className="btn-hover"
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#0096FF";
    e.target.style.color = "white";
  }}
>
  TAMREP
</Button>

              </Link>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Link to="/join/bosa-products">
              <Button
  variant="primary"
  size="lg"
  style={{
    ...squareButtonStyle,
    backgroundColor: "#0096FF",
    color: "white",
    transition: "background-color 0.3s ease, color 0.3s ease", // Add a smooth transition for hover effect
  }}
  className="btn-hover"
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#0096FF";
    e.target.style.color = "white";
  }}
>
  SIDGROW
</Button>

              </Link>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Link to="/join/bosa-products">
              <Button
  variant="primary"
  size="lg"
  style={{
    ...squareButtonStyle,
    backgroundColor: "#0096FF",
    color: "white",
    transition: "background-color 0.3s ease, color 0.3s ease", // Add a smooth transition for hover effect
  }}
  className="btn-hover"
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#0096FF";
    e.target.style.color = "white";
  }}
>
  RAF
</Button>

              </Link>
            </Col>
          </Row>
          

          <Row className="mb-3">
            <Col>
              <Link to="/join/bosa-products">
              <Button
  variant="primary"
  size="lg"
  style={{
    ...squareButtonStyle,
    backgroundColor: "#0096FF",
    color: "white",
    transition: "background-color 0.3s ease, color 0.3s ease", // Add a smooth transition for hover effect
  }}
  className="btn-hover"
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#0096FF";
    e.target.style.color = "white";
  }}
>
  SGL
</Button>

              </Link>
            </Col>
          </Row>
          <h4 style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
            {/* <small>
              Do not hesitate to reach out if you have inquiries regarding our
              loan services.
            </small> */}
          </h4>
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#f8f9fa",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h5 style={{ marginBottom: "10px" }}><strong>Visit Us</strong></h5>
            <p style={{ fontSize: "14px", color: "#555" }}>
              <strong>Nairobi Metropolis Office</strong><br/>
              Tarikiville Mall, Mezzanine Floor<br/>
              Namanga Rd,
              Kitengela.<br/>
              <p style={{ fontSize: "14px", color: "#555" }}>
             <strong>
             Phone: +254 748 015 761<br/>
                    
              </strong> 

             
            </p>
            </p>

            <p style={{ fontSize: "14px", color: "#555" }}>
              <strong>Maua Office</strong><br/>
              Kenduba Building , opposite Trebil cyber<br/>
              Maua ,
              Meru.
              <p style={{ fontSize: "14px", color: "#555" }}>
             <strong>Phone: +254 748 015 761</strong> <br/>
                   

             
            </p>
            </p>
            <h4 style={{ marginBottom: "10px", marginTop: "20px" }}>
              <strong>Contact Information</strong>
            </h4>
            <p style={{ fontSize: "14px", color: "#555" }}>
             
              
              Email: info@unitysacco.com
            </p>
          </div>
        </Col>


    </div>

<Banner2/>
    </div>
    
    
  );
}

export default PaymentModes;
