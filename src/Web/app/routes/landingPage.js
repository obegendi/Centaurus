/**
 * This module renders a layout when its route is requested
 * It is used for pages like home page
 */
const url = require('url')

module.exports.getLandingPage = async (request, response, next) => {
    let pathname = url.parse(request.url).pathname.split('/').filter(Boolean)[0]
    pathname = pathname || 'home'
    response.render('landingPage', { title: pathname })
  }