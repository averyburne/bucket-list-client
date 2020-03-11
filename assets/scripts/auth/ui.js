'use strict'
const store = require('./../store')

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' Successfully signed in')
  store.user = response.user
  $('#sign-in').trigger('reset')
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-up').trigger('reset')
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  $('#sign-in').trigger('reset')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure
}
