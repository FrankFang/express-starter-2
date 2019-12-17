var express = require('express')
var app = express()

app.get('/xxx', function (request, response) {
  response.send('你好')
})

const port = 4000
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})