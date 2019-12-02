import React, { Component } from "react"
import axios from "axios"

class ConferencesTalksIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      talk: undefined
    }
  }
  componentDidMount() {
    let { id_conference,id } = this.props.match.params
    axios.get(`/api/conferences/${id_conference}/talks/${id}`).
    then(response => this.setState({ talk: response.data }))
  }
  render() {
    let {talk}= this.state
    if(!talk){
      return (<div></div>)
    }
    let{moderators,speakers,id,day,start_time,end_time,location,description}=talk
    return(
    <div>
      <div>
        <ul>
          <li>{day}</li>
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
            s=>
            <ul key={s.id}>
            <li>{s.name}</li>
            </ul>
          )}
        </div>
      </div>
      <div>
        moderators
        <div>
          {moderators.map(
            m=>
            <ul key={m.id}>
            <li>{m.name}</li>
            </ul>
          )}
        </div>
      </div>
    </div>)
  }
}

export default ConferencesTalksIndex;