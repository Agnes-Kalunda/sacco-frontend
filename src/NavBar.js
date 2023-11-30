import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./assets/logg.png";

const navBarData = [
  {
    label: "HOME",
    url: "/",
  },
  {
    label: "ABOUT US",
    submenu: [
      {
        label: "Vision, Mission and Focus",
        url: "about-us", // Updated URL for the "About Us" dropdown
      },
      {
        label: "Our Heritage",
        url: "about-us/our-heritage", // Updated URL for the "Our Heritage" page
      },
      {
        label: "Leadership",
        url: "about-us/leadership", // Updated URL for the "Leadership" page
      },
    ],
  },
  {
    label: "SAVE AND BORROW",
    submenu: [
      {
        label: "Join us today",
        url: "/join",
      },
      {
        label: "Save with us today",
        url: "/join/save-with-us",
      },
      {
        label: "Borrow from us today",
        url: "/join/borrow-from-us",
      },
      {
        label: "Loan eligibility",
        url: "/join/loan-eligibility",
      },
    ],
  },
  {
    label: "RESOURCES",
    submenu: [
      {
        label: "Payment Modes",
        url: "/resources/payment-modes",
      },
      {
        label: "Policies",
        url: "/resources/policies",
      },
      {
        label: "Newsletter",
        url: "/resources/newsletter",
      },
      {
        label: "Downloads",
        url: "/resources/downloads",
      },
      {
        label: "Gallery",
        url: "/resources/gallery",
      },
      {
        label: "FAQs",
        url: "/resources/faqs",
      },
    ],
  },
  {
    label: "CAREERS",
    url: "/careers",
  },
  {
    label: "CONTACT US",
    url: "/contact-us",
  },
];

function NavBar() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const menuShow = (mItems, parentPath = "") => {
    return mItems.map((item, index) => {
      const fullPath = `${parentPath}${item.url}`;

      if (item.submenu) {
        return (
          <NavDropdown
            title={item.label}
            key={index}
            className="dropdown-menu-dark dropdown"
            role="menu"
          >
            {menuShow(item.submenu, `${fullPath}/`)}
          </NavDropdown>
        );
      } else {
        return (
          <Nav.Link as={Link} to={fullPath} key={index} className="nav-item">
            {item.label}
          </Nav.Link>
        );
      }
    });
  };

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  return (
    <div className="navbackground">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Navbar.Brand as={Link} to="/" role="menuitem">
          {/* Uncomment and customize the logo */}
          {/* <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} /> */}
        </Navbar.Brand>
        <Button variant="outline-success">Member Login</Button>
      </div>
      <div className="d-flex justify-content-center">
        <Navbar
          bg="white"
          expand="lg"
          variant=""
          role="navigation"
          expanded={navbarExpanded}
          onToggle={handleNavbarToggle}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">{menuShow(navBarData)}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
