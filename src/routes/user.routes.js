const router = require("express").Router()
const User = require("../models/user")

router.get ("/:id",async function(req,res){
    try{
        const id = req.params.id
        const usuario = await User.findById(id)
        res.json(usuario)
    }catch(error){
        res.json({
            error:true,
            message:error.message
        })
    }
})

router.post("/",async function(req,res){
    try{
        const usuario = req.body
        const [isExist] = await User.find({
            email:usuario.email
        })
        if(isExist){
            res.json({
                error:true,
                message:"E-mail já cadastrado."
            })
        }else{
            const usuarioSalvo = await User(usuario).save()
            res.json(usuarioSalvo)
        }
        
    }catch(error){
        res.json({
            error:true,
            message:error.message
        })
    }
})

router.put("/",async function (req,res){
    try{
        const usuario = req.body
        const usuarioAtualizado = await User.findByIdAndUpdate(usuario._id,usuario)
        res.json(usuarioAtualizado)

    }catch(error){
        res.json({
            error:true,
            message:error.message
        })
    }
})

router.delete("/:id",async function (req,res){
    try{
        const id = req.params.id
        const usuarioDeletado = await User.findByIdAndDelete(id)
        res.json({
            error:false,
            message:"Usuario deletado."
        })
    }catch(error){
        res.json({
            error:true,
            message:error.message
        })
    }
})

module.exports = router