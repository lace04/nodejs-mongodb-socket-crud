import app from './app';
import http from 'http';
import { connectDB } from './db';
import { Server as WebsocketServer } from 'socket.io';
import sockets from './sockets';
import { PORT } from './config';

connectDB();
//const server http+socket;
const server = http.createServer(app);
const httpServer = server.listen(PORT);
console.log(`Server listening on port ${PORT}`);

const io = new WebsocketServer(httpServer);
sockets(io);
