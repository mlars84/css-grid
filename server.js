const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(PORT, function(req, res) {
  console.log(`listening on ${PORT}`)
})