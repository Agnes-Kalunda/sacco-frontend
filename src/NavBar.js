// ... (your previous imports)
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
    url: "/about-us",
    submenu: [
      {
        label: "Vision, Mission and Focus",
        url: "vision",
      },
      {
        label: "Our Heritage",
        url: "our-heritage",
      },
      {
        label: "Leadership",
        url: "leadership",
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

  const navbarItemStyle = {
    color: navbarExpanded ? "white" : "#2E8B57",
  };

  const dropdownItemStyle = {
    color: "black", // Set color to black for dropdown items
  };

  const specialItems = ["HOME", "CAREERS", "CONTACT US"]; // Update this array with the labels you want to be white

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
            style={specialItems.includes(item.label) ? dropdownItemStyle : {}}
          >
            {menuShow(item.submenu, `${fullPath}/`)}
          </NavDropdown>
        );
      } else {
        const isSpecialMenuItem = specialItems.includes(item.label);
        return (
          <Nav.Link
            as={Link}
            to={fullPath}
            key={index}
            className={`nav-item${
              isSpecialMenuItem ? " special-menu-item" : ""
            }`}
            style={isSpecialMenuItem ? { color: "white" } : navbarItemStyle}
          >
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
          width: "100%",
        }}
      >
        <Navbar.Brand as={Link} to="/" role="menuitem">
          {/* Uncomment and customize the logo */}
          {/* <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} /> */}
        </Navbar.Brand>
        <Button variant="btn btn-primary" style={{ color: "white" }}>
          Member Login
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        <Navbar
          bg="#2E8B57"
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
