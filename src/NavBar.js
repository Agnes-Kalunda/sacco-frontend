import React, { useState } from "react";
import { Button, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoo from './assets/unitylogo.png'

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
        url: "",
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
    url: "/join",
    submenu: [
      {
        label: "Join us today",
        url: "",
      },
      {
        label: "Save with us today",
        url: "save-with-us",
      },
      {
        label: "Borrow from us today",
        url: "borrow-from-us",
      },
      {
        label: "BOSA Products",
        url: "bosa-products",
      },
      {
        label: "Loan eligibility",
        url: "loan-eligibility",
      },
    ],
  },
  {
    label: "RESOURCES",
    url: "resources",
    submenu: [
      {
        label: "Payment Modes",
        url: "",
      },
      {
        label: "Policies",
        url: "policies",
      },
      {
        label: "Newsletter",
        url: "newsletter",
      },
      {
        label: "Downloads",
        url: "downloads",
      },
      {
        label: "Gallery",
        url: "gallery",
      },
      {
        label: "FAQs",
        url: "faqs",
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
// ... (import statements)

function NavBar() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const navbarItemStyle = {
    color: navbarExpanded ? "black" : "black",
  };

  const dropdownItemStyle = {
    color: "black",
    backgroundColor:"orange"
  };


  const yellowBackgroundItems = [
    "Vision, Mission and Focus",
    "Our Heritage",
    "Leadership",
    "Join us today",
    "Borrow from us today",
    "Loan Products",
    "Loan eligibility",
    "Payment Modes",
    "Policies",
    "Newsletter",
    "Downloads",
    "FAQs",
    "Gallery",
  ];
  

  const specialItems = ["HOME", "CAREERS", "CONTACT US"];

  const menuShow = (mItems, parentPath = "") => {
    const handleDropdownItemClick = () => {
      setNavbarExpanded(false);
    };

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
            className={`nav-item${isSpecialMenuItem ? " special-menu-item" : ""}`}
            style={isSpecialMenuItem ? { color: "black" } : navbarItemStyle}
            onClick={handleDropdownItemClick}
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
          <img src={logoo} alt="Logo" style={{ width: '90px', height: 'auto'}} />
        </Navbar.Brand>
        <Button variant="success" style={{ color: "white", height: "50px", marginTop: "35px" }}>
          Member Login
        </Button>
      </div>
      <div className="d-flex sticky-top">
        <Navbar
          className="container-fluid"
          bg="#2E8B57"
          expand="lg"
          variant=""
          role="navigation"
          expanded={navbarExpanded}
          onToggle={handleNavbarToggle}
          style={{ marginLeft: '4%' }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto container-fluid flex justify-content-center" style={{ marginLeft: '5%' }}>
              {menuShow(navBarData)}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;