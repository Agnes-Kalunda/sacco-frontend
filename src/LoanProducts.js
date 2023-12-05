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

function LoanProducts() {
  const [openAccordionId, setOpenAccordionId] = useState(1);

  const handleAccordionToggle = (collapseId) => {
    setOpenAccordionId((prevId) => (prevId === collapseId ? null : collapseId));
  };

  return (
    <div>
     

<div className="d-md-flex"> 



     

      <div className="   col-md-8 order-md-1 order-2">
      <h2 className="service" style={{ marginTop: "4%", color: "orange" }}>
        <strong>Loan Products</strong>
      </h2>

      <MDBContainer
        className="mt-5"
        style={{ maxWidth: "600px", marginBottom: "10%" }} // Adjust the width here
      >
        <MDBAccordion alwaysOpen initialActive={openAccordionId}>
          <CustomAccordionItem
            collapseId={1}
            headerTitle={<strong>TAMREP (Tailor-Made Resilient Progression
              Lending)</strong>}
            isOpen={openAccordionId === 1}
            onToggle={handleAccordionToggle}
          >
            <p>
            Unity SACCO supports various initiatives which aim to lift members’ economic
status and attain financial independence.
            </p>


            <p><strong>Target Members:</strong></p>
            <ol>
              <li>The member must belong to any of Unity Sacco’s initiatives and Projects</li>

            </ol>


            <p><strong>Features Include:</strong></p>
            <ol>
              <li>The loan is guaranteed using the member’s deposits and guarantors (in the
event the member does not have sufficient collateral).</li>
              <li>Lending is issued against a member’s deposits multiplier of 3 times (or
more depending on the Sacco’s ability, and individual member history in
respective Initiatives).</li>

            </ol>

            <p><strong>Benefits Include:</strong></p>
            <ol>
              <li>Members is cautioned from the risk of potential calamity caused by natural
and/or climate change-inspired events</li>
<li>Members benefit from Unity’s innovative initiatives either with sister
Companies or Partners</li>
              
            </ol>
            <button className="btn btn-success">
              Inquire
            </button>
          </CustomAccordionItem>

          <CustomAccordionItem
            collapseId={2}
            headerTitle={<strong>SIDGROW (Solidarity In Dignity Growth Lending)</strong>}
            isOpen={openAccordionId === 2}
            onToggle={handleAccordionToggle}
          >
            <p>A truly solidarity venture.</p>
            <p>This loan aims at building asset-base for members.</p>

            <p><strong>Target Members:</strong></p>
            <ol>
              <li>Members involves in agro-processing , agribusiness and ecological agriculture.</li>
              <li>E-mobility ( electric motorcycles, tricycles)</li>
              <li>Solar micro-grids</li>
              <li>Micro-irrigation(Solar-powered boreholes)</li>
              <li>Urban waste management</li>
              <li>Sustainable housing</li>
              <li>Tailor-made pastoralists and diary farming support programme.
                <li>SMEs</li>
              </li>
            </ol>


            <p><strong>Features Include:</strong></p>
            <ol>
              <li>The asset will be co-owned by the Sacco and the borrower through a a
check-off system, until a member clears the loan.</li>
              <li>Full ownership will be transferred once the member clears the loan.</li>
<li>Unity Sacco will work in solidarity and flexibility with the
borrower to avoid indignity of losing savings in case of inability to meet
their obligations.</li>
<li>Lending will be calculated at a multiplier of 3 times of one’s deposits</li>
<li>Maximum loan repayment period of 48 Months</li>
            </ol>




            <p><strong>Benefits Include:</strong></p>
            <ol>
              <li>Members will gain an opportunity to access factors of production to
scale-up acreage production and enterprise development.</li>
              <li>Members will secure wealth ownership and
Acquire collateral for loans as opposed to having guarantors.</li>

            </ol>



            

            <button className="btn btn-success">
              Inquire
            </button>
          </CustomAccordionItem>

          <CustomAccordionItem
            collapseId={3}
            headerTitle={<strong>RAF (Resilient Agribusiness Financing)</strong>}
            isOpen={openAccordionId === 3}
            onToggle={handleAccordionToggle}
          >
            <p>This is an agribusiness loan tailor-made for commodity producers
supported through various initiatives, either through Unity Sister Initiatives or other
partners.</p>

<p><strong>Targeted Commodities:</strong></p>
<p>The product targets any agricultural commodity where producers will have made contractual
  agreements with the buyer(S). These commodities will include (but not limited to):
</p>
            <ol>
             <li>Sorghum</li>
             <li>Sunflower</li>
             <li>Grapes</li>
             <li>Khat</li>
             <li>Dairy farming</li>
             <li>Dairy farming</li>
             <li>Bee Keeping</li>
             <li>Cattle fattening activities for meat/beef production</li>
             <li>Chicken rearing</li>
             <li>Aquaculture</li>
             <li>Apiculture</li>

            </ol>



            <p><strong>Features Include:</strong></p>
            <ol>
              <li>The producers will be issued a warehouse receipt which will serv as an alternative collateral 
                mechanism for them to access credit based on their deliveries.
              </li>
              <li>Maximum loan advanced will be upto 2/3 of the total warehouse receipt
                amount .
              </li>
              <li>Previous production history will guide the lending decision
              </li>
              <li>Maximum loan repayment period will be 12 Months
              </li>

            </ol>




            <p><strong>Benefits Include:</strong></p>
            <ol>
              <li>Unity Sacco Members who are producers will no longer bother about
immediate needs requiring urgent finances.
              </li>
              <li>Members will not be forced to take expensive loans which ends up draining
their hard-earned returns.
              </li>
              </ol>



            <button className="btn btn-success">
              Inquire
            </button>
          </CustomAccordionItem>




          <CustomAccordionItem
            collapseId={4}
            headerTitle={<strong>SGL (Saving Grace Lending)</strong>}
            isOpen={openAccordionId === 4}
            onToggle={handleAccordionToggle}
          >
            <p>This will be a refinancing product tailored to satisfy members’ need for extra
financing after taking up/ exhausting other lending options and still need more
Project funds.</p>

            <p><strong>Targeted Members: </strong></p>
            <ol>
              <li>Members needing additional project funds, but have existing loans</li>
         
            </ol>

            <p><strong>Features Include:</strong></p>
            <ol>
              <li>The existing loan(S) must have a good repayment record</li>
              <li>The member assessment of incomes must indicate their ability to comfortably
                service the additional loan.
              </li>
              <li>New loan is used to offset existing loans and the balance availed to te loanee.</li>
              <li>Loan issued at a multiplier of 3 times the total deposits (multiplier can change over time)</li>

<li>Maximum loan repayment period of 48 months.</li>
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
              <Link to="/join/borrow-from-us">
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
  Mobile Loans
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
  Education Loans
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
  Karibu Loans
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
  Utu Bora Lending
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

    <div style={{paddingTop:"5%"}}>

<Banner2/>
    </div>


    </div>
    
    
  );
}

export default LoanProducts;
