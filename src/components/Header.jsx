import React from "react";
import "./Header.css";
import heroImage from '../assets/headerImage.png'

export default function Header() {
  return (
    <header className="header">
      {/* Text Section */}
      <div className="header-text">
        <h1>Ignite Your Digital Presence</h1>
        <p>
          Build blazing-fast, beautiful web experiences that captivate users and
          leave a lasting impression. Let’s make your vision a vivid reality.
        </p>
        <button>Get Started</button>
      </div>

      {/* Image Section */}
      <div className="header-image">
        <img
          src={heroImage}
          alt="Hero"
          className="animated-image"
        />
      </div>
    </header>
  );
}
