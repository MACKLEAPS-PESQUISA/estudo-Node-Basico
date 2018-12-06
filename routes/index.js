var express = require('express');
var router = express.Router();

const mongoose = require('mongoose')
const Pessoa = mongoose.model('Pessoa')


/* GET home page. */
router.get('/',async function(req, res, next) {
  //COMO PROCURA NO BANCO DE DADOS
  let pessoa= await Pessoa.find({})
  res.render('index', { title: 'Express',pessoa });
});
router.post('/', async function(req,res,next){
  
  let body= req.body;
  let idade = body.idade
  let pessoa = {
    nome:body.nome,
    idade:body.idade
  }
  let x= await Pessoa.findOne({nome:'Cremila Silva'})
  //COMO ALTERA UM PROJETO NO BANCO DE DADOS
  x.set({idade:idade})
  await x.save();

  /*COMO SALVA UM NOVO SCHEMA
    let p = new Pessoa(pessoa)
    await p.save();
    */
   res.redirect('/')
})


module.exports = router;
