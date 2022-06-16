const mongoose = require("mongoose");
const productosModel = mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("productos", productosModel);