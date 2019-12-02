import React, { Component } from "react"
import axios from "axios"

class ConferencesTalksAttendancesIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attendances: undefined
    }
  }
  componentDidMount() {
    let { id_conference,id } = this.props.match.params
    axios.get(`/api/conferences/${id_conference}/talks/${id}/attendances`).
    then(response => this.setState({ attendances: response.data }))
  }
  render() {
    let {attendances}= this.state
    if(!attendances){
      return (<div></div>)
    }
    return(
    <div>
    attendances
        <div>
          {attendances.map(
            a=>
            <ul key={a.id}>
            <li>{a.name}</li>
            </ul>
          )}
          </div>
    </div>)
  }
}

export default ConferencesTalksAttendancesIndex;