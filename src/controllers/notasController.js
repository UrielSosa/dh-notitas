let db = require('../database/models/index');

module.exports = {
    listado: async function(req, res) {
        let notas;
        try {
            notas = await db.Nota.findAll();
        }catch (error) {
            res.status(404).json({
                error,
                message: "No pudimos traer las notas"
            })
        }
        if (!notas) {
            res.status(404).json({
                error,
                message: "No pudimos traer las notas"
            })
        }
        

        return res.status(200).json({
            total: notas.length,
            data: notas,
        });
        
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