const mongoose = require("mongoose");
const user = process.env.USER;
const password = process.env.PASSWORD;
const db = process.env.DB;
const uri = `mongodb+srv://${user}:${password}@cluster0.cdtmz.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose.connect(uri).then(console.log("CONECTADO A LA BASE DE DATOS")).catch((e)=> console.log("Error en la conexion: ",e));

