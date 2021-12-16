import React from "react";
import { Fragment } from "react";

import CourseHeader from "../container/CourseFinder/CourseHeader/CourseHeader";
import CourseInfo from "../container/CourseFinder/CourseInfo/CourseInfo";
import CourseSelection from "../container/CourseFinder/CourseSelection/CourseSelection";

const CourseFinder = () => {
  return (
    <Fragment>
      <CourseHeader />
      <CourseSelection />
    </Fragment>
  );
};

export default CourseFinder;
