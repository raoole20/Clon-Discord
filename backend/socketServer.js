const { verifyTokenSocket } = require("./middleware/authSocket");
const { disconnectHandler } = require("./socketHandler/disconnectHandler");
const {
  newConnectionHandler,
} = require("./socketHandler/newConnectionHandler");
const serverStore = require("./serverStore")
/**
 * funcion para registrar una nueva conexion socket
 * @param {Express} server instancia de nuestro server creado con express
 */
exports.registerSokectServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  serverStore.setSocketInstance(io)
  
  io.use((socket, next) => {
    verifyTokenSocket(socket, next);
  });

  // iniciar conxion
  io.on("connection", (socket) => {
    console.log("[LOG] Connected to socket - id: " + socket.id);
    newConnectionHandler(socket, io);

    socket.on("disconnect", () => {
      console.log("[LOG] Disconnect to socket - id: " + socket.id);
      disconnectHandler(socket);
    });
  });
};
