'use strict'

// [START app]
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var multer = require('multer') // v1.0.5
var upload = multer() // for parsing multipart/form-data
const basicAuth = require('express-basic-auth')
const edit = require('./edit')
const insert = require('./insert')
const affiche = require('./affiche')

app.use(
  basicAuth({
    users: { admin: 'supersecret' }
  })
)
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.route('/book/:id').get(function (req, res) {
  affiche(req.params.id)
    .then(resp => {
      res.send(resp)
    })
    .catch(() => {
      res.send('Show failed')
    })
}) /*
app.route('/book/:id').put(function (req, res) {
  affiche(req.params.id)
    .then(resp => {
      res.send(resp)
    })
    .catch(() => {
      res.send('Update failed')
    })
}) */

app.post('/book/', upload.array(), function (req, res) {
  console.log(req.body)
  insert('test', 'test', 'test')
    .then(resp => {
      res.send('Add success')
    })
    .catch(() => {
      res.send('Add failed')
    })
  // res.json(req.body)
})
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})

module.exports = app
