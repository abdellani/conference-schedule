import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faUniversity, faBookOpen, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

class ConferencesIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conferences: []
    }
  }
  componentDidMount() {
    axios.get("/api/conferences").
      then(response => this.setState({ conferences: response.data }))
  }
  render() {
    let { conferences } = this.state
    let dates = new Set();
    conferences.forEach(c => dates.add(c.date))

    return (
      <div className="px-4">
        {
          [...dates].map(date =>
            <div key={date}>
              <div className="font-weight-bolder text-pink1">
                {date}
              </div>
              {conferences.map(c =>
                <div key={c.id} className="d-flex  px-2 my-2 py-2 align-items-center bg-white shadow-sm">
                  <div className="d-flex flex-wrap   flex-column w-min-80  w-100">
                    <div><FontAwesomeIcon icon={faGraduationCap} /> {c.description}</div>
                    <div><FontAwesomeIcon icon={faBookOpen} /> {c.subject}</div>
                    <div><FontAwesomeIcon icon={faUniversity} /> {c.location}</div>
                  </div>
                  <div className="w-min-20 text-nowrap d-flex align-item-center justify-content-center">
                    <h3>
                      <Link to={`/conferences/${c.id}/talks`} >
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </Link>
                    </h3>
                  </div>
                </div>
              )}
            </div>
          )}</div>
    )
  }
}

export default ConferencesIndex;