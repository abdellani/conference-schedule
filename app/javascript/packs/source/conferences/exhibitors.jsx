import React, { Component } from "react"
import Navbar from "../navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBuilding, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import fetcher from "../utils/fetcher"

class ConferencesExhibitors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exhibitors: []
    }
  }
  componentDidMount() {
    let { id } = this.props.match.params
    fetcher.get(
      `/api/conferences/${id}/exhibitors`,
      (data) => this.setState({ exhibitors: data })
    )
  }
  render() {
    let { id } = this.props.match.params
    let { exhibitors } = this.state
    return (
      <div>
        <Navbar conference_id={id} />
        <div className="bg-violet1 text-white font-weight-bolder px-3 py-2 pb-3">
          Exhibitors
        </div>
        <div className="px-3">
          {
            exhibitors.map(
              e =>
                <div key={e.id} className="shadow-sm bg-white px-3 py-3 my-2">
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
                            Exhibitor {e.id}
                          </small>
                        </div>
                        <div className="font-weight-bolder text-blue1">
                          {e.name}
                        </div>
                      </div>
                      <div className="rounded-pill p-1 bg-white shadow-sm ">
                        <button
                          className={
                            ["show-day-schedule-button border-0",
                              "bg-transparent", "collapsed"].join(" ")
                          }
                          data-toggle="collapse"
                          data-target={`#exibitor${e.id}`}
                        >
                          <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id={`exibitor${e.id}`} className="collapse">
                    <div>
                      <div className="text-violet1 font-weight-bolder">
                        About
                    </div>
                      <div>
                        {e.description}
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="px-2">
                        <FontAwesomeIcon icon={faGlobe} />
                      </div>
                      <div className="d-flex flex-column px-2">
                        <div>
                          <small className="text-muted">
                            Website
                          </small>
                        </div>
                        <div className="font-weight-bolder text-violet1">
                          {e.website}
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

export default ConferencesExhibitors;