import React from 'react';
import './Footer.css';
import { GiHamburger } from "react-icons/gi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
                   <GiHamburger className="w-[50px] h-[50px] text-white text-2 "/>      <div className="font-extrabold text-white ">BiteGo</div>

          <p className="tagline">Delivering happiness, one meal at a time since 2020</p>
          <p className="description">We connect food lovers with the best local restaurants and chefs, bringing authentic flavors right to your doorstep.</p>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#">Food Delivery</a></li>
              <li><a href="#">Meal Kits</a></li>
              <li><a href="#">Chef Experiences</a></li>
              <li><a href="#">Corporate Catering</a></li>
              <li><a href="#">Subscription Meals</a></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h3>For Foodies</h3>
            <ul>
              <li><a href="#">Discover Restaurants</a></li>
              <li><a href="#">Seasonal Specials</a></li>
              <li><a href="#">Dietary Options</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Food Blog</a></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="mailto:hello@foodexpress.com">hello@bitego.com</a></li>
              <li><a href="tel:+1800YUMFOOD">1-800-YUM-FOOD</a></li>
              <li>24/7 Customer Support</li>
              <li>Partner With Us</li>
              <li>Delivery Areas</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BiteGo. All rights reserved. <span className="food-slogan">Good food. Good mood.</span></p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;