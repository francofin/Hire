import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";


const JobItem = (job) => {

  const {
    image,
    role,
    upload,
    _id,
    skills,
  } = job;

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  function showJob(image, skills, role, _id, upload) {
    if (image) {
      return (
        <Link to={`/jobs/${_id}`}>
          <img src={image} className="img-fluid" />
          <div className="portfolio-info">
            <h4>{role}</h4>
            <p>{skills.name}</p>
          </div>
        </Link>
      );
    } else {
      return (
        <Link to={`/jobs/${_id}`}>
          <img src={upload} className="img-fluid" />
          <div className="portfolio-info">
            <h4>{role}</h4>
            <p>{skills.name}</p>
          </div>
        </Link>
      );
    }
  }


  return (

    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      {showJob(image, skills, role, _id, upload)}
    </div>


  );
};

export default JobItem;
