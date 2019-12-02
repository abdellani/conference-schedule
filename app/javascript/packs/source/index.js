import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ConferencesIndex from "./conferences/"
import ConferencesExhibitors from "./conferences/exhibitors"

const App = () =>
  <Router>
    <Switch>
      <Route
        path="/conferences/:id/exhibitors"
        component={ConferencesExhibitors}
      />
      <Route
        path="/conferences"
        component={ConferencesIndex}
      />
    </Switch>
  </Router>
export default App;

