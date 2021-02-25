import React, { useEffect } from 'react';
import SkillMenu from '../SkillMenu';
import { UPDATE_JOBS, UPDATE_CURRENT_JOB } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_JOBS_BY_SKILL, QUERY_ALL_JOBS } from "../../utils/queries";
import { useDispatch, useSelector } from 'react-redux';
import JobItem from "../JobItem";


const JobList = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const { currentSkill } = state;

  const { loading, data} = useQuery(QUERY_JOBS_BY_SKILL);
  

  useEffect(() => {

    if (data) {
      dispatch({
        type: UPDATE_JOBS,
        jobs: data.jobs
      })

    }

  }, [loading, data, dispatch]);

  function filterJobs() {
    if (!currentSkill) {
      return state.jobs;
    }
  
    return state.jobs.filter(job => job.skill[0]._id === currentSkill);
  }


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

      {state.jobs.length ? (
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
      ) : (
        <h3>You haven't added any jobs yet!</h3>
      )}
        
      </div>
    </div>
  );
};

export default JobList;
