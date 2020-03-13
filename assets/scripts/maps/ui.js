const mapThing = require('../templates/map.handlebars')

const makeMap = function () {
  const showMapHTML = mapThing()
  $('.content').html(showMapHTML)
}

module.exports = {
  makeMap
}
