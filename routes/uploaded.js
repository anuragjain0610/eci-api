const express = require('express')
const path = require('path')
const route = express.Router()
const app = express()

const filePath = path.join(__dirname, "../public/uploadedPage")
route.use('/', express.static(filePath))


exports = module.exports = route
