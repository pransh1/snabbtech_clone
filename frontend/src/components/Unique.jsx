import React from "react";
import "../css/Unique.css";

import { FaChalkboardTeacher } from "react-icons/fa";
import { MdBugReport } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";

const Unique = () => {
  return (
    <section className="unique-main">
      <div className="unique-header">
        <h2>
          Unique Solutions <span>SnabbTech offers</span>
        </h2>
        <p>Beyond Development: End-to-End Product Success</p>
      </div>

      <div className="unique-cards">

        <div className="unique-card">
          <FaChalkboardTeacher className="unique-icon" />
          <h3>In-Depth Consulting</h3>
          <p>
            Accurate scoping to crystallize the right product roadmap.
          </p>
        </div>

        <div className="unique-card">
          <MdBugReport className="unique-icon" />
          <h3>Bug-Free Guarantee</h3>
          <p>
            Free 90-day support to ensure seamless deployment.
          </p>
        </div>

        <div className="unique-card">
          <RiShieldCheckLine className="unique-icon" />
          <h3>Industry-Standard Quality Audits</h3>
          <p>
            Every product meets performance, security, and scalability benchmarks.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Unique;
