import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_JOBS_BY_SKILL } from "../utils/queries";
import {useDispatch, useSelector} from 'react-redux';
import { idbPromise } from "../utils/helpers";
import spinner from '../assets/spinner.gif';
import {
  UPDATE_JOBS,
} from '../utils/actions';


const JobDetail = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const { jobs } = state;

  const { id } = useParams();

  const [currentJob, setCurrentJob] = useState({})

  const { loading, data } = useQuery(QUERY_JOBS_BY_SKILL);

  useEffect(() => {
    // already in global store
    if (jobs.length) {
      setCurrentJob(jobs.find(jobs => jobs._id === id));
    } 
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_JOBS,
        jobs: data.jobs
      });

    }
  }, [jobs, data, loading, dispatch, id]);

  // if(currentJob.skills[0]) {
  //   console.log(currentJob.skills[0])
  // }
  // console.log(currentJob)


    return (
    <>
      {currentJob ? (
        <main id="main">

        <section className="breadcrumbs">
          <div className="container">
    
            <div className="d-flex justify-content-between align-items-center">
              <h2>Job Details</h2>
              <ol>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/">User Profile</Link></li>
               
              </ol>
            </div>
    
          </div>
        </section>
        <section className="portfolio-details">
          <div className="container">
    
            <div className="portfolio-details-container">
  
    
              <div className="portfolio-description">
                <h3> Needed</h3>
              </div>
    
            </div>
    
            <div className="portfolio-description">
              <h2>About Our {currentJob.role}</h2>
              <p>
                {currentJob.description}
              </p>
            </div>
          </div>
        </section>
      </main>
        
      ) : null}
      {
        loading ? <img src={spinner} alt="loading" /> : null
      }
      
    </>
    );
  };
  
  export default JobDetail;
  