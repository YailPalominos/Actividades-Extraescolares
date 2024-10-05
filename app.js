const express = require('express');
const app = express();
const router = require('./routes');
require('dotenv').config();

// Middleware para parsear JSON
app.use(express.json());

// Usar rutas
app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
