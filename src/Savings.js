import React from "react";
import "./App.css";
import image3 from "./assets/image3.jpeg";
import {
  faMobileAlt,
  faBook,
  faHandshake,
  faMoneyBillWave,
  faChartLine,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Savings = () => {
  let schemeCounter = 0; // Counter variable to number schemes

  const incrementCounter = () => {
    schemeCounter += 1;
    return schemeCounter;
  };

  return (
    <div>
      <div>
        <h1 style={{ color: "green", paddingTop: "7%" }}>
          Unity Sacco Saving Schemes
        </h1>
        <p>
          <small>🌟 Discover the Unity Sacco Advantage! 🌟</small>
        </p>
        <p>
          At Unity Sacco, we believe in the power of savings to transform lives.
          Choose our tailor-made savings plans to invest in your future.
        </p>
      </div>
      <div className="wrapper">
        <div>
          <div className="text-box">
            <h4 className="service">
              <strong>Jikakamue Savings</strong>
            </h4>
            <p>
              This allows members to regularly save money for a specific purpose
              in the future. It is aimed at helping them achieve a specific goal
              that requires a considerable amount of money, without necessarily
              taking up loans
            </p>
            <p></p>
            <p></p>
            <p>
              <strong>Features Include:</strong>
            </p>
            <ul className="feature-list">
              <li>
                Deposits are withdrawable but after a certain fixed period of
                time
              </li>
            </ul>
            <p>
              <strong>Benefits Include:</strong>
            </p>
            <ul className="feature-list">
              <li>Such deposits will earn an interest on annual basis</li>
              <li>Can be used as additional collateral for loans</li>
            </ul>
            <button className="learn-more-button blue-button">
              Start Saving
            </button>
          </div>
        </div>
        <div style={{ paddingTop: "7%" }}>
          <div className="text-box">
            <h4 className="service">
              <strong>Daily/ Weekly BOSA Deposits</strong>
            </h4>
            <p>
              This is a daily savings activity that allows one to save regularly
              from the remnants of his/her daily/weekly expenditure.
            </p>

            <p>
              <strong>Features Include:</strong>
            </p>
            <ul className="feature-list">
              <li>
                Can be contributed through Unity Sacco Mobile Money transfer
                channels
              </li>
              <li>
                The daily deposits trend can be used to appraise members for
                loans
              </li>
            </ul>
            <p>
              <strong>Benefits Include:</strong>
            </p>
            <ul className="feature-list">
              <li>Stress-free way of accumulating your deposits</li>
              <li>Access to loan facilities</li>
            </ul>
            <button className="learn-more-button blue-button">
              Start Saving
            </button>
          </div>
        </div>
        <div style={{ paddingTop: "7%" }}>
          <div className="text-box">
            <h4 className="service">
              <strong>Daily/ Weekly BOSA Deposits</strong>
            </h4>
            <p>
              These are the continuous monthly savings that members make to the
              Sacco throughout their membership..
            </p>

            <p>Minimum Monthly Contributions </p>
            <ul className="feature-list">
              <li>Individuals: Kes. 1,000/=</li>
              <li>Groups: Kes. 5,000/=</li>
              <li>Corporates: Kes 10,000/=</li>
            </ul>

            <p>
              <strong>Features Include:</strong>
            </p>
            <ul className="feature-list">
              <li>Allows members to access deposit-based loans</li>
              <li>
                Can be contributed through standing order, check-off from salary
                or produce proceeds, Mobile Banking, Bank transfers or direct
                deposit at the Bank.
              </li>
              <li>The Handshake Savings earn interest annually</li>
              <li>
                Annual interest earned shall be automatically capitalized for
                any member holding less than the Minimum Share Capital
              </li>
              <li>TCan only be refunded upon membership withdrawal see</li>
            </ul>
            <p>
              <strong>Benefits Include:</strong>
            </p>
            <ul className="feature-list">
              <li>Access to Loan facilities</li>
              <li>Guarantee loans</li>
              <li>Earn interest/rebates annually</li>
            </ul>
            <button className="learn-more-button blue-button">
              Start Saving
            </button>
          </div>
        </div>
        <div style={{ paddingTop: "7%" }}>
          <div className="text-box">
            <h4 className="service">
              <strong>BOSA Shares Account</strong>
            </h4>

            <p>Minimum Monthly Contributions </p>
            <ul className="feature-list">
              <li>Individuals: Kes. 20,000/=</li>
              <li>Groups: Kes. 25,000/=</li>
              <li>Corporates: Kes 50,000/=</li>
            </ul>

            <p>
              <strong>Features Include:</strong>
            </p>
            <ul className="feature-list">
              <li>
                A tailor-made account for long-term saving with attractive
                dividends.
              </li>
              <li>
                The shares are non-refundable but can be transferred to an
                existing Sacco member.
              </li>
              <li>
                Each member needs to have share capital depending on their
                category.
              </li>
              <li>A member may purchase shares by installment.</li>
            </ul>
            <p>
              <strong>Benefits Include:</strong>
            </p>
            <ul className="feature-list">
              <li>Dividends earnings</li>
              <li>
                Dividends shall be automatically capitalized for any member
                holding less than the Minimum Share Capital.
              </li>
            </ul>
            <button className="learn-more-button blue-button">
              Start Saving
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;
