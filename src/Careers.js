import React from 'react';
 import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <div className="Careers" style={{marginTop:"20%", marginBottom:"20%"}}>
      {/* <h1 className="404">404</h1> */}
      <div className="cloak__wrapper">
        <div className="cloak__container">
          <div className="cloak"></div>
        </div>
      </div>
      <div className="info">
        <h2 style={{color : "orange"}}>We can't find  any posted opportunities</h2>
        <p>
          Check back later for any posted Job opportunities.
        </p>
        <div className="col-lg-12">
                      <Link to="/" className="btn btn-success mt-3 text-white border-0 px-3 py-2"><span> Go back to HomePage</span></Link >
                    </div>
      </div>
    </div>
  );
};

export default Careers;
