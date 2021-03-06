import React, { Component, Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faPodcast, faLandmark, faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { formatTime } from "../../utils/helpers"
import Navbar from "../../navbar"
import fetcher from "../../utils/helpers/fetcher"
import { Link } from "react-router-dom"
import axios from "axios"
class ConferencesTalksIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      talks: []
    }
  }
  componentDidMount() {
    let { id } = this.props.match.params
    fetcher.get(
      `/api/conferences/${id}/talks`,
      (data) => this.setState({ talks: data }
      )
    )
  }
  addToSchedule(talk_id) {
    let { id } = this.props.match.params
    axios.post(`/api/conferences/${id}/talks/${talk_id}/attendances`).
      then(response => response.data).
      then(response => {
        if (response.code === 200) { alert("The talks has been added.") }
        if (response.code === 400) { alert("It's already in your link!") }
      }
      )

  }

  render() {
    let { talks } = this.state
    let { id } = this.props.match.params
    let days = new Set();
    talks.forEach(t => days.add(t.day))
    return (
      <Fragment>
        <Navbar conference_id={id} />
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
                    talks.filter(t => t.day === day).map(
                      t =>
                        <div className=" my-1 px-1 py-1 w-100" key={t.id}>
                          <div className="pt-1 pb-2">
                            <small className="text-blue1 font-weight-bolder">
                              {formatTime(t.start_time)} - {formatTime(t.end_time)}
                            </small>
                          </div>
                          <div
                            className="d-flex flex-nowrap w-100 shadow-sm"
                          >
                            <Link
                              to={`${this.props.match.url}/${t.id}`}
                              className="d-flex w-min-80 px-2 talk-title py-2 \
                            flex-column flex-nowrap align-items-center \
                            bg-white text-dark text-wrap"
                            >
                              <div className="font-weight-bolder text-violet1 w-100 ">
                                {t.title}
                              </div>
                              <div className="d-flex  w-100 flex-wrap text-nowrap">
                                <div className="d-flex flex-column px-0 w-min-50">
                                  {
                                    t.speakers.map(speaker =>
                                      <div key={speaker.id} >
                                        <FontAwesomeIcon icon={faUser} /> {speaker.name}
                                      </div>
                                    )
                                  }
                                </div>
                                <div className="px-2">
                                  <span className="mr-2"><FontAwesomeIcon icon={faLandmark} /></span> {t.location}
                                </div>
                              </div>
                            </Link>
                            <div
                              onClick={(e) => {
                                this.addToSchedule(t.id);
                                let target=e.target
                                let newNode =target.cloneNode(true);
                                target.parentNode.replaceChild(newNode,target)
                              }}
                              className="w-min-20 bg-green1 add-to-schedule-button text-nowrap d-flex align-items-center justify-content-center ">
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