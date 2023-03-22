const router = require("express").Router()
const User = require("../models/user")

router.get("/",async function(req,res){
    try{
        const email = req.query.email
        const password = req.query.password
        const [usuario] = await User.find({email})

        if(usuario.email == email && usuario.senha == password){
            res.json(usuario)
        }else{
            res.json({
                error:true,
                message:"Usuário ou senha inválidos."
            })
        }
    }catch(error){
        res.json({
            error:true,
            message:error.message
        })
    }
})

module.exports = router