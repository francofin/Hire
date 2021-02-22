import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className="text-center">
    <div className="container">
      <div className="socials-media text-center">

        <ul className="list-unstyled">
          <li><Link href="#"><i className="ion-social-facebook"></i></Link></li>
          <li><Link href="#"><i className="ion-social-twitter"></i></Link></li>
          <li><Link href="#"><i className="ion-social-instagram"></i></Link></li>
          <li><Link href="#"><i className="ion-social-googleplus"></i></Link></li>
          <li><Link href="#"><i className="ion-social-tumblr"></i></Link></li>
          <li><Link href="#"><i className="ion-social-dribbble"></i></Link></li>
        </ul>

      </div>

      <p>&copy; Copyrights Folio. All rights reserved.</p>

      <div className="credits">
       <Link href="https://bootstrapmade.com/">BootstrapMade</Link>
      </div>

    </div>
  </div>
  );
};

export default Footer;
