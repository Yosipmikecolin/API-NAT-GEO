const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
require("./Data/data");





//CONFIGURACIONES
app.set("port",process.env.PORT || 4000);



//MIDDLEWARES
app.use(express.urlencoded({extended:"true"}));
app.use(express.json());
app.use(cors());



//RUTAS
app.use("/especies",require("./Routes/route"));
app.use(require("./Routes/sesion"));


//ARCHIVOS ESTATICOS
//app.use(express.static(path.join(__dirname,"/Public")));



//SERIDORS
app.listen(app.get("port"),()=>{

    console.log("SERVIDOR EN EL PUERTO:",app.get("port"));

});