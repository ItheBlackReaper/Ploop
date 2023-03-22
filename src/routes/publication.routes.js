const router = require("express").Router()
const Publication = require("../models/publication")

router.get ("/:id",async function(req,res){
    try{
        const id = req.params.id
        const publication = await Publication.findById(id)
        res.json(publication)
    }catch(error){
        res.json({
            error:true,
            message:error.message
        })
    }
})

router.get ("/getPublicationsByUser/:user",async function(req,res){
    try{
        const autor = req.params.user
        const publications = await Publication.find({autor})
        res.json(publications)
    }catch(error){
        res.json({
            error:true,
            message:error.message
        })
    }
})

router.post("/",async function(req,res){
    try{
        const publication = req.body
        const publicationSalvo = await Publication(publication).save()
        res.json(publicationSalvo)
    }catch(error){
        res.json({
            error:true,
            message:error.message
        })
    }
})

router.put("/",async function (req,res){
    try{
        const publication = req.body
        const publicationAtualizado = await Publication.findByIdAndUpdate(publication._id,publication)
        res.json(publicationAtualizado)

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
        const publicationDeletado = await Publication.findByIdAndDelete(id)
        res.json({
            error:false,
            message:"Publicação deletada."
        })
    }catch(error){
        res.json({
            error:true,
            message:error.message
        })
    }
})



module.exports = router