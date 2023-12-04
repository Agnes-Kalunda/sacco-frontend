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
      <h2 className="service" style={{ marginTop: "4%", color: "#0096FF" }}>
        <strong>Savings</strong>
      </h2>

      <MDBContainer
        className="mt-5"
        style={{ maxWidth: "600px", marginBottom: "10%" }} // Adjust the width here
      >
        <MDBAccordion alwaysOpen initialActive={openAccordionId}>
          <CustomAccordionItem
            collapseId={1}
            headerTitle={<strong>JIKAKAMUE SAVINGS</strong>}
            isOpen={openAccordionId === 1}
            onToggle={handleAccordionToggle}
          >
           <p>
              This allows members to regularly save money for a specific purpose
              in the future. It is aimed at helping them achieve a specific goal
              that requires a considerable amount of money, without necessarily
              taking up loans
            </p>
            <p><strong>Features Include:</strong></p>
            <ol>
              <li>Deposits are withdrawable but after a certain fixed period of time.</li>
            </ol>
            <p><strong>Benefits Include:</strong></p>
            <ol>
              <li>Such deposits will earn an interest on an annual basis.</li>
              <li>Can be used as additional collateral for loans.</li>
            </ol>
            <button className="learn-more-button blue-button">
              Start Saving
            </button>
          </CustomAccordionItem>




          <CustomAccordionItem
            collapseId={2}
            headerTitle={<strong>Daily/ Weekly BOSA Deposits</strong>}
            isOpen={openAccordionId === 2}
            onToggle={handleAccordionToggle}
          >
            
            <p>
              This is a daily savings activity that allows one to save regularly
              from the remnants of his/her daily/weekly expenditure.
            </p>

            <p><strong>Features Include:</strong></p>
            <ol>
              <li>Can be contributed through Unity Sacco Mobile Money transfer channels.</li>
              <li>The daily deposits trend can be used to appraise members for loans.</li>
            </ol>

            <p><strong>Benefits Include:</strong></p>
            <ol>
              <li>Stress-free way of accumulating your deposits.</li>
              <li>Access to loan facilities.</li>
            </ol>

            <button className="learn-more-button blue-button">
              Start Saving
            </button>
          </CustomAccordionItem>




          <CustomAccordionItem
            collapseId={3}
            headerTitle={<strong>BOSA SHARES ACCOUNT</strong>}
            isOpen={openAccordionId === 3}
            onToggle={handleAccordionToggle}
          >
           <p><strong>Minimum Monthly Contributions </strong></p>
            <ol>
              <li>Individuals: Kes. 20,000/=</li>
              <li>Groups: Kes. 25,000/=</li>
              <li>Corporates: Kes 50,000/=</li>
            </ol>

            <p><strong>Features Include:</strong></p>
            <ol>
              <li>A tailor-made account for long-term saving with attractive dividends.</li>
              <li>The shares are non-refundable but can be transferred to an existing Sacco member.</li>
              <li>Each member needs to have share capital depending on their category.</li>
              <li>A member may purchase shares by installment.</li>
            </ol>

            <p><strong>Benefits Include:</strong></p>
            <ol>
              <li>Dividends earnings.</li>
              <li>Dividends shall be automatically capitalized for any member holding less than the Minimum Share Capital.</li>
            </ol>

            <button className="learn-more-button blue-button">
              Start Saving
            </button>
          </CustomAccordionItem>




          <CustomAccordionItem
            collapseId={4}
            headerTitle={<strong>THE HANDSHAKE DEPOSITS SAVINGS</strong>}
            isOpen={openAccordionId === 4}
            onToggle={handleAccordionToggle}
          >
           <p>These are the continuous monthly savings that members make to the Sacco
throughout their membership.</p>

            <p><strong>Minimum Monthly Contributions </strong></p>
            <ol>
              <li>Individuals: Kes. 1,000/=</li>
              <li>Groups: Kes. 5,000/=</li>
              <li>Corporates: Kes 10,000/=</li>
            </ol>

            <p><strong>Features Include:</strong></p>
            <ol>
              <li>Allows members to access deposit-based loans</li>
              <li>Can be contributed through standing order, check-off from salary or produce
proceeds, Mobile Banking, Bank transfers or direct deposit at the Bank.</li>
              <li>The Handshake Savings earn interest annually</li>
              <li>Annual interest earned shall be automatically capitalized for any member
holding less than the Minimum Share Capital</li>
<li>Can only be refunded upon membership withdrawal</li>
            </ol>

            <p><strong>Benefits Include:</strong></p>
            <ol>
              <li>Access to Loan facilities.</li>
              <li>Guarantee loans.</li>
              <li>Earn interest/rebates annually</li>
            </ol>

            <button className="learn-more-button blue-button">
              Start Saving
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
              <Link to="/join/borrow-from-us">
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
              <Link to="/join/borrow-from-us">
                <Button
                  variant="primary"
                  size="lg"
                  style={squareButtonStyle}
                  className="btn-hover"
                >
                  Utu Bora
                </Button>
              </Link>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Link to="/join/borrow-from-us">
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
              <Link to="/join/borrow-from-us">
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
<div style={{paddingTop:"5%"}}>
<Banner2/>
</div>

    </div>
    
    
  );
}

export default Loans;
