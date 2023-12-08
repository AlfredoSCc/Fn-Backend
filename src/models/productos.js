const mongoose = require("mongoose")

const productosModel = mongoose.Schema({

    Codigo:{
        type: String,
        require: true
    },
    Nombre:{
        type: String,
        require: true
    },
    Marca:{
        type: String,
        require: true
    },
    Descripcion:{
        type: String,
        require: true
    },
    Precio:{
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("Productos ",productosModel);