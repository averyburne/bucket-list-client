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

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  $('#sign-in').trigger('reset')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onSignUpSuccess = function (response) {
  $('#message').text('Successfully signed up')
  $('#sign-up').trigger('reset')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}

const onSignUpFailure = function (response) {
  $('#message').text('Could not sign up')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onChangeSuccess = () => {
  $('#message').text(`Successfully changed password`)
  $('#change-password').trigger('reset')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}

const onChangeFailure = () => {
  $('#message').text('Change password failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const clearMessage = () => {
  setTimeout(function () {
    $('#message').text('')
    $('#message').removeClass('failure')
    $('#message').removeClass('success')
  }, 5000)
}

const onSignOutSuccess = function () {
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#message').text('Signed out successfully')
  store.user = null

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}

const onSignOutFailure = function (error) {
  $('#message').text('Error on sign out: ' + error.statusText)

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangeSuccess,
  onChangeFailure
}
