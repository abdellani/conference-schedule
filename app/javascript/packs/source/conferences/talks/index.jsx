import React, { Component,Fragment } from "react"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faPodcast, faLandmark, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {formatTime} from "../../utils"
import Navbar from "../../navbar"
class ConferencesTalksIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      talks: []
    }
  }
  componentDidMount() {
    let { id } = this.props.match.params
    axios.get(`/api/conferences/${id}/talks`).
      then(response => this.setState({ talks: response.data }))
  }
  render() {
    let { talks } = this.state
    let days = new Set();
    talks.forEach(t => days.add(t.day))
    return (
      <Fragment>
        <Navbar/>
      <div className="px-3">
        {
          [...days].map(day =>
            <div key={day} className="my-2">
              <div className="d-flex px-3 w-100 justify-content-between ">
                <div className="font-weight-bolder text-pink1">
                  Day {day}
                </div>
                <div className="rounded-pill p-1 bg-white shadow-sm ">
                  <button
                    className={
                      ["show-day-schedule-button border-0",
                        "bg-transparent",
                        (day == 1) ? "" : "collapsed"].join(" ")
                    }
                    data-toggle="collapse"
                    data-target={`#day${day}`}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                </div>
              </div>
              <div
                className={["px-2", "collapse", (day == 1) ? "show" : ""].join(" ")}
                id={`day${day}`}
              >
                {
                  talks.map(
                    t =>
                      <div className=" my-1 px-1 py-1 w-100" key={t.id}>
                        <div className="pt-1 pb-2">
                          <small className="text-blue1 font-weight-bolder">
                            {formatTime(t.start_time)} - {formatTime(t.end_time)}
                          </small>
                        </div>
                        <div
                          className="d-flex flex-wrap w-100 shadow-sm"
                        >
                          <div
                            className="d-flex w-min-80 px-2 talk-title py-2 flex-column flex-nowrap align-items-center bg-white "
                            onClick={() => this.props.history.push(`${this.props.match.url}/${t.id}`)}
                          >
                            <div className="font-weight-bolder text-violet1 w-100 ">
                              {t.description}
                            </div>
                            <div className="d-flex  w-100 flex-wrap text-nowrap">
                              <div className="d-flex flex-column px-0 w-min-50">
                                {
                                  t.speakers.map(speaker =>
                                    <div key={speaker.id} >
                                      <FontAwesomeIcon icon={faPodcast} /> {speaker.name}
                                    </div>
                                  )
                                }
                              </div>
                              <div className="">
                                <span className="mr-2"><FontAwesomeIcon icon={faLandmark} /></span> {t.location}
                              </div>
                            </div>
                          </div>
                          <div className="w-min-20 bg-green1 add-to-schedule-button text-nowrap d-flex align-items-center justify-content-center ">
                            <h3 >
                              <FontAwesomeIcon icon={faPlusCircle} />
                            </h3>
                          </div>
                        </div>
                      </div>
                  )
                }
              </div>
            </div>
          )
        }</div>
        </Fragment>
    )
  }
}

export default ConferencesTalksIndex;