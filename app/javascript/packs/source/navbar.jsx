import React, { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStore, faHandHoldingUsd, faUsers, faVolumeUp, faChalkboardTeacher, faCalendar, faHome, faSignOutAlt, faIdBadge, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
const navbar = ({ conference_id = -1, talk_id = -1, conference_selected = true, login = true }) =>
  <div>
    <div className="bg-violet1 d-flex flex-row-reverse py-2 px-2 ">
      <button className="bg-transparent border-0 text-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
      >
        <h3 className="m-0">
          <FontAwesomeIcon icon={faBars} />
        </h3>
      </button>
    </div>
    <div className="collapse" id="navbar">
      <div className="shadow-sm bg-white py-2 px-2 d-flex flex-wrap ">
        {login && item(faHome, "Home", "/conferences")}
        {login && conference_selected && conferenceMenu(conference_id)}
        {login && userMenu()}
        {!login && guestMenu()}
      </div>
    </div>
  </div>
const guestMenu = () =>
  <Fragment>
    {item(faSignInAlt, "Login", "/login")}
    {item(faPlusSquare, "Signup", "/signup")}
  </Fragment>

const userMenu = () =>
  <Fragment>
    {item(faIdBadge, "Profile")}
    {item(faSignOutAlt, "Logout")}
  </Fragment>
const conferenceMenu = (conference_id) =>
  <Fragment>
    {item(faCalendar, "Agenda", `/conferences/${conference_id}/talks`)}
    {item(faStore, "Exhibitors", `/conferences/${conference_id}/exhibitors`)}
    {item(faHandHoldingUsd, "Sponsors", `/conferences/${conference_id}/sponsors`)}
    {item(faUsers, "Attendees", `/conferences/${conference_id}/attendances`)}
    {item(faChalkboardTeacher, "Speakers", `/conferences/${conference_id}/speakers`)}
  </Fragment>
const item = (icon, title, link = "#") =>
  <Link to={link}>
    <div className="navbar-item d-flex flex-column text-center font-weight-bolder mx-2">
      <div className="text-green1">
        <h3 className="m-0">
          <FontAwesomeIcon icon={icon} />
        </h3>
      </div>
      <div className="text-violet1">
        {title}
      </div>
    </div>
  </Link>

export default navbar;