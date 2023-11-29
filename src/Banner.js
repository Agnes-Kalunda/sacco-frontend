import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mobileImage from './assets/mobile.jpeg';
import backgroundImage from './assets/background.jpeg';
import utuImage from './assets/utu.png';
import bosaImage from './assets/bosa.jpeg';
import handshake from './assets/handshake.jpg'
import dark from './assets/dark.jpg'
import dark2 from './assets/dark2.jpg'
import dark3 from './assets/dark3.jpg'

function Banner() {
  const imageStyle = {
    height: '300px', // Adjust the height based on your preference
    width: "100%",
    objectFit: 'cover',
  };

  return (
    <div style={{ paddingTop: '5%'}}>
      <Carousel fade style={{ height: '300px' }}>
        <Carousel.Item>
          <img className="d-block w-100" src={dark } alt="First slide" style={imageStyle} />
          <Carousel.Caption>
            <h3>Why Unity Sacco ?</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="btn btn-primary">Learn More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={dark} alt="Second slide" style={imageStyle} />
          <Carousel.Caption>
            <h3>Save with us today.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="btn btn-primary">Explore Savings</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={dark2} alt="Third slide" style={imageStyle} />
          <Carousel.Caption>
            <h3>Borrow from us.</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <button className="btn btn-primary">Explore Loans</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={dark3} alt="Third slide" style={imageStyle} />
          <Carousel.Caption>
            <h3>We keep you informed</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <button className="btn btn-primary">Explore Resources</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;