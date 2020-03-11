const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onChangePw = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.changePw(data)
    .then(ui.onChangeSuccess)
    .catch(ui.onChangeFailure)
}

const addHandlers = () => {
  $('#change-password').on('submit', onChangePw)
  $('#change-password').hide()
}

module.exports = {
  onChangePw,
  addHandlers
}
