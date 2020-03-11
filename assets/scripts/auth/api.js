const config = require('../config')
const store = require('../store')

const changePw = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

module.exports = {
  changePw
}
