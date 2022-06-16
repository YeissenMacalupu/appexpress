//Llamada de paquetes//
const express = require("express");
const mongoose = require("mongoose");
const productos = require("./routes/productos");
const carrito = require("./routes/carrito");
require("dotenv").config();
const path = require("path");

//llamamos al swagger - uso de swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerSpecs = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Express Game",
            version: "1.0.0"
        },
        servers: [{
            url: "http://localhost:3000"
        }]
    },
    apis: [` ${path.join(__dirname, "./routes/*.js")} `]
}

const app = express();
const port = 3000;

//Configuracion para que traje con JSON

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})
app.use("/api", productos);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpecs)))

/*Rutas de navegador*/
app.get('/', (req, res) => {
    res.send("Bienvenido a la API REST");
});

/*Test MongoDB Atlas*/
mongoose.connect(process.env.mongodb_conexion)
    //Comprobamos con then - catch si funciona //
    .then(() => console.log("Conexion correcta a MongoDB Atlas"))
    .catch((error) => console.log(error))

/*Comprovamos si el servidor funciona*/
app.listen(3000, () => console.log("Servidor funcionando en el puerto", port));