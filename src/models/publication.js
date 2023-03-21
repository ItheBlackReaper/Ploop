const mongoose = require("mongoose")
const Schema = mongoose.Schema

const publication = new Schema({
    curtidas:Array,
    comentarios:Array,
    conteudo:String,
    autor:String,
    
})
module.exports = mongoose.model("Publication",publication)