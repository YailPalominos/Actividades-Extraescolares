const express = require('express');
const { getActividades, createActividad } = require('./controllers/actividadesController'); // Importa las funciones correctamente
const { getSubActividades, createSubActividad } = require('./controllers/subActividadesController');
const router = express.Router();

// Rutas de actividades
router.get('/actividades', getActividades); // Aquí usa la función importada
router.post('/actividades', createActividad);

// Rutas de sub_actividades
router.get('/sub_actividades', getSubActividades);
router.post('/sub_actividades', createSubActividad);

module.exports = router;
