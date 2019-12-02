import React, { Component } from "react"
import axios from "axios"

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
    let { speakers, questions, start_time, end_time, description,location } = talk
    return (
      <div>
        <div>
          <ul>
            <li>{start_time}</li>
            <li>{end_time}</li>
            <li>{location}</li>
            <li>{description}</li>
          </ul>
        </div>
        <div>
          speakers
          <div>
            {speakers.map(
              s =>
                <ul key={s.id}>
                  <li>{s.name}</li>
                </ul>
            )}
          </div>
        </div>
        <div>
          questions
          <div>
            {questions.map(
              q =>
                <div key={q.created_at}>
                  <div key="1">{q.content}</div>
                  <div key="2">{q.created_at}</div>
                  <div key="3">{q.user.name}</div>
                </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ConferencesTalksQuestionsIndex;