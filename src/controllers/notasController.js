let db = require('../database/models/index');

module.exports = {
    prueba: function(req, res) {
        return res.json({
            nombreDeLaApp: 'Notitas',
            autores: '23ARED'
        })
    },
    listado: async function(req, res) {
        let notas = [];

        try {
            notas = await db.Nota.findAll();
        }catch(e) {
            return res.send(e);
        }
        if (notas) {
            return res.status(200).json({
                cantidad: notas.length,
                notas: notas
            })                
        }
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