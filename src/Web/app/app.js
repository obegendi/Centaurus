const path = require('path')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const querystring = require('querystring')

const routes = require('./routes/index')

const app = express()

//View engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))



// Initialize the route handling
// Check ./routes/index.js to get a list of all implemented routes
app.use('/', routes)

// Catch 404 and forward to error handler
app.use(function (request, response, next) {
    const err = new Error(translate('errorMessage404Route', response.locals.currentLocale.code))
    err.status = 404
    next(err)
  })

// Error handler
app.use(function (err, request, response, next) {
    // Set locals, only providing error in development
    response.locals.error = err
    response.locals.error.status = err.status || 500
    if (request.app.get('env') !== 'development') {
      delete err.stack
    }
    response.locals.title = 'Error'
    // Render the error page
    response.status(err.status || 500)
    response.render('error')
  })

module.exports = app
