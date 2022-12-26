const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("socket connected!!");
  socket.on("kirim-pesan", (pesan) => {
    socket.broadcast.emit("pesan-baru", pesan);
  });
});

server.listen(3000);
