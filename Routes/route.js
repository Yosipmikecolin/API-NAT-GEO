const express = require("express");
const especies = require("../Schema/especies");
const articulo1 = require("../Schema/articulo1");
const articulo2 = require("../Schema/articulo2");
const articulo3 = require("../Schema/articulo3");
const articulo4 = require("../Schema/articulo4");
const articulo5 = require("../Schema/articulo5");
const router = express.Router();






//OBTENER TODAS ESPECIES
router.get("/",(req,res)=>{

   especies.find()
   .then(data => res.json(data).status(200))
   .catch(e => res.json(e));
});


//AGREGAR UNA NUEVA ESPECIE 
router.post("/add",async (req,res)=>{

    const datos = req.body;
    try {

      const nuevaEspecie = new especies({titulo:datos.titulo,subtitulo:datos.subtitulo,descripcion:datos.descripcion,imagen:datos.url});
      await nuevaEspecie.save(); 
      res.json("Dato guardado");
        
    } catch (error) {
        res.json("Hubo un error: ",error);
    }
});





//DATOS DEL ARTICULO 1

router.get("/articulo1",(req,res)=>{

    articulo1.find()
    .then(data => res.json(data))
    .catch(e => res.json(e))

});


router.post("/articulo1",async (req,res)=>{
    const {titulo,descripcion,imagen,alt} = req.body;

    if(!titulo || !descripcion || !imagen || !alt){
        res.json("No se reciben los datos correspondientes");
    }else {
        try {
            const nuevoArticulo = articulo1({titulo:titulo,descripcion:descripcion,imagen:imagen,alt:alt})
            await nuevoArticulo.save();
            res.json(true);
        
        } catch (error) {
            res.json(false);
        }
    }
});


//ARTICULOS 2

router.get("/articulo2",(req,res)=>{

    articulo2.find()
    .then(data => res.json(data))
    .catch(e => res.json(e))

});


router.post("/articulo2",async (req,res)=>{
    const {titulo,descripcion,imagen,alt} = req.body;

    if(!titulo || !descripcion || !imagen || !alt){
        res.json("No se reciben los datos correspondientes");
    }else {
        try {
            const nuevoArticulo = articulo2({titulo:titulo,descripcion:descripcion,imagen:imagen,alt:alt})
            await nuevoArticulo.save();
            res.json(true);
        
        } catch (error) {
            res.json(false);
        }
    }
});



//ARTICULOS 3

router.get("/articulo3",(req,res)=>{

    articulo3.find()
    .then(data => res.json(data))
    .catch(e => res.json(e))

});


router.post("/articulo3",async (req,res)=>{
    const {titulo,descripcion,imagen,alt} = req.body;

    if(!titulo || !descripcion || !imagen || !alt){
        res.json("No se reciben los datos correspondientes");
    }else {
        try {
            const nuevoArticulo = articulo3({titulo:titulo,descripcion:descripcion,imagen:imagen,alt:alt})
            await nuevoArticulo.save();
            res.json(true);
        
        } catch (error) {
            res.json(false);
        }
    }
});





//ARTICULOS 4

router.get("/articulo4",(req,res)=>{

    articulo4.find()
    .then(data => res.json(data))
    .catch(e => res.json(e))

});


router.post("/articulo4",async (req,res)=>{
    const {titulo,descripcion,imagen,alt} = req.body;

    if(!titulo || !descripcion || !imagen || !alt){
        res.json("No se reciben los datos correspondientes");
    }else {
        try {
            const nuevoArticulo = articulo4({titulo:titulo,descripcion:descripcion,imagen:imagen,alt:alt})
            await nuevoArticulo.save();
            res.json(true);
        
        } catch (error) {
            res.json(false);
        }
    }
});


//ARTICULOS 5

router.get("/articulo5",(req,res)=>{

    articulo5.find()
    .then(data => res.json(data))
    .catch(e => res.json(e))

});


router.post("/articulo5",async (req,res)=>{
    const {titulo,descripcion,imagen,alt} = req.body;

    if(!titulo || !descripcion || !imagen || !alt){
        res.json("No se reciben los datos correspondientes");
    }else {
        try {
            const nuevoArticulo = articulo5({titulo:titulo,descripcion:descripcion,imagen:imagen,alt:alt})
            await nuevoArticulo.save();
            res.json(true);
        
        } catch (error) {
            res.json(false);
        }
    }
});



router.get("/formato",(req,res)=>{

    especies.aggregate([
        
        //{$match:{estado:"CR"}},
        {$group:{_id:"$estado"}}
    
    
    ]).then(data => res.json(data)).catch(e => res.json(e))

})



module.exports = router;