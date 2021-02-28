import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import bannerLogo from '../../assets/logo.png';
import '../../index.css';

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div className="row">
                    <div className="container">

                        <div className="logo">
                            <Link to="/"><img src={bannerLogo} alt="logo" /></Link>
                        </div>

                        <div className="responsive"><i data-icon="m" className="ion-navicon-round"></i></div>

                        <ul className="nav-menu list-unstyled">
                            <li><Link to="/" className="smoothScroll">Home</Link></li>
                            <li><Link to="/about" className="smoothScroll">About</Link></li>
                            <li><Link to="/profile" className="smoothScroll">{Auth.getProfile().data.firstName}'s Profile</Link></li>
                            <li><Link to="/" className="smoothScroll" onClick={() => Auth.logout()}>Logout</Link></li>
                            <li><Link to="/" className="smoothScroll">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row">
                    <div className="container">

                        <div className="logo">
                            <Link to="/"><img src={bannerLogo} alt="logo" /></Link>
                        </div>

                        <div className="responsive"><i data-icon="m" className="ion-navicon-round"></i></div>

                        <ul className="nav-menu list-unstyled">
                            <li><Link to="/" className="smoothScroll">Home</Link></li>
                            <li><Link to="/about" className="smoothScroll">About</Link></li>
                            <li><Link to="/signup" className="smoothScroll">Sign Up</Link></li>
                            <li><Link to="/login" className="smoothScroll">Login</Link></li>
                            <li><Link to="/" className="smoothScroll">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            );
        }
    }

    return (
        <nav id="main-nav">
            {showNavigation()}
        </nav>
    );
}

export default Nav;
