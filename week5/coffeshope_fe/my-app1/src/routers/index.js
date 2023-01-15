import React from "react";
import {
    BrowserRouter as Router, useRoutes
} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";



const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home/> },
    { path: "/about", element: <About/> },
  ]);
  return routes;
};

const Routers = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Routers;