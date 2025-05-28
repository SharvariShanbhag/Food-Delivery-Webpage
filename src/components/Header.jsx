import React from "react";
import "./Header.css";
import heroImage from '../assets/headerImage.png'

export default function Header() {
  return (
    <header className="header">
      {/* Text Section */}
      <div className="header-text">
        <h1>Where Hunger Meets Happiness</h1>
<p>
  From sizzling street eats to gourmet treats - we bring the city's flavors straight to your doorstep. Bite in, bliss out, and let your cravings lead the way.
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
