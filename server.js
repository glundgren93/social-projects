var express = require('express');
var path = require('path');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
const publicPath = express.static(path.join(__dirname, './dist'))

app.use('/dist', publicPath)

app.get('*', function(request, response) {
  response.sendFile(__dirname + './dist/index.html')
});

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});
