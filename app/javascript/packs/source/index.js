import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ConferencesIndex from "./conferences/"
import ConferencesShow from "./conferences/show"

const App = () =>
  <Router>
    <Switch>
      <Route
        path="/conferences/:id"
        component={ConferencesShow}
      />
      <Route
        path="/conferences"
        component={ConferencesIndex}
      />
    </Switch>
  </Router>
    export default App;
    
