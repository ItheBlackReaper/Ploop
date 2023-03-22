const router = require("express").Router()
const Comentario = require("../models/comentario")

router.get ("/:id",async function(req,res){
    try{
        const id = req.params.id
        const comentario = await Comentario.findById(id)
        res.json(comentario)
    }catch(error){
        res.json({
            error:true,
            message:error.message
        })
    }
})

router.get ("/getComentariosByPublication/:publication",async function(req,res){
    try{
        const publicacao = req.params.publication
        const comentarios = await Comentario.find({publicacao})
        res.json(comentarios)
    }catch(error){
        res.json({
            error:true,
            message:error.message
        })
    }
})

router.post("/",async function(req,res){
    try{
        const comentario = req.body
        const comentarioSalvo = await Comentario(comentario).save()
        res.json(comentarioSalvo)
    }catch(error){
        res.json({
            error:true,
            message:error.message
        })
    }
})

router.put("/",async function (req,res){
    try{
        const comentario = req.body
        const comentarioAtualizado = await Comentario.findByIdAndUpdate(comentario._id,comentario)
        res.json(comentarioAtualizado)

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
        const comentarioDeletado = await Comentario.findByIdAndDelete(id)
        res.json({
            error:false,
            message:"Comentário deletado."
        })
    }catch(error){
        res.json({
            error:true,
            message:error.message
        })
    }
})

module.exports = router