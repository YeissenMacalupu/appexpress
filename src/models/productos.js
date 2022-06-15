const mongoose = require("mongoose");
const productosModel = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("productos", productosModel);