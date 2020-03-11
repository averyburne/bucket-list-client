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

const onSignUpSuccess = function (response) {
  console.log(response)
  $('#message').text('Successfully signed up')
}

const onSignUpFailure = function (response) {
  console.log(response)
  $('#message').text('Could not sign up')
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
  $('#change-password').trigger('reset')

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
  $('.signed-in').hide()
  $('.input-form').hide()
  $('.signed-out').show()
  $('.content').empty()
  $('#notice').text('Signed out successfully')
  store.user = null
}

const onSignOutFailure = function (error) {
  $('#notice').text('Error on sign out: ' + error.statusText)
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
