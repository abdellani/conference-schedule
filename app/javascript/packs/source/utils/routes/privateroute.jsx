import React, { Component } from "react"
import { Route,Redirect } from "react-router-dom"
import {connect}from "react-redux"

class PrivateRoute extends Component {

  render() {
    let { path,component,login } = this.props
    if(!login){
      return <Redirect to="/login"/>
    }
    return (
      <Route
        path={path}
        component={component}
      />

    )
  }
}
const mapStateToProps=(state)=>{
  let {login}=state
  return {
    login
  }
}
export default connect(mapStateToProps,null)(PrivateRoute);