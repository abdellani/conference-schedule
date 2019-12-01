import React, { Component } from "react"
import axios from "axios"
import { end } from "worker-farm";

class ConferencesShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conference: undefined
    }
  }
  componentDidMount() {
    let { id } = this.props.match.params
    axios.get(`/api/conferences/${id}`).
    then(response => this.setState({ conference: response.data }))
  }
  render() {
    let {conference}= this.state
    if(!conference){
    return (
      <div></div>
    )}
    console.log(conference)
    let {date,description,location,subject,talks}=conference
    return(<div>
      <ul>
        <li>
          {date}
        </li>
        <li>
          {subject}
        </li>
        <li>
          {description}
        </li>
        <li>
          {location}
        </li>
      </ul>
      {
        talks.map(
          t=>
          <ul key={t.id}>
            <li>{t.day}</li>
            <li>{t.description}</li>
            <li>{t.location}</li>
            <li>{t.start_time}</li>
            <li>{t.end_time}</li>
          </ul>
        )
      }
    </div>)
  }
}

export default ConferencesShow;