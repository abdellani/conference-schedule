import React, { Component, Fragment } from "react"
import fetcher from "../../utils/fetcher"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faQuestionCircle, faCommentDots, faClock } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom"
import { formatTime } from "../../utils"
import { faUniversity, faPlus, faBook } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../navbar"

class ConferencesTalksIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      talk: undefined
    }
  }
  componentDidMount() {
    let { conference_id, id } = this.props.match.params
    fetcher.get(
      `/api/conferences/${conference_id}/talks/${id}`,
      (data) => this.setState({ talk: data }
      )
    )
  }
  render() {
    let { talk } = this.state
    if (!talk) {
      return (<div></div>)
    }
    let { conference_id } = this.props.match.params
    let { moderators, speakers, id, day, start_time, end_time, location, description, title } = talk
    return (
      <Fragment>
        <Navbar conference_id={conference_id} />
        <div>
          <div className="bg-violet1 p-4">

            <div className="bg-white my-1 rounded p-3 d-flex align-items-center">
              <div className="px-3 d-flex flex-column justify-content-center">
                <h3>
                  <FontAwesomeIcon icon={faBook} />
                </h3>
              </div>
              <div className="d-flex flex-column w-100">
                <div>
                  <small className="text-muted font-weight-bolder">
                    Title
                </small>
                </div>
                <div className="d-flex w-100 justify-content-between text-violet1 font-weight-bolder">
                  {title}
                </div>
              </div>
            </div>


            <div className="bg-white my-1  rounded p-3 d-flex align-items-center">
              <div className="px-3 d-flex flex-column justify-content-center">
                <h3>
                  <FontAwesomeIcon icon={faClock} />
                </h3>
              </div>
              <div className="d-flex flex-column w-100">
                <div>
                  <small className="text-muted font-weight-bolder">Date & Time</small>
                </div>
                <div className="d-flex w-100 justify-content-between text-violet1 font-weight-bolder">
                  <div>Day : {day}</div>
                  <div >
                    {formatTime(start_time)} ~ {formatTime(end_time)}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white my-1 rounded p-3 d-flex align-items-center">
              <div className="px-3 d-flex flex-column justify-content-center">
                <h3>
                  <FontAwesomeIcon icon={faUniversity} />
                </h3>
              </div>
              <div className="d-flex flex-column w-100">
                <div>
                  <small className="text-muted font-weight-bolder">
                    Location
                </small>
                </div>
                <div className="d-flex w-100 justify-content-between text-violet1 font-weight-bolder">
                  {location}
                </div>
              </div>
            </div>
            <div className="bg-blue1 w-100 text-white mt-3 px-3 rounded p-2 d-flex align-items-center justify-content-between">
              <div>
                Add to your schedule
            </div>
              <div>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 my-0">
            <div className="text-violet1 font-weight-bolder">Description:</div>
            <div>
              {description}
            </div>
          </div>
          <div className="px-3">
            <div className="text-green1 font-weight-bolder">
              Speakers
        </div>
            <div>
              {speakers.map(
                s =>
                  <div key={s.id} className="d-flex align-items-center bg-white my-2 shadow-sm">
                    <div className="m-2 mx-3  px-2 py-1 h3 shadow-sm rounded-circle">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="d-flex flex-column px-3">
                      <div className="text-violet1 font-weight-bolder">{s.name}</div>
                      <div className="text-muted"><small>{s.role}</small></div>
                    </div>
                  </div>

              )}
            </div>
          </div>
          <div className="px-3">
            <div className="text-green1 font-weight-bolder">
              Moderators
        </div>
            <div>
              {moderators.map(
                m =>
                  <div key={m.id} className="d-flex align-items-center bg-white my-2 shadow-sm">
                    <div className="m-2 mx-3  px-2 py-1 h3 shadow-sm rounded-circle">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="d-flex flex-column px-3">
                      <div className="text-violet1 font-weight-bolder">{m.name}</div>
                      <div className="text-muted"><small>{m.role}</small></div>
                    </div>
                  </div>

              )}
            </div>
            <div className="font-weight-bolder text-violet1">
              Join the discussion
          </div>
            <Link className="text-white" to={`${this.props.match.url}/questions`}>
              <div
                className="rounded bg-blue1 px-3 py-2 my-2 d-flex justify-content-between text-white"

              >
                <div>
                  Send your questions
            </div>
                <div>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
              </div>
            </Link>
            <div className="rounded bg-blue1 px-3 py-2 my-2 d-flex justify-content-between text-white">
              <div>
                Add your review
            </div>
              <div>
                <FontAwesomeIcon icon={faCommentDots} />
              </div>
            </div>
          </div>
        </div>
      </Fragment>)
  }
}

export default ConferencesTalksIndex;