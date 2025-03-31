const express = require("express");

const app = express();

// Middleware para parsear JSON y formularios URL encoded
app.use(express.json()); // Para manejar JSON en las peticiones
app.use(express.urlencoded({ extended: true })); // Para manejar datos de formularios

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static("public"));

// Array de frutas
const frutas = ["manzana"];

// Ruta GET para obtener las frutas
app.get("/frutas", (req, res) => {
    res.json(frutas);
});

// Ruta POST para agregar una fruta
app.post("/frutas", (req, res) => {
    const fruta = req.body.fruta; // Recibe el nombre de la fruta desde el cuerpo de la solicitud
    if (fruta) {
        frutas.push(fruta); // Agrega la fruta al array
        res.json({ message: "Fruta recibida", fruta });
    } else {
        res.status(400).json({ message: "No se proporcionó una fruta válida." });
    }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor en el puerto 3000");
});


