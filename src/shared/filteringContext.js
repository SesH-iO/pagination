import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const FilterDataProvider = (props) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/courses")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // const slicedData = data.slice(0, 4);
        setCourses(data);
      });
  }, []);

  const value = { courses };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};

export default FilterDataProvider;
