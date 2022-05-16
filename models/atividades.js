const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    dat:Date,
    tipo:String,
    disciplina:String,
    instrucoes:String,
    usuario:String

})

const atividades = mongoose.model('atividades',modelo)

module.exports = atividades