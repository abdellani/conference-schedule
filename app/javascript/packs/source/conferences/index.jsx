import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faUniversity, faBookOpen, faGraduationCap, faBook, faScroll } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../navbar"
import fetcher from "../utils/fetcher"
import { faFile } from "@fortawesome/free-regular-svg-icons";

class ConferencesIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conferences: []
    }
  }
  componentDidMount() {
    fetcher.get(
      "/api/conferences",
      (data) => this.setState({ conferences: data })
    )
  }
  render() {
    let { conferences } = this.state
    let dates = new Set();
    conferences.forEach(c => dates.add(c.date))

    return (
      <Fragment>
        <Navbar conference_selected={false} />
        <div className="bg-violet1 p-4">
          <div className="text-white font-weight-bolder mb-2">
            Conferences
          </div>
        </div>
        <div className="px-4 my-4">
          {
            [...dates].map(date =>
              <div key={date}>
                <div className="font-weight-bolder text-pink1">
                  {date}
                </div>
                {conferences.filter(c=>c.date===date).map(c =>
                  <div key={c.id} className="d-flex border-radius px-2 my-2 py-2 align-items-center bg-white shadow-sm">
                    <div className="d-flex flex-wrap   flex-column w-min-80  w-100">
                      <div><FontAwesomeIcon icon={faFile} /> {c.description}</div>
                      <div><FontAwesomeIcon icon={faBook} /> {c.subject}</div>
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
      </Fragment>
    )
  }
}

export default ConferencesIndex;