import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const Header = (prop) => {
  const {image, upload, role, firstName, lastName, _id, email, skill} = prop;

  return (
    <div id="hero" className="home" style={{backgroundImage: `url(${image})`}}>

    <div className="container">
      <div className="hero-content">
        <h1 style={{color: 'black'}}>{firstName} {lastName}<span></span></h1>
        <p className="typed-items" data-typed-person={role}>None</p>

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