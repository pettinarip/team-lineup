import React from 'react'
import PropTypes from 'prop-types'

const AccountInfo = ({ user, authenticated, signOut }) => (
  <section className='account'>
    <div className='account__name'>Hello, {user.displayName}</div>
    <div className='account__options'>
      {
        authenticated &&
        <a href='#' className='button' onClick={signOut}>Sign out</a>
      }
    </div>
  </section>
)

AccountInfo.propTypes = {
  user: PropTypes.object,
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
}

export default AccountInfo
