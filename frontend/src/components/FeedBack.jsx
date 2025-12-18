import React from "react";
import "../css/FeedBack.css";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Circle from "../assets/circle.svg";
import Triangle from "../assets/triangle.svg";

const FeedBack = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        
        <div className="testimonials-left">
          <h2>
            What our <span>clients</span>
            <br />
            say about us.
          </h2>

          <p>
            Aliquam tristique libero at dui sodales, et placerat orci lobortis.
            Donec metus lorem, vulputate at sapien.
          </p>
        </div>

        
        <div className="testimonials-right">

          
          <div className="testimonial-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p>
              SnabbTech consistently delivers efficient and reliable service,
              demonstrating a clear understanding of project requirements. They
              excel at translating these needs into precise and effective
              technical solutions.
            </p>

            <div className="testimonial-footer">
              <div>
                <h4>Nathan</h4>
                <span>Founder</span>
              </div>
              <FaQuoteRight className="quote-icon" />
            </div>
          </div>

          
          <div className="testimonial-card ">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p>
              He skillfully transformed our idea into reality, demonstrating
              expertise and precision. We are eager to continue working with him
              and would confidently recommend his services for any development
              project.
            </p>

            <div className="testimonial-footer">
              <div>
                <h4>Omkar</h4>
                <span>CEO</span>
              </div>
              <FaQuoteRight className="quote-icon" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeedBack;
