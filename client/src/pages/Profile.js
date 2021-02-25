import React, { useEffect, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { QUERY_USER, QUERY_ME_BASIC } from "../utils/queries";
import {useDispatch, useSelector} from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import Auth from '../utils/auth';

const Profile = () => {

  // const dispatch = useDispatch();
  // const state = useSelector(state => state);

  // const {users} = state;
  const { email: userParam } = useParams();
  console.log(userParam)

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME_BASIC, {
    variables: { email: userParam }
  });

  console.log(data);
  const user = data?.me || data?.user || {};
 

  // const user = data?.me || data?.user || {};

  // if (!user?.email) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this page. Use the navigation links above to sign up or log in!
  //     </h4>
  //   );
  // }
 

  if (Auth.loggedIn() && Auth.getProfile().data.email=== userParam) {
    return <Redirect to="/profile" />;
  }

  // console.log("all user data", Auth.getProfile().data);
  console.log("all user data222", data);

  // console.log(id);
  // console.log("all user data222", userParam);
    return (
      <main id="main">

    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Portfolio Details</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li>Portfolio Details</li>
          </ol>
        </div>

      </div>
    </section>
    <section class="portfolio-details">
      <div class="container">

        <div class="portfolio-details-container">

          <div class="owl-carousel portfolio-details-carousel">
            <img src="assets/img/portfolio/portfolio-details-1.jpg" class="img-fluid" alt=""/>
            <img src="assets/img/portfolio/portfolio-details-2.jpg" class="img-fluid" alt=""/>
            <img src="assets/img/portfolio/portfolio-details-3.jpg" class="img-fluid" alt=""/>
          </div>

          <div class="portfolio-info">
            <h3>Project information</h3>
            <ul>
              <li><strong>Category</strong>: Web design</li>
              <li><strong>Client</strong>: ASU Company</li>
              <li><strong>Project date</strong>: 01 March, 2020</li>
              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
            </ul>
          </div>

        </div>

        <div class="portfolio-description">
          <h2>This is an example of portfolio detail</h2>
          <p>
            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
          </p>
        </div>
      </div>
    </section>
  </main>
    );
  };
  
  export default Profile;
  