import React from "react";
import "../css/Tennispal.css"
import Tennislogo from "../assets/tennispal_logo.png"
import AppIcon from "../assets/app-store.png"
import PlayIcon from "../assets/play-store-1.png"
import Tennis from "../assets/tennis.png"
const TennisPal = () => {
  return (
    <section className="tennispal-main">
      <div className="tennispal-container">

        <div className="tennispal-content">
          <img
            src={Tennislogo}
            alt="TennisPal Logo"
            className="tennispal-logo"
          />

          <p className="tennispal-description">
            TennisPAL is a community where you can find and connect with
            other like-minded tennis players using the app. Use TennisPAL
            to find your next tennis partner, share your favourite moments,
            discover a new tennis court, and more.
            <br />
            Meet, play, share, and learn tennis, anytime, anywhere!
          </p>

          <div className="tennispal-store">
            <span>Available on:</span>
            <img src={AppIcon} alt="App Icon" />
            <img src={PlayIcon} alt="App Icon" />
          </div>

          <div className="tennispal-stats">
            <div>
              <strong>Downloads:</strong>
              <span>1k+</span>
            </div>
            <div className="dividing-line" />
            <div>
              <strong>Rating:</strong>
              <span>5 / 5</span>
            </div>
          </div>

          <button className="tennispal-btn">Contact Us</button>
        </div>

        
        <div className="tennispal-image">
          <img
            src={Tennis}
            alt="Tennis Player App"
          />
        </div>

      </div>
    </section>
  );
};

export default TennisPal;
