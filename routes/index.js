const route = require('express').Router()

route.use('/', require('./upload'))
route.use('/aboutUs', require('./aboutUs'))
route.use('/uploaded', require('./uploaded'))


exports = module.exports = route 