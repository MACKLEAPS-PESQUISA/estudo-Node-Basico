const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pessoa = new Schema({
  nome: String,
  idade: String
})

mongoose.model('Pessoa', Pessoa)