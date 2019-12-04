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
import PrivateRoute from "./utils/privateroute"
import GuestRoute from "./utils/guestroute"
import reducer from "./utils/reducer"
import { Provider } from "react-redux"
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage'
import "./scss/index.scss"


const store = createStore(
  reducer, compose(persistState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const App = () =>
  <Provider store={store}>
    <Router>
      <Switch>
        <PrivateRoute
          path="/conferences/:conference_id/talks/:id/questions"
          component={ConferencesTalksQuestionsIndex}
        />
        <PrivateRoute
          path="/conferences/:conference_id/talks/:id"
          component={ConferencesTalksShow}
        />
        <PrivateRoute
          path="/conferences/:id/talks"
          component={ConferencesTalksIndex}
        />
        <PrivateRoute
          path="/conferences/:id/attendances"
          component={ConferencesAttendancesIndex}
        />
        <PrivateRoute
          path="/conferences/:id/speakers"
          component={ConferencesSpeakersIndex}
        />
        <PrivateRoute
          path="/conferences/:id/sponsors"
          component={ConferencesSponsors}
        />
        <PrivateRoute
          path="/conferences/:id/exhibitors"
          component={ConferencesExhibitors}
        />
        <PrivateRoute
          path="/conferences"
          component={ConferencesIndex}
        />
        <GuestRoute
          path="/signup"
          component={UsersSignup}
        />
        <GuestRoute
          path="/login"
          component={UsersLogin}
        />
      </Switch>
    </Router>
  </Provider>

export default App;
export {store};
