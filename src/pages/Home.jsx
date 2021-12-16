import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import StudyAbroad from "../container/Home/Abraod/StudyAbroad";
import AdmissionPage from "../container/Home/Admission/AdmissionPage";
import BlogPage from "../container/Home/Blog/BlogPage";
import FavCourses from "../container/Home/CollegesAndCourses/FavCourses";
import Events from "../container/Home/Events/Events";
import Hero from "../container/Home/Hero/Hero";
import TrendingPage from "../container/Home/Trending/TrendingPage";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <TrendingPage />
      <AdmissionPage />
      <StudyAbroad />
      <BlogPage />
      <FavCourses />
      <Events />
    </Fragment>
  );
};

export default Home;
