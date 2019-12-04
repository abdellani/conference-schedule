import React from "react"
import axios from "axios"
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
      <div>
        <div className="bg-violet1 p-4">
          <div className="text-white font-weight-bolder mb-2">
            Signup
          </div>
        </div>
        <form className="px-3 my-2 text-violet1 font-weight-bolder">
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
              onChange={e=>this.handleChange(e)}
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
              onChange={e=>this.handleChange(e)}
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
    )
  }
}

export default UsersSignup;