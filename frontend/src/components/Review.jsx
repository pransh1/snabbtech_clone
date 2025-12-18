import React from 'react'
import "../css/Review.css"

const Review = () => {
  return (
    <>
      <div className="reviews-container">
        <div className="reviews-inner">
          <div className="review-box">
            <h3>Google</h3>
            <div className="rating-line">
              <span className="rating-text">4.8</span>
              <span className="stars">★★★★★</span>
            </div>
          </div>
          <div className="review-box">
            <h3>Facebook</h3>
            <div className="rating-line">
              <span className="rating-text">5.0</span>
              <span className="stars">★★★★★</span>
            </div>
          </div>

          <div className="review-box clutch-box">
            <div className="clutch-top-row">
              <div className="clutch-left">
                <span className="reviewed-on">REVIEWED ON</span>
                <div className="clutch-logo"></div>
              </div>

              <div className="clutch-right">
                <span className="stars">★★★★★</span>
                <div className="review-count">4 REVIEWS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review
