const mongoose = require('mongoose')
//`mongodb://localhost:${this.port}/${database.name}`

mongoose.connect('mongodb://localhost:27017/practica',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(data => console.log('conexion a la base de datos exitosa'))
    .catch(err => console.log(err))
    
