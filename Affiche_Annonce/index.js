'use strict'

// [START app]
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var multer = require('multer') // v1.0.5
var upload = multer() // for parsing multipart/form-data
const basicAuth = require('express-basic-auth')

app.use(
  basicAuth({
    users: { admin: 'supersecret' }
  })
)
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app
  .route('/book/:id')
  .get(function (req, res) {
    res.send('Get a book ' + req.params.id)
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

app.post('/book/', upload.array(), function (req, res) {
  console.log(req.body)
  // res.json(req.body)
  res.send('Add succes')
})
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})

module.exports = app
