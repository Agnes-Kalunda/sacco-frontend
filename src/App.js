import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import "./App.css";
import Careers from "./Careers";
import ContactUs from "./ContactUs";
import Downloads from "./Downloads";
import Faqs from "./Faqs";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Heritage from "./Heritage";
import Home from "./Home";
import Leadership from "./Leadership";
import LoanEligibility from "./LoanEligibility";
import Loans from "./Loans";
import Login from "./Login";
import NavBar from "./NavBar";
import Newsletter from "./Newsletter";
import PaymentModes from "./PaymentModes";
import Policies from "./Policies";
import Register from "./Register";
import Savings from "./Savings";
import Socials from "./Socials";
import LoanProducts from './LoanProducts';
import StepThree from './StepThree'
import Update from './Update';
// import Read from './Read';
import Create from './Create';



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
          <Route path="/about-us">
            <Route index element={<AboutUs />} />
            <Route path="our-heritage" element={<Heritage />} />
            <Route path="leadership" element={<Leadership />} />
          </Route>

          <Route path="/join">
            <Route index element={<Register />} />
            <Route path="save-with-us" element={<Savings />} />
            <Route path="borrow-from-us" element={<Loans />} />
            <Route path="loan-eligibility" element={<LoanEligibility />} />
            <Route path="bosa-products" element={<LoanProducts />} />
            <Route path="/join/create" element={<Create />} />
            <Route path="/join/update/:id" element={<Update />} />
            
            
            
          </Route>

          <Route path="/resources" >
            <Route index element={<PaymentModes />} />
            <Route path="payment-modes" element={<PaymentModes />} />
            <Route path="policies" element={<Policies />} />
            <Route path="newsletter" element={<Newsletter />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="faqs" element={<Faqs />} />
          </Route>


        
          
          {/* <Route path="/create" element={<Create />} />
          <Route path="/create/add" element={<Add />} /> */}
          {/* <Route path="/update/:id" element={<Update />} />
          <Route path="/read/:id" element={<Read />} />  */}



          <Route path="/StepThree" element={<StepThree />} />





          <Route path="login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
