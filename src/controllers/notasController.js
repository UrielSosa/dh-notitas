let db = require('../database/models/index');

module.exports = {
    prueba: function(req, res) {
        return res.json({
            nombreDeLaApp: 'Notitas',
            autores: '23ARED'
        })
    },
    listado: function(req, res) {
        db.Nota.findAll()
        .then(function(notas) {
            if(notas.length != 0) {
                return res.status(200).json({
                    cantidad: notas.length,
                    notas: notas
                })                
            } else {
                return res.json()
            }
        })
        .catch(function(error) {
            return res.json(error)
        })
    },
    create: function(req, res) {
        db.Nota.create({
            titulo: req.body.titulo,
            texto: req.body.texto
        })
        .then(function(notaCreada) {
            return res.status(201).json(notaCreada)
        })
    }
}