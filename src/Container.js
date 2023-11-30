import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Vision from "./Vision";
import Home from "./Home";
import Careers from "./Careers";
import ContactUs from "./ContactUs";
import Socials from "./Socials";
import Footer from "./Footer";
import Hero from "./Hero";

function Container() {
  return (
    <>
      <Socials />
      <NavBar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default Container;
