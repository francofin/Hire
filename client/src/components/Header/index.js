import React, { useState } from "react";
// import homeimage from "../../assets/images/employeeproduct.jpg";

const Header = () => {
  return (
    <div id="hero" className="home">

    <div className="container">
      <div className="hero-content">
        <h1>I'm <span className="typed"></span></h1>
        <p className="typed-items" data-typed-person="Alex Smith">Designer, Developer, Freelancer, Photographer</p>

        <ul className="list-unstyled list-social">
          <li><a href="#"><i className="ion-social-facebook"></i></a></li>
          <li><a href="#"><i className="ion-social-twitter"></i></a></li>
          <li><a href="#"><i className="ion-social-instagram"></i></a></li>
          <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
          <li><a href="#"><i className="ion-social-tumblr"></i></a></li>
          <li><a href="#"><i className="ion-social-dribbble"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Header;