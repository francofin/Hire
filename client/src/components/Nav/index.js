import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import bannerLogo from '../../assets/logo.png';

function Nav() {

    // function showNavigation() {
    //     // if (Auth.loggedIn()) {
    //     //     return (
    //     //         <div className="row">
    //     //             <div className="container">

    //     //                 <div className="logo">
    //     //                     <Link href="/"><img src="assets/img/logo.png" alt="logo" /></Link>
    //     //                 </div>

    //     //                 <div class="responsive"><i data-icon="m" className="ion-navicon-round"></i></div>

    //     //                 <ul class="nav-menu list-unstyled">
    //     //                     <li><Link to="/" className="smoothScroll">Home</Link></li>
    //     //                     <li><Link to="/about" className="smoothScroll">About</Link></li>
    //     //                     <li><Link to="/profile" className="smoothScroll">Profile</Link></li>
    //     //                     <li><Link to="/" className="smoothScroll">Logout</Link></li>
    //     //                     <li><a href="#contact" className="smoothScroll">Contact</a></li>
    //     //                 </ul>
    //     //             </div>
    //     //         </div>
    //     //     );
    //     // } else {
    //         return (
    //             <div className="row">
    //                 <div className="container">

    //                     <div className="logo">
    //                         <Link href="/"><img src="assets/img/logo.png" alt="logo" /></Link>
    //                     </div>

    //                     <div class="responsive"><i data-icon="m" className="ion-navicon-round"></i></div>

    //                     <ul class="nav-menu list-unstyled">
    //                         <li><Link to="/" className="smoothScroll">Home</Link></li>
    //                         <li><Link to="/about" className="smoothScroll">About</Link></li>
    //                         <li><Link to="/signup" className="smoothScroll">Sign Up</Link></li>
    //                         <li><Link to="/login" className="smoothScroll">Login</Link></li>
    //                         <li><a href="#contact" className="smoothScroll">Contact</a></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         );
    //     }
    // }

    return (
        <nav id="main-nav">
            <div className="row">
                    <div className="container">

                        <div className='logo'>
                            <Link href="index.html"><img src={bannerLogo} alt="logo"/></Link>
                        </div>

                        <div class="responsive"><i data-icon="m" className="ion-navicon-round"></i></div>

                        <ul class="nav-menu list-unstyled">
                            <li><Link to="/" className="smoothScroll">Home</Link></li>
                            <li><Link to="/about" className="smoothScroll">About</Link></li>
                            <li><Link to="/signup" className="smoothScroll">Sign Up</Link></li>
                            <li><Link to="/login" className="smoothScroll">Login</Link></li>
                    
                        </ul>
                    </div>
                </div>
        </nav>
    );
}

export default Nav;
