import React from 'react'
import "../css/Header.CSS"
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className='company-logo'>
          <img
            src="https://snabbtech.com/wp-content/uploads/2024/05/Group-1831-1-300x50-removebg-preview.png"
            alt="SnabbTech Logo"
          />
          </div>

          <nav className="nav-bar">
            <a className="home" href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Industry</a>
            <a href="#">Portfolio</a>
            <a href="#">Partnership</a>
            <a href="#">Blog</a>
            <a href="#">SnabbHealth</a>
          </nav>

          <button className="nav-btn">Get In Touch</button>

        </div>
      </header>
    </>
  )
}

export default Header;