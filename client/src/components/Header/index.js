import React, { useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
// import homeimage from "../../assets/images/employeeproduct.jpg";

const Header = () => {
  return (
    <div id="hero" className="home">

    <div className="container">
      <div className="hero-content">
        <h1>I'm <span className="typed"></span></h1>
        <p className="typed-items" data-typed-person="Alex Smith">Designer, Developer, Freelancer, Photographer</p>

        <ul className="list-unstyled list-social">
          <li><Link to="/"><i className="ion-social-facebook"></i></Link></li>
          <li><Link to="/"><i className="ion-social-twitter"></i></Link></li>
          <li><Link to="/"><i className="ion-social-instagram"></i></Link></li>
          <li><Link to="/"><i className="ion-social-googleplus"></i></Link></li>
          <li><Link to="/"><i className="ion-social-tumblr"></i></Link></li>
          <li><Link to="/"><i className="ion-social-dribbble"></i></Link></li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Header;