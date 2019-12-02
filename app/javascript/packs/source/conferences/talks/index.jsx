import React, { Component } from "react"
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
    axios.get(`/api/conferences/${id}/talks`).
    then(response => this.setState({ talks: response.data }))
  }
  render() {
    let {talks}= this.state
    return(<div>
      {
        talks.map(
          t=>
          <ul key={t.id}>
            <li>{t.day}</li>
            <li>{t.start_time}</li>
            <li>{t.end_time}</li>
            <li>{t.location}</li>
            <li>{t.description}</li>
          </ul>
        )
      }
    </div>)
  }
}

export default ConferencesTalksIndex;