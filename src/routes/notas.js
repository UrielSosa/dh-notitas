const express = require('express');
const router = express.Router();
const notasController = require('../controllers/notasController');

router.get('/prueba', notasController.prueba);
router.get('/all', notasController.listado);

router.post('/create', notasController.create);

module.exports = router;