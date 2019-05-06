import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import MyHeader from "./components/Header";
import MyFooter from "./components/Footer";

import BeerList from "./screens/BeerList";
import BeerDetail from "./screens/BeerDetail";

const App = () => (
  <div className="main">
    <MyHeader name="All U Need Is Beer" />
    <Router>
      <Route path="/" exact component={withRouter(BeerList)} />
      <Route path="/beers/:id" component={BeerDetail} />
    </Router>
    <MyFooter />
  </div>
);

export default App;
