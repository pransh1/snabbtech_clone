import React from "react";
import "../css/Prediction.css";

import IndustryImg from "../assets/prediction.webp";

// React Icons
import { FaUsers } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const Prediction = () => {
  return (
    <section className="industry-main">
      <div className="industry-container">

        
        <div className="industry-image">
          <img src={IndustryImg} alt="Industry Infrastructure" />
        </div>

        
        <div className="industry-content">
          <span className="industry-label">OUR INDUSTRY</span>

          <h2>
            Here are 3 Reasons to <br />
            Patronize <span>SnabbTech</span>
          </h2>

          <div className="industry-points">

            <div className="industry-point">
              <FaUsers className="industry-icon" />
              <div>
                <h4>Expert In-House Team</h4>
                <p>
                  100+ products delivered by our experienced tech,
                  project management, and QA experts.
                </p>
              </div>
            </div>

            <div className="industry-point">
              <MdAttachMoney className="industry-icon" />
              <div>
                <h4>Cost-Efficient Solution</h4>
                <p>
                  40–50% lower cost vs building an in-house team.
                </p>
              </div>
            </div>

            <div className="industry-point">
              <HiOutlineRocketLaunch className="industry-icon" />
              <div>
                <h4>Faster Execution, Zero Compliance Hassle</h4>
                <p>
                  Scale up/down quickly without HR and compliance overheads.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Prediction;
