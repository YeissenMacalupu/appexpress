const mongoose = require("mongoose");
const carritoModel = mongoose.Schema({
    cantidad: {
        type: Number,
        required: true
    },
    id_usuario: {
        type: String,
        required: true
    },
    id_pago: {
        type: Number,
        required: true
    },

});

module.exports = mongoose.model("Carrito", carritoModel);