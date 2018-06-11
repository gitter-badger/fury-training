//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
const http = require('http')
const path = require('path');

const async = require('async');
const socketio = require('socket.io');
const express = require('express');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
const router = express();
const server = http.createServer(router);
const io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'public')));
const messages = [];
const sockets = [];

io.on('connection', function (socket) {
    messages.forEach(function (data) {
      socket.emit('message', data);
    });

    sockets.push(socket);

    socket.on('disconnect', function () {
      sockets.splice(sockets.indexOf(socket), 1);
      updateRoster();
    });

    socket.on('message', function (msg) {
      let text = String(msg || '')

      if (!text)
        return;

      socket.get('name', function (err, name) {
        let data = {
          name: name,
          text: text
        }

        broadcast('message', data);
        messages.push(data);
      });
    });

    socket.on('identify', function (name) {
      socket.set('name', String(name || 'Anonymous'), function (err) {
        updateRoster();
      });
    });
  });

function updateRoster() {
  async.map(
    sockets,
    function (socket, callback) {
      socket.get('name', callback);
    },
    function (err, names) {
      broadcast('roster', names);
    }
  );
}

function broadcast(event, data) {
  sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  const addr = server.address();
  console.log("Fury Network is connecting you to Energy Blockchain ", addr.address + ":" + addr.port);
});
