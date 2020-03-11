'use strict'

// const store = require('./../store')
// const showLiftsTemplate = require('./../templates/lift-listing.handlebars')
// const showLiftTemplate = require('./../templates/single-lift-listing.handlebars')

const onSignUpSuccess = function (response) {
  console.log(response)
  $('#message').text('Successfully signed up')
}

const onSignUpFailure = function (response) {
  console.log(response)
  $('#message').text('Could not sign up')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
