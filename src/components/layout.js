import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"

class Layout extends Component {
  render() {
    
    const { location, children } = this.props
  
  return (
    <Fragment>
      <main>
        {children}
      </main>
    </Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
