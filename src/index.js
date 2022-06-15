//Llamada de paquetes//
const express = require("express");
const mongoose = require("mongoose");
const productos = require("./routes/productos");
const carrito = require("./routes/carrito");
require("dotenv").config();



const app = express();
const port = 3000;

//Configuracion para que traje con JSON
app.use(express.json());
app.use("/express", productos);

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