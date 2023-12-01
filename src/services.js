import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import {
  faMobileAlt,
  faBook,
  faHandshake,
  faMoneyBillWave,
  faChartLine,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  const cardsData = [
    {
      id: 1,
      title: "Mobile Loans",
      text: "These will be applied for and issued via either a mobile Application or USSD code..",
      icon: faMobileAlt,
    },
    {
      id: 2,
      title: "Education Loans",
      text: "Our education loan is designed to enable families afford school fees",
      icon: faBook,
    },
    {
      id: 3,
      title: "Karibu Loans",
      text: "This is meant to promote active membership through offering new members incentives to access credit before the six months of membership period is over.",
      icon: faHandshake,
    },
    {
      id: 4,
      title: "Utu Bora Lending",
      text: "This loan product is designed to promote togetherness and communal consciousness.",
      icon: faMoneyBillWave,
    },
    {
      id: 5,
      title: "BOSA Shares Account",
      text: "A tailor-made account for long-term savings with attractive dividents.",
      icon: faChartLine,
    },
    {
      id: 6,
      title: "Jikakamue",
      text: "This allows members to regularly save money for a specific purpose in the future.",
      icon: faUsers,
    },
  ];

  return (
    <div className="services">
      <Container className="p-4">
        <h2 className="service" style={{ marginBottom: "10px" }}>
          <strong>Our Services</strong>
        </h2>
        <hr style={{ marginBottom: "20px" }} />
        <Row xs={1} md={2} lg={3} className="g-4">
          {cardsData.map((card) => (
            <Col key={card.id}>
              <Card className="h-100 no-border-card">
                <FontAwesomeIcon
                  icon={card.icon}
                  size="3x"
                  style={{ margin: "20px auto", color: "#2E8B57" }}
                />
                <Card.Body>
                  <Card.Title>
                    <strong>{card.title}</strong>
                  </Card.Title>

                  <Card.Text>{card.text}</Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;
