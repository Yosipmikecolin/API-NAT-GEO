const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");


router.post("/auth-register",(req,res)=>{

    const {username,email,password} = req.body;

    if(!username || !email || !password){

        res.json({message:"No se reciben los datos correspondientes"});

    }else{

        const datos = {username:username,email:email,password:password}
        const hash = process.env.HASH;
        const token = jwt.sign(datos,hash,{expiresIn:"2d"});
        res.json({estado:true,token:token}).status(200);
    }

});




router.post("/auth-login",(req,res)=>{

    const tokenCliente = req.headers["access-token"];
    if(!tokenCliente){

        res.json({estado:false}).status(401);
    }else{

        const hash = process.env.HASH;
        jwt.verify(tokenCliente,hash,(e,decoded)=>{

            if(e){
            res.json(e).status(400);
            }else{
            res.json(decoded).status(200);
            }

        })

    }

})


module.exports = router;