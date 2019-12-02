import React, { Component } from "react"
import axios from "axios"

class ConferencesSponsors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sponsors: []
    }
  }
  componentDidMount() {
    let { id } = this.props.match.params
    axios.get(`/api/conferences/${id}/sponsors`).
    then(response => this.setState({ sponsors: response.data }))
  }
  render() {
    let {sponsors}= this.state
    return(<div>
      {
        sponsors.map(
          s=>
          <ul key={s.id}>
            <li>{s.name}</li>
            <li>{s.description}</li>
            <li>{s.website}</li>
            <li>{s.email}</li>
            <li>{s.address}</li>
            <li>{s.pobox}</li>
         </ul>
        )
      }
    </div>)
  }
}

export default ConferencesSponsors;