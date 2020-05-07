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
          <Route exact path="/character" component={() => <Character />} />
          <Route exact path="/planet" component={() => <Planet />} />
          <Route exact path="/">
            <Redirect to="/character" />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
