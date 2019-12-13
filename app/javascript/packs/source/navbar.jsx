import React, { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStore, faHandHoldingUsd, faUsers, faVolumeUp, faChalkboardTeacher, faCalendar, faHome, faSignOutAlt, faIdBadge, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { connect } from "react-redux"
import { LOGOUT } from "./utils/actions";
import axios from "axios";
class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { conference_id = -1, conference_selected = true, login, name } = this.props
    return (
      <div>
        <div className="bg-violet1 d-flex flex-row-reverse  justify-space-between align-items-center \
         w-100 py-2 px-2 ">
          <button className="bg-transparent border-0 text-white d-block"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <h3 className="m-0">
              <FontAwesomeIcon icon={faBars} />
            </h3>
          </button>
          {
            name && <div className="text-white font-weight-bolder w-100">
              Hi, <span className="text-blue1">{name}</span>
            </div>
          }
        </div>
        <div className="collapse" id="navbar">
          <div className="shadow-sm bg-white py-2 px-2 d-flex flex-wrap ">
            {login && this.item(faHome, "Home", "/conferences")}
            {login && conference_selected && this.conferenceMenu(conference_id)}
            {login && this.userMenu()}
            {!login && this.guestMenu()}
          </div>
        </div>
      </div>
    )
  }
  userMenu() {
    return <Fragment>
      {this.item(faIdBadge, "Profile","/profile")}
      {
        this.item(
          faSignOutAlt, "Logout", "#",
          () => {
            axios.delete("/api/users/sessions").
              then(() => this.props.logout())
          }
        )
      }
    </Fragment>
  }

  guestMenu() {
    return <Fragment>
      {this.item(faSignInAlt, "Login", "/login")}
      {this.item(faPlusSquare, "Signup", "/signup")}
    </Fragment>
  }
  conferenceMenu(conference_id) {
    return <Fragment>
      {this.item(faCalendar, "Agenda", `/conferences/${conference_id}/talks`)}
      {this.item(faStore, "Exhibitors", `/conferences/${conference_id}/exhibitors`)}
      {this.item(faHandHoldingUsd, "Sponsors", `/conferences/${conference_id}/sponsors`)}
      {this.item(faUsers, "Attendees", `/conferences/${conference_id}/attendances`)}
      {this.item(faChalkboardTeacher, "Speakers", `/conferences/${conference_id}/speakers`)}
    </Fragment>
  }
  item(icon, title, link = "#", onClick = () => { }) {
    return <Link to={link} onClick={onClick}>
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
  }
}

const mapStateToProps = (state) => {
  let { login, name } = state
  return {
    login, name
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(LOGOUT())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);