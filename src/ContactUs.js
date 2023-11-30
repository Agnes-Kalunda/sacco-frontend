import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";


function ContactUs() {
  return (

    <div>
 <h2 className="service" style={{ marginTop: "4%" }}>
          <strong>Loan Eligibility</strong>
        </h2>
    <MDBContainer className="mt-5" style={{maxWidth: '1000px', marginBottom: '10%'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="Membership">
          Applicants must be registered members of Unity Sacco. 
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Legal Status">
        Companies and cooperative societies must have legal status.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Entities">
        Individuals, companies, SMEs, businesses, institutions, schools, churches, self-help groups, merry-go-rounds, SILCs, CBOs, NGOs are eligible.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="TAMREP (Tailor-Made Resilient Progression Lending)">
        Members involved in Unity Sacco’s initiatives.
        Loan guaranteed using member's deposits and guarantors.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle="Entities">
        Individuals, companies, SMEs, businesses, institutions, schools, churches, self-help groups, merry-go-rounds, SILCs, CBOs, NGOs are eligible.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={6} headerTitle="SIDGROW (Solidarity In Dignity Growth Lending)">
        Members involved in specific sectors like agribusiness, e-mobility, sustainable housing, etc
        Asset co-owned by Sacco and borrower.

        </MDBAccordionItem>
        <MDBAccordionItem collapseId={7} headerTitle="RAF (Resilient Agribusiness Financing)">
        Agricultural commodity producers with contractual agreements.
        Issued warehouse receipt as collateral.

        </MDBAccordionItem>
        <MDBAccordionItem collapseId={8} headerTitle="SGL (Saving Grace Lending)">
        Members needing additional project funds.
        Existing loan repayment record required.
        

        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
    </div>
    
  );
}

export default ContactUs;