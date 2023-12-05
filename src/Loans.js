import React, { useState } from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import Banner3 from './Banner2';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner2 from "./Banner2";




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

function Loans() {
  const [openAccordionId, setOpenAccordionId] = useState(1);

  const handleAccordionToggle = (collapseId) => {
    setOpenAccordionId((prevId) => (prevId === collapseId ? null : collapseId));
  };

  return (
    <div>
     

<div className="d-md-flex"> 



     

      <div className="   col-md-8 order-md-1 order-2">
      <h2 className="service" style={{ marginTop: "4%", color: "orange" }}>
        <strong>Loans</strong>
      </h2>

      <MDBContainer
        className="mt-5"
        style={{ maxWidth: "600px", marginBottom: "10%" }} // Adjust the width here
      >
        <MDBAccordion alwaysOpen initialActive={openAccordionId}>
          <CustomAccordionItem
            collapseId={1}
            headerTitle={<strong>MOBILE LOANS</strong>}
            isOpen={openAccordionId === 1}
            onToggle={handleAccordionToggle}
          >
            <p>
            These will be applied for and issued via either a mobile Application or USSD code.
            </p>
            <p><strong>Features Include:</strong></p>
            <ol>
              <li>The maximum loan repayment period will be 30 days</li>
              <li>Maximum loan amount of Kshs.10,000 for the first loan</li>
              <li>Interest rate</li>
              <li>Loan amount will be incremented based on a member’s credit rating</li>
            </ol>
            <p><strong>Benefits Include:</strong></p>
            <ol>
              <li>The loan aims at empowering members to sort out emergencies in an easy and
convenient way</li>
              
            </ol>
            <button className="btn btn-success">
              Inquire
            </button>
          </CustomAccordionItem>

          <CustomAccordionItem
            collapseId={2}
            headerTitle={<strong>EDUCATION LOAN</strong>}
            isOpen={openAccordionId === 2}
            onToggle={handleAccordionToggle}
          >
            <p>
            Our education loan is designed to enable families afford school fees and invest in
interventions that improve students’ learning outcomes without disruptions.
            </p>

            

            <button className="btn btn-success">
              Inquire
            </button>
          </CustomAccordionItem>

          <CustomAccordionItem
            collapseId={3}
            headerTitle={<strong>KARIBU LOANS</strong>}
            isOpen={openAccordionId === 3}
            onToggle={handleAccordionToggle}
          >
            <p>This is meant to promote active membership through offering new members
incentives to access credit before the six months of membership period is over.</p>

          

            <button className="btn btn-success">
              Inquire
            </button>
          </CustomAccordionItem>




          <CustomAccordionItem
            collapseId={4}
            headerTitle={<strong>UTU BORA LENDING(UBL)</strong>}
            isOpen={openAccordionId === 4}
            onToggle={handleAccordionToggle}
          >
            <p>This loan product is designed to promote togetherness and communal consciousness/</p>

            <p><strong>Targeted Members </strong></p>
            <ol>
              <li>Small Internal Lending Communities (SILCs) popularly known as Merry-go-
rounds</li>
              <li>Community Forest Associations,</li>
              <li>Water Associations,</li>
              <li>Community Based Organizations (CBOs), etc.</li>
            </ol>

            <p><strong>Features Include:</strong></p>
            <ol>
              <li>This product will be advanced to organized and registered groups intending to
undertake a common income generating project for the benefit of the Group
members.</li>
              <li>Can be contributed through standing order, check-off from salary or produce
proceeds, Mobile Banking, Bank transfers or direct deposit at the Bank.</li>
              <li>The funds will not be for onward lending by the groups to its members but
strictly to finance a common “pulling together” Group Project.</li>
              <li>Annual interest earned shall be automatically capitalized for any member
holding less than the Minimum Share Capital</li>
<li>Can only be refunded upon membership withdrawal</li>
<li>Maximum loan repayment period of 12 months, which can be adjusted based
on the assessment by Unity.</li>
            </ol>

          

            <button className="btn btn-success">
              Inquire
            </button>
          </CustomAccordionItem>

        </MDBAccordion>

      </MDBContainer>
      



      </div>
     
      <Col md={4} style={{ marginLeft:"20px"}} className="order-md-2 order-1 ">
          {/* Content for the second column with 5 small rows as styled buttons */}
          <h3></h3>
          <Row className="mb-3" style={{ textDecoration: "underline", fontWeight: "bold" }}>
            <Col>
              <Link to="/join/loan-products">
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
              <Link to="/join/loan-products">
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
              <Link to="/join/loan-products">
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
              <Link to="/join/loan-products">
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
              <Link to="/join/loan-products">
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
              backgroundColor: "whitesmoke",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h5 style={{ marginBottom: "10px" }}><strong>Visit Us</strong></h5>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Unity SACCO Building, 123 Street, Cityville, Country
            </p>
            <h4 style={{ marginBottom: "10px", marginTop: "20px" }}>
              <strong>Contact Information</strong>
            </h4>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Phone: +123 456 7890
              <br />
              Email: info@unitysacco.com
            </p>
          </div>
        </Col>


    </div>

<Banner2/>
    </div>
    
    
  );
}

export default Loans;
