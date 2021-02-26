import React, { useEffect } from 'react';
import SkillMenu from '../SkillMenu';
import { UPDATE_JOBS } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_JOBS_BY_SKILL} from "../../utils/queries";
import { useDispatch, useSelector } from 'react-redux';
import JobItem from "../JobItem";
import spinner from '../../assets/spinner.gif';
import { idbPromise } from "../../utils/helpers";


function JobList()  {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const { currentSkill } = state;
  console.log(currentSkill);

  const { loading, data} = useQuery(QUERY_JOBS_BY_SKILL);
  console.log(loading);

  useEffect(() => {

    if (data) {
      dispatch({
        type: UPDATE_JOBS,
        jobs: data.jobs
      });
      data.jobs.forEach((job) => {
        idbPromise('jobs', 'put', job);
      });
    }
    else if (!loading) {
      // since we're offline, get all of the data from the `products` store
      idbPromise('jobs', 'get').then((jobs) => {
        // use retrieved data to set global state for offline browsing
        dispatch({
          type: UPDATE_JOBS,
          jobs: jobs
        });
      });
    }

  }, [ data, loading, dispatch]);

  console.log(currentSkill);

  function filterJobs() {
    if (!currentSkill) {
      return state.jobs;
    }
  
    return state.jobs.filter(job => job.skills._id === currentSkill);
  }


  return (
    <div id="portfolio" className="paddsection">
      <div className="container">
        <div className="section-title text-center">
          <h2>Browse Jobs</h2>
        </div>
      </div>

      {state.jobs.length ? (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <SkillMenu />
          </div>
        </div>
        <div className="row portfolio-container">
            {filterJobs().map(job => (
              <JobItem
              key = {job._id}
              _id = {job._id}
              image= {job.image}
              role = {job.role}
              skills = {job.skills}
              />
            ))}  
            </div>
            </div>
      ) : (
        <h3>You haven't added any jobs yet!</h3>
      )}
       { loading ? 
      <img src={spinner} alt="loading" />: null}
       
      
    </div>
  );
};

export default JobList;
