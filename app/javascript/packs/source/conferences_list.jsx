import React, { Component } from "react"
import axios from "axios"

class ConferencesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conferences: []
    }
  }
  componentDidMount() {
    axios.get("api/conferences").
      then(response => this.setState({ conferences: response.data }))
  }
  render() {
    let { conferences } = this.state

    return (
      <div>{
        conferences.map(c =>
          <ul key={c.id}>
            <li>{c.date}</li>
            <li>{c.subject}</li>
            <li>{c.location}</li>
            <li>{c.description}</li>
          </ul>
        )
      }</div>
    )
  }
}

export default ConferencesList;