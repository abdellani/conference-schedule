import React, { Fragment } from "react"
import Navbar from "../navbar"
import fetcher from "../utils/helpers/fetcher"
import { Link } from "react-router-dom"
import { faLandmark, faPodcast, faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      attendances: []
    }

  }
  componentDidMount() {
    fetcher.get(
      `/api/profile`,
      (data) => {
        this.setState({ attendances: data.attendances })
      }
    )

  }
  render() {
    let { attendances } = this.state
    return (
      <Fragment>
        <Navbar conference_selected={false} />
        <div className="bg-violet1 p-4">
          <div className="text-white font-weight-bolder mb-2">
            Profile
          </div>
        </div>
        <div>
          <div className="text-blue1 font-weight-bolder px-3 my-2">
          Talks in your list
          </div>
          {attendances.map(
            a =>
              <Link
                to={`/conferences/${a.talk.conference.id}/talks/${a.talk.id}`}
                className="d-flex  px-2 py-2 \
                            flex-column flex-nowrap  \
                            bg-white text-dark my-2 px-2 shadow mx-3 "
              >
                <div className="font-weight-bolder ">
                <FontAwesomeIcon icon={faBookOpen} />  {a.talk.title}
                </div>
                <div className="">
                  <FontAwesomeIcon icon={faBook} /> {a.talk.conference.subject}
                </div>
                <div className="">
                  <FontAwesomeIcon icon={faLandmark} /> {a.talk.conference.location}
                </div>
              </Link>


          )
          }
        </div>
      </Fragment>
    )
  }
}

export default Profile;