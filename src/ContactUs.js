import React from 'react';


const ContactUs = () => {
  return (
    <div className="contact3 py-5">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-shadow">
                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" className="img-fluid" alt="Contact" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-box ml-3">
                <h2 className="service" style={{ marginBottom: "25px", paddingTop: "7%", color: "orange" }}>
                  <strong>Contact Us</strong>
                </h2>
                <form className="mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea className="form-control" rows="3" placeholder="Message" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-success mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
 <div className="col-lg-12" style={{ marginLeft: "5%", marginTop: "5%" }}>
      <div className=" mt-4 border-0 mb-4 mx-auto"> {/* Added mx-auto for centering */}
        <div className="row">
          <div className="col-lg-4 col-md-4" style ={{ marginTop:"5%"}}>
            <div className="card-body d-flex align-items-center c-detail pl-0">
              <div className="mr-3 align-self-center">
                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt="Address" />
              </div>
              <div className="">
                <h6 className="font-weight-medium">Address</h6>
                <p className="">Tarikiville Mall.
                  <br /> Kitengela</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4" style ={{ marginTop:"5%"}}>
            <div className="card-body d-flex align-items-center c-detail">
              <div className="mr-3 align-self-center">
                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt="Phone" />
              </div>
              <div className="">
                <h6 className="font-weight-medium">Phone</h6>
                <p className="">+254 748 015 761
                  <br /> +254 748 015 761</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4" style ={{ marginTop:"5%"}}>
            <div className="card-body d-flex align-items-center c-detail">
              <div className="mr-3 align-self-center">
                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt="Email" />
              </div>
              <div className="">
                <h6 className="font-weight-medium">Email</h6>
                <p className="">
                  info@unitysacco.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
