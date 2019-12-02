import React, { Component } from "react"
import axios from "axios"

class ConferencesExhibitors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exhibitors: []
    }
  }
  componentDidMount() {
    let { id } = this.props.match.params
    axios.get(`/api/conferences/${id}/exhibitors`).
    then(response => this.setState({ exhibitors: response.data }))
  }
  render() {
    let {exhibitors}= this.state
    return(<div>
      {
        exhibitors.map(
          e=>
          <ul key={e.id}>
            <li>{e.name}</li>
            <li>{e.description}</li>
            <li>{e.website}</li>
          </ul>
        )
      }
    </div>)
  }
}

export default ConferencesExhibitors;