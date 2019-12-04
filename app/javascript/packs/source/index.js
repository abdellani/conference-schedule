import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConferencesIndex from "./conferences/"
import ConferencesExhibitors from "./conferences/exhibitors"
import ConferencesSponsors from "./conferences/sponsors"
import ConferencesAttendancesIndex from "./conferences/attendances"
import ConferencesSpeakersIndex from "./conferences/speakers"
import ConferencesTalksIndex from "./conferences/talks/index"
import ConferencesTalksShow from "./conferences/talks/show"
import ConferencesTalksQuestionsIndex from "./conferences/talks/questions/index"
import UsersSignup from "./users/signup"

import "./scss/index.scss"
const App = () =>
  <Router>
    <Switch>
      <Route
        path="/conferences/:conference_id/talks/:id/questions"
        component={ConferencesTalksQuestionsIndex}
      />
      <Route
        path="/conferences/:conference_id/talks/:id"
        component={ConferencesTalksShow}
      />
      <Route
        path="/conferences/:id/talks"
        component={ConferencesTalksIndex}
      />
      <Route
        path="/conferences/:id/attendances"
        component={ConferencesAttendancesIndex}
      />
      <Route
        path="/conferences/:id/speakers"
        component={ConferencesSpeakersIndex}
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
      <Route
        path="/signup"
        component={UsersSignup}
      />
    </Switch>
  </Router>
export default App;

