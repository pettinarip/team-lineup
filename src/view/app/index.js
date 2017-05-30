import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isAuthenticated } from 'core/auth'
import * as authActions from 'core/auth/actions'

import Header from 'view/components/Header'
import Footer from 'view/components/Footer'
import ModalRoot from 'view/containers/ModalRoot'

function App ({ authenticated, children, signOut }) {
  return (
    <div className='container'>
      <Header
        authenticated={authenticated}
        signOut={signOut}
      />
      <main>{children}</main>
      <Footer />
      <ModalRoot />
    </div>
  )
}

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  children: PropTypes.element,
  signOut: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  authenticated: isAuthenticated(state)
})

export default connect(
  mapStateToProps,
  authActions
)(App)