import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import typography from '../utils/typography'
import { TypographyStyle, GoogleFont } from 'react-typography'

class Layout extends Component {
  render() {
    const { location, children } = this.props
  
  return (
    <Fragment>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
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
