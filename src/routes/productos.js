const express = require("express")
//Importamos la estructura de productos de la carpeta models
const productosModel = require("../models/productos");
//Exportamos los utilitarios de Express
const router = express.Router();

//GET
router.get("/productos",(req, res) =>{

    productosModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje:error}))

});


//POST

router.post("/productos",(req, res) => {
    const registro = productosModel(rep.body);
    registro.save()
    .then((data)=> res.json(data))
    .catch((error) => res.json({mensaje: error}));
})
//PUT


//DELETE




module.exports = router;