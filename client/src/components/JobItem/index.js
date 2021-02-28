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
           
              </div>
              </Link>
            </div>
      


    );
  };
  
  export default JobItem;
  