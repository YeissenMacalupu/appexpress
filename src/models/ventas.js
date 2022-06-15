const mongoose = require("mongoose");
const ventasModel = mongoose.Schema({
    categoria: {
        type: Number,
        required: true
    },
    cantidad: {
        type: String,
        required: true
    },
    id_usuario: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model("Ventas", ventasModel);