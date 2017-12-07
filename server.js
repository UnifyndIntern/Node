'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  var socket = io.connect('http://socket.coincap.io');
  socket.on('trades', function (tradeMsg) {
  	console.log(tradeMsg);
	document.getElementById('trade').innerHTML = res.send(JSON.stringify(tradeMsg));
	})
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
