import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";


const JobItem = (job) => {

  const {
    image,
    role,
    _id,
    skills,
  } = job;

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  
    return (

      
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <Link to={`/jobs/${_id}`}>
              <img src={image} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>{role}</h4>
                <p>{skills.name}</p>
                {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus"></i></a> */}
                <Link to="/" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
              </div>
              </Link>
            </div>
      


    );
  };
  
  export default JobItem;
  