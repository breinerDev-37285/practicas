const Pelicula = require('../models/pelicula.model')
const servicio = {}


servicio.Agregar = (req,res) => {
    let body = req.body
    const pelicula = new Pelicula(body)

    pelicula.save((err) => {
        if (err) return res.status(500).json(err)
        
        res.json({
            succes: true,
            message: 'los datos se registraron.'
        })
    })

}


servicio.Listar = (req,res) => {
    Pelicula.find({})
        .exec((err, pelicula) => {
            if (err) return res.status(500).json(err)
            if (!pelicula) return res.status(404).json({ succes: false, message: 'no se encontro la pelicula!' })
            
            res.json({
                succes: true,
                pelicula
            })
        })
}

servicio.Actualizar = (req, res) => {
    let id = req.params.identificacion;

    let body = req.body;

    Pelicula.findByIdAndUpdate(id, body,{new:true}, (err, pelicula) => {
        if (err) return res.status(500).json(err);
        if (!pelicula)return res
            .status(404)
            .json({ succes: false, message: "no se encontro la pelicula!" });
            
        res.json({
            pelicula
        })
    })
}

servicio.Eliminar = (req, res) => {
    let id = req.params.identificacion
    
    Pelicula.findByIdAndRemove(id, (err,pelicula) => {
        if (err) return res.status(500).json(err);
        if (!pelicula) return res
            .status(404)
            .json({ succes: false, message: "no se encontro la pelicula!" })
        
        res.json({
            succes: true,
            message: 'se elimino la pelicula'
        })
    })
}

module.exports = servicio