import React, { useEffect } from "react";
import SkillMenu from "../SkillMenu";
import { UPDATE_JOBS, UPDATE_CURRENT_JOB } from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_JOBS_BY_SKILL, QUERY_ALL_JOBS } from "../../utils/queries";
import { useDispatch, useSelector } from "react-redux";

const JobList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { jobs } = state;

  const { loading, data: jobListings } = useQuery(QUERY_ALL_JOBS);

  useEffect(() => {
    if (jobListings) {
      dispatch({
        type: UPDATE_JOBS,
        jobs: jobListings.jobs,
      });
    }
  }, [loading, jobListings, dispatch]);

  return (
    <div id="portfolio" className="paddsection">
      <div className="container">
        <div className="section-title text-center">
          <h2>My Portfolio</h2>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <SkillMenu />
          </div>
        </div>

        <div className="row portfolio-container">
          {jobs.map((item) => (
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img src={item.image} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>{item.skills.name}</h4>
                <p>App</p>
                <a
                  href="assets/img/portfolio/portfolio-1.jpg"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="App 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
