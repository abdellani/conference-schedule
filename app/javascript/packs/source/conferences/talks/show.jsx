import React, { Component } from "react"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faQuestionCircle,faCommentDots } from '@fortawesome/free-regular-svg-icons';

class ConferencesTalksIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      talk: undefined
    }
  }
  componentDidMount() {
    let { id_conference, id } = this.props.match.params
    axios.get(`/api/conferences/${id_conference}/talks/${id}`).
      then(response => this.setState({ talk: response.data }))
  }
  render() {
    let { talk } = this.state
    if (!talk) {
      return (<div></div>)
    }
    let { moderators, speakers, id, day, start_time, end_time, location, description } = talk
    return (
      <div>
        <div>
          <ul>
            <li>{day}</li>
            <li>{start_time}</li>
            <li>{end_time}</li>
            <li>{location}</li>
            <li></li>
          </ul>
        </div>
        <div className="bg-white p-4">
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
          <div className="rounded bg-blue1 px-3 py-2 my-2 d-flex justify-content-between text-white">
            <div>
              Send your questions
            </div>
            <div>
              <FontAwesomeIcon icon={faQuestionCircle} />
            </div>
          </div>
          <div className="rounded bg-blue1 px-3 py-2 my-2 d-flex justify-content-between text-white">
            <div>
              Add your review
            </div>
            <div>
              <FontAwesomeIcon icon={faCommentDots} />
            </div>
          </div>
        </div>
      </div>)
  }
}

export default ConferencesTalksIndex;