import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Layout from "./Layout";
import Character from "./Character";
import Planet from "./Planet";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Redirect to="/character" />
          <Route exact path="/character" component={() => <Character />} />
          <Route exact path="/planet" component={() => <Planet />} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
