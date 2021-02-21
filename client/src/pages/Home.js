import React, { useState } from "react";
import JobList from "../components/JobList";
import SkillMenu from "../components/SkillMenu";
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className="container">
      <SkillMenu />
      <JobList />
      <Cart />
    </div>
  );
};

export default Home;
