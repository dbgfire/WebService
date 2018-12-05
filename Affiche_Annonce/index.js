'use strict';

// [START app]
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Connection success');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
// [END app]

module.exports = app;
