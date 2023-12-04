import React, { useState } from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import Banner3 from './Banner2';

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
      <h2 className="service" style={{ marginTop: "4%", color: "#0096FF" }}>
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
            <button className="learn-more-button blue-button">
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

            

            <button className="learn-more-button blue-button">
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
incentives to access credit before the six months of membership period is over..</p>

          

            <button className="learn-more-button blue-button">
              Inquire
            </button>
          </CustomAccordionItem>




          <CustomAccordionItem
            collapseId={3}
            headerTitle={<strong>UTU BORA LENDING(UBL)</strong>}
            isOpen={openAccordionId === 3}
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

          

            <button className="learn-more-button blue-button">
              Inquire
            </button>
          </CustomAccordionItem>

        </MDBAccordion>

      </MDBContainer>
      <Banner3/>
    </div>
  );
}

export default Loans;
