'use strict'

const store = require('./../store')

const onSignOutSuccess = function () {
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#message').text('Signed out successfully')
  store.user = null
}

const onSignOutFailure = function (error) {
  $('#notice').text('Error on sign out: ' + error.statusText)
}

module.exports = {
  onSignOutSuccess,
  onSignOutFailure
}
