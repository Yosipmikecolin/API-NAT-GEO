const mongoose = require("mongoose");


const NuevoArticulo = mongoose.Schema({

    titulo:String,
    descripcion:String,
    imagen:String,
    alt:String


});

module.exports =  mongoose.model("articulo-2",NuevoArticulo);