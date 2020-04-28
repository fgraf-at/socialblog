const app = require('./backend/app');
const debug = require('debug')('node-angular');
const http = require('http');
const socketIO = require('socket.io');

const normalizePort = (val) => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};

const onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
    debug('Listening on ' + bind);
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.on('error', onError);
server.on('listening', onListening);
server.listen(port);

const io = socketIO(server);
io.on('connection', (webSocket) => {
    console.log('user joined the chat');
  webSocket.emit('state', 'a new user joined the chat');

    webSocket.on('disconnect', () => {
      io.emit('state', 'user has left the chat');
      console.log('user has left the chat');
    });
  webSocket.on('emittedMessage', (msg) => {
    io.emit('message', msg);
  });
});
