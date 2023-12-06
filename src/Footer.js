import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
 
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "./assets/logg.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green text-white pt-5 pb-4">
      <div className="container">
        {/* First Row */}

        <div className="row justify-content-center">
          <div className="col-md-2 mt-3">
            <h6
              className="text-uppercase mb-4 font-weight-bold"
              style={{ color: "white" }}
            >
              <strong>ABOUT US</strong>
            </h6>
            <p className="hover-black">
            <Link to= "/about-us" className="btn btn-orange" style={{color: "white"}}> {/* Apply the custom class */}
                   <small>Our Vision and Mision</small> 
                  </Link>
            </p>
            <p className="hover-black">
            <Link to= "/about-us/our-heritage" className="btn btn-orange" style={{color: "white"}}> {/* Apply the custom class */}
                   <small>Unity Sacco Heritage</small> 
                  </Link>
            </p>
            <p className="hover-black">
            <Link to= "/about-us/leadership" className="btn btn-orange" style={{color: "white"}}> {/* Apply the custom class */}
                   <small>Unity Sacco Leadership</small> 
                  </Link>
            </p>
          </div>

          <div className="col-md-2 mt-3">
            <h6
              className="text-uppercase mb-4 font-weight-bold"
              style={{ color: "white" }}
            >
              <strong>SERVICES</strong>
            </h6>
            <p className="hover-black">
            <Link to= "/join/save-with-us" className="btn btn-orange" style={{color: "white"}}> {/* Apply the custom class */}
                   <small>Saving Schemes</small> 
                  </Link>
            </p>
            <p className="hover-black">
            <Link to= "/join/borrow-from-us" className="btn btn-orange" style={{color: "white"}}> {/* Apply the custom class */}
                   <small>Loans</small> 
                  </Link>
            </p>
           
            <p className="hover-black">
            <Link to= "/join/bosa-products" className="btn btn-orange" style={{color: "white"}}> {/* Apply the custom class */}
                   <small>BOSA Products</small> 
                  </Link>
            </p>
          </div>

          <div className="col-md-2 mt-3">
            <h6
              className="text-uppercase mb-4 font-weight-bold"
              style={{ color: "white" }}
            >
              <strong>SAVINGS</strong>
            </h6>
            <p className="hover-black">
            <Link to= "/join/save-with-us" className="btn btn-orange" style={{color: "white"}}> {/* Apply the custom class */}
                   <small>BOSA Shares</small> 
                  </Link>
            </p>
            <p className="hover-black">
            <Link to= "/join/save-with-us" className="btn btn-orange" style={{color: "white"}}> {/* Apply the custom class */}
                   <small>Handshake deposits</small> 
                  </Link>
            </p>
            <p className="hover-black">
            <Link to= "/join/save-with-us" className="btn btn-orange" style={{color: "white"}}> {/* Apply the custom class */}
                   <small>Jikakamue Savings</small> 
                  </Link>
            </p>
          </div>

          <div className="col-md-2 mt-3">
            <h6
              className="text-uppercase mb-4 font-weight-bold"
              style={{ color: "white" }}
            >
              <strong>LOANS</strong>
            </h6>
            <p className="hover-black">
            <Link to= "/join/borrow-from-us" className="btn btn-orange" style={{color: "white"}}> {/* Apply the custom class */}
                   <small>Utu Bora Lending</small> 
                  </Link>
            </p>
            <p className="hover-black">
            <Link to= "/join/borrow-from-us" className="btn btn-orange" style={{color: "white"}}> {/* Apply the custom class */}
                   <small>Education Loans</small> 
                  </Link>
            </p>
            <p className="hover-black">
            <Link to= "/join/borrow-from-us" className="btn btn-orange" style={{color: "white"}}> {/* Apply the custom class */}
                   <small>Mobile Loans</small> 
                  </Link>
            </p>
            <p className="hover-black">
            <Link to= "/join/borrow-from-us" className="btn btn-orange" style={{color: "white"}}> {/* Apply the custom class */}
                   <small>Karibu Loans</small> 
                  </Link>
            </p>
          </div>

          <div className="col-md-3 mt-3">
            <h6
              className="text-uppercase mb-4 font-weight-bold"
              style={{ color: "white" }}
            >
              <strong>OUR OFFICES</strong>
            </h6>
            <p className="">
              <small>
                <i className="fas fa-map-marker mr-3"></i> Nairobi, Kenya
              </small>
            </p>
           
            <p className="">
              <small>
                <i className="fas fa-phone mr-3"></i> +254 748 015 761
              </small>
            </p>

            <p className="">
              <small>
                <i className="fas fa-map-marker mr-3"></i> Maua, Meru
              </small>
            </p>
            
            <p className="">
              <small>
                <i className="fas fa-phone mr-3"></i> +254 748 015 761
              </small>
            </p>
            <p className="">
              <small>
                <i className="fas fa-envelope mr-3"></i> Unitysacco@gmail.com
              </small>
            </p>
          </div>

          
        </div>

        {/* #second row */}
        <div className="row mt-4">
          <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4 d-flex justify-content-center">
            <ul className="list-inline d-flex align-items-center">
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-lg text-white">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-lg text-white">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
              {/* <li className="list-inline-item">
                <a href="#" className="btn-floating btn-lg text-white">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li> */}
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-lg text-white">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Third Row */}
        <div className="row">
          <div className="">
            <p>Copyright @2023. All rights reserved by Unity Sacco.</p>
          </div>

          <div className="col-md-5 col-lg-4">
            {/* Additional content for the right side if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
