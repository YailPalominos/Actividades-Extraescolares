const { poolPromise, sql } = require('../db');

// Función para obtener actividades
async function getActividades(req, res) {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM actividades');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Función para crear una nueva actividad
async function createActividad(req, res) {
    try {
        const { clave, nombre, categoria, descripcion } = req.body;
        const pool = await poolPromise;
        await pool.request()
            .input('clave', sql.Int, clave)
            .input('nombre', sql.NVarChar, nombre)
            .input('categoria', sql.Int, categoria)
            .input('descripcion', sql.NVarChar, descripcion)
            .query('INSERT INTO actividades (clave, nombre, categoria, descripcion) VALUES (@clave, @nombre, @categoria, @descripcion)');
        res.status(201).send('Actividad creada');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getActividades, createActividad };
