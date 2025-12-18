import React from 'react'
import "../css/ChooseUs.css"
import FeatureUs from "../assets/feature.png"
import Hand from "../assets/hand.png"
import HandCraft from "../assets/handcraft.png"
import Structure from "../assets/hierarchical-structure.png"


export const ChooseUs = () => {
  return (
    <>
      <div className="why-choose-us">
        <span>Why Choose Us?</span>
      </div>
      <div className="digital-sol">
        <h2>Why Choose Our Digital <span>Solutions</span> ?</h2>
      </div>
      <div className="paragraph">
        <p>We bring the expertise, experience, and efficiency needed to build your tech product—without the risks.</p>
      </div>

      <section className="why-us-main-1">
        <div className="why-us-container-1">

          <div className="why-us-card-1 bg-gear">
            <img src={HandCraft} alt="Expertise" className="why-icon" />
            <div className='text'>
              <h3>Lack of In-House Tech Expertise</h3>
              <p>
                Businesses struggle to build and maintain a custom tech team.
              </p>
            </div>
            <button>Get in Touch</button>
          </div>

          <div className="why-us-card-1 bg-structure">
            <img src={Structure} alt="Complexity" className="why-icon" />
            <div className='text'>
              <h3>High Cost & Complexity</h3>
              <p>
                Hiring, training, and managing developers takes time and resources.
              </p>
            </div>
            <button>Get in Touch</button>
          </div>
        </div>
      </section>

      <section className='why-us-main-2'>
        <div className='why-us-container-2'>
          <div className="why-us-card-2 bg-risk">
            <img src={FeatureUs} alt="Risk" className="why-icon" />
            <div className='text'>
              <h3>Trial & Error Risks</h3>
              <p>
                Developing tech solutions without experience leads to costly mistakes.
              </p>
            </div>
            <button>Get in Touch</button>
          </div>

          <div className="why-us-card-2 bg-custom">
            <img src={Hand} alt="Customize" className="why-icon" />
            <div className='text'>
            <h3>Customize with Flexibility</h3>
              <p>
                Craft applications designed to your business requirements.
              </p>
            </div>
            <button>Get in Touch</button>
          </div>
        </div>
      </section>

    </>
  )
}
