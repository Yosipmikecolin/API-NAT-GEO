const mongoose = require("mongoose");



const EspecieSchema = new mongoose.Schema({

    titulo:String,
    subtitulo:String,
    descripcion:String,
    imagen:String

});



//EspecieSchema.methods.InsertarUrl = function(url){return this.imagen1 = url}

 const especies = mongoose.model("especies",EspecieSchema);
 module.exports = especies;