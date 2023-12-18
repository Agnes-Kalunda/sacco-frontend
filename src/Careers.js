import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap'; // Import Grid components
import Sales from './Sales.pdf'
import image56 from './assets/image55.jpg';

function Careers() {
  return (
    <Container>
      <Row>
      
        <Col md={6}>
          <div style={{marginTop:"7%"}}>
          <h2 className="service" style={{ marginBottom: "15px", marginTop: "50px", color:"orange" }}>
            <strong>Sales and outreach officer</strong>
          </h2>
            <p>(4 positions)</p>

            <h4><strong>Job Summary</strong></h4>
            <p>Responsible for developing new business prospects, recruiting and interacting with existing Members to
increase sales of the Society’s products and services</p>

<p>For key tasks and responsibilities, together with the application procedure, please download the pdf linked below :</p>
<a
        href={Sales}
        download="Sales-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
        <button>Download .pdf</button>
      </a>

          </div>
        </Col>

        <Col md={6}>
          <img
            src={image56}
            alt="Image Alt Text"
            className="img-fluid"
            style={{ marginTop: "7%", marginBottom: "7%" }}
          />
        </Col>

      </Row>
    </Container>
  );
}

export default Careers;
