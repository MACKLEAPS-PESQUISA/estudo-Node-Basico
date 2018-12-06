const mongoose = require('mongoose')

var url = "mongodb://renato:R123456@ds127644.mlab.com:27644/aula_node";


mongoose.connect(url)
const db = mongoose.connection
db.on('error', () => {
  throw new Error('unable to connect to database at ' + config.db)
})


// import models
require('./Pessoa')