'use strict'
const authEvents = require('./auth/events')
const listEvents = require('./listItems/events')

$(() => {
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
  authEvents.addHandlers()
  listEvents.addHandlers()
  $('#map').hide()
})
