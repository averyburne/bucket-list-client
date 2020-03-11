'use strict'
const events = require('./auth/events')


$(() => {
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
  events.addHandlers()
})
