import React,{Fragment} from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../navbar"

class UsersSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      role: "",
      email: "",
      mobile: "",
      password: "",
      bio: "",
      errors: {},
      success: false
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
    let { name, company, role, email, mobile, password, bio } = this.state

    axios.post("/api/users", {
      user: {
        name,
        company,
        role,
        email,
        mobile,
        password,
        bio
      }
    }).
      then(response => response.data).
      then(response => {
        if (response.code == 400) {
          this.setState({
            errors: response.errors,
          })
        } else if (response.code == 200) {
          this.setState({
            name: "",
            company: "",
            role: "",
            email: "",
            mobile: "",
            password: "",
            bio: "",
            errors: {},
            success: true
          })

        }
      }
      )

  }
  showSuccessNotification() {
    let { success } = this.state
    if (!success) {
      return null;
    }
    return (
      <div
        className="user-creation-success-notification bg-violet1 d-flex \
    flex-column align-items-center justify-content-center p-4"
      >
        <div className="my-4" >
          <h3 className="font-weight-bolder text-white">

            Your account is created
        </h3>
        </div>
        <div className="d-flex justify-content-around w-100 my-4">
          <div
            className="d-flex flex-column align-items-center text-success"
            onClick={() => this.props.history.push("/login")}
          >
            <div >
              <h2>
                <FontAwesomeIcon icon={faSignInAlt} />
              </h2>
            </div>
            <div>
              <h3 className="font-weight-bolder">
                Login
            </h3>
            </div>
          </div>

          <div
            className="d-flex flex-column align-items-center text-danger"
            onClick={() => this.setState({ success: false })}
          >
            <div>
              <h2>
                <FontAwesomeIcon icon={faWindowClose} />
              </h2>
            </div>
            <div>
              <h3 className="font-weight-bolder">
                Close
            </h3>
            </div>
          </div>      </div>
      </div>
    )
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
              {
                errors[key].map(
                  m =>
                    <li>
                      {m}
                    </li>
                )
              }
            </ul>
          </div>
        )}
      </div>
    )
  }
  render() {
    let {
      name,
      company,
      role,
      email,
      mobile,
      password,
      bio
    } = this.state
    return (
      <Fragment>
        <Navbar login={false}  />      
      <div>
        {this.showSuccessNotification()}
        <div className="bg-violet1 p-4">
          <div className="text-white font-weight-bolder mb-2">
            Signup
          </div>
        </div>
        <form className="px-3 my-2 text-violet1 font-weight-bolder">
          {this.showErrors()}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company name</label>
            <input type="text"
              className="form-control"
              id="company"
              placeholder="Enter your company name"
              value={company}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role </label>
            <input
              type="text"
              className="form-control"
              id="role"
              placeholder="Enter role"
              value={role}
              onChange={e => this.handleChange(e)}
            />
          </div>
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
            <label htmlFor="mobile">Mobile </label>
            <input
              type="string"
              className="form-control"
              id="mobile"
              placeholder="Enter mobile"
              value={mobile}
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
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <input
              type="textfield"
              className="form-control"
              id="bio"
              placeholder="Enter bio"
              value={bio}
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

export default UsersSignup;