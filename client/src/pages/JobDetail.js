import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/react-hooks';
import { QUERY_JOBS_BY_SKILL, QUERY_USER } from "../utils/queries";
import { useDispatch, useSelector } from 'react-redux';
import { APPLY } from '../utils/mutations';
import { idbPromise } from "../utils/helpers";
import spinner from '../assets/spinner.gif';
import Header from '../components/Header';
import {
  UPDATE_JOBS,
  UPDATE_APPLICANTS
} from '../utils/actions';


const JobDetail = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const { jobs, applicants } = state;

  const { id } = useParams();

  console.log(id);

  const [currentJob, setCurrentJob] = useState({});
  const [showJobInterest] = useMutation(APPLY);

  const { loading, data } = useQuery(QUERY_JOBS_BY_SKILL);

  useEffect(() => {
    // already in global store
    if (jobs.length) {
      setCurrentJob(jobs.find(job => job._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_JOBS,
        jobs: data.jobs
      });

    }
  }, [jobs, data, loading, dispatch, id]);



  useEffect(() => {
    if(currentJob.applicants){
      dispatch({
        type: UPDATE_APPLICANTS,
        applicants: currentJob.applicants
      })
    }
  }, [currentJob.applicants, dispatch])


  const handleApply = async event => {
    event.preventDefault();

    await showJobInterest({
      variables: {
        id: currentJob._id
      }
    });

  }

  console.log("all aplicants", currentJob.applicants);

  return (
    <section style={{ margin: 0 }}>
      <Header
        image={currentJob.image}
        role={currentJob.role}
        skill={currentJob.skills}
      ></Header>
      <>
        {currentJob ? (

          <main id="main">

            <section className="breadcrumbs">
              <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                  <h2>Job Details</h2>

                  <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">User Profile</Link></li>
                    <li></li>
                  </ol>

                </div>

              </div>
            </section>
            <section className="portfolio-details">
              <div className="container">
                <button className='btn btn-success' onClick={handleApply}>Apply</button>
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
                <div className="portfolio-description">
                  <div className="row">
                  {applicants.map((applicant) => ( 
                    <div className="col-md-4">
                      <div className="card" key={applicant._id}>
                          <img className="card-img-top" src={applicant.image} alt="Card image cap" />
                            <div className="card-body">
                              <h5 className="card-title">{applicant.firstName} {applicant.lastName}</h5>
                              <p className="card-text">More ....</p>
                              <Link to={`/profile/${applicant._id}`} className="btn btn-primary">Go somewhere</Link>
                            </div>
                            </div>
                    </div>
                          
                        ))}
                    </div>
                  </div>
                </div>
            </section>
          </main>

        ) : null}
            {
              loading ? <img src={spinner} alt="loading" /> : null
            }

      </>

    </section>

  );
};

export default JobDetail;
