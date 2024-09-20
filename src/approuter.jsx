import React from "react";
import AppContainer from "./appcontainer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppRouter = () => {
  // const config = "/template/react";
  return (
    <Router>
      <Route render={(props) => <AppContainer {...props} />} />
    </Router>
  );
};

export default AppRouter;
