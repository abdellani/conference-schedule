import React, { Component, Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Navbar from "../navbar"
import fetcher from "../utils/helpers/fetcher"

class ConferencesSpeakersIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakers: undefined
    }
  }
  componentDidMount() {
    let { id } = this.props.match.params
    fetcher.get(
      `/api/conferences/${id}/speakers`,
      (data) => this.setState({ speakers: data })
    )
  }
  render() {
    let { speakers } = this.state
    if (!speakers) {
      return (<div></div>)
    }
    let { id } = this.props.match.params

    return (
      <div>
        <Navbar conference_id={id} />
        <div className="bg-violet1 text-white font-weight-bolder px-3 py-2 pb-3">
            Speakers
        </div>
        <div className="px-2 w-100">
          {
            speakers.map(
              s =>
                <div key={s.id} className="d-flex align-items-center bg-white my-2 shadow-sm">
                  <div className="m-2 mx-3  px-2 py-1 h3 shadow-sm rounded-circle">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className="d-flex flex-column px-3">
                    <div className="text-blue1 font-weight-bolder">{s.name}</div>
                    <div className="text-muted"><small>{s.role}</small></div>
                  </div>
                </div>
            )}
        </div>
      </div>)
  }
}

export default ConferencesSpeakersIndex;