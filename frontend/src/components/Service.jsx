import React from "react";
import "../css/Service.css";

const Services = () => {
  return (
    <>
      <section className="services-main">
        <div className="services-container">

          <div className="service-card">
            <div className="icon">🖥️</div>
            <h3>Custom Software Development</h3>
            <p>
              Web & mobile applications tailored to business needs.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">⚙️</div>
            <h3>Generative AI Development</h3>
            <p>
              AI-powered solutions for automation and innovation.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">🌐</div>
            <h3>Product Engineering <br /> & Consultation</h3>
            <p>
              Expert guidance on how to build, what to build, and how to scale.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">📈</div>
            <h3>Growth and Description</h3>
            <p>
              We help startups and SMEs turn ideas into scalable digital products—cost-effectively.
            </p>
          </div>

        </div>
      </section>
      
      <section className="portfolio-main">
        <div className="portfolio-container">
          <span className="portfolio-label">
            <i className="portfolio-icon"></i> PORTFOLIO
          </span>

          <h2>
            The Successfully <span>Snabb</span> Businesses
          </h2>

          <p>
            We take pride in catering their growing business needs and making them
            stand apart on the App Store & Google Play.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
