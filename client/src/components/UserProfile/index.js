import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { QUERY_USER, QUERY_ALL_USERS } from "../../utils/queries";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_USERS, UPDATE_CURRENT_USER } from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";

const UserProfile = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { user } = state;
  const { loading, data: userProfileData } = useQuery(QUERY_USER);

  useEffect(() => {
    if (userProfileData) {
      dispatch({
        type: UPDATE_CURRENT_USER,
        user: userProfileData.user,
      });
    }
  }, [loading, userProfileData, dispatch]);
  console.log(
    "🚀 ~ file: index.js ~ line 23 ~ UserProfile ~ userProfileData",
    userProfileData
  );
  console.log('UserProfile - user:',user);

  return (
    <main id="main">
      <div className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* <h2>{user.firstName} + '' + {user.lastName}</h2> */}
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li>Portfolio Details</li>
            </ol>
          </div>
        </div>
      </div>
      <section className="portfolio-details">
        <div className="container">
          <div className="portfolio-details-container">
            <div>
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Category</strong>: Web design
                </li>
                <li>
                  <strong>Client</strong>: ASU Company
                </li>
                <li>
                  <strong>Project date</strong>: 01 March, 2020
                </li>
                <li>
                  <strong>Project URL</strong>: <a href="#">www.example.com</a>
                </li>
              </ul>
            </div>
            {/* <div className="owl-carousel portfolio-details-carousel">
              <img
                src="assets/img/portfolio/portfolio-details-1.jpg"
                className="img-fluid"
                alt=""
              />
              <img
                src="assets/img/portfolio/portfolio-details-2.jpg"
                className="img-fluid"
                alt=""
              />
              <img
                src="assets/img/portfolio/portfolio-details-3.jpg"
                className="img-fluid"
                alt=""
              />
            </div> */}

            {/* <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Category</strong>: Web design
                </li>
                <li>
                  <strong>Client</strong>: ASU Company
                </li>
                <li>
                  <strong>Project date</strong>: 01 March, 2020
                </li>
                <li>
                  <strong>Project URL</strong>: <a href="#">www.example.com</a>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="portfolio-description">
            <h2>This is an example of portfolio detail</h2>
            <p>
              Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
              inventore commodi labore quia quia. Exercitationem repudiandae
              officiis neque suscipit non officia eaque itaque enim. Voluptatem
              officia accusantium nesciunt est omnis tempora consectetur
              dignissimos. Sequi nulla at esse enim cum deserunt eius.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserProfile;
