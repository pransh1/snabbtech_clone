import React from "react";
import "../css/BestSolutions.css";

import Food from "../assets/delivered.png";
import Education from "../assets/book.svg";
import HomeService from "../assets/house.png";
import Healthcare from "../assets/delivery.png";
import RealEstate from "../assets/hand.svg";
import Fitness from "../assets/fitness.svg";
import Sports from "../assets/sports.svg";
import Ecommerce from "../assets/commerce.svg";

const BestSolutions = () => {
  const solutions = [
    { img: Food, title: "Food & Pickup & Delivery" },
    { img: Education, title: "Education" },
    { img: HomeService, title: "Home Services" },
    { img: Healthcare, title: "Healthcare" },
    { img: RealEstate, title: "Real Estate" },
    { img: Fitness, title: "Fitness" },
    { img: Sports, title: "Sports" },
    { img: Ecommerce, title: "E-Commerce" },
  ];

  return (
    <section className="best-solutions">
      <div className="best-header">
        <h2>
          Best <span>Solutions</span>
        </h2>
        <p>
          Continuous iteration and adaptation based on feedback for optimal
          problem-solving.
        </p>
      </div>

      <div className="solutions-grid">
        {solutions.map((item, index) => (
          <div className="solution-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSolutions;
