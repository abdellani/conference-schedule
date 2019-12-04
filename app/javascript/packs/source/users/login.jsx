import React, { Fragment } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../navbar"
class UsersLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      success: true
    }
  }
  handleChange(e) {
    this.setState(
      {
        [e.target.id]: e.target.value
      }
    )
  }
  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state

    axios.post("/api/users/sessions", {
      user: {
        email,
        password,
      }
    }).
      then(response => response.data).
      then(response => {
        console.log(response.data)
        if (response.code == 400) {
          this.setState({
            errors: response.errors,
          })
        }
        else if (response.code == 200) {
          this.props.history.push("/conferences")
        }
      })

  }
  showErrors() {
    let { errors } = this.state
    if (Object.keys(errors).size === 0)
      return (null)
    return (
      <div className="bg-danger text-white px-3">{
        Object.keys(errors).map(key =>
          <div key={key} >
            {key}
            <ul>
              {errors[key].map(
                m =>
                  <li key={m}>
                    {m}
                  </li>
              )}
            </ul>
          </div>
        )}
      </div>
    )
  }
  render() {
    let {
      email,
      password,
    } = this.state
    return (
      <Fragment>
        <Navbar login={false} />

        <div>
          <div className="bg-violet1 p-4">
            <div className="text-white font-weight-bolder mb-2">
              Login
          </div>
          </div>
          <form className="px-3 my-2 text-violet1 font-weight-bolder">
            {this.showErrors()}
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <button
              type="submit"
              className="btn bg-violet1 text-white"
              onClick={(e) => this.onSubmit(e)}
            >
              Submit
          </button>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default UsersLogin;