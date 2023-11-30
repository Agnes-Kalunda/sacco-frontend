import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Socials from "./Socials";
import Services from "./services";
import Footer from "./Footer";
import Banner from "./Banner";
import WorkWithUs from "./workWithUs";
import Hero from "./Hero";
import Home from "./Home";
import Careers from "./Careers";
import ContactUs from "./ContactUs";
import Heritage from "./Heritage";
import Faqs from "./Faqs";
import Gallery from "./Gallery";
import Downloads from "./Downloads";
import Leadership from "./Leadership";
import LoanEligibility from "./LoanEligibility";
import Policies from "./Policies";
import PaymentModes from "./PaymentModes";
import Savings from "./Savings";
import Newsletter from "./Newsletter";
import Loans from "./Loans";
import Join from "./Register";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Socials />
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="about-us/our-heritage" element={<Heritage />} />
          <Route path="about-us/leadership" element={<Leadership />} />
          <Route path="/join" element={<Join />} />
          <Route path="/join/save-with-us" element={<Savings />} />
          <Route path="/join/borrow-from-us" element={<Loans />} />
          <Route path="/join/loan-eligibility" element={<LoanEligibility />} />
          <Route path="/resources/payment-modes" element={<PaymentModes />} />
          <Route path="/resources/policies" element={<Policies />} />
          <Route path="/resources/newsletter" element={<Newsletter />} />
          <Route path="/resources/downloads" element={<Downloads />} />
          <Route path="/resources/gallery" element={<Gallery />} />
          <Route path="/resources/faqs" element={<Faqs />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
