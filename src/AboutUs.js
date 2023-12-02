import React from "react";
import background from './assets/background.jpeg';
import Banner2 from './Banner2'

function AboutUs() {
  const gridContainerStyle = {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    paddingTop:"5%",
  };

  const cellStyle = {
    
    padding: "16px",
    textAlign: "center",
    borderRadius: "8px", // Add border-radius to each cell
  };

  return (

    <div className="About">
    <div style={gridContainerStyle}>
    
      <div style={cellStyle}>
        <p>OUR VISION</p>
      </div>
      <div style={cellStyle}>
        <img src={background} alt="Image 1" style={{ maxWidth: "100%", maxHeight: "100%" }} />
      </div>
     
      <div style={cellStyle}>
        <img src={background} alt="Image 2" style={{ maxWidth: "100%", maxHeight: "100%" }} />
      </div>
      <div style={cellStyle}>
        <p>OUR MISSION</p>
      </div>

     
    </div>

<Banner2/>

    </div>

  );
}

export default AboutUs;
