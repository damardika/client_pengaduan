import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import DataMasuk from "./DataMasuk/DataMasuk";
import DataSelesai from "./DataSelesai/DataSelesai";
import DataProgres from "./DataProgres/DataProgres";
import Home from "./Home/Home";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/DataMasuk" component={DataMasuk} />
          <Route path="/DataSelesai" component={DataSelesai} />
          <Route path="/DataProgres" component={DataProgres} />
        </Switch>
      </Router>
    );
  }
}
