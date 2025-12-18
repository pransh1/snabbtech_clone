import React from "react";
import "../css/Partnership.css";
import PartnerImg from "../assets/media.jpg"; 

const Partnership = () => {
  return (
    <section className="partnership-main">
      <div className="partnership-container">

        
        <div className="partnership-content">
          <span className="partnership-label">PARTNERSHIPS</span>

          <h2>
            Driving Innovation Through <br />
            <span>Strategic Collaborations</span>
          </h2>

          <p>
            At SnabbTech, we believe in the power of partnerships to
            accelerate growth and deliver cutting-edge solutions.
          </p>

          <button className="partnership-btn">Get in Touch</button>
        </div>

        
        <div className="partnership-image">
          <img src={PartnerImg} alt="Strategic Collaboration" />
        </div>

      </div>
    </section>
  );
};

export default Partnership;
