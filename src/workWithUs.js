import React from "react";
import "./App.css";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function WorkWithUs() {
  return (
    <div>
      <div
        className="container"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <div className="text-center mb-2-8 mb-lg-6 ">
        <h2 className="service" style={{ marginBottom: "10px", color: "orange" }}>
          <strong>Why Choose us</strong>
        </h2>
          <hr style={{ marginBottom: "20px" }} />
        </div>
        <div className="row align-items-center">
          <div className="col-sm-6 col-lg-3 mb-2-9 mb-sm-0">
            <div className="pr-md-3">
              <div className="text-center text-sm-right mb-2-9">
                <div className="mb-4">
                  <FontAwesomeIcon
                    icon={faUsers}
                    alt="..."
                    className="rounded-circle"
                  />
                </div>
                <h4 className="sub-info">Accountability</h4>
                <p className="display-30 mb-0">
                  At Unity Sacco, our staff's commitment to accountability
                  ensures transparent and reliable service. Upholding the
                  highest standards, we guarantee integrity at every turn,
                  empowering your financial journey with trust.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-2-9 mb-sm-0">
            <div className="pr-md-3">
              <div className="text-center text-sm-right mb-2-9">
                <div className="mb-4">
                  <FontAwesomeIcon
                    icon={faUsers}
                    alt="..."
                    className="rounded-circle"
                  />
                </div>
                <h4 className="sub-info">Dedicated Team</h4>
                <p className="display-30 mb-0">
                  Dedicated to your financial success, our team at Unity Sacco
                  is committed to providing personalized and attentive service.
                  With a passion for excellence, we work tirelessly to support
                  your financial goals, ensuring a positive and rewarding
                  experience for every member.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-2-9 mb-sm-0">
            <div className="pr-md-3">
              <div className="text-center text-sm-right mb-2-9">
                <div className="mb-4">
                  <FontAwesomeIcon
                    icon={faUsers}
                    alt="..."
                    className="rounded-circle"
                  />
                </div>
                <h4 className="sub-info">Efficient Loan Processing</h4>
                <p className="display-30 mb-0">
                  Experience efficient loan processing at Unity Sacco. Our
                  streamlined processes ensure swift handling of applications,
                  providing quick access to the financial support you need
                  without unnecessary delays.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="pr-md-3">
              <div className="text-center text-sm-right mb-2-9">
                <div className="mb-4">
                  <FontAwesomeIcon
                    icon={faUsers}
                    alt="..."
                    className="rounded-circle"
                  />
                </div>
                <h4 className="sub-info">Transforming Lives</h4>
                <p className="display-30 mb-0">
                  At Unity Sacco, we're committed to transforming lives. Our
                  financial solutions empower individuals, creating positive and
                  lasting impacts on their financial well-being, hence improving
                  their everyday lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;
