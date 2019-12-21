import React, { Component, Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { formatTime } from "../../../utils/helpers"
import { faClock, faUser, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../../../navbar"
import fetcher from "../../../utils/helpers/fetcher"
import axios from "axios"

class ConferencesTalksQuestionsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      talk: undefined,
      question: "",
      errors: []
    }
  }
  componentDidMount() {
    let { conference_id, id } = this.props.match.params
    fetcher.get(
      `/api/conferences/${conference_id}/talks/${id}/questions`,
      (data) => this.setState({ talk: data }
      )
    )

  }
  handleChange(e) {
    this.setState(
      {
        [e.target.id]: e.target.value
      }
    )
  }
  handleSubmit() {
    let { conference_id, id } = this.props.match.params
    let { question } = this.state
    axios.post(`/api/conferences/${conference_id}/talks/${id}/questions`,
      {
        question
      }).
      then(response => response.data).
      then(response => {
        if (response.code === 400) {
          let errors = response.errors.content
          this.setState({ errors })
        }
        if (response.code === 200) {
          this.setState({ question:"",errors: [] })
          fetcher.get(
            `/api/conferences/${conference_id}/talks/${id}/questions`,
            (data) => this.setState({ talk: data }
            )
          )
        }
      })
  }
  render() {
    let { talk, question, errors } = this.state
    if (!talk) {
      return (<div></div>)
    }
    let { conference_id } = this.props.match.params
    let { speakers, questions, start_time, end_time, title, } = talk
    return (
      <Fragment>
        <Navbar conference_id={conference_id} />
        <div className="mb-50">
          <div className="bg-violet1 p-4">
            <h1 className="text-white h4 font-weight-bolder mb-2">
              Discussions
            </h1>
            <div className="bg-white my-1 rounded p-3 d-flex align-items-center">
              <div className="d-flex flex-column w-100">
                <div className="font-weight-bolder text-green1">
                  {title}
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
                      <FontAwesomeIcon icon={faUser} />
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
        </div>
        <div className="position-fixed fixed-bottom p-3 d-flex flex-column-reverse w-100">
          <div className="d-flex">
            <input
              type="text"
              value={question}
              id="question"
              className="border-0 rounded-pill shadow py-2 px-3 w-100"
              onChange={(e) => this.handleChange(e)}
            />
            <button
              onClick={() => this.handleSubmit()}
              className="border-0 bg-warning shadow rounded-circle mx-1 p-2"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
          {
            errors.length > 0 &&
            <div className="px-3 bg-danger font-weight-bolder text-white my-2">
              {errors.map((e, index) => <div key={index}>{e}</div>)}
            </div>
          }

        </div>
      </Fragment>
    )
  }
}

export default ConferencesTalksQuestionsIndex;