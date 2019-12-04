import React, { Component, Fragment } from "react"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Navbar from "../navbar"
class ConferencesAttendancesIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attendances: undefined
    }
  }
  componentDidMount() {
    let { id } = this.props.match.params
    axios.get(`/api/conferences/${id}/attendances`).
      then(response => this.setState({ attendances: response.data }))
  }
  render() {
    let { attendances } = this.state
    if (!attendances) {
      return (<div></div>)
    }
    let { id } = this.props.match.params

    return (
      <div>
        <Navbar conference_id={id} />
        <div className="bg-violet1 text-white font-weight-bolder px-3 py-2 pb-3">
            Attendances
        </div>
        <div className="px-2 w-100">
          {
            attendances.map(
              a =>
                <div key={a.id} className="d-flex align-items-center bg-white my-2 shadow-sm">
                  <div className="m-2 mx-3  px-2 py-1 h3 shadow-sm rounded-circle">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className="d-flex flex-column px-3">
                    <div className="text-blue1 font-weight-bolder">{a.name}</div>
                    <div className="text-muted"><small>{a.role}</small></div>
                  </div>
                </div>
            )}
        </div>
      </div>)
  }
}

export default ConferencesAttendancesIndex;