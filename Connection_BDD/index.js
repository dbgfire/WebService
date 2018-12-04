'use strict';

// [START app]
const express = require('express');
const app = express();
const con =require('./connection');
//import { con } from 'connection';
app.get('/', (req, res) => {
  con().then (()=>{res.send('Connection success');}).catch(()=>{res.send('Connection faild');})
  
});
app.post('/', function (req, res) {
  con().then (()=>{res.send('Connection success');}).catch(()=>{res.send('Connection faild');})
});
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8095;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
// [END app]

module.exports = app;