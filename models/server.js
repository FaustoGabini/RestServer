const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express(); // Creo la app de express en la misma clase del server
    this.port = process.env.PORT || 3000;
    this.usuariosPath = "/api/usuarios";

    // Middlewares
    this.middlewares();
    // Rutas de mi aplicacion
    this.routes(); // Cuando se llama a constructor llama al metodo routes
  }

  middlewares() {
    // CORS
    this.app.use(cors()); // Sirve para poder acceder a nuestra API desde cualquier punto

    // Lectura  y parseo del body
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto ", this.port);
    });
  }
}

module.exports = Server;
