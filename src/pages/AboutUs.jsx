// import React from 'react';
// import './AboutUs.css';

// const WavySection = () => {
//   return (
//     <div className="hero-container">
//       <div className="hero-left">
//         <h1>Have no time to prepare <span>food</span>?</h1>
//         <p>
//           Choose one of our plans, enter delivery time and enjoy delicious food without leaving your home!
//         </p>
//         <div className="buttons">
//           <button className="order-btn">Order food</button>
//           <button className="read-btn">Read more</button>
//         </div>
//       </div>

//       <div className="hero-right">
//         {/* Add your image or background via CSS */}
//       </div>
//     </div>
//   );
// };

// export default WavySection;

import React from 'react';
import './AboutUs.css';

import { useNavigate } from 'react-router-dom';

const WavySection = () => {
  const navigate = useNavigate();

   const goToHome = () => {
    navigate('/'); // Assuming "/" route renders your Home component
  };
  return (
    <div className="hero-container">
      <div className="hero-left animate-fade-in-left">
        <h1>Welcome to <span>BiteGo</span></h1>
        <p>
          At BiteGo, we make mealtime effortless. Whether you're busy, on-the-go, or just want to skip cooking,
          our chef-prepared meals are crafted to deliver flavor, freshness, and convenience to your doorstep.
        </p>
        <p>
          We believe in food that fuels your lifestyle — fast, nutritious, and delicious. Join thousands who trust BiteGo
          to take care of their cravings, one bite at a time.
        </p>
        <div className="buttons">
          <button className="order-btn" onClick={goToHome}>Explore Menu</button>
          {/* <button className="read-btn">Learn More</button> */}
        </div>
      </div>

      <div className="hero-right animate-fade-in-right">
        {/* Background image added via CSS */}
      </div>
    </div>
  );
};

export default WavySection;
