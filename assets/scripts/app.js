'use strict'
const authEvents = require('./auth/events')


$(() => {
  $('#sign-in').on('submit', authEvents.onSignIn)
})
