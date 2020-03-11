'use strict'

const onChangeSuccess = () => {
  $('#message').text(`Successfully changed password`)
  $('#change-pw').trigger('reset')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}

const onChangeFailure = () => {
  $('#message').text('Change password failed')
  $('#change-pw').trigger('reset')

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

module.exports = {
  onChangeSuccess,
  onChangeFailure
}
