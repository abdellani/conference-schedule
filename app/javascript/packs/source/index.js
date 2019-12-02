import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ConferencesIndex from "./conferences/"
import ConferencesExhibitors from "./conferences/exhibitors"
import ConferencesSponsors from "./conferences/sponsors"
import ConferencesTalksIndex from "./conferences/talks/index"
import ConferencesTalksShow from "./conferences/talks/show"
import ConferencesTalksQuestionsIndex from "./conferences/talks/questions/index"
import ConferencesTalksAttendancesIndex from "./conferences/talks/attendances"
const App = () =>
  <Router>
    <Switch>
      <Route
        path="/conferences/:id_conference/talks/:id/attendances"
        component={ConferencesTalksAttendancesIndex}
      />
      <Route
        path="/conferences/:id_conference/talks/:id/questions"
        component={ConferencesTalksQuestionsIndex}
      />
      <Route
        path="/conferences/:id_conference/talks/:id"
        component={ConferencesTalksShow}
      />
      <Route
        path="/conferences/:id/talks"
        component={ConferencesTalksIndex}
      />
      <Route
        path="/conferences/:id/sponsors"
        component={ConferencesSponsors}
      />
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

