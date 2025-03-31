const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlendcoded({extended: true}));
app.use(express.static("public"));

const frutas = ["manzana"]

app.get("/frutas",(req,res)=> res.json(frutas));

app.post("/frutas", (req,res)=> {
    const fruta = req.body.fruta 
    res.json("Fruta recibida");
})

app.listen(3000,()=> console.log("servidor en el puerto 3000"))

