const { poolPromise, sql } = require('../db');

async function getSubActividades(req, res) {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM sub_actividades');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function createSubActividad(req, res) {
    try {
        const { actividad, nombres, descripcion } = req.body;
        const pool = await poolPromise;
        await pool.request()
            .input('actividad', sql.Int, actividad)
            .input('nombres', sql.NVarChar, nombres)
            .input('descripcion', sql.NVarChar, descripcion)
            .query('INSERT INTO sub_actividades (actividad, nombres, descripcion) VALUES (@actividad, @nombres, @descripcion)');
        res.status(201).send('Subactividad creada');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getSubActividades, createSubActividad };
