import React from "react";
import JobList from "../components/JobList";
import Auth from '../utils/auth';
import '../index.css';
// import homeimage from "../../assets/images/employeeproduct.jpg";

const Home = () => {

  return (
    <main id="main">
      <JobList></JobList>
    </main>
  );
};

export default Home;
