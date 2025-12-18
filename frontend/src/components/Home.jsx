import React from 'react'
import "../css/Home.css"
import iphoneIng from "../assets/TAXI.png";

const Home = () => {
  return (
    <>
      <section className="bgimg-overlay-container">
        <div className='section-container'>
          <div className='section-content'>
            <h1>
              Your Trusted Tech Partner <br />
              in<span>Product Engineering.</span>
            </h1>

            <p>Bespoke Web, App, and Custom GenAI Development—<br/> 
            from Concept to Scalable, Secure, and High-<br/>
            Performance Solutions.</p>
            
            <button className="section-btn">Get in Touch</button>
          </div>
        </div>
          <div className='iphone-container'>
          <img src={iphoneIng} alt="iphone preview" />
        </div>
      </section>
    </>
  )
}

export default Home