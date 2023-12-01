import React, { useState } from "react";
import { Button, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

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

function NavBar() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const navbarItemStyle = {
    color: navbarExpanded ? "black" : "#2E8B57",
  };

  const dropdownItemStyle = {
    color: "black", // Set color to black for dropdown items
  };

  const specialItems = ["HOME", "CAREERS", "CONTACT US"]; // Update this array with the labels you want to be white

  const menuShow = (mItems, parentPath = "") => {
    const handleDropdownItemClick = () => {
      setNavbarExpanded(false); // Close the navbar when a dropdown item is clicked
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
            style={isSpecialMenuItem ? { color: "white" } : navbarItemStyle}
            onClick={handleDropdownItemClick} // Close navbar on dropdown item click
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
        }}>
        <Navbar.Brand as={Link} to="/" role="menuitem">
          {/* Uncomment and customize the logo */}
          {/* <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} /> */}
        </Navbar.Brand>
        <Button variant="btn btn-primary" style={{ color: "white" }}>
          Member Login
        </Button>
      </div>
      <div className="d-flex ">
        <Navbar
          className="container-fluid "
          bg="#2E8B57"
          expand="lg"
          variant=""

          role="navigation"
          expanded={navbarExpanded}
          onToggle={handleNavbarToggle}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto container-fluid flex justify-content-center">{menuShow(navBarData)}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
