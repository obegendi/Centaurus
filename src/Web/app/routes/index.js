//Connect rendering modules to routes
const express = require('express')
const router = express.Router()

//handlers
const { catchErrors } = require('../handlers/errorHandlers')

//routes
const { getLandingPage } = require('./landingPage')

router.get('/', catchErrors(getLandingPage))

module.exports = router