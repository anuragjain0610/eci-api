const express = require('express')
const app = express()
const path = require('path')
const route = express.Router()

const filePath = path.join(__dirname, "../public/aboutUs")
route.use('/', express.static(filePath))

exports = module.exports = route
