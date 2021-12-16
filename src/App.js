import React from "react";
import { Route, Switch } from "react-router";

import Home from "./pages/Home";
import CourseFinder from "./pages/CourseFinder";

import "./App.css";
import GlobalStyle from "./global.styles";
import FilterDataProvider from "./shared/filteringContext";

function App() {
  return (
    <FilterDataProvider>
      <GlobalStyle />
      <Switch>
        <Route to="/coursefinder">
          <CourseFinder />
        </Route>
        {/* <Route to="/">
          <Home />
        </Route> */}
      </Switch>
    </FilterDataProvider>
  );
}

export default App;

//npx json-server --watch db.json --port 8000
