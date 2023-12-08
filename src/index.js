//-Llamada de Paquetes------------
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const productos = require("./routes/productos")

//-Configuraciones-----------

//Inicializamos los paquetes
const app = express();
const puerto = 9000;

//-Middleware------------------
app.use(express.json());
app.use("/api", productos);


//-Rutas------------------------------

app.get("/prueba",(req, res) => {res.send("Pagina de Prueba")});
app.get("/",(req, res) => {res.send("Pagina de Principal")});

//Construimos la ruta 
//app.use("/api",productos);


//-Ejecución---------------
//Conectamos la BD de Mongo
mongoose.connect(process.env.mongodb)
    .then(() => {
        console.log("Conexión realizada con éxito");
    })
    .catch((error) => {
        console.log("Error de conexión:", error);
    });

//-Indico que escuche las peticiones en el puerto--------------
app.listen(puerto,()=>{console.log("Servidor escuchando en el puerto " + puerto)});
