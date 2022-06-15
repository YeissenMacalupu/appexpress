const express = require("express");
const router = express.Router();
const productosModel = require("../models/ventas");

router.post("/productos", (req, res) => {
    const product = productosModel(req.body);
    product.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});