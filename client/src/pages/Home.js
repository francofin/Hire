import React, { useState } from "react";
import JobList from "../components/JobList";
import { Link, useParams, Redirect } from "react-router-dom";
import {QUERY_ME_BASIC } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import Cart from '../components/Cart';
import Auth from '../utils/auth';
// import homeimage from "../../assets/images/employeeproduct.jpg";

const Home = () => {
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const loggedIn = Auth.loggedIn();

  console.log(loggedIn);
  console.log(userData);

  return (
    <JobList></JobList>
  );
};

export default Home;
