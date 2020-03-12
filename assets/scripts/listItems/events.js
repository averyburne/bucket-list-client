const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndex = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const completed = !$(event.target).data('bool')
  const data = {
    "listItem": {
      "completed": completed
    }
  }

  api.update(id, data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onDelete = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.destroy(id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

const addHandlers = () => {
  $('#add-listItem').on('submit', onCreate)
  $('#get-listItems').on('click', onIndex)
  $('.content').on('click', '.remove-listItem', onDelete)
  $('.content').on('click', '.update-listItem', onUpdate)
  $('.content').on('click', '.completed', onUpdate)
}

module.exports = {
  onCreate,
  onIndex,
  onUpdate,
  onDelete,
  addHandlers
}
