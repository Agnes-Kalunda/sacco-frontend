import React from "react";
import Carousel from "react-bootstrap/Carousel";
import mobileImage from "./assets/mobile.jpeg";
import backgroundImage from "./assets/background.jpeg";
import utuImage from "./assets/utu.png";
import bosaImage from "./assets/bosa.jpeg";
import handshake from "./assets/handshake.jpg";
import dark from "./assets/dark.jpg";
import dark4 from "./assets/dark4.jpg";
import dark5 from "./assets/dark5.jpg";

function Banner() {
  const imageStyle = {
    height: "300px", // Adjust the height based on your preference
    width: "100%",
    objectFit: "cover",
  };

  return (
    <div style={{ paddingTop: "0%" }}>
      <Carousel fade style={{ height: "300px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={dark5}
            alt="First slide"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h3>Why Unity Sacco ?</h3>
            {/* <div style={{display:"flex", marginLeft:"36%"}}>
            <p style={{color:"#0096FF"}}> PROSPERITY. </p> 
            <p style={{color:"orange"}}> RESILIENCE. </p>
            <p style={{color: "green"}}>INSURANCE</p>
            </div> */}
               
           
            <a href="/about-us/our-heritage" className="btn btn-primary">
                Learn More
              </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={dark5}
            alt="Second slide"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h3>Save with us today.</h3>
            <p>We make about your financial freedom.</p>

            <a href="/join/save-with-us" className="btn btn-primary">
                Explore Savings
              </a>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={dark5}
            alt="Third slide"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h3>Borrow from us.</h3>
            <p>
              We care about you hitting your financial goals.
            </p>
            <a href="/join/borrow-from-us" className="btn btn-primary">
                Explore Loans
              </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={dark5}
            alt="Third slide"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h3>We keep you informed</h3>
            <p>
              At Unity Sacco we keep you upto date on our latest developments.
            </p>
            <a href="/resources/faqs" className="btn btn-primary">
                Be informed
              </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
