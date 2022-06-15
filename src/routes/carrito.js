const express = require("express");
const router = express.Router();
const carritoModel = require("../models/carrito");

//Crear un carrito
router.post("/carrito", (req, res) => {
    const carrito = carritoModel(req.body);
    carrito.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// Leer todos los usurios 
router.get("/carrito", (req, res) => {
    carritoModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

module.exports = router;