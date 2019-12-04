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
import UsersLogin from "./users/login"
import Privateroute from "./utils/privateroute"

import "./scss/index.scss"
const App = () =>
  <Router>
    <Switch>
      <Privateroute
        path="/conferences/:conference_id/talks/:id/questions"
        component={ConferencesTalksQuestionsIndex}
      />
      <Privateroute
        path="/conferences/:conference_id/talks/:id"
        component={ConferencesTalksShow}
      />
      <Privateroute
        path="/conferences/:id/talks"
        component={ConferencesTalksIndex}
      />
      <Privateroute
        path="/conferences/:id/attendances"
        component={ConferencesAttendancesIndex}
      />
      <Privateroute
        path="/conferences/:id/speakers"
        component={ConferencesSpeakersIndex}
      />
      <Privateroute
        path="/conferences/:id/sponsors"
        component={ConferencesSponsors}
      />
      <Privateroute
        path="/conferences/:id/exhibitors"
        component={ConferencesExhibitors}
      />
      <Privateroute
        path="/conferences"
        component={ConferencesIndex}
      />
      <Route
        path="/signup"
        component={UsersSignup}
      />
      <Route
        path="/login"
        component={UsersLogin}
      />
    </Switch>
  </Router>
export default App;

