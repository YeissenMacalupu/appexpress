const express = require("express");
const router = express.Router();
const productosModel = require("../models/productos");

//Crear un usurio 
router.post("/productos", (req, res) => {
    const product = productosModel(req.body);
    product.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});


// Leer todos los usurios 
router.get("/productos", (req, res) => {
    productosModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});


//Buscar un usurio por id 
router.get("/productos/:id", (req, res) => {
    const { id } = req.params;

    productosModel.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});


// Actualizar datos de un usurio 
router.put("/productos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, correo } = req.body;

    productosModel
        .updateOne({ _id: id }, { $set: { nombre, edad, correo } })
        .then((data) => res.json(data))
        .catch((error) => res.json)
});


// Eliminar un usurio
router.delete("/productos/:id", (req, res) => {
    const { id } = req.params;

    productosModel.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});
module.exports = router;