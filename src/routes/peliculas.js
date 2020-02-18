const { Router } = require('express');
const router = Router();
const { Agregar,Listar,Actualizar,Eliminar } = require('../services/pelicula.service')

router.route('/pelicula')
    .post(Agregar)
    .get(Listar)

router.route('/pelicula/:identificacion')
    .put(Actualizar)
    .delete(Eliminar)

module.exports = router