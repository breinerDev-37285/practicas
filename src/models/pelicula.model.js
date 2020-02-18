const { Schema, model } = require('mongoose')

const peliculaSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "el nombre es requerido"]
  },
  autor: {
    type: String,
    required: [true, "el autor es requerido"]
  },
  fecha: {
      type: Date,
      default: new Date()
  }
}, {collection:'pelicula'});


module.exports = model('Pelicula',peliculaSchema)