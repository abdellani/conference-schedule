import React, { Component } from "react"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { formatTime } from "../../../utils"
import { faClock, faUser } from "@fortawesome/free-regular-svg-icons";
class ConferencesTalksQuestionsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      talk: undefined
    }
  }
  componentDidMount() {
    let { id_conference, id } = this.props.match.params
    axios.get(`/api/conferences/${id_conference}/talks/${id}/questions`).
      then(response => this.setState({ talk: response.data }))
  }
  render() {
    let { talk } = this.state
    if (!talk) {
      return (<div></div>)
    }
    let { speakers, questions, start_time, end_time, description, location } = talk
    return (
      <div>

        <div className="bg-violet1 p-4">
          <div className="text-white font-weight-bolder mb-2">
            Discussions
          </div>
          <div className="bg-white my-1 rounded p-3 d-flex align-items-center">
            <div className="d-flex flex-column w-100">
              <div className="font-weight-bolder text-green1">
                {description}
              </div>
              <div className="d-flex w-100 justify-content-between text-violet1 font-weight-bolder">
                <div>
                  {speakers.map(
                    s =>
                      <div key={s.id}>
                        <small className="text-muted"><FontAwesomeIcon icon={faGraduationCap} /> {s.name}</small>
                      </div>
                  )}

                </div>
                <div>
                  <small className="text-muted font-weight-bolder">
                    <FontAwesomeIcon icon={faClock} /> {formatTime(start_time)} - {formatTime(end_time)}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          {questions.map(
            q =>
              <div key={q.created_at} className="d-flex py-2">
                <div className="d-flex flex-column-reverse align-items-center w-min-20" >
                  <h5 className="my-0">
                  <FontAwesomeIcon icon={faUser}/>
                  </h5>
                </div>
                <div className="d-flex flex-column  shadow-sm bg-white px-2 w-min-80">
                  <div className="d-flex justify-content-between">
                  <div className="text-violet1 font-weight-bolder">{q.user.name}</div>
                  <div> <small className="text-muted">{formatTime(q.created_at)}</small></div>
                  </div>
                  <div>{q.content}</div>
                </div>
              </div>
          )}
        </div>
      </div >
    )
  }
}

export default ConferencesTalksQuestionsIndex;