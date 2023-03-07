require("dotenv").config(); // Toma todas las variables de mi archivo .env

const Server = require("./models/server");

const server = new Server();

server.listen();
