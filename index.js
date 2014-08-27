var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

http.listen(3000, function() {
  console.log('Listening on port 3000.');
});

io.on('connection', function(socket) {
  console.log('Client connected.');
  socket.on('disconnect', function() {
    console.log('Client disconnected');
  });
});