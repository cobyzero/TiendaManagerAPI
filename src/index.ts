import express from "express";
import { Server } from "socket.io";
import http from 'http';

const app = express();
const server = http.createServer(app);

server.listen(80);

const socket = new Server(server);

socket.on("connection", () => {
    console.log("conectado");

socket.emit("respuesta","bienvenidohola");

});