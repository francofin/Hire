import React, { useEffect, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { QUERY_USER, QUERY_ME_BASIC } from "../utils/queries";
import { UPDATE_OFFERS } from '../utils/actions';
import {useDispatch, useSelector} from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import Auth from '../utils/auth';

const Profile = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const {offers} = state;
  const { id: userParam } = useParams();



  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME_BASIC, {
    variables: { id: userParam }
  });
  

  const user = data?.me || data?.user || {};
 
  // console.log("user data", user.skills);
  // const user = data?.me || data?.user || {};

  // if (!user?.email) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this page. Use the navigation links above to sign up or log in!
  //     </h4>
  //   );
  // }
  useEffect(() => {
    if(data){
      dispatch({
       type: UPDATE_OFFERS,
       offers: data.user.jobOffers
      })
    }
  }, [loading, data, dispatch])

  if (Auth.loggedIn() && Auth.getProfile().data._id=== userParam) {
    return <Redirect to="/profile" />;
  }

  // console.log("all user data", Auth.getProfile().data);
  // console.log("all user data222", user.jobOffers);



  // console.log(id);
  // console.log("all user data222", userParam);
    return (
      <main id="main">

    <section className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Portfolio Details</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/">Portfolio</a></li>
            <li>Portfolio Details</li>
          </ol>
        </div>

      </div>
    </section>
    <section className="portfolio-details">
      <div className="container">

        <div className="portfolio-details-container">

          <div className="owl-carousel portfolio-details-carousel">
            <img src="assets/img/portfolio/portfolio-details-1.jpg" className="img-fluid" alt=""/>
            <img src="assets/img/portfolio/portfolio-details-2.jpg" className="img-fluid" alt=""/>
            <img src="assets/img/portfolio/portfolio-details-3.jpg" className="img-fluid" alt=""/>
          </div>

          <div className="portfolio-description">
            <h3>Current Job Offers</h3>
            {offers.map(offer => (
              <li>{offer.description}</li>
            ))}
          </div>

        </div>

        <div className="portfolio-description">
          <h2>About {user.firstName} {user.lastName}</h2>
          <p>
            {user.profileText}
          </p>
        </div>
      </div>
    </section>
  </main>
    );
  };
  
  export default Profile;
  