import React, { Component } from "react"
import axios from "axios"
import Navbar from "../navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBuilding, faChevronDown } from "@fortawesome/free-solid-svg-icons";

class ConferencesSponsors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sponsors: []
    }
  }
  componentDidMount() {
    let { id } = this.props.match.params
    axios.get(`/api/conferences/${id}/sponsors`).
      then(response => this.setState({ sponsors: response.data }))
  }
  render() {
    let { id } = this.props.match.params
    let { sponsors } = this.state
    return (
      <div>
        <Navbar conference_id={id} />
        <div className="bg-violet1 text-white font-weight-bolder px-3 py-2 pb-3">
          Sponsors
        </div>
        <div className="px-3">
          {
            sponsors.map(
              s =>
                <div key={s.id} className="shadow-sm bg-white px-3 py-3 my-2">
                  <div className="d-flex align-items-center">
                    <div className="px-2 ">
                      <h4>
                        <FontAwesomeIcon icon={faBuilding} />
                      </h4>
                    </div>
                    <div className="d-flex justify-content-between align-items-center px-3 w-100">
                      <div className="d-flex flex-column">
                        <div>
                          <small className="text-muted font-weight-bolder">
                            Sponsor {s.id}
                          </small>
                        </div>
                        <div className="font-weight-bolder text-blue1">
                          {s.name}
                        </div>
                      </div>
                      <div className="rounded-pill p-1 bg-white shadow-sm ">
                        <button
                          className={
                            ["show-day-schedule-button border-0",
                              "bg-transparent", "collapsed"].join(" ")
                          }
                          data-toggle="collapse"
                          data-target={`#sponsor${s.id}`}
                        >
                          <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id={`sponsor${s.id}`} className="collapse">
                    <div>
                      <div className="text-violet1 font-weight-bolder">
                        About
                      </div>
                      <div>
                        {s.description}
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bolder text-green1 my-3">
                        Contact info
                        </div>
                      <div className="d-flex flex-column px-2 shadow-sm">
                        <div>
                          <small className="text-muted">
                            Website
                          </small>
                        </div>
                        <div className="font-weight-bolder text-violet1">
                          {s.website}
                        </div>
                      </div>
                      <div className="d-flex flex-column px-2 shadow-sm">
                        <div>
                          <small className="text-muted">
                            email
                          </small>
                        </div>
                        <div className="font-weight-bolder text-violet1">
                          {s.email}
                        </div>
                      </div>
                      <div className="d-flex flex-column px-2 shadow-sm">
                        <div>
                          <small className="text-muted">
                            Telephone
                          </small>
                        </div>
                        <div className="font-weight-bolder text-violet1">
                          {s.telephone}
                        </div>
                      </div>

                    </div>
                    <div>
                      <div className="font-weight-bolder text-green1 my-3">
                        Address
                        </div>
                      <div className="d-flex flex-column px-2 shadow-sm">
                        <div>
                          <small className="text-muted">
                            Address
                          </small>
                        </div>
                        <div className="font-weight-bolder text-violet1">
                          {s.address}
                        </div>
                      </div>
                      <div className="d-flex flex-column px-2 shadow-sm">
                        <div>
                          <small className="text-muted">
                            P.O.Box
                          </small>
                        </div>
                        <div className="font-weight-bolder text-violet1">
                          {s.pobox}
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
            )
          }
        </div>
      </div>)
  }
}
export default ConferencesSponsors;