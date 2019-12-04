import React, { Component } from "react"
import { Route } from "react-router-dom"

class PrivateRoute extends Component {

  render() {
    let { path,component } = this.props
    return (
      <Route
        path={path}
        component={component}
      />

    )
  }
}
export default PrivateRoute;