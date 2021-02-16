const express = require('express');
const app = express();
const cors = require('cors');

const notasRouter = require('./routes/notas');

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

app.use('/api', notasRouter);

app.listen(3000, function() {
    console.log("Servidor corriendo en el puerto 3000")
})