
const express = require("express");

const app = express();

const PORT = 5000;

const cors = require("cors");
const router = require("./router.js");

//Opciones Cors
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    optionsSuccessStatus: 204
};

//Esto se hace para poder trabajar con un body en formato JSON en nuestras llamadas
app.use(express.json());

//Después de express.json...

app.use(cors(corsOptions));

app.use(router);

app.listen(PORT, ()=>{
    console.log(`Servidor levantado y a la escucha en el puerto ${PORT}`);
});